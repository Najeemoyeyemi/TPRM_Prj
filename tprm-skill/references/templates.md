# TPRM Standard Templates & Outputs

This file contains standard templates and output structures. Adapt to the organisation's style, regulatory context, and risk appetite.

---

## Template 1: Third-Party Intake Form

Instructions: Complete before submitting a new vendor for TPRM assessment. Business owner is responsible for accuracy.

THIRD-PARTY INTAKE FORM

Section 1: Third-Party Details
Legal entity name:
Trading / commercial name:
Country of incorporation:
Company registration number:
Website:
Primary contact (name, title, email):
Relationship owner (internal):

Section 2: Nature of Engagement
Description of services / products:
Proposed contract start date:
Proposed contract term:
Estimated annual spend (GBP/EUR/USD):
Is this a replacement for an existing supplier? Y/N
  If yes, name of existing supplier:

Section 3: Data & Systems Access
Will this third party access internal IT systems or networks? Y/N
  If yes, describe access required:
Will this third party process personal data? Y/N
  If yes, what categories of personal data?
  Volume of data subjects (approx):
Will this third party have access to confidential/sensitive business data? Y/N
  If yes, describe:
Will this third party deliver services from a cloud environment? Y/N
  If yes, which CSP(s) and regions?

Section 4: Business Criticality
Is this service supporting a critical business function? Y/N
  If yes, describe the function:
What is the maximum acceptable downtime if this supplier fails?
Are there alternative suppliers / in-house options if this supplier failed?
  Yes — describe alternatives:
  No — explain:

Section 5: Sub-Contractors
Will the third party use sub-contractors to deliver this service? Y/N
  If yes, list known sub-contractors / fourth parties:

Section 6: Regulatory Considerations
Is this arrangement subject to regulatory outsourcing requirements? Y/N
  If yes, which regulation?
Does the third party require regulatory authorisation for the services? Y/N
  If yes, confirm authorisation obtained:

Section 7: Business Justification
Why is this supplier being engaged?
Has due diligence or market testing been conducted? Y/N
  If yes, summarise:

Submitted by:                    Date:
Business unit:                   Manager approval:

---

## Template 2: Risk Evaluation Report Structure

THIRD-PARTY RISK EVALUATION REPORT
CLASSIFICATION: CONFIDENTIAL

Third Party:          [Legal entity name]
Assessment Date:      [DD/MM/YYYY]
Assessment Owner:     [Name, Role]
Business Owner:       [Name, Business Unit]
Report Version:       [1.0 / Final]

1. EXECUTIVE SUMMARY
[One paragraph: who the third party is, what service they provide,
inherent risk tier, residual risk rating, and recommendation]
Recommendation: Approve / Approve with conditions / Defer / Reject

2. THIRD-PARTY PROFILE
Entity, Services, Contract term, Annual value, Jurisdiction, Sub-processors

3. INHERENT RISK ASSESSMENT
Dimension              Score (1-4)    Rationale
Data Sensitivity
System Access
Business Criticality
Regulatory Exposure
Geographic Risk
Concentration Risk
Weighted Score: [X.X]
Inherent Risk Tier: Critical / High / Medium / Low

4. DUE DILIGENCE FINDINGS
[For each domain assessed:]
Domain: [e.g., Cybersecurity]
Evidence reviewed: [ISO 27001 cert, SOC 2 Type II, Pen test summary]
Evidence level: [Independent certification / Questionnaire + evidence / Self-attestation]
Key findings:
Control gaps identified:
  [Gap] — Severity: [Critical/High/Medium/Low]
Control effectiveness: Strong / Adequate / Weak / Absent
Domain risk: Critical / High / Medium / Low

5. RESIDUAL RISK
Control Effectiveness (overall): Strong / Adequate / Weak / Absent
Residual Risk Rating: Critical / High / Medium / Low
Residual risk narrative:
[Explain how inherent risk adjusted for controls to reach residual risk]

6. CONDITIONS & REQUIREMENTS
The following conditions apply to approval:
1. [Condition 1 — e.g., DPA to be executed before data sharing commences]
2. [Condition 2 — e.g., ISO 27001 certificate provided before go-live]

7. MONITORING REQUIREMENTS
Adverse media screening: [Daily / Weekly / Monthly]
Cyber intelligence monitoring: [Yes / No]
Financial monitoring: [Yes / No — frequency]
SLA review frequency: [Monthly / Quarterly / Bi-annually]
Reassessment due: [Date]

8. APPROVAL
Approval authority (per tier): [Name / Committee]
Decision: Approved / Approved with conditions / Deferred / Rejected
Approved by:           Date:

---

## Template 3: Information Security Questionnaire (Standard)

For Medium/Low-tier suppliers.

