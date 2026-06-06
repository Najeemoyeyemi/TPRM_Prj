# Regulatory Framework Mapping

## Overview

This reference maps key regulatory and standards frameworks to TPRM requirements. Always verify the current version of regulations — this is a reference guide, not legal advice.

---

## DORA — Digital Operational Resilience Act (EU)

Who it applies to: Financial entities in the EU — banks, investment firms, insurance undertakings, payment institutions, crypto-asset service providers, and their ICT third-party service providers.
Effective: 17 January 2025

### Key TPRM Requirements

| DORA Requirement | Article | TPRM Implication |
|-----------------|---------|-----------------|
| ICT third-party risk management policy | Art. 28 | Must have documented TPRM policy covering ICT providers |
| Pre-contractual risk assessment | Art. 28(2) | Mandatory risk assessment before contracting |
| Mandatory contractual provisions | Art. 30 | Prescribed list of contract clauses |
| Register of ICT third-party arrangements | Art. 28(3) | Maintain register; report to regulator annually |
| Critical ICT third-party designation | Art. 31 | Direct oversight by ESAs for designated CTPPs |
| Exit strategy | Art. 28(8) | Written exit plan mandatory for critical ICT arrangements |
| Sub-outsourcing | Art. 30(3) | Must address sub-contractors in risk assessment and contracts |
| Concentration risk | Art. 29 | Assess concentration and report to authorities |

### DORA Register Fields (Article 28(3) RTS)
- Name and legal entity identifier of ICT provider
- Country of registration and incorporation
- Description of ICT services provided
- Material functions supported
- Date of most recent risk assessment
- Contract start/end dates
- Sub-outsourcing countries and entity names

### DORA Contractual Minimums (Article 30)
- Description of services and service levels
- Locations where services performed / data processed
- Data security provisions
- Access, inspection, and audit rights
- Incident notification requirements
- Exit strategy provisions
- Right to terminate for regulatory reasons

---

## EBA Outsourcing Guidelines (EBA/GL/2019/02)

Who it applies to: EU credit institutions, investment firms (under CRD), and payment institutions.

### Key Requirements

| Requirement | EBA Guideline | TPRM Implication |
|-------------|--------------|-----------------|
| Outsourcing policy | Para. 14 | Board-approved TPRM/outsourcing policy |
| Critical or important functions | Para. 16 | Formal determination process |
| Pre-outsourcing assessment | Para. 62 | Risk assessment before contracting |
| Mandatory contract clauses | Para. 74 | Full list including access rights, sub-outsourcing, exit |
| Outsourcing register | Para. 64 | Maintain register; report to competent authority |
| Regulatory notification | Para. 65 | Notify regulator before outsourcing critical/important functions |
| Exit strategy | Para. 63 | Written exit strategy for critical/important outsourcing |

Critical/Important Function: A function is critical or important if a defect or failure would materially impair compliance with authorisation conditions, financial performance, or continuity of services to clients.

---

## PRA Supervisory Statement SS2/21 (UK)

Who it applies to: PRA-regulated firms — banks, building societies, insurance firms, credit unions.

### Key Requirements

| Requirement | SS2/21 Reference | TPRM Implication |
|-------------|-----------------|-----------------|
| Operational resilience framework | 2.1-2.5 | Third parties must be mapped to Important Business Services |
| Impact tolerances | 3.1-3.12 | Third-party SLAs must support delivery within impact tolerances |
| Mapping and testing | 4.1-4.9 | Third parties must be included in operational resilience scenario testing |
| Third-party oversight | 6.1-6.7 | Ongoing monitoring and management of third-party dependencies |

FCA PS21/3: Parallel to PRA SS2/21 for FCA-regulated firms.

---

## ISO 27001:2022 — Supplier Security

Clause 8.4 / Annex A Controls (5.19-5.22):

| Control | Requirement |
|---------|-------------|
| A.5.19 Information security in supplier relationships | Policy for managing supplier security |
| A.5.20 Addressing security within supplier agreements | Security requirements documented in contracts |
| A.5.21 Managing ICT supply chain | Address security risks in ICT supply chains, including hardware and software |
| A.5.22 Monitoring, review and change management of supplier services | Monitor supplier performance, conduct reviews |

---

## SOC 2 (AICPA)

What it is: Audit standard for service organisations — covers Security, Availability, Processing Integrity, Confidentiality, and Privacy Trust Service Criteria.

