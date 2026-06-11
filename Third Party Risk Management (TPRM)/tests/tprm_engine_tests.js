/**
 * TPRM Lifecycle Platform — engine unit tests
 * Extracts the DEFAULT_SCHEMA and the pure engine block from the HTML app and tests:
 *  - weighted tiering (scores, thresholds, cert reduction, multi-max)
 *  - tier-tailored IRQ (question filtering, scoring, triggers, rules) — regression vs v1 behaviour
 *  - gating (screening requirement, DDQ/EDDQ routing)
 *  - connector flag evaluation
 * Run: node tprm_engine_tests.js [path-to-html]
 */
const fs = require("fs");
const path = process.argv[2] || "TPRM Lifecycle Platform.html";
const html = fs.readFileSync(path, "utf8");

function extract(tag) {
  const m = html.match(new RegExp(`/\\* ${tag}-START \\*/([\\s\\S]*?)/\\* ${tag}-END \\*/`));
  if (!m) throw new Error("Could not extract block: " + tag);
  return m[1];
}
const sandbox = {};
new Function(
  extract("SCHEMA") + "\n" + extract("ENGINE") + `
  return {DEFAULT_SCHEMA, matchCond, isVisible, findOption, inTier, computeTier, bandFor,
          computeIRQ, bandAtLeast, screeningRequired, ddqRoute, evalConnectorFlag};
`).call(sandbox).constructor; // noop guard
const api = new Function(
  extract("SCHEMA") + "\n" + extract("ENGINE") + `
  return {DEFAULT_SCHEMA, matchCond, isVisible, findOption, inTier, computeTier, bandFor,
          computeIRQ, bandAtLeast, screeningRequired, ddqRoute, evalConnectorFlag};
`)();
const S = api.DEFAULT_SCHEMA;

let pass = 0, fail = 0;
function t(name, fn) {
  try { fn(); pass++; console.log("  ✓ " + name); }
  catch (e) { fail++; console.error("  ✗ " + name + " — " + e.message); }
}
function eq(a, b, msg) { if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error((msg||"") + " expected " + JSON.stringify(b) + " got " + JSON.stringify(a)); }
function ok(c, msg) { if (!c) throw new Error(msg || "assertion failed"); }

console.log("\n— Tiering —");
t("empty answers → Tier 3, score 0", () => {
  const r = api.computeTier(S, {});
  eq(r.score, 0); eq(r.tier, 3); eq(r.answeredCount, 0);
});
t("high-risk profile → Tier 1", () => {
  const r = api.computeTier(S, {
    serviceType:"cloud", dataTypes:["pii","auth"], criticality:"critical",
    alternative:"sole", fourthParty:"yes", geography:"global", regulated:"yes", certifications:["none"]
  });
  // 8 + 10*1.5 + 10*1.5 + 10 + 6*0.8 + 5*0.8 + 4*0.5 = 8+15+15+10+4.8+4+2 = 58.8
  eq(r.score, 58.8); eq(r.tier, 1);
});
t("dataTypes aggregates by max (pii 9 beats hr 7)", () => {
  const a = api.computeTier(S, {dataTypes:["hr"]});
  const b = api.computeTier(S, {dataTypes:["hr","pii"]});
  eq(a.score, 7*1.5); eq(b.score, 9*1.5);
});
t("certifications reduce score with floor -5", () => {
  const base = api.computeTier(S, {criticality:"critical"});
  const cert = api.computeTier(S, {criticality:"critical", certifications:["iso27001","soc2"]});
  eq(base.score - cert.score, 4); // -2 + -2 = -4, weight 1
  const many = api.computeTier(S, {criticality:"critical", certifications:["iso27001","soc2","iso22301","pcidss","ce"]});
  eq(base.score - many.score, 5); // floored at -5 (raw -7)
});
t("moderate profile → Tier 2", () => {
  const r = api.computeTier(S, {serviceType:"prof", dataTypes:["hr"], criticality:"medium", alternative:"possible", fourthParty:"no", geography:"regional", regulated:"no"});
  // 4 + 10.5 + 6 + 4 + 0 + 2.4 + 0 = 26.9
  eq(r.score, 26.9); eq(r.tier, 2);
});
t("low profile → Tier 3", () => {
  const r = api.computeTier(S, {serviceType:"fac", dataTypes:["nonsens"], criticality:"low", alternative:"easy", fourthParty:"no", geography:"domestic", regulated:"no"});
  ok(r.score < 20, "score "+r.score); eq(r.tier, 3);
});
t("threshold boundary: exactly 38 → Tier 1, 37.9 → Tier 2", () => {
  const S2 = JSON.parse(JSON.stringify(S));
  S2.tiering.factors = [{id:"x", label:"X", weight:1, options:[{value:"a",label:"A",score:38},{value:"b",label:"B",score:37.9}]}];
  eq(api.computeTier(S2,{x:"a"}).tier, 1);
  eq(api.computeTier(S2,{x:"b"}).tier, 2);
});

