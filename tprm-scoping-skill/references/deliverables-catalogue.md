# Deliverables Catalogue

Defines every TPRM deliverable a client can request: its purpose, key contents, prerequisites, the domains/phases/obligations it serves, and indicative effort. Use this in Step 4 to map deliverables to scope, detect missing or unsupported deliverables, and sequence the build.

**Effort key:** S = small (days) · M = medium (1–3 weeks) · L = large (3+ weeks). Effort is indicative for a mid-size engagement; scale with vendor population and regulatory load.

When scope is confirmed, the **`tprm` skill** builds these artefacts — this catalogue tells you *what* to build and *in what order*; the `tprm` skill knows *how*.

---

## 1. Governance Deliverables

### TPRM Policy
- **Purpose:** Board/exec-level statement of intent, scope, risk appetite, and accountability for third-party risk.
- **Contents:** Purpose, scope (definition of "third party"), risk appetite, governance model, lifecycle requirements, tiering principles, regulatory obligations, exceptions, review cycle.
- **Prerequisites:** None — foundational. Almost everything else derives from it.
- **Serves:** All domains/phases. Mandatory under EBA/DORA/FFIEC (a documented policy is explicitly required).
- **Effort:** M

### TPRM Standard
- **Purpose:** Translates policy principles into mandatory methodology and minimum requirements.
- **Contents:** Risk-assessment standard, due-diligence standard, monitoring standard, contractual-requirements standard, tiering criteria.
- **Prerequisites:** TPRM Policy.
- **Serves:** All assessment and contracting activity. **Effort:** M

### Governance Charter
- **Purpose:** Establishes the oversight body (e.g., Third-Party Risk Committee) — mandate, membership, quorum, decision rights, cadence.
- **Prerequisites:** Operating Model direction. **Serves:** Governance, escalation, approvals. **Effort:** S

### TPRM Operating Model
- **Purpose:** Defines how the programme runs — centralised/federated/procurement-led, three-lines-of-defence roles, team structure, interfaces with Cyber/Privacy/Legal/Procurement.
- **Prerequisites:** Policy direction. **Precedes:** RACI, SOPs, Workflow Design. **Effort:** L

### RACI Matrix
- **Purpose:** Names who is Responsible/Accountable/Consulted/Informed for each lifecycle activity.
- **Prerequisites:** Operating Model. **Serves:** All phases. **Effort:** S

---

## 2. Assessment Deliverables

### Inherent Risk Assessment Template
- **Purpose:** Scores risk before controls to right-size assessment depth and tier the vendor.
- **Contents:** Scoring dimensions (data sensitivity, system access, criticality, regulatory exposure, geographic, concentration), scale, tier thresholds.
- **Prerequisites:** Risk Scoring Methodology. **Serves:** Risk Tiering, Inherent Risk Assessment phases. **Effort:** M

### Due Diligence Questionnaires (DDQs)
- **Purpose:** Gather control evidence per domain, tiered by risk.
- **Contents:** Domain-specific question sets (security, privacy, resilience, ABAC, ESG, AI…), evidence requirements, tiered depth.
- **Prerequisites:** Domains confirmed; scoring method (to tier). **Serves:** Due Diligence phase. One DDQ module per in-scope domain. **Effort:** M–L

### Risk Scoring Methodology
- **Purpose:** Defensible, consistent method to convert inputs into a risk tier.
- **Contents:** Dimensions, weights, calculation, tier definitions, override/calibration process, audit trail.
- **Prerequisites:** Domains confirmed. **Precedes:** Inherent Risk Template, Residual Risk Methodology. **Effort:** M

### Residual Risk Methodology
- **Purpose:** Adjusts inherent risk for control effectiveness to reach a residual rating that drives approval and monitoring.
- **Prerequisites:** Risk Scoring Methodology, DDQs (control evidence). **Serves:** Risk Evaluation/approval. **Effort:** M

---

## 3. Operational Deliverables

### SOPs (Standard Operating Procedures)
- **Purpose:** Step-by-step execution guidance per lifecycle phase.
- **Prerequisites:** Operating Model, RACI. **Serves:** Every in-scope phase needs its SOP. **Effort:** L (scales with phases in scope)

### Workflow Design
- **Purpose:** End-to-end process flows, routing, hand-offs, status model — the basis for tool configuration.
- **Prerequisites:** Operating Model. **Serves:** Intake, tiering, DD, approval, monitoring. **Effort:** M

### Escalation Procedures
- **Purpose:** Defines triggers, paths, timeframes, and authorities for escalation.
- **Contents:** Escalation matrix, mandatory triggers (incl. breach, insolvency, KRI breach), notification timeframes.
- **Prerequisites:** Operating Model, RACI. **Serves:** Incident & Breach, Exception, monitoring. **Effort:** S

### Monitoring Procedures
- **Purpose:** How continuous monitoring operates — feeds, cadence by tier, alert triage, response.
- **Prerequisites:** KPI/KRI Catalogue, tooling decision. **Serves:** Continuous Monitoring phase. **Effort:** M

