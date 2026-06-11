/* DOM smoke test — boots the app in jsdom and walks a Tier 1 vendor through all 4 stages */
const fs = require("fs");
const { JSDOM } = require("jsdom");
const html = fs.readFileSync(process.argv[2] || "TPRM Lifecycle Platform.html", "utf8");

const dom = new JSDOM(html, { runScripts: "dangerously", pretendToBeVisual: true, url: "http://localhost/tprm",
  beforeParse(window) {
    window.scrollTo = () => {};
    window.confirm = () => true;
    window.alert = () => {};
    window.print = () => { window.__printed = true; };
    window.matchMedia = () => ({ matches:false, addListener(){}, removeListener(){} });
  }
});
const { window } = dom;
const { document } = window;

let pass = 0, fail = 0;
function t(name, fn){ try{ fn(); pass++; console.log("  ✓ "+name); } catch(e){ fail++; console.error("  ✗ "+name+" — "+e.message); } }
function ok(c,m){ if(!c) throw new Error(m||"assert"); }
function $(id){ return document.getElementById(id); }
function set(id,v){ const e=$(id); e.value=v; e.dispatchEvent(new window.Event("change",{bubbles:true})); }

t("app boots, dashboard visible, no records", () => {
  ok(!$("view-dashboard").classList.contains("hide"), "dashboard hidden");
  ok($("dashTable").textContent.includes("No third parties"), "expected empty state");
});

t("new assessment opens Stage 1", () => {
  $("newVendorBtn").click();
  ok(!$("view-assess").classList.contains("hide"), "assess hidden");
  ok(!$("stage1").classList.contains("hide"), "stage1 hidden");
});

t("tiering factors render and compute Tier 1", () => {
  $("c_name").value = "Acme Cloud Ltd";
  $("e_service").value = "Payroll SaaS";
  ok($("c_employees").tagName === "SELECT", "employee count should be a dropdown");
  $("c_employees").value = "251–500";
  const regChip = document.querySelector('#p_regs input[value="DORA"]');
  ok(regChip, "regulatory chips missing");
  regChip.checked = true; regChip.dispatchEvent(new window.Event("change", { bubbles: true }));
  const selects = document.querySelectorAll("#tierFactors select[data-tf]");
  ok(selects.length >= 5, "expected factor selects, got "+selects.length);
  const pick = {serviceType:"cloud", criticality:"critical", alternative:"sole", fourthParty:"yes", geography:"global", regulated:"yes"};
  selects.forEach(s=>{ if(pick[s.dataset.tf]){ s.value=pick[s.dataset.tf]; s.dispatchEvent(new window.Event("change",{bubbles:true})); }});
  const cb = document.querySelector('#tierFactors input[data-tf="dataTypes"][value="auth"]');
  cb.checked = true; cb.dispatchEvent(new window.Event("change",{bubbles:true}));
  ok($("tierPreview").textContent.includes("Tier 1"), "tier preview: "+$("tierPreview").textContent.slice(0,80));
});

t("Stage 1 → Stage 2; IRQ shows full 7-question set for Tier 1", () => {
  $("s1Next").click();
  ok(!$("stage2").classList.contains("hide"), "stage2 hidden");
  ok($("irqTierBanner").textContent.includes("Tier 1"));
  ok($("questions").textContent.includes("Will Acme Cloud Ltd require access"), "IRQ not tailored to company name");
  ok($("questions").querySelectorAll(".q").length === 6, "CYB.02 conditional hidden until CYB.01 answered; expected 6 visible, got "+$("questions").querySelectorAll(".q").length);
});

t("answering IRQ updates rating + domains", () => {
  const answers = {"CYB.01":"1","CYB.02":"Yes","CYB.03":"Yes","CYB.04":"Yes","CYB.05":"Third-Party","CYB.06":"Yes","CYB.07":"Yes"};
  for(const [qid,val] of Object.entries(answers)){
    const r = document.querySelector(`#questions input[name="q_${qid}"][value="${val}"]`);
    ok(r, "radio missing "+qid);
    r.checked = true; r.dispatchEvent(new window.Event("change",{bubbles:true}));
  }
  ok($("sideIrq").textContent.includes("Critical"), "side IRQ: "+$("sideIrq").textContent);
  ok($("qProgress").textContent.startsWith("7 / 7"));
});

t("Stage 2 → Stage 3; screening required for Tier 1; connectors render", () => {
  $("s2Next").click();
  ok(!$("stage3").classList.contains("hide"));
  ok($("scrGate").textContent.includes("Screening required"));
  ok(document.querySelectorAll("#connectors .conn").length === 4, "expected 4 connector cards");
});

t("manual screening entry flags low BitSight score", () => {
  const scoreInput = document.querySelector('#connectors [data-scscore="bitsight"]');
  scoreInput.value = "600"; scoreInput.dispatchEvent(new window.Event("change",{bubbles:true}));
  ok(document.querySelector("#connectors").textContent.includes("Flag"), "flag not shown");
  set("sc_verdict","Conditional");
  $("sc_summary").value = "BitSight below threshold; remediation plan requested.";
});