console.log("\n— IRQ engine (v1 regression, tier-filtered) —");
t("CYB.01=1 triggers Cyber + NCS + IAM, auto SecGov + PeopleMgmt", () => {
  const r = api.computeIRQ(S, {"CYB.01":"1"}, 1);
  const names = r.domains.map(d=>d.name);
  ["Cyber / InfoSec","Network & Communications Security","Identity & Access Management","Security Governance","People Management"].forEach(n=>ok(names.includes(n), "missing "+n));
  eq(r.score, 4);
});
t("CYB.01=5 (N/A) hides CYB.02 and triggers nothing", () => {
  const r = api.computeIRQ(S, {"CYB.01":"5"}, 1);
  eq(r.domains.length, 0); eq(r.score, 0);
  const q2 = S.questions.find(q=>q.id==="CYB.02");
  eq(api.isVisible(q2, {"CYB.01":"5"}), false);
});
t("rule: data-only access + egress → IAM", () => {
  const r = api.computeIRQ(S, {"CYB.01":"4","CYB.02":"Yes"}, 1);
  ok(r.domains.some(d=>d.name==="Identity & Access Management"));
});
t("rule: AI + egress → AI DPIA note", () => {
  const r = api.computeIRQ(S, {"CYB.01":"1","CYB.02":"Yes","CYB.03":"Yes"}, 1);
  const ai = r.domains.find(d=>d.name==="Artificial Intelligence");
  ok(ai && ai.notes.some(n=>n.includes("DPIA")));
});
t("full high-risk answers → Critical band (max 19)", () => {
  const r = api.computeIRQ(S, {"CYB.01":"1","CYB.02":"Yes","CYB.03":"Yes","CYB.04":"Yes","CYB.05":"Third-Party","CYB.06":"Yes","CYB.07":"Yes"}, 1);
  eq(r.score, 19); eq(r.maxScore, 19); eq(r.band.label, "Critical");
});
t("Tier 3 sees only CYB.01–04 (abbreviated set)", () => {
  const t3 = S.questions.filter(q=>api.inTier(q,3)).map(q=>q.id);
  eq(t3, ["CYB.01","CYB.02","CYB.03","CYB.04"]);
  const t1 = S.questions.filter(q=>api.inTier(q,1)).length;
  eq(t1, 7);
});
t("Tier 3 maxScore excludes CYB.05–07", () => {
  const r3 = api.computeIRQ(S, {}, 3);
  const r1 = api.computeIRQ(S, {}, 1);
  eq(r3.maxScore, 11); eq(r1.maxScore, 19); // 4+3+2+2 vs +3+2+3
});
t("answers to tier-excluded questions are ignored for Tier 3", () => {
  const r = api.computeIRQ(S, {"CYB.01":"4","CYB.05":"Third-Party"}, 3);
  eq(r.score, 2); // CYB.05's 3 points not counted
  ok(!r.domains.some(d=>d.name==="System Management"));
});

console.log("\n— Gating —");
t("Tier 1 screening always required (even Minimal)", () => {
  ok(api.screeningRequired(S, 1, "Minimal").required);
});
t("Tier 2 screening at Medium+, not at Low", () => {
  ok(!api.screeningRequired(S, 2, "Low").required);
  ok(api.screeningRequired(S, 2, "Medium").required);
  ok(api.screeningRequired(S, 2, "Critical").required);
});
t("Tier 3 screening only at High+", () => {
  ok(!api.screeningRequired(S, 3, "Medium").required);
  ok(api.screeningRequired(S, 3, "High").required);
});
t("EDDQ for Tier 1 regardless of rating", () => {
  eq(api.ddqRoute(S, 1, "Low", "", 2).track, "EDDQ");
});
t("EDDQ for High/Critical rating on any tier", () => {
  eq(api.ddqRoute(S, 3, "High", "", 1).track, "EDDQ");
  eq(api.ddqRoute(S, 2, "Critical", "", 5).track, "EDDQ");
});
t("EDDQ on adverse screening verdict", () => {
  eq(api.ddqRoute(S, 2, "Low", "Adverse", 1).track, "EDDQ");
});
t("standard DDQ when domains scoped, no EDDQ condition", () => {
  const r = api.ddqRoute(S, 2, "Medium", "Clear", 4);
  eq(r.track, "DDQ");
});
t("None when nothing scoped and no EDDQ condition", () => {
  eq(api.ddqRoute(S, 3, "Minimal", "", 0).track, "None");
});

console.log("\n— Connector flags —");
const bit = S.screening.connectors.find(c=>c.id==="bitsight");
const ssc = S.screening.connectors.find(c=>c.id==="ssc");
const cred = S.screening.connectors.find(c=>c.id==="credit");
t("BitSight 720 → OK, 600 → Flag", () => {
  eq(api.evalConnectorFlag(bit, {score:"720"}).flag, false);
  eq(api.evalConnectorFlag(bit, {score:"600"}).flag, true);
});
t("SecurityScorecard grade D → Flag (case-insensitive), B/85 → OK", () => {
  eq(api.evalConnectorFlag(ssc, {grade:"d"}).flag, true);
  eq(api.evalConnectorFlag(ssc, {score:"85", grade:"B"}).flag, false);
});
t("Credit band C → Flag; empty result → null", () => {
  eq(api.evalConnectorFlag(cred, {grade:"C"}).flag, true);
  eq(api.evalConnectorFlag(cred, {}), null);
});

console.log("\n" + pass + " passed, " + fail + " failed");
process.exit(fail ? 1 : 0);
