# TPRM Lifecycle — Phase-by-Phase Guidance

## Phase 1: Intake & Onboarding

**Purpose:** Capture a complete third-party profile and establish the business case before any assessment begins.

### Required Information at Intake
- Legal entity name, registered address, jurisdiction, ownership structure
- Nature of services / products provided
- Proposed contract term and estimated annual spend
- Business owner (internal sponsor), operational contact, legal entity contracting
- Systems, data, or infrastructure the third party will access
- Whether the third party is replacing an existing supplier
- Sub-processors or fourth parties that will be engaged
- Regulatory status of the third party (licensed entity, regulated activity, etc.)

### Initial Classification
At intake, apply a rapid classification to determine assessment pathway:
- Does the third party access personal data? Triggers privacy assessment
- Does the third party access internal IT systems or networks? Triggers cybersecurity assessment
- Is the third party delivering a critical business function? Triggers operational resilience review
- Is annual spend above currency threshold or is the relationship multi-year critical? Triggers financial viability check
- Is the third party subject to regulatory licensing requirements? Triggers legal/compliance check

### Intake Outputs
1. Third-Party Profile record (in GRC system or register)
2. Initial risk tier estimate (confirmed after Phase 2)
3. Assigned TPRM case owner
4. Assessment pathway determined

---

## Phase 2: Inherent Risk Assessment

**Purpose:** Determine the risk the third party represents BEFORE any controls are applied, to right-size the assessment effort.

### Inherent Risk Scoring Dimensions

Score each dimension 1-4 (Low / Medium / High / Critical):

**Data Sensitivity**
- 1: No access to data
- 2: Non-sensitive business data only
- 3: Sensitive business data, confidential IP, or employee data
- 4: Personal data, regulated data (financial, health), or classified information

**System Access**
- 1: No access to internal systems
- 2: Read-only access to non-critical systems
- 3: Write/admin access to non-critical systems, or read access to critical systems
- 4: Admin/privileged access to critical systems or production environments

**Business Criticality**
- 1: Easily substitutable, no operational dependency
- 2: Moderate dependency, substitutable within 30 days
- 3: High dependency, substitution would take 30-90 days
- 4: Critical dependency, substitution >90 days or operationally infeasible

**Regulatory Exposure**
- 1: No regulatory dimension
- 2: Minor regulatory touch (e.g., general data processing)
- 3: Regulated activity or outsourcing arrangement under supervisory rules
- 4: Critical outsourcing, material outsourcing under EBA/PRA/FCA, or DORA in scope

**Geographic / Jurisdictional Risk**
- 1: Domestic / EEA / comparable jurisdiction
- 2: Standard international jurisdiction with data transfer mechanisms in place
- 3: Higher-risk jurisdiction, data transfer complexity, or geopolitical risk
- 4: Sanctioned jurisdiction or high-risk jurisdiction with limited rule-of-law

**Concentration Risk**
- 1: One of many interchangeable suppliers in category
- 2: Preferred supplier but alternatives exist
- 3: Sole supplier for function, limited market alternatives
- 4: Industry-wide dependency (e.g., major cloud CSP) — systemic concentration

### Tier Calculation

CRITICAL: Score >= 3.5, OR any single dimension scores 4 on Business Criticality AND System Access together
HIGH:     Score 2.5-3.4
MEDIUM:   Score 1.5-2.4
LOW:      Score < 1.5

Inherent risk tier drives: assessment depth, approval authority, monitoring frequency, reassessment cadence.

---

## Phase 3: Due Diligence

**Purpose:** Gather evidence of the third party's control environment across applicable risk domains.

### Due Diligence by Tier

| Activity | Critical | High | Medium | Low |
|----------|---------|------|--------|-----|
| Information Security Questionnaire (extended) | Required | Required | -- | -- |
| Information Security Questionnaire (standard) | -- | -- | Required | Required |
| Cybersecurity Evidence Review | Required | Required | -- | -- |
| Privacy/DPIA | Required (if data) | Required (if data) | Required (sensitive data) | -- |
| Data Processing Agreement review | Required | Required | Required (if personal data) | -- |
| Financial Viability Assessment | Required | Required | -- | -- |
| Business Continuity / DR Review | Required | Required | -- | -- |
| Sub-processor / Fourth-Party Review | Required | Required | If flagged | -- |
| On-site / virtual audit | Required | If warranted | -- | -- |
| Sanctions & adverse media screening | Required | Required | Required | Required |
| ESG / conduct screen | Required | Required | -- | -- |

