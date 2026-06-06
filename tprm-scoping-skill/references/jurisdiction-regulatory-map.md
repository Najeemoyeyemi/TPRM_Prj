# Jurisdiction & Sector to Regulatory Obligation Map

This is the core scoping reference. Given a client's **operating jurisdictions** and **sector**, determine the mandatory and expected TPRM obligations. Always cite *why* an obligation applies (the jurisdiction/sector trigger) and *what* it demands of a TPRM programme.

**How to use:** Work through Part A (cross-cutting — applies in most engagements regardless of sector) first, then Part B (sector-specific), then apply the decision logic in Part C. The map is non-exhaustive; verify current versions and flag where local counsel is needed.

---

## PART A — Cross-Cutting Obligations (by theme)

These apply based on geography and activity, not sector. Screen every engagement against them.

### A1. Data Privacy (triggered by: processing personal data of people in that jurisdiction)

| Jurisdiction | Regulation | Trigger | TPRM implication |
|--------------|-----------|---------|------------------|
| EU / EEA | GDPR | Personal data of EU/EEA individuals | Art. 28 DPA mandatory for processors; Art. 32 security; Art. 44–49 transfer mechanism (SCCs/adequacy); 72-hr breach notification chain (Art. 33) |
| UK | UK GDPR + DPA 2018 | Personal data of UK individuals | Equivalent to GDPR; UK IDTA / Addendum for international transfers |
| USA – California | CCPA / CPRA | CA residents' data, thresholds met | Service-provider / contractor contract terms; data-handling and deletion obligations |
| USA – other states | VA CDPA, CO CPA, CT, TX, etc. | State-resident data | Processor contract terms; varies by state — check thresholds |
| USA – sectoral | HIPAA (health), GLBA (financial) | PHI / consumer financial data | See Part B; BAA (HIPAA) or GLBA safeguards flow-down to vendors |
| Brazil | LGPD | Brazilian individuals' data | Processor obligations, transfer rules akin to GDPR |
| Canada | PIPEDA / Law 25 (Quebec) | Canadian / Québec data | Vendor accountability, transfer transparency, Québec breach + transfer rules |
| China | PIPL + DSL + CSL | Data of individuals in China / data generated in China | Strict cross-border transfer (CAC security assessment / SCCs), data localisation for some data |
| Singapore | PDPA | SG individuals' data | Transfer limitation, protection obligation flows to data intermediaries |
| Australia | Privacy Act / APPs | Australian individuals' data | APP 8 cross-border accountability for disclosures to overseas vendors |
| UAE / KSA / others | DIFC DP Law, KSA PDPL, etc. | Regional data | Transfer and processor obligations; check free-zone vs onshore |

**Key scoping flag:** If the client processes personal data anywhere, the **Data Privacy** domain is mandatory, and **Privacy Addendum / DPA templates** plus a **cross-border transfer mechanism** must be in deliverables. The location of the *third party and its sub-processors* matters as much as the client's own location.

### A2. Anti-Bribery & Corruption (largely extraterritorial)

| Regulation | Reach | TPRM implication |
|-----------|-------|------------------|
| UK Bribery Act 2010 | Any organisation with a UK nexus; "failure to prevent" offence (s.7) covers associated persons incl. third parties | Third-party ABAC due diligence is effectively mandatory; "adequate procedures" defence requires risk-based vendor screening |
| US FCPA | US issuers, domestic concerns, and conduct with US nexus | Third-party intermediary due diligence; books-and-records controls flow to agents/distributors |
| Sapin II (France), others | French companies / local equivalents | Third-party anti-corruption mapping and due diligence |

**Key scoping flag:** ABAC domain becomes mandatory where the client uses **agents, intermediaries, distributors, or introducers**, or operates in higher-corruption-risk markets. Even if not selected, recommend it where these third-party types exist.

### A3. ESG & Supply-Chain Due Diligence (geography + size driven)

