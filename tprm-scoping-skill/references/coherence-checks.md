# Coherence Checks — The Scoping Review Rules

Run these checks in Step 3 of the scoping workflow. They test whether the client's four-dimension configuration (domains, jurisdictions/sector, lifecycle phases, deliverables) hangs together. Each check produces a finding classified as **Gap**, **Over-scope**, **Dependency**, or **Conflict**.

For every finding, record: *what* the issue is, *which dimensions* it spans, the *risk of leaving it unaddressed*, and a *recommendation* (add / remove / sequence / decide).

---

## How to classify findings

- **Gap (under-scope)** — an obligation or strong good-practice need exists, but the matching domain, phase, or deliverable is missing. Highest value; these are what clients pay for.
- **Over-scope** — a domain/deliverable is selected with no regulatory or stated risk driver. Confirm the rationale; if none, recommend de-scoping to save effort.
- **Dependency / sequencing** — a selection logically requires another to exist or come first.
- **Conflict / ambiguity** — selections contradict each other or need a client decision.

---

## Group 1 — Jurisdiction/Sector → Domain checks (gap detection)

If the trigger on the left is present but the domain on the right is **not** selected, raise a **Gap**.

| If the client… | …then this domain is required | Driver |
|----------------|-------------------------------|--------|
| Processes personal data anywhere | **Data Privacy** | GDPR/UK GDPR/CCPA/etc. (see map A1) |
| Is an EU financial entity | **Operational Resilience**, **Cybersecurity**, **Fourth-Party**, **Concentration** | DORA |
| Is a UK regulated financial firm | **Operational Resilience**, **Cybersecurity** | PRA SS2/21, FCA PS21/3 |
| Is a US financial institution | **Cybersecurity**, **Regulatory & Compliance** | FFIEC/OCC, GLBA, (NY) DFS 500 |
| Uses agents/intermediaries/distributors, or operates in higher-corruption markets | **ABAC** | UK Bribery Act s.7, FCPA |
| Is a large/in-scope EU or German company | **ESG**, **Supply Chain Risk** | CSDDD, CSRD, LkSG |
| Has UK turnover > GBP 36m | **ESG / Supply Chain** (modern slavery) | Modern Slavery Act s.54 |
| Imports goods to the US/EU with forced-labour or deforestation exposure | **Supply Chain Risk** | UFLPA, EUDR |
| Procures/embeds AI/ML or uses vendors who do | **AI / Model Risk** | EU AI Act, NIST AI RMF |
| Is an EU essential/important entity (NIS2) or critical-infra operator | **Cybersecurity**, **Supply Chain Risk** | NIS2, NERC CIP, etc. |
| Relies on third parties that use their own sub-contractors/sub-processors | **Fourth-Party Risk** | DORA Art. 30(3), GDPR Art. 28, good practice |
| Has single-source or systemic vendor dependencies (e.g. one hyperscaler) | **Concentration** (within Operational Resilience / Fourth-Party) | DORA Art. 29, PRA concentration guidance |
| Handles PHI in the US | **Data Privacy** (HIPAA) + BAA deliverable | HIPAA |

**Reverse check (over-scope):** For each *selected* domain, confirm a driver exists — either a regulatory trigger above or a stated business/risk-appetite reason. A domain with neither is an **Over-scope** flag (e.g., Physical Security selected for a pure-SaaS vendor population with no facilities access). Over-scope is not always wrong, but make the client confirm.

---

## Group 2 — Domain → Deliverable checks (gap detection)

If a domain is in scope but its supporting deliverable is missing, raise a **Gap**.

| In-scope domain | Needs these deliverables |
|-----------------|--------------------------|
| Any assessment activity | Inherent Risk Assessment Template, Risk Scoring Methodology, Residual Risk Methodology |
| Cybersecurity | Security Clauses, Minimum Control Baselines, security Due Diligence Questionnaire |
| Data Privacy | Privacy Addendum / DPA Templates, privacy DDQ, transfer-mechanism guidance |
| Operational Resilience | BCP/DR assessment criteria, exit-plan requirements, impact-tolerance mapping (if regulated) |
| ABAC | ABAC due-diligence questionnaire, screening procedure |
| ESG / Supply Chain | ESG/supply-chain DDQ, supplier code of conduct, due-diligence procedure |
| AI / Model Risk | AI vendor DDQ, model-transparency contract clauses, AI risk-classification method |
| Fourth-Party | Sub-processor disclosure & approval procedure, flow-down clause requirements |
| Financial Risk | Financial-viability assessment criteria, monitoring triggers |

**Reverse check (over-scope):** A deliverable with no in-scope domain or phase driving it is an **Over-scope** flag.

---

## Group 3 — Lifecycle Phase → Deliverable / capability checks

If a phase is in scope but the capability that operates it is missing, raise a **Gap** or **Dependency**.