### Offboarding Procedures
- **Purpose:** Safe exit — access revocation, data deletion/return, contractual close-out, continuity handover.
- **Prerequisites:** Operating Model. **Serves:** Offboarding phase. **Note:** Exit *planning* is mandatory for critical/important arrangements under DORA/EBA. **Effort:** M

---

## 4. Contract & Control Deliverables

### Security Clauses
- **Purpose:** Enforceable security obligations by risk tier (MFA, encryption, patching SLA, pen-test, incident notification, audit rights).
- **Prerequisites:** Minimum Control Baselines. **Serves:** Contract Review; Cybersecurity domain. **Mandatory clause sets** under DORA Art. 30, EBA, NY DFS 500. **Effort:** M

### Privacy Addendum Templates (DPA)
- **Purpose:** GDPR Art. 28-compliant data processing agreement + transfer mechanism (SCCs/IDTA).
- **Prerequisites:** Privacy domain in scope; transfer analysis. **Serves:** Contract Review; Data Privacy domain. **Mandatory** wherever personal data is processed. **Effort:** M

### Minimum Control Baselines
- **Purpose:** The control floor a third party must meet, by tier and domain.
- **Prerequisites:** Domains confirmed. **Precedes:** Security Clauses. **Serves:** DD, contracting, monitoring. **Effort:** M

---

## 5. Reporting Deliverables

### KPI/KRI Catalogue
- **Purpose:** Defines programme-performance metrics (KPIs) and leading risk indicators (KRIs) with thresholds and response actions.
- **Prerequisites:** Domains + monitoring scope. **Precedes:** Dashboard, Reporting Templates. **Serves:** Continuous Monitoring, governance reporting. **Effort:** M

### Executive Dashboard Requirements
- **Purpose:** Specifies the at-a-glance oversight view for committees/board.
- **Prerequisites:** KPI/KRI Catalogue. **Serves:** Governance/oversight. **Effort:** S

### Risk Reporting Templates
- **Purpose:** Standard Risk Committee / Board / regulator report formats.
- **Prerequisites:** KPI/KRI Catalogue. **Serves:** Governance + regulatory reporting (e.g., DORA register submission). **Effort:** S–M

---

## 6. Technology Deliverables

### Tool Capability Assessment
- **Purpose:** Evaluates current/candidate tooling against requirements; build-vs-buy.
- **Prerequisites:** Workflow Design (requirements). **Precedes:** Automation & Integration Requirements. **Serves:** All operational phases. **Effort:** M

### Automation Requirements
- **Purpose:** Specifies what to automate (routing, scoring, reminders, KRI alerts) by maturity level.
- **Prerequisites:** Tool Capability Assessment, Workflow Design. **Effort:** M

### Integration Requirements
- **Purpose:** Defines integrations (procurement→TPRM, TPRM→CLM, cyber-intel feeds, screening, ITSM offboarding).
- **Prerequisites:** Tool Capability Assessment. **Effort:** M

---

## 7. Implementation Deliverables

### Gap Assessment
- **Purpose:** Current-state vs requirements/regulatory obligations — what's missing.
- **Prerequisites:** Scope + obligation map (this skill's output). **Precedes:** Target Operating Model, Roadmap. **Effort:** M

### Maturity Assessment
- **Purpose:** Rates current capability (e.g., ad hoc → optimised) per lifecycle phase/domain.
- **Prerequisites:** Scope. **Precedes:** Target Operating Model. **Effort:** M

### Target Operating Model (TOM)
- **Purpose:** The desired future-state programme design.
- **Prerequisites:** Gap + Maturity Assessment. **Precedes:** Roadmap. **Effort:** L

### Roadmap & Implementation Plan
- **Purpose:** Phased, sequenced plan to reach the TOM — workstreams, dependencies, timeline, resourcing, quick wins.
- **Prerequisites:** TOM (and ideally the dependency map from `coherence-checks.md` Group 4). **Effort:** M

### Training Materials
- **Purpose:** Role-based enablement (business owners, TPRM team, approvers).
- **Prerequisites:** The artefacts being trained on must exist. **Effort:** M

---

## Sequencing summary (typical build order)

1. **Foundation:** Gap + Maturity Assessment → Target Operating Model → Roadmap
2. **Governance:** Policy → Standard → Operating Model → Governance Charter → RACI
3. **Methodology:** Risk Scoring → Inherent Risk Template → Residual Risk → Minimum Control Baselines
4. **Assessment & contract:** DDQs → Security Clauses + Privacy Addendum
5. **Operations:** Workflow Design → SOPs → Escalation → Monitoring → Offboarding Procedures
6. **Reporting:** KPI/KRI Catalogue → Dashboard → Reporting Templates
7. **Technology:** Tool Capability Assessment → Automation + Integration Requirements
8. **Enablement:** Training Materials (last)

Quick wins worth pulling forward: a basic third-party register, an intake form, and a tiering method give immediate visibility even before the full programme lands.