| Regulation | Jurisdiction / trigger | TPRM implication |
|-----------|------------------------|------------------|
| EU CSDDD (Corporate Sustainability Due Diligence Directive) | Large EU companies + large non-EU companies with EU turnover; phased from 2027 | Human-rights & environmental due diligence across the chain of activities; grievance mechanism; flows into supplier assessment |
| EU CSRD | Large / listed EU companies | Sustainability reporting incl. value-chain data — needs supplier ESG data capture |
| Germany LkSG (Supply Chain Act) | Companies with German nexus above headcount thresholds | Risk analysis of direct (and triggered indirect) suppliers; preventive measures; reporting |
| UK Modern Slavery Act s.54 | UK turnover > GBP 36m | Annual statement; supply-chain due diligence steps |
| Norway Transparency Act / others | Local thresholds | Human-rights due diligence and disclosure |
| US UFLPA | Imports to US | Forced-labour (Xinjiang) supply-chain traceability; rebuttable presumption |
| EU Deforestation Regulation (EUDR) | Commodities placed on EU market | Supply-chain traceability for in-scope commodities |
| EU CBAM | Carbon-intensive imports to EU | Embedded-emissions data from suppliers |

**Key scoping flag:** ESG and Supply Chain Risk domains become mandatory for in-scope companies. These obligations reach **deep into the supply chain** (beyond tier-1), so Fourth-Party Risk is usually implicated too.

### A4. AI / Model Risk (emerging, geography driven)

| Regulation | Jurisdiction / trigger | TPRM implication |
|-----------|------------------------|------------------|
| EU AI Act | AI systems placed on / used in the EU market; phased from 2025–2027 | Risk-classification of AI systems; obligations on providers AND deployers; **third-party / GPAI model providers** must supply documentation; high-risk systems need conformity, logging, human oversight |
| US (NIST AI RMF, state laws e.g. CO AI Act, sectoral guidance) | Voluntary framework + emerging state law | Vendor AI risk assessment, transparency, bias controls |
| Sectoral (e.g. financial model risk — SR 11-7, PRA) | Regulated model use | Model validation extends to third-party / vendor models |

**Key scoping flag:** If the client procures AI/ML capabilities, embeds vendor models, or uses third parties that do, the **AI / Model Risk** domain should be in scope, with a vendor AI due-diligence module and contractual transparency/documentation clauses.

### A5. Cyber & Critical Infrastructure (geography + sector driven)

| Regulation | Jurisdiction / trigger | TPRM implication |
|-----------|------------------------|------------------|
| EU NIS2 | Essential & important entities (energy, transport, health, digital infra, etc.) in EU | Supply-chain security risk management measures (Art. 21); management accountability; incident reporting; flows to ICT suppliers |
| EU DORA | EU financial entities + their ICT providers | See Part B (the most prescriptive third-party regime) |
| UK NIS Regulations / CAF | UK operators of essential services & RDSPs | Supply-chain security expectations |
| US sectoral (CISA, TSA pipeline/rail directives, etc.) | US critical infrastructure | Sector-specific third-party security requirements |
| US state cyber (NY DFS 500) | NY-regulated financial entities | Third-party service-provider security policy (s.500.11), MFA, encryption |

---

## PART B — Sector-Specific Obligations (by geography)

### B1. Financial Services

| Geography | Regime | TPRM implication |
|-----------|--------|------------------|
| EU | **DORA** (Reg. 2022/2554) | The benchmark third-party regime. Art. 28 ICT third-party risk policy + pre-contract assessment; Art. 30 prescribed contract clauses; Art. 28(3) ICT register reported to regulator; Art. 28(8) mandatory exit strategy; Art. 29 concentration risk; Art. 31 oversight of designated Critical ICT Third-Party Providers |
| EU | **EBA Outsourcing Guidelines** (EBA/GL/2019/02) | Critical/important function determination; pre-outsourcing assessment; prescribed clauses; outsourcing register; regulator notification; exit strategy |
| EU | MiFID II, Solvency II (Arts. 274–275), PSD2 | Sector outsourcing rules for investment firms, insurers, payment institutions |
| UK | **PRA SS2/21** + **FCA PS21/3** (Operational Resilience) | Map third parties to Important Business Services; set impact tolerances; include third parties in scenario testing; ongoing oversight |
| UK | PRA SS2/21 outsourcing + FCA SYSC 8 | Material outsourcing identification, register, regulator notification, exit planning |
| UK | Emerging **Critical Third Parties (CTP) regime** (FSMA / PRA-FCA) | Direct oversight of designated critical third parties to the UK financial sector |
| USA | **FFIEC / OCC Bulletin 2013-29 → 2023 Interagency Guidance** | Lifecycle third-party risk management: planning, due diligence, contract, ongoing monitoring, termination; board oversight |
| USA | **GLBA Safeguards Rule** | Oversee service providers handling customer financial info; contractual safeguards |
| USA | **NY DFS 23 NYCRR 500** | Third-party service-provider security policy, due diligence, MFA, encryption |
| APAC | MAS (SG) Outsourcing & TRM Guidelines; HKMA; APRA CPS 230/234 (AU) | Outsourcing/operational-risk and information-security third-party requirements; APRA **CPS 230** (material service providers, from 2025) |

