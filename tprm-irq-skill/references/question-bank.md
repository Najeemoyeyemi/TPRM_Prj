# IRQ Question Bank

The full library, sized to **exactly 30 questions** so an assembled IRQ can never exceed the cap. Questions are grouped into three sections:

- **Section A — Engagement basics** (5): always asked, orient the reader and seed criticality.
- **Section B — Gating questions** (9): always asked, high-level yes/no screens that open branch modules.
- **Section C — Branch modules** (16): asked *only* when their gate fires and the domain is in scope.

Always-asked = A + B = **14**. Conditional pool = C = **16**. Total pool = **30**. Gating means a typical respondent sees far fewer.

Each question lists: **plain text**, **answer options**, the **dimension** it scores (see `assembly-and-scoring.md` for the rollup), and the **gate** (when it appears). Score values are 1–4 (Low→Critical), consistent with the `tprm` skill's `scoring.md`.

---

## Section A — About the engagement (always)

**A1. In a sentence or two, what will this supplier do for you?**
*Options:* free text. *Dimension:* context only (not scored). *Gate:* always.

**A2. Is this a brand-new supplier, or replacing/renewing an existing one?**
*Options:* New · Replacement · Renewal. *Dimension:* context only. *Gate:* always.

**A3. Roughly how much will you spend with them per year?**
*Options:* Under £25k (1) · £25k–£100k (2) · £100k–£500k (3) · Over £500k (4). *Dimension:* Business criticality (financial materiality). *Gate:* always.

**A4. How long do you expect to rely on them?**
*Options:* One-off / under a year (1) · 1–3 years (2) · 3+ years, ongoing (3) · Indefinite / deeply embedded (4). *Dimension:* Business criticality (dependency). *Gate:* always.

**A5. If this supplier suddenly couldn't deliver, how quickly could you cope or switch?**
*Options:* Easily, within days (1) · Within about a month (2) · 1–3 months (3) · We couldn't easily replace them (4). *Dimension:* Business criticality + Concentration. *Gate:* always.

---

## Section B — Quick screening (always)

Each is a high-level gate. A **No** keeps the IRQ short; a **Yes** opens the matching Section C module (if that domain is in scope).

**B1. Will they handle any information about people — your customers, employees, or others?**
*Options:* Yes · No. *Dimension:* Data sensitivity. *Opens:* Privacy module (C-P). *Score:* No = 1.

**B2. Will they see confidential business information — contracts, finances, strategy, designs, or source code?**
*Options:* Yes · No. *Dimension:* Data sensitivity. *Opens:* Confidential-data module (C-C). *Score:* No = 1.

**B3. Will they be able to log in to, connect to, or change any of the systems or tools you use to run the business?**
*Options:* Yes · No. *Dimension:* System access. *Opens:* IT-access module (C-IT). *Score:* No = 1.

**B4. Does this supplier support something your customers rely on, or a critical internal process?**
*Options:* Yes · No. *Dimension:* Business criticality. *Opens:* Operational module (C-O). *Score:* No = 1.

**B5. Will they act on your behalf with customers, government, or other organisations — for example handling payments, sales, or representing you?**
*Options:* Yes · No. *Dimension:* Regulatory/Conduct (ABAC). *Opens:* Conduct module (C-A). *Score:* No = 1.

**B6. Will they use their own subcontractors or other companies to deliver the service?**
*Options:* Yes · No · Don't know. *Dimension:* Fourth-party. *Opens:* Fourth-party module (C-F). *Score:* No = 1, Don't know = 3.

**B7. Will they have physical access to your offices, sites, or equipment?**
*Options:* Yes · No. *Dimension:* System access (physical). *Opens:* Physical module (C-PH). *Score:* No = 1.

**B8. Does the service involve artificial intelligence or automated decisions that affect people?**
*Options:* Yes · No · Don't know. *Dimension:* AI/Model risk. *Opens:* AI module (C-AI). *Score:* No = 1, Don't know = 2.

**B9. Will any of your information be stored or accessed from outside the UK/EU?**
*Options:* Yes · No · Don't know. *Dimension:* Geographic. *Opens:* Geographic module (C-G). *Score:* No = 1, Don't know = 3.

---

## Section C — Branch modules (conditional)

Include a module only if **(a)** its gate returns Yes/Don't know **and (b)** the related domain is in scope. Each module is 1–2 questions. The whole of Section C totals 16 questions.

### Privacy module (C-P) — opens from B1. Domain: Data Privacy
**C-P1. Roughly how many people's information will be involved?**
*Options:* Under 100 (1) · 100–10,000 (2) · 10,000–100,000 (3) · Over 100,000 (4). *Dimension:* Data sensitivity (scale).

**C-P2. Will it include sensitive details — health, financial, biometric, children's, or government ID information?**
*Options:* No (2) · Don't know (3) · Yes (4). *Dimension:* Data sensitivity + Regulatory exposure.