### How to Use in TPRM

| Report Type | What it tells you |
|-------------|------------------|
| SOC 2 Type I | Controls are suitably designed at a point in time |
| SOC 2 Type II | Controls are suitably designed AND operating effectively over 6+ month period |
| Bridge Letter | Covers period between report end date and today |

Always request:
- SOC 2 Type II (not Type I) for Critical and High suppliers
- Report within last 12 months (or bridge letter if 6-12 months old)
- Check: qualified opinion, exceptions in controls, user entity control considerations
- Confirm scope covers the services being procured

User Entity Controls: SOC 2 reports often include controls that YOU (the client) must implement. Document these and assign ownership.

---

## NIST Cybersecurity Framework (CSF 2.0)

Widely adopted globally as a voluntary framework.

Core Functions:
- Govern (new in 2.0): Risk governance, strategy, policies — relevant to TPRM programme design
- Identify: Asset management, risk assessment, supply chain risk management (ID.SC)
- Protect: Access control, training, data security, configuration management
- Detect: Monitoring, anomaly detection
- Respond: Incident response, communications
- Recover: Recovery planning, improvements

NIST SP 800-161r1 — Cyber Supply Chain Risk Management (C-SCRM): Key controls:
- SR-2: Supply Chain Risk Assessment
- SR-3: Supply Chain Controls and Processes
- SR-6: Supplier Assessments and Reviews
- SR-8: Notification Agreements
- SR-10: Inspection of Supply Chain Components

---

## UK GDPR / EU GDPR — Third-Party Obligations

| Article | Obligation |
|---------|-----------|
| Art. 28 | Controller-processor requirements — DPA mandatory for all processors |
| Art. 32 | Appropriate technical and organisational measures — applies to processors |
| Art. 33 | 72-hour breach notification — processors must notify controller without undue delay |
| Art. 44-49 | Transfers to third countries — SCCs, adequacy, BCRs |
| Art. 82 | Joint and several liability — controller and processor both liable |

---

## Modern Slavery Act 2015 (UK)

Who it applies to: Commercial organisations with annual turnover >GBP 36 million, supplying goods or services in the UK.

TPRM obligations:
- Annual Modern Slavery statement required (Board approved)
- Statement must cover supply chain due diligence steps taken
- Enhanced due diligence for high-risk categories (manufacturing, agriculture, hospitality, construction)
- Contractual representation that the supplier complies with Modern Slavery Act

EU Corporate Sustainability Due Diligence Directive (CSDDD) — in force progressively from 2027:
- Requires large companies to conduct human rights and environmental due diligence across value chains
- Identify, prevent, and mitigate adverse impacts
- Establish grievance mechanisms

---

## Sector-Specific Obligations

Healthcare / Life Sciences:
- HIPAA (US): Business Associate Agreements (BAA) required for all vendors accessing PHI
- MDR/IVDR (EU): Quality system requirements extend to suppliers of medical devices
- NHS DSPT: NHS Digital Data Security and Protection Toolkit

Financial Services (Additional):
- MiFID II: Outsourcing requirements for investment firms
- Solvency II: Insurance outsourcing requirements — Delegated Regulation Arts. 274-275
- PSD2/PSR: Payment institution outsourcing requirements
- UK Senior Managers Regime: Individual accountability for outsourcing decisions

Public Sector:
- UK Procurement Regulations 2024: Due diligence on suppliers, mandatory exclusion grounds
- Cyber Essentials: Minimum for government suppliers; Cyber Essentials Plus for sensitive contracts
- NCSC Supply Chain Guidance: Risk management principles for government supply chains

---

## Regulatory Readiness Checklist

For TPRM audit preparation, ensure the following are evidenced:

Documentation:
- Board-approved TPRM policy, current version
- Risk assessment methodology documented
- Third-party register, complete and current
- Assessment records for all Critical and High suppliers
- DPAs in place for all data processors
- Contracts include regulatory-required clauses

Process:
- Approval decisions documented and evidenced
- Escalation records maintained
- Issue register with remediation tracking
- Exception register with time-limited approvals

Monitoring:
- Evidence of monitoring activities (screening results, performance reviews)
- KRI tracking and threshold breach responses
- Reassessment schedule met for Critical/High suppliers

Oversight:
- Risk Committee meeting minutes showing TPRM agenda items
- Board reporting on TPRM (quarterly minimum for regulated entities)
- Internal audit review of TPRM programme within last 24 months