### Evidence Hierarchy (descending preference)
1. Independent third-party certification (ISO 27001, SOC 2 Type II, PCI DSS, CSA STAR)
2. Regulatory audit reports or supervisory findings
3. Customer audit rights exercised — own organisation's audit report
4. Completed questionnaire with supporting evidence (policies, pen test reports, BCP test results)
5. Completed questionnaire without supporting evidence
6. Self-attestation

Always note the evidence level used in the assessment record — this affects residual risk confidence.

### Due Diligence Red Flags
- Refusal to complete questionnaire or provide evidence
- Material control gaps without a remediation plan
- Qualified or adverse opinions in audit reports
- Adverse regulatory findings (sanctions, enforcement actions)
- Undisclosed sub-processors handling regulated data
- BCP not tested in >12 months for a critical supplier
- Financial distress indicators (going concern, declining cash reserves)

---

## Phase 4: Risk Evaluation & Approval

**Purpose:** Synthesise findings into a residual risk rating and obtain appropriate approval.

### Residual Risk Determination

Residual Risk = Inherent Risk adjusted for Control Effectiveness

Control Effectiveness Levels:
  Strong   = reduce inherent risk by one tier
  Adequate = maintain inherent risk tier
  Weak     = maintain or increase inherent risk tier
  Absent   = increase inherent risk tier

### Risk Evaluation Report Contents
1. Executive summary (1 paragraph: who the third party is, what risk they represent, recommendation)
2. Inherent risk rating with dimension scores
3. Due diligence findings by domain (findings, evidence reviewed, gaps identified)
4. Residual risk rating
5. Required risk acceptance conditions or compensating controls
6. Approval recommendation (Approve / Approve with conditions / Defer / Reject)
7. Proposed monitoring requirements
8. Proposed reassessment date

### Approval Authority Matrix

| Residual Risk | Approval Authority |
|---------------|-------------------|
| Low | TPRM Team Lead or Procurement Manager |
| Medium | Head of Risk or CISO (as applicable) |
| High | Risk Committee (or delegated CRO) |
| Critical | Executive Risk Committee / Board Risk Committee |

Escalation is mandatory when: residual risk is High or Critical; regulatory critical/material outsourcing designation applies; sub-processor chain introduces unresolved risk; any red flag from due diligence is unmitigated.

---

## Phase 5: Selection & Contracting

**Purpose:** Translate risk assessment outcomes into contractual protections.

### Minimum Contractual Requirements by Risk Tier

ALL TIERS:
- Scope of services and permitted use of data
- Applicable law and jurisdiction
- Termination rights (including termination for convenience with adequate notice)
- Right to audit (or right to receive audit reports)
- Incident notification obligations (specify timeframe — typically 24-72 hours)
- Compliance with applicable laws (GDPR, sector regulations)
- Insurance requirements

MEDIUM AND ABOVE (add):
- Information security obligations (reference to ISO 27001 or equivalent standard)
- Data processing agreement (if personal data) meeting GDPR Article 28 requirements
- Sub-processor restrictions and prior approval requirements
- Business continuity and disaster recovery obligations
- Regulatory cooperation obligations

HIGH AND ABOVE (add):
- Specific security control requirements (MFA, encryption at rest/transit, patching SLA)
- Penetration testing obligations (frequency, scope, report sharing)
- Specific RTO/RPO commitments in SLA
- Step-in rights or continuity obligations
- Financial covenant reporting (annual accounts, credit rating triggers)
- Exit assistance obligations (minimum 6 months for critical suppliers)

CRITICAL (add):
- Board-level governance obligations for the third party
- Regulatory notification requirements (e.g., DORA Article 28 register, EBA outsourcing register)
- Mandatory exit planning provisions
- Regulatory audit rights (right to conduct, not just receive reports)
- Escalation to regulator cooperation clause

---

## Phase 6: Continuous Monitoring

**Purpose:** Maintain real-time and near-real-time visibility of third-party risk between periodic assessments.

### Monitoring Activities by Tier

| Activity | Critical | High | Medium | Low |
|----------|---------|------|--------|-----|
| Adverse media & sanctions screening | Daily | Weekly | Monthly | Quarterly |
| Cyber threat intelligence | Continuous | Weekly | Monthly | -- |
| Financial health monitoring | Monthly | Quarterly | -- | -- |
| Regulatory/enforcement action monitoring | Monthly | Monthly | Quarterly | -- |
| SLA/KPI performance review | Monthly | Quarterly | Bi-annually | Annually |
| Incident/breach notification tracking | Event-driven | Event-driven | Event-driven | Event-driven |

