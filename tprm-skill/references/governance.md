# TPRM Governance Framework

## Governance Principles

TPRM governance must establish clear accountability without creating bureaucratic bottlenecks. The model should be:
- Risk-proportionate: more oversight for higher risk, streamlined for low risk
- Accountable: named owners, not committee ownership without individual accountability
- Auditable: every decision documented, every approval traceable
- Sustainable: designed for the organisation's actual capacity, not an ideal state

---

## Three Lines of Defence in TPRM

FIRST LINE — Business / Operations:
Business owners who initiate and manage third-party relationships. Responsible for: completing intake forms, providing business justification, participating in due diligence, managing day-to-day performance. Accountable for the relationship and its risk profile within their function — not responsible for making risk decisions.

SECOND LINE — Risk / Compliance / TPRM Function:
TPRM team, GRC function, Compliance, Legal, Cybersecurity. Responsible for: designing the framework, conducting or overseeing risk assessments, quality assurance on due diligence, maintaining the third-party register, reporting to governance bodies. Accountable for the integrity of the risk assessment process, policy compliance, regulatory alignment.

THIRD LINE — Internal Audit:
Responsible for: independent review of TPRM programme effectiveness, compliance testing, audit of specific third-party arrangements. Provides independent assurance to the Audit Committee / Board.

---

## Organisational Model Options

OPTION A: Centralised TPRM Team
Dedicated TPRM function sits in Risk, GRC, or Procurement. All assessments run by TPRM team.
Best for: regulated entities, mature organisations, high volume of vendor engagements.

OPTION B: Federated Model with Central Standards
TPRM standards and frameworks set centrally. Assessment execution delegated to business lines/domains (Cyber, Privacy, Legal each run their component). Central TPRM coordinates and consolidates findings.
Best for: large complex organisations, diverse regulatory environments.

OPTION C: Procurement-led with Risk Oversight
Procurement leads vendor management; risk team provides policy standards and approves high-risk decisions.
Best for: lower maturity organisations, primarily commercial focus.

---

## Roles & Responsibilities (RACI)

| Activity | Business Owner | TPRM Team | Cyber/Privacy/Legal | Risk Committee | Procurement |
|----------|---------------|-----------|---------------------|----------------|-------------|
| Submit intake request | R/A | C | -- | -- | I |
| Conduct inherent risk assessment | I | R/A | C | -- | I |
| Execute due diligence questionnaire | C | R | C | -- | I |
| Conduct domain-specific assessments | C | I | R/A | -- | -- |
| Produce risk evaluation report | I | R/A | C | -- | -- |
| Approve Low risk | I | A | -- | -- | R |
| Approve Medium risk | I | C | C | -- | R -> TPRM Lead A |
| Approve High risk | I | C | C | R/A | -- |
| Approve Critical risk | I | C | C | A | -- |
| Manage ongoing monitoring | R | A | C | -- | I |
| Manage issues & exceptions | C | R/A | C | I | -- |
| Exception approval (High/Critical) | I | C | C | R/A | -- |
| Conduct reassessment | I | R/A | C | I | -- |
| Manage offboarding | R | A | C | -- | C |

R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## Governance Bodies

### TPRM Operational Team
Members: TPRM Manager (chair), representatives from Cybersecurity, Privacy, Legal/Compliance, Procurement
Meets: Weekly or fortnightly
Responsibilities: Pipeline review, assessment progress, issue escalation, policy queries, operational metrics

### Risk Committee (or Third-Party Risk Subcommittee)
Members: CRO (chair), CISO, General Counsel, Chief Compliance Officer, CFO representative, Head of Operations
Meets: Monthly (or on-demand for critical approvals)
Responsibilities: High and Critical tier approvals, exception approvals, TPRM policy sign-off, escalated issues, monitoring reports
Quorum: At minimum, CRO + two other members

### Executive / Board Risk Committee
Members: Board-level, includes independent NEDs
Meets: Quarterly
Responsibilities: Strategic TPRM oversight, Critical tier awareness, regulatory reporting (where applicable), programme effectiveness review
Reporting: Receives quarterly TPRM dashboard

---

## TPRM Policy Architecture

Level 1 — Policy (Board or Executive approved):
  Third-Party Risk Management Policy
  Sets principles, scope, risk appetite, governance model, review cycle

Level 2 — Standard (CRO or equivalent approved):
  TPRM Risk Assessment Standard
  TPRM Due Diligence Standard
  TPRM Monitoring Standard
  TPRM Contractual Requirements Standard
  Sets methodology, minimum requirements, tiering criteria

Level 3 — Procedure (TPRM team approved):
  Intake & Onboarding Procedure
  Due Diligence Execution Procedure
  Monitoring & KRI Response Procedure
  Issue & Exception Management Procedure
  Offboarding Procedure
  Step-by-step operational guidance

Level 4 — Templates & Tools:
  Questionnaires, scorecards, checklists, report templates
  Standardise execution

### TPRM Policy Must Include
1. Purpose and scope (what is a "third party" for this policy)
2. Risk appetite statement for third-party risk
3. Governance model (roles, responsibilities, accountability)
4. Lifecycle requirements (what must happen at each stage)
5. Risk tiering principles
6. Regulatory obligations acknowledged
7. Exceptions process
8. Consequences of non-compliance
9. Review cycle (typically annual, or triggered by regulatory change)

---

## Risk Appetite Statement — TPRM

Sample statements:

DATA RISK: "The organisation has zero tolerance for unmitigated third-party access to personal data without an executed DPA and evidence of adequate security controls."

OPERATIONAL RISK: "The organisation will not maintain Critical-tier supplier relationships where no credible exit plan exists and the supplier's operational resilience does not meet defined RTO/RPO thresholds."

COMPLIANCE RISK: "The organisation has zero tolerance for third-party relationships involving sanctioned entities or unlicensed delivery of regulated activities."

RESIDUAL RISK: "The organisation's residual risk appetite for individual third-party relationships is High at maximum, requiring Risk Committee approval. Critical residual risk is not accepted without Board-level awareness and compensating controls."

---

## Escalation Framework

### Mandatory Escalation Triggers

| Trigger | Escalate to | Timeframe |
|---------|------------|-----------|
| Critical residual risk assessment | Risk Committee | Within 5 business days |
| High residual risk requiring approval | Risk Committee | Within 10 business days |
| Third party data breach confirmed | CISO + Privacy Officer + Risk Committee | Immediately (same business day) |
| Third party insolvency or going concern | CRO + Business owner | Immediately |
| Regulatory action against third party | CCO + Legal + CRO | Within 2 business days |
| KRI threshold breach (Critical supplier) | TPRM Manager + CISO | Within 2 business days |
| Unresolved Critical issue past target date | Risk Committee | Immediately |
| Third party refuses audit right | CRO + Legal | Within 5 business days |

---

## Third-Party Register — Minimum Fields

| Field | Description |
|-------|-------------|
| Unique ID | Internal identifier |
| Third-party legal name | Registered legal entity |
| Jurisdiction | Country of registration |
| Relationship owner | Internal business owner |
| TPRM case owner | Second-line owner |
| Risk tier | Critical / High / Medium / Low |
| Residual risk rating | Approved residual risk rating |
| Last assessment date | Date of most recent completed assessment |
| Next assessment due | Based on cadence |
| Risk domains assessed | Applicable domains |
| Contract expiry | Date |
| Annual spend | Approximate |
| Status | Active / Pending / Under Review / Terminated |
| Regulatory classification | DORA ICT, EBA material outsourcing, PRA critical, etc. |
| Data processing | Y/N + data types |
| System access | Y/N + systems |
| Open high/critical issues | Count |