SECTION A: GOVERNANCE
A1. Do you have a documented information security policy? Y/N  Last reviewed?
A2. Do you have an individual with named responsibility for information security? Y/N  Role/title?
A3. Do you conduct regular security awareness training for staff? Y/N

SECTION B: ACCESS CONTROL
B1. Do you enforce multi-factor authentication (MFA) for remote access? Y/N
B2. Do you enforce MFA for admin/privileged accounts? Y/N
B3. Do you follow a least-privilege access model? Y/N
B4. Are access rights reviewed at least annually? Y/N

SECTION C: VULNERABILITY MANAGEMENT
C1. Do you conduct regular vulnerability scanning? Y/N  Frequency?
C2. Do you have a documented patching policy? Y/N  Critical patch SLA?
C3. Have you conducted a penetration test in the last 12 months? Y/N
    If yes, were all critical/high findings remediated? Y/N

SECTION D: DATA SECURITY
D1. Is data encrypted at rest (AES-256 or equivalent)? Y/N
D2. Is data encrypted in transit (TLS 1.2+)? Y/N
D3. Do you have a documented data retention and deletion policy? Y/N

SECTION E: INCIDENT MANAGEMENT
E1. Do you have a documented incident response plan? Y/N
E2. Can you notify clients of a security incident within 24 hours? Y/N
E3. Have you experienced a security incident in the last 24 months? Y/N
    If yes, please describe briefly and steps taken:

SECTION F: BUSINESS CONTINUITY
F1. Do you have a documented business continuity plan? Y/N
F2. When was your BCP last tested? Date:
F3. What is your target Recovery Time Objective (RTO) for the services in scope?
F4. What is your target Recovery Point Objective (RPO)?

SECTION G: THIRD-PARTY / SUB-PROCESSORS
G1. Do you use sub-contractors to deliver the services in scope? Y/N
    If yes, list:
G2. Do you have security requirements for your own sub-contractors? Y/N

SECTION H: CERTIFICATIONS
H1. Do you hold ISO 27001 certification? Y/N  Scope?  Expiry?
H2. Do you hold SOC 2 Type II? Y/N  Period covered?
H3. Other relevant certifications (PCI DSS, Cyber Essentials, CSA STAR):

SECTION I: DECLARATION
I confirm the above responses are accurate to the best of my knowledge.
Name:              Role:              Date:

---

## Template 4: Issue Record Fields

Issue ID, Date Raised, Third Party, Source, Risk Domain, Business Owner, TPRM Owner
Issue Description: [Clear description of the control gap or failure]
Evidence: [What evidence was reviewed / source of finding]
Risk Implication: [What could go wrong if not remediated]
Severity: Critical (15 days) / High (30 days) / Medium (90 days) / Low (180 days)
Required Action: [Specific action required from the third party]
Internal Owner, Third-Party Owner, Target Date
Status history: Open -> In Progress -> Remediated / Closed
Closure: Closure date, evidence reviewed, closed by

---

## Template 5: Exception Record Fields

Exception ID, Date Raised, Third Party, Risk Domain, Business Owner, Raised by
Risk being accepted: [Specific risk, not generic]
Why standard cannot be met: [Business justification]
Compensating controls: [Controls that reduce the risk in the absence of the standard]
Residual risk with exception: Critical / High / Medium / Low
Review date: [Maximum 12 months from approval]
Conditions: [What must happen for the exception to remain valid]
Approval: [Name, Role, Date, Committee minute ref if applicable]
Review history: [Date, Outcome, Reviewer]

---

## Template 6: Offboarding Checklist

Third Party, Contract end date, Termination type, Business Owner, TPRM Owner

ACCESS & SYSTEMS:
All system accounts deactivated/deleted
All VPN / remote access credentials revoked
All API keys and tokens rotated/invalidated
Shared credentials/service accounts rotated
Certificates revoked where applicable
IT confirms no residual access

DATA:
Data return or deletion confirmed in writing
DPA termination provisions invoked
Sub-processor data deletion confirmed
Data retention obligations reviewed/documented

CONTRACTUAL / LEGAL:
Notice served per contractual terms
Final SLA/performance statement prepared
Outstanding invoices resolved
IP / confidential information obligations noted
Post-termination obligations documented

OPERATIONAL:
Transition plan agreed and executed
Knowledge transfer completed
Replacement service/supplier confirmed operational
Regulatory notification submitted (if required)
DORA/EBA register updated

TPRM RECORD CLOSURE:
Third-party register status updated to Terminated
All open issues closed or transitioned
Monitoring feeds deactivated
Lessons learned documented
Post-exit review scheduled (Critical: 90 days)

Offboarding sign-off: [Name]  Date: [DD/MM/YYYY]