### KRI Threshold Breach Response Protocol
KRI Trigger → Immediate notification to TPRM case owner
Case owner assesses within 2 business days:
  - No action required: document and close
  - Monitoring enhancement: increase frequency, request evidence update
  - Formal review: initiate out-of-cycle reassessment
  - Escalation: notify Risk Committee, consider contract enforcement or exit

---

## Phase 7: Periodic Reassessment

**Purpose:** Conduct a structured review of the third-party relationship at defined intervals.

### Reassessment Cadence

| Risk Tier | Reassessment Frequency |
|-----------|----------------------|
| Critical | Annually (or sooner if KRI triggered) |
| High | Annually |
| Medium | Every 2 years |
| Low | Every 3 years (or at contract renewal) |

### Out-of-Cycle Reassessment Triggers
- Material change in services delivered (scope expansion, new system access)
- Material change in data processed (new data categories, increased volume)
- Corporate event (acquisition, merger, change of control)
- Significant incident (data breach, major outage, regulatory action)
- KRI threshold breach
- Contract renewal or renegotiation

---

## Phase 8: Issue & Exception Management

**Purpose:** Manage identified control gaps, findings, and approved risk exceptions in a structured and auditable way.

### Issue Classification

| Severity | Definition | Remediation Timeframe |
|----------|-----------|----------------------|
| Critical | Immediate risk of material harm, breach, or regulatory violation | 15 business days |
| High | Significant control gap, unacceptable risk exposure | 30 business days |
| Medium | Control weakness, compensating controls in place | 90 business days |
| Low | Minor gap, negligible impact | 180 business days |

### Exception Management
An exception is raised when a known risk cannot be remediated or when a control standard cannot be met.

Exception record must include:
- Risk being accepted (specific, not generic)
- Why the standard cannot be met (business justification)
- Compensating controls in place
- Review date (exceptions are time-limited — maximum 12 months)
- Approval authority (same matrix as risk approvals)

Prohibited exceptions:
- Cannot exception regulatory minimum requirements (e.g., DPA under GDPR)
- Cannot exception sanctions screening
- Cannot exception notification obligations to regulators

---

## Phase 9: Renewal Review

**Purpose:** Before contract renewal, conduct a structured review to confirm the relationship remains suitable and appropriately controlled.

### Renewal Review Checklist
- Risk profile review: has the nature or scope of services changed?
- Performance review: SLA/KPI compliance over the contract term
- Issue review: unresolved issues or patterns indicating systemic weaknesses
- Contractual adequacy: are current terms still fit for purpose?
- Market review: is the supplier still the best option? (apply to Critical/High)
- Regulatory update: have new obligations come into effect?
- Reassessment: is a fresh due diligence needed (for multi-year renewals)?

For Critical and High tiers, a full reassessment should be completed before renewal if the last assessment is >12 months old.

---

## Phase 10: Offboarding & Termination

**Purpose:** Ensure the transition away from a third party is managed safely, with all data, access, and obligations properly closed out.

### Offboarding Triggers
- Contract expiry / non-renewal
- Termination for convenience or cause
- Supplier insolvency or acquisition
- Strategic decision to in-source or replatform

### Key Offboarding Activities

ACCESS AND SYSTEMS: All accounts, credentials, VPN, API keys, certificates revoked; shared credentials rotated; IT confirms no residual access.

DATA: Data deletion or return confirmed in writing; DPA termination provisions invoked; sub-processor/fourth-party data confirmed deleted.

CONTRACTUAL: Notice served per contractual terms; final performance measurement completed; outstanding invoices resolved.

OPERATIONAL: Transition plan executed; knowledge transfer complete; replacement service confirmed operational; regulatory notifications submitted.

RECORDS: TPRM register updated to Terminated; open issues closed; monitoring feeds deactivated; lessons learned documented.

### Exit Planning for Critical Suppliers
For Critical-tier suppliers, an exit plan must be maintained throughout the relationship — not created at termination. It must document:
- Estimated transition timeframe
- Internal capabilities or alternative suppliers available
- Data portability requirements
- Maximum acceptable service disruption during transition
- Regulatory obligations on exit

Exit plans should be reviewed annually for Critical suppliers.