t("Stage 3 → Stage 4; Tier 1 routes to EDDQ with all domains + evidence", () => {
  $("s3Next").click();
  ok(!$("stage4").classList.contains("hide"));
  ok($("ddqRouteBanner").textContent.includes("Enhanced Due Diligence"));
  ok($("ddqTable").querySelectorAll("tbody tr").length === 14, "expected 14 domains, got "+$("ddqTable").querySelectorAll("tbody tr").length);
  ok($("eddqEvidence").querySelectorAll("input[type=checkbox]").length === 8, "expected 8 evidence items");
});

t("save + complete persists record; dashboard reflects it", () => {
  $("completeBtn").click();
  document.querySelector('nav.tabs button[data-view="dashboard"]').click();
  const tbl = $("dashTable").textContent;
  ok(tbl.includes("Acme Cloud Ltd"), "record missing");
  ok(tbl.includes("Tier 1") && tbl.includes("Critical") && tbl.includes("EDDQ") && tbl.includes("Completed"), "row: "+tbl.slice(0,300));
  ok($("dashTable").innerHTML.includes("Completed"), "status chip missing");
  ok($("kVendors").textContent==="1" && $("kTier1").textContent==="1" && $("kDone").textContent==="1");
});

t("reopen record restores all stages' data", () => {
  document.querySelector('#dashTable [data-open]').click();
  ok($("c_name") && document.getElementById("c_name"));
  // navigate back to stage 1 via stepper
  document.querySelector('#stepper button[data-stage="1"]').click();
  ok($("c_name").value==="Acme Cloud Ltd");
  ok($("c_employees").value==="251–500", "employee range not restored");
  ok(document.querySelector('#p_regs input[value="DORA"]').checked, "regulatory selection not restored");
  ok($("tierPreview").textContent.includes("Tier 1"));
  document.querySelector('#stepper button[data-stage="3"]').click();
  ok(document.querySelector('#connectors [data-scscore="bitsight"]').value==="600");
  ok($("sc_verdict").value==="Conditional");
});

t("Tier 3 vendor gets abbreviated IRQ and may skip screening", () => {
  $("clearBtn") && window.confirm; // confirm stubbed true
  document.querySelector('nav.tabs button[data-view="assess"]').click();
  $("clearBtn").click(); // new record
  $("c_name").value = "Office Plants Co";
  const selects = document.querySelectorAll("#tierFactors select[data-tf]");
  const pick = {serviceType:"fac", criticality:"low", alternative:"easy", fourthParty:"no", geography:"domestic", regulated:"no"};
  selects.forEach(s=>{ if(pick[s.dataset.tf]){ s.value=pick[s.dataset.tf]; s.dispatchEvent(new window.Event("change",{bubbles:true})); }});
  const cb = document.querySelector('#tierFactors input[data-tf="dataTypes"][value="none"]');
  cb.checked = true; cb.dispatchEvent(new window.Event("change",{bubbles:true}));
  ok($("tierPreview").textContent.includes("Tier 3"), $("tierPreview").textContent.slice(0,80));
  $("s1Next").click();
  // Tier 3: CYB.01-04, CYB.02 hidden initially → 3 visible
  ok($("questions").querySelectorAll(".q").length === 3, "expected 3 visible, got "+$("questions").querySelectorAll(".q").length);
  const r = document.querySelector('#questions input[name="q_CYB.01"][value="5"]');
  r.checked=true; r.dispatchEvent(new window.Event("change",{bubbles:true}));
  $("s2Next").click();
  ok($("scrGate").textContent.includes("not required"), $("scrGate").textContent.slice(0,120));
  $("s3Next").click();
  ok($("ddqRouteBanner").textContent.includes("No due-diligence questionnaire required"), $("ddqRouteBanner").textContent.slice(0,150));
});

t("builder renders tiering factors, connectors, gating", () => {
  document.querySelector('nav.tabs button[data-view="builder"]').click();
  ok(document.querySelectorAll("#builderTierFactors .sub-card").length === 8, "8 factors");
  ok(document.querySelectorAll("#builderConnectors .sub-card").length === 4, "4 connectors");
  ok($("g_scr_1").value==="Always" && $("g_scr_2").value==="Medium" && $("g_scr_3").value==="High");
  ok($("g_eddq_t1").checked && !$("g_eddq_t2").checked);
  ok(document.querySelectorAll("#builderQuestions .sub-card").length === 7, "7 questions");
});

t("gating edit changes behaviour (Tier 2 → Always screen)", () => {
  set("g_scr_2","Always");
  $("saveGatingBtn").click();
  const schema = JSON.parse(window.localStorage.getItem("tprm_schema_v2"));
  ok(schema.gating.screening["2"]==="Always");
});

t("config JSON export excludes API tokens", () => {
  window.localStorage.setItem("tprm_secrets_v1", JSON.stringify({bitsight:"SECRET123"}));
  const schema = JSON.parse(window.localStorage.getItem("tprm_schema_v2"));
  ok(!JSON.stringify(schema).includes("SECRET123"));
});

console.log("\n"+pass+" passed, "+fail+" failed");
process.exit(fail?1:0);