### B2. Healthcare & Life Sciences

| Geography | Regime | TPRM implication |
|-----------|--------|------------------|
| USA | **HIPAA** | Business Associate Agreement (BAA) mandatory for any vendor touching PHI; Security Rule safeguards flow down to subcontractors |
| EU | MDR / IVDR, EMA GxP | Quality-system and supplier-qualification requirements for device/pharma suppliers |
| UK | **NHS DSPT**, DCB standards | Suppliers to NHS must meet Data Security & Protection Toolkit |
| Global | GxP (GMP/GDP/GCP) | Supplier qualification, audit, and quality agreements for regulated activities |

### B3. Critical Infrastructure / Energy / Telecom / Digital

| Geography | Regime | TPRM implication |
|-----------|--------|------------------|
| EU | NIS2, DORA (financial), EECC (telecom) | Supply-chain security risk management; incident reporting; supplier security obligations |
| USA | NERC CIP (electric), TSA directives (pipeline/rail/aviation), CISA guidance | Sector-specific supply-chain and vendor security controls |
| UK | NIS Regulations, Telecoms Security Act | Supplier security duties, high-risk vendor controls |

### B4. Public Sector & Defence

| Geography | Regime | TPRM implication |
|-----------|--------|------------------|
| UK | Procurement Act 2023, Cyber Essentials (Plus), GovS 007 | Supplier exclusion grounds, due diligence, mandated baseline cyber for suppliers |
| USA | FAR/DFARS, CMMC, NIST SP 800-171, FedRAMP | Flow-down security requirements to contractors; cloud authorisation |
| EU | Public procurement directives | Exclusion grounds, supplier due diligence |

---

## PART C — Decision Logic

Apply this reasoning when assembling the obligation set:

1. **Start with geography of data and operations**, not just HQ. Where the client operates, where data resides, where third parties and **their sub-processors** operate each create obligations.
2. **Layer the sector regime** on top of cross-cutting obligations. A bank in the EU gets DORA + EBA + GDPR + (if large) CSRD/CSDDD + AI Act (if AI used) + NIS2 may also bite.
3. **The most prescriptive regime usually sets the bar.** If DORA applies, its Art. 30 contract clauses and register requirements drive the contract and reporting deliverables; lighter regimes are subsumed.
4. **Extraterritorial reach is easy to miss.** UK Bribery Act, US FCPA, EU AI Act (for non-EU providers serving the EU), CSDDD (non-EU companies with EU turnover), UFLPA (anyone importing to the US) catch organisations that don't think of themselves as in-scope.
5. **Translate each obligation into a TPRM artefact.** Every mandatory obligation should map to at least one in-scope domain, lifecycle phase, and deliverable. If it doesn't, that is a **gap** (see `coherence-checks.md`).
6. **Note where local legal review is required.** This map guides scoping; it is not legal advice. Flag novel/high-stakes determinations (e.g., critical-function designation, transfer adequacy) for counsel.

### Worked example
*Client: 1,500-person EU-headquartered insurer, operates in Germany + France + a US (NY) branch, processes policyholder personal and health data, uses a US cloud provider and an offshore claims-processing outsourcer in India, deploys a third-party AI fraud-detection model.*

Obligation set:
- **GDPR** (EU personal + health data) → DPA, Art. 9 special-category basis, SCCs for US + India transfers, TIA
- **Solvency II outsourcing** (insurer) → material outsourcing controls, register, regulator notification, exit plan
- **DORA** (EU financial entity, incl. insurers) → ICT third-party register, Art. 30 clauses for the cloud + AI providers, concentration assessment, exit strategy
- **NY DFS 500** (NY branch) → third-party security policy, MFA, encryption for the US operation
- **EU AI Act** (third-party AI model, high-risk if used for decisions affecting people) → AI vendor due diligence, documentation, human oversight, logging
- **CSRD** (large EU company) → value-chain ESG data capture if thresholds met
- **HIPAA?** → only if the US branch handles US PHI as a covered entity/BA — confirm
- Domains implicated: Cybersecurity, Data Privacy, Operational Resilience, Fourth-Party (India sub-processor), AI/Model Risk, Regulatory & Compliance, Concentration (cloud), ESG (if CSRD).