| In-scope phase | Requires |
|----------------|----------|
| Intake & Request Management | Intake form, workflow design, routing rules |
| Risk Tiering & Classification | Risk Scoring Methodology, tiering criteria |
| Inherent Risk Assessment | Inherent Risk Template + scoring method |
| Due Diligence Assessment | Due Diligence Questionnaires (per domain), evidence standards |
| Contract Review | Security Clauses, Privacy Addendum, Minimum Control Baselines, clause-by-tier matrix |
| Onboarding Approval | Approval authority matrix, RACI, risk-acceptance procedure |
| Continuous Monitoring | KPI/KRI Catalogue, Monitoring Procedures, monitoring tooling/feeds |
| Periodic Reassessment | Reassessment cadence by tier, refresh procedure |
| Incident & Breach Management | Escalation Procedures, breach playbook, **jurisdiction-specific notification timelines** (GDPR 72h, DORA incident reporting, sector rules) |
| Exception Management | Exception register + time-limited approval procedure |
| Renewal Review | Renewal checklist, re-risk trigger |
| Offboarding & Termination | Offboarding Procedures, exit plan (mandatory for critical under DORA/EBA) |

**Notable cross-dimension gap:** If **Incident & Breach Management** is in scope, the breach playbook's notification clock depends on **jurisdiction** (Step 2 output). A breach procedure with no jurisdiction-specific timelines is a Gap.

---

## Group 4 — Deliverable → Deliverable dependencies (sequencing)

Raise a **Dependency** finding (and use it to order the roadmap):

- **TPRM Policy** is foundational — Standards, SOPs, and most other deliverables derive from it. If Policy is out of scope but Standards/SOPs are in, flag the dependency (is there an existing policy to build on?).
- **TPRM Operating Model / Governance Charter** must exist before **RACI**, **SOPs**, and **Workflow Design** are meaningful.
- **Risk Scoring Methodology** precedes **Inherent Risk Template** and **Residual Risk Methodology**.
- **KPI/KRI Catalogue** precedes **Executive Dashboard Requirements** and **Risk Reporting Templates** (you can't report what you haven't defined).
- **Minimum Control Baselines** precede **Security Clauses** (clauses enforce the baseline).
- **Tool Capability Assessment** precedes **Automation Requirements** and **Integration Requirements** (and ideally precedes tool selection).
- **Gap Assessment** + **Maturity Assessment** precede **Target Operating Model**, which precedes the **Roadmap & Implementation Plan**.
- **Training Materials** come after the artefacts they train people on exist.

---

## Group 5 — Conflict / ambiguity checks

Raise a **Conflict** finding and request a client decision:

- **Manual vs automated operating model mismatch** — client wants Continuous Monitoring across hundreds of vendors but no tooling/automation deliverables and a small team. Resolve: tooling, reduced monitoring scope, or risk-based tiering of monitoring.
- **Maturity vs ambition mismatch** — net-new programme (no policy, spreadsheet-based) asking for tier-1 deliverables in a compressed timeline. Resolve: phase the roadmap.
- **Domains selected but corresponding lifecycle phases excluded** — e.g., Cybersecurity domain in scope but Due Diligence Assessment phase out of scope. How will the domain be assessed?
- **Deliverables without owning lifecycle phases** — e.g., Offboarding Procedures requested but Offboarding phase not in scope.
- **Jurisdiction-mandatory deliverable explicitly de-scoped** — e.g., DORA applies but client de-scopes the ICT register or exit strategy. This is a compliance conflict, not just a gap — escalate it.
- **Privacy domain in scope but no Privacy Addendum/DPA deliverable**, or vice versa.

---

## Group 6 — Completeness sweep (the "did we miss anything" pass)

Before finalising, confirm:

- Every **mandatory obligation** from Step 2 maps to ≥1 in-scope domain, phase, and deliverable.
- Every **in-scope lifecycle phase** has a SOP/workflow and the deliverables it needs to run.
- Every **selected deliverable** has a clear driver and a place in the sequence.
- **Fourth-party / sub-processor** reach is addressed wherever third parties subcontract.
- **Cross-border data transfer** mechanism is addressed wherever data leaves a jurisdiction.
- **Exit / offboarding** is addressed for any critical/important dependency (regulatory requirement under DORA/EBA).
- **Governance foundation** (Policy/Standard/Operating Model/RACI) exists or is in scope before operational deliverables.

Anything unchecked becomes a finding.

---

## Output of the review

Summarise findings as a table the client can act on:

| ID | Type | Finding | Spans | Risk if unaddressed | Recommendation |
|----|------|---------|-------|---------------------|----------------|
| F1 | Gap | DORA applies but ICT register deliverable not selected | Jurisdiction → Deliverable | Regulatory non-compliance; cannot evidence Art. 28(3) | Add ICT Register to Reporting deliverables |
| F2 | Over-scope | Physical Security domain selected; vendor population is SaaS-only | Domain | Wasted assessment effort | Confirm rationale or de-scope |
| F3 | Dependency | SOPs requested before Operating Model defined | Deliverable → Deliverable | SOPs will lack governance anchor | Sequence Operating Model first |

Carry these into the Scoping & Configuration Report (`scoping-report-template.md`).
