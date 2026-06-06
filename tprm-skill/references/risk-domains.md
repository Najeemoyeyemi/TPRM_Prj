# Risk Domains — Assessment Criteria, Controls & Scoring

## Domain 1: Cybersecurity

When to apply: Any third party with access to internal systems, networks, data, or infrastructure. Mandatory for IT vendors, SaaS providers, cloud providers, MSPs, software vendors, any entity with remote access.

### Key Assessment Areas

| Area | What to assess |
|------|---------------|
| Identity & Access Management | MFA enforced, least-privilege, privileged access management, account lifecycle |
| Vulnerability Management | Patching cadence, scanning frequency, critical vuln remediation SLA |
| Endpoint Security | EDR/AV deployed, mobile device management, BYOD policy |
| Network Security | Segmentation, firewall management, remote access controls, zero-trust approach |
| Incident Response | IR plan documented and tested, 24-hr notification capability |
| Penetration Testing | Frequency (annually minimum for High/Critical), scope, finding remediation |
| Data Security | Encryption at rest and in transit, DLP, secure deletion |
| Application Security | SDLC security gates, SAST/DAST, open-source dependency management |

### Preferred Evidence
- ISO 27001 certificate (scope must cover relevant services)
- SOC 2 Type II report (within 12 months; request Bridge Letter if 6-12 months old)
- Penetration test executive summary (within 12 months, critical/high findings remediated)
- CSA STAR Level 2 (for cloud providers)

### Cybersecurity Control Minimums by Tier

CRITICAL: ISO 27001 or SOC 2 Type II mandatory; annual penetration test; MFA mandatory on all access to client data; encryption at rest (AES-256) and in transit (TLS 1.2+); IR plan tested within 12 months, 24-hour notification commitment; contractual right to conduct cyber-specific audit.

HIGH: ISO 27001 or SOC 2 Type II preferred; annual penetration test or quarterly vulnerability scanning; MFA on privileged access as minimum; encryption at rest and in transit.

MEDIUM: Completed security questionnaire with supporting evidence; encryption in transit mandatory; MFA on admin accounts.

LOW: Self-assessment against minimum security baseline; encryption in transit.

---

## Domain 2: Data Privacy

When to apply: Any third party that processes, stores, accesses, or transfers personal data. Mandatory under GDPR/UK GDPR, CCPA, HIPAA as applicable.

### Key Assessment Areas

| Area | What to assess |
|------|---------------|
| Legal basis for processing | Valid GDPR Article 6 (and Article 9 for special category) basis |
| Data Processing Agreement | Article 28 GDPR compliant DPA executed |
| Data transfers | Adequacy decision, SCCs, BCRs, or derogations for cross-border transfers |
| Sub-processor management | Approved sub-processor list, prior notification of changes |
| Breach notification | 72-hour notification capability (GDPR), internal escalation process |
| DPIA | Has a DPIA been conducted where processing is high-risk? |
| Data Subject Rights | Capability to support DSARs, deletion requests, portability |

### GDPR Article 28 DPA — Mandatory Clauses
The DPA must cover:
- Processing only on documented instructions
- Confidentiality obligations on authorised personnel
- Appropriate technical and organisational security measures (Article 32)
- Sub-processor restrictions (prior authorisation, back-to-back obligations)
- Data subject rights assistance
- Assistance with DPIA and prior consultation
- Deletion or return on termination
- Audit rights and information provision

### Cross-Border Transfer Mechanisms
| Mechanism | When applicable |
|-----------|----------------|
| Adequacy decision | Transfer to adequacy-listed country |
| Standard Contractual Clauses (SCCs) | Default for non-adequate countries — use 2021 EU SCCs |
| UK IDTA / UK Addendum | For UK GDPR transfers from UK to non-adequate countries |
| Binding Corporate Rules | For intragroup transfers |

Transfer Impact Assessment (TIA) required for SCCs where destination country has extensive surveillance laws.

---

## Domain 3: Operational Resilience

When to apply: Third parties delivering critical or important business functions. Mandatory for regulated entities under PRA SS2/21, FCA PS21/3, DORA.

### Key Assessment Areas

