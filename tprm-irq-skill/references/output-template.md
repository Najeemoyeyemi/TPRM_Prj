# IRQ Output Template

An assembled IRQ has two parts: the **respondent-facing questionnaire** (what the business owner sees) and the **internal scoring annex** (how answers become a tier and triggers). Always produce both.

---

## Part 1 — Respondent-facing questionnaire

```
INHERENT RISK QUESTIONNAIRE
Supplier: __________________   Completed by: __________________   Date: ______

Why we're asking
This short questionnaire helps us understand the risk of working with a new
supplier so we apply the right level of checks — no more than necessary. It
takes about five minutes. You don't need any technical knowledge: just answer
about what this supplier will do for you and what they'll be able to see or
access. If you're unsure, choose "Don't know" — we'll follow up.

— About the engagement —
A1. In a sentence or two, what will this supplier do for you?  ____________
A2. Is this a brand-new supplier, or replacing/renewing an existing one?
    ( ) New   ( ) Replacement   ( ) Renewal
A3. Roughly how much will you spend with them per year?
    ( ) Under £25k  ( ) £25k–£100k  ( ) £100k–£500k  ( ) Over £500k
A4. How long do you expect to rely on them?
    ( ) One-off / under a year  ( ) 1–3 years  ( ) 3+ years  ( ) Indefinite
A5. If they suddenly couldn't deliver, how quickly could you cope or switch?
    ( ) Within days  ( ) About a month  ( ) 1–3 months  ( ) Couldn't easily replace

— A few quick checks —
B1. Will they handle any information about people (customers, employees, others)?
    ( ) Yes  ( ) No        → If Yes, answer P1–P2 below; if No, skip to B2.
   [P1. Roughly how many people's information?  ( )<100 ( )100–10k ( )10k–100k ( )100k+]
   [P2. Sensitive details (health, financial, biometric, children's, government ID)?
        ( ) No  ( ) Don't know  ( ) Yes]
B2. Will they see confidential business information (contracts, finances,
    strategy, designs, source code)?
    ( ) Yes  ( ) No        → If Yes: How damaging if leaked?
   [C1. ( ) Minor  ( ) Moderate  ( ) Serious  ( ) Severe]
B3. Will they be able to log in to, connect to, or change any of the systems
    or tools you use to run the business?
    ( ) Yes  ( ) No        → If Yes, answer IT1–IT2; if No, skip to B4.
   [IT1. Which best describes their access?
        ( ) Only their own tools we log in to  ( ) Can view our data/systems
        ( ) Can change settings or data  ( ) Can administer/control core systems]
   [IT2. Connect to your internal network or install software on your devices?
        ( ) No  ( ) Don't know  ( ) Yes]
B4. Does this supplier support something your customers rely on, or a critical
    internal process?
    ( ) Yes  ( ) No        → If Yes: impact and tolerance
   [O1. If it went down, impact? ( ) Inconvenient ( ) Noticeable ( ) Customers/
        regulators affected ( ) Serious harm/safety/major financial]
   [O2. How long could you manage without it? ( ) Weeks ( ) Days ( ) Hours
        ( ) Immediately]
B5. Will they act on your behalf with customers, government, or others
    (handling payments, sales, or representing you)?
    ( ) Yes  ( ) No        → If Yes: A1/A2 conduct questions
   [A1. Interact with government officials or operate in higher-risk countries
        on your behalf?  ( ) No  ( ) Don't know  ( ) Yes]
   [A2. Handle money, payments, or sales in your name?  ( ) No  ( ) Yes]
B6. Will they use their own subcontractors or other companies to deliver?
    ( ) Yes  ( ) No  ( ) Don't know   → If Yes/Don't know:
   [F1. Do you know who their main subcontractors are and where they're based?
        ( ) Yes, documented  ( ) Roughly  ( ) No]
B7. Will they have physical access to your offices, sites, or equipment?
    ( ) Yes  ( ) No        → If Yes:
   [PH1. Access sensitive/restricted areas (server rooms, secure storage,
         customer sites)?  ( ) No  ( ) Yes]
B8. Does the service involve artificial intelligence or automated decisions
    that affect people?
    ( ) Yes  ( ) No  ( ) Don't know   → If Yes:
   [AI1. Could those decisions significantly affect people (credit, hiring,
         eligibility, access to a service)?  ( ) No  ( ) Don't know  ( ) Yes]
B9. Will any of your information be stored or accessed from outside the UK/EU?
    ( ) Yes  ( ) No  ( ) Don't know   → If Yes/Don't know:
   [G1. Where? ( ) Other low-risk countries (US, Canada, Australia)
        ( ) A mix including higher-risk countries  ( ) Higher-risk/unknown]

[Include the ESG, Financial, and Concentration questions (C-E1, C-FIN1,
C-CON1) here only if those domains are in scope.]

Thank you. We'll confirm the level of checks needed and come back to you on
anything marked "Don't know".
```

Show only the modules whose domain is in scope. Square-bracketed items are the conditional follow-ups — render them as the branch that appears when the gate is Yes.

---

## Part 2 — Internal scoring annex (not shown to respondent)

```
SCORING ANNEX — [Supplier]

Dimension scores (highest contributing answer)
  Data sensitivity      : [1–4]  (from B1/B2/P1/P2/C1)
  System access         : [1–4]  (from B3/B7/IT1/IT2/PH1)
  Business criticality  : [1–4]  (from A3/A4/A5/B4/O1/O2)
  Regulatory exposure   : [1–4]  (from P2/A1/A2/AI1)
  Geographic            : [1–4]  (from B9/G1/A1)
  Concentration         : [1–4]  (from A5/F1/CON1)

Average of applicable dimensions : [x.x]
Computed tier                    : [Low/Medium/High/Critical]
Overrides fired                  : [list, or "none"]
FINAL TIER                       : [Low/Medium/High/Critical]

Due-diligence triggered
  [ ] Data Privacy DD + DPA/transfer       [ ] Cybersecurity DDQ
  [ ] Operational Resilience / BCP review  [ ] ABAC + sanctions screening
  [ ] Fourth-party disclosure              [ ] AI / model-risk assessment
  [ ] Cross-border transfer assessment     [ ] ESG / supply-chain DD
  [ ] Financial viability assessment

Open items ("Don't know" answers to confirm): [list]
```

---

## Worked example

*Scope: Cyber + Privacy + Operational Resilience. Supplier: a cloud HR/payroll SaaS.*

Respondent answers: A3 = £100k–£500k (3); A4 = 3+ years (3); A5 = 1–3 months (3); B1 = Yes → P1 = 10k–100k (3), P2 = Yes (4); B2 = Yes → C1 = Serious (3); B3 = Yes → IT1 = "can change settings or data" (3), IT2 = No (1); B4 = Yes → O1 = "customers/regulators affected" (3), O2 = Days (2); B5 No; B6 Yes → F1 = Roughly (2); B7 No; B8 No; B9 Yes → G1 = "other low-risk (US)" (2).

Dimension scores: Data sensitivity **4** (P2); System access **3** (IT1); Business criticality **3** (A4/A5/O1); Regulatory exposure **4** (P2); Geographic **2** (G1); Concentration **3** (A5 — "couldn't switch within 1–3 months" also feeds concentration).
Average = (4+3+3+4+2+3)/6 = **3.17 → High**. Override: C-P2 Yes + P1 ≥ 10k → **minimum High** (consistent). **FINAL TIER: High.**
Triggers: Data Privacy DD + DPA/transfer; Cybersecurity DDQ; Operational/BCP review; Fourth-party disclosure.
Respondent answered **~17** questions; pool for this scope was **24**. Well within 30.