### Confidential-data module (C-C) — opens from B2. Domain: Cybersecurity / Legal
**C-C1. How damaging would it be if that confidential information were leaked or stolen?**
*Options:* Minor (1) · Moderate (2) · Serious (3) · Severe — competitive, legal, or safety impact (4). *Dimension:* Data sensitivity.

### IT-access module (C-IT) — opens from B3. Domain: Cybersecurity
**C-IT1. Which best describes the access they'll have?**
*Options:* Only their own tools that we log in to (1) · They can view our data or systems (2) · They can change settings or data (3) · They can administer or control core systems (4). *Dimension:* System access.

**C-IT2. Will they connect to your internal network or install software on your devices?**
*Options:* No (1) · Don't know (3) · Yes (4). *Dimension:* System access.

### Operational module (C-O) — opens from B4. Domain: Operational Resilience
**C-O1. If the service went down, what would the impact be?**
*Options:* Inconvenient (1) · Noticeable disruption (2) · Customers or regulators affected (3) · Serious harm, safety, or major financial impact (4). *Dimension:* Business criticality.

**C-O2. How long could you manage without it before it becomes a serious problem?**
*Options:* Weeks (1) · A few days (2) · Hours (3) · Immediately — no tolerance (4). *Dimension:* Business criticality.

### Conduct module (C-A) — opens from B5. Domain: ABAC / Regulatory
**C-A1. Will they interact with government officials, or operate in higher-risk countries, on your behalf?**
*Options:* No (1) · Don't know (3) · Yes (4). *Dimension:* Regulatory/Conduct + Geographic.

**C-A2. Will they handle money, payments, or sales in your name?**
*Options:* No (1) · Yes (3). *Dimension:* Regulatory/Conduct (financial conduct).

### Fourth-party module (C-F) — opens from B6. Domain: Fourth-Party / Supply Chain
**C-F1. Do you know who their main subcontractors are and where they're based?**
*Options:* Yes, documented (1) · Roughly (2) · No (3). *Dimension:* Fourth-party visibility.

### AI module (C-AI) — opens from B8. Domain: AI/Model Risk
**C-AI1. Could those automated decisions significantly affect people — for example credit, hiring, eligibility, or access to a service?**
*Options:* No (2) · Don't know (3) · Yes (4). *Dimension:* AI/Model risk + Regulatory exposure.

### Physical module (C-PH) — opens from B7. Domain: Physical Security
**C-PH1. Will they access sensitive or restricted areas — server rooms, secure storage, or customer sites?**
*Options:* No (1) · Yes (3). *Dimension:* System access (physical).

### Geographic module (C-G) — opens from B9. Domain: Data Privacy / Regulatory
**C-G1. Which best describes where your information will be handled?**
*Options:* Other low-risk countries, e.g. US, Canada, Australia (2) · A mix including higher-risk countries (3) · Higher-risk or unknown locations (4). *Dimension:* Geographic.

### ESG module (C-E) — include if ESG or Supply Chain in scope
**C-E1. Does this supplier sit in a higher-risk category for labour, environmental, or ethical concerns — for example overseas manufacturing, raw materials, or low-wage labour?**
*Options:* No (1) · Don't know (2) · Yes (3). *Dimension:* ESG.

### Financial module (C-FIN) — include if Financial in scope
**C-FIN1. Is this a small, early-stage, or financially uncertain company that you'd be relying on heavily?**
*Options:* No (1) · Don't know (2) · Yes (3). *Dimension:* Financial viability.

### Concentration module (C-CON) — include if A5 = "couldn't easily replace" or Concentration/Supply Chain in scope
**C-CON1. If you needed to switch, are there realistic alternative suppliers?**
*Options:* Several (1) · A few (2) · Very few (3) · None — they're effectively the only option (4). *Dimension:* Concentration.

---

## Module-to-domain map (for selection)

| Scoped domain | Always-on gates | Branch module(s) |
|---------------|-----------------|------------------|
| Data Privacy | B1, B9 | C-P, C-G |
| Cybersecurity | B2, B3 | C-C, C-IT |
| Operational Resilience | B4 | C-O |
| ABAC / Conduct | B5 | C-A |
| Fourth-Party | B6 | C-F |
| AI / Model Risk | B8 | C-AI |
| Physical Security | B7 | C-PH |
| ESG | — | C-E |
| Supply Chain | B6 | C-F, C-E, C-CON |
| Financial | A3 | C-FIN |
| Concentration | A5 | C-CON |
| Regulatory / Legal | (cross-cutting) | C-P2, C-A1, C-AI1 |

If a scoped domain has no dedicated module (e.g., Reputational), it is usually covered by the cross-cutting signals (conduct, ESG, data sensitivity) rather than its own question — note this rather than adding a question that doesn't change the score.