| Area | What to assess |
|------|---------------|
| Business Continuity Plan | Documented, tested within 12 months, covers relevant services |
| Disaster Recovery | RTO/RPO defined and tested, aligned with client's tolerance for disruption |
| Service Availability | SLA uptime commitments, historical availability data |
| Single Points of Failure | Dependencies, redundancy, geographic concentration |
| Recovery Testing | DR test results shared, lessons learned implemented |

### Operational Resilience Minimum Standards

CRITICAL: RTO <= 4 hours, RPO <= 1 hour (or matching MTD); BCP/DR tested within 12 months with results evidenced; alternative delivery capability documented; multi-region deployment for cloud services; 6-month exit assistance obligation minimum.

HIGH: RTO <= 8 hours, RPO <= 4 hours; BCP/DR tested within 18 months; documented incident communication SLA.

---

## Domain 4: Financial Viability

When to apply: Critical and High tier suppliers providing long-term or hard-to-substitute services.

### Financial Health Indicators

GREEN (Low risk): >2 years profitable, positive cash from operations; investment grade credit (BBB/Baa or above); current ratio >1.5.

AMBER (Moderate risk — enhanced monitoring): Declining margin but still profitable; non-investment grade / no public rating; material debt refinancing due within contract term.

RED (High risk — mitigating action required): Operating losses for >12 months; going concern qualification; debt covenant breaches; credit rating below B/B2; significant litigation with material financial exposure.

### Concentration Risk Assessment
- If the client represents >25% of the third party's revenue: supplier fragility risk
- If the third party provides >80% of a critical capability: substitution risk
- Document both dimensions and include in risk evaluation

---

## Domain 5: Legal & Compliance

When to apply: All regulated activities, cross-border engagements, outsourcing of licensed functions.

### Key Assessment Areas

| Area | What to assess |
|------|---------------|
| Regulatory status | Is the third party authorised/licensed for activities being outsourced? |
| Sanctions | Screening against OFAC, EU, UN, HM Treasury lists |
| Anti-bribery & corruption | ABC programme, Transparency International ratings |
| Regulatory track record | Prior enforcement actions, regulatory sanctions, supervisory findings |
| Litigation | Material pending litigation, regulatory investigations |

### Sanctions Screening Requirements
- Screen at onboarding, at periodic reassessment, and on any material change
- Screen: legal entity, beneficial owners (>25% ownership), key management
- Screening lists: OFAC SDN, EU Consolidated, UN Security Council, HM Treasury, domestic lists
- Document screening date, lists used, result, and approver

---

## Domain 6: ESG & Conduct

When to apply: Material suppliers (Critical/High), ESG reporting obligations, reputational exposure elevated.

### Key Assessment Areas

| Area | What to assess |
|------|---------------|
| Labour practices | Living wage, working conditions, Modern Slavery Act compliance |
| Human rights | Supply chain due diligence (LkSG Germany, CSDDD EU) |
| Environmental | Carbon footprint, environmental certifications, net zero commitments |
| Corporate governance | Board composition, executive pay, shareholder rights |
| Anti-corruption | ABC programme, training, incident history |

ESG intelligence providers: EcoVadis, Sustainalytics, MSCI ESG, CDP. Combined ESG score triggers enhanced review if < 2.0/4.0 overall.

---

## Domain 7: Concentration Risk

When to apply: When a single third party or a small group represents a systemic dependency.

### Types of Concentration Risk

| Type | Description |
|------|-------------|
| Entity concentration | Single supplier provides >80% of a critical capability |
| Geographic concentration | Critical services provided from a single location or country |
| Sector concentration | Industry-wide dependency on a small number of providers |
| Technology concentration | Multiple services running on the same underlying platform |
| Revenue concentration | Client represents >25% of the supplier's revenue |

### Concentration Risk Mitigants
- Multi-sourcing strategy where feasible
- Geographic distribution of delivery
- Portability requirements in contract (data portability, API standards)
- Exit planning with credible alternative supplier identified
- Contractual step-in rights
- Regulatory notification (under DORA, PRA concentration risk guidance)
- Board-level monitoring of concentration exposures

### Fourth-Party Risk
- Require disclosure of all material sub-processors at onboarding
- Require prior notification of material changes to sub-processor chain
- Apply risk assessment to fourth parties proportionate to their role
- Contractually require third party to impose equivalent obligations on sub-processors
- For cloud providers: understand the shared responsibility model
