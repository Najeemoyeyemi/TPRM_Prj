---
name: tprm-irq
description: |
  Generates an Inherent Risk Questionnaire (IRQ) from a set of scoped third-party risk domains: a short (maximum 30 questions), plain-language questionnaire with gating and branching logic, designed for a business/service owner or procurement manager to complete — not a security or risk specialist. Each question maps to an inherent-risk dimension and a score, so the completed IRQ produces a risk tier (Critical/High/Medium/Low) and flags which due-diligence domains to trigger next.

  Trigger for: building or designing an inherent risk questionnaire, IRQ, intake risk questionnaire, vendor risk triage questions, risk tiering questionnaire, "questions for business owners to assess a new supplier", or turning scoped risk domains into intake questions.

  Use proactively when the user has scoped risk domains and needs the intake instrument that tiers a vendor before due diligence. Pairs with tprm-scoping (which scopes the domains) and tprm (which defines the scoring dimensions and due-diligence depth).
---

# TPRM Inherent Risk Questionnaire (IRQ) Builder

You generate **Inherent Risk Questionnaires** — the short intake instrument that classifies a third party's risk *before* any due diligence, completed at onboarding by the **business owner, service owner, or procurement manager**.

The IRQ is the bridge between scoping and due diligence: it takes the **scoped risk domains** (what the programme cares about) and turns them into a handful of questions a non-specialist can answer about a specific vendor, producing a **risk tier** and a list of **due-diligence domains to trigger** next.

## The four hard rules

These are the whole point of an IRQ. Hold them.

1. **Maximum 30 questions — total pool.** Never exceed 30. The full question library in `references/question-bank.md` is sized to exactly 30 for this reason. If a broad scope would push past 30, tighten gating or drop the lowest-value follow-ups — do not add questions.

2. **Gating and branching keep it short for the respondent.** Most vendors are low-risk; a respondent should answer ~12–15 questions, not 30. High-level yes/no **gating questions** open **branch modules** only when relevant. A vendor that touches no data, no systems, and no critical process should finish in a couple of minutes.

3. **Plain language — never overtly technical.** The respondent is a business owner or buyer, not a security engineer. Ask about *what the vendor will do and see in business terms*, not about technical controls (those belong in the vendor-facing due-diligence questionnaire later). If a question needs jargon to make sense, it's the wrong question for an IRQ. See the plain-language rules below.

4. **Every question earns its place by mapping to a score.** Each question maps to an inherent-risk dimension and contributes to the tier. If a question doesn't change the risk picture, cut it. (Two exceptions: a free-text "what will they do?" and new/replacement context — these orient the reader without scoring.)

## What an IRQ is *not*

- It is **not** a security questionnaire. Don't ask about MFA, encryption, ISO 27001, patching, pen tests, RTO/RPO — the vendor answers those later in due diligence, not the business owner now.
- It is **not** completed by the vendor. The *buyer* completes it about the vendor.
- It does **not** assess controls. It assesses **inherent** risk — the risk the relationship creates regardless of how good the vendor's controls turn out to be.

---

## Workflow

### Step 1 — Establish the scoped domains
Find out which risk domains are in scope. They may come from a `tprm-scoping` report, be stated by the user, or need a quick ask. The standard domains: Cybersecurity, Data Privacy, Operational Resilience, ABAC, ESG, Financial, Regulatory/Compliance, Legal, Reputational, Fourth-Party, Physical Security, AI/Model Risk, Supply Chain. If the user doesn't specify, default to the common core (Cyber, Privacy, Operational Resilience, Financial) and say so.

### Step 2 — Select question modules
Always include **Section A (engagement basics)** and **Section B (gating questions)**. Then include only the **Section C branch modules** that match the scoped domains. Read `references/question-bank.md` for the full library and which gate opens which module.

### Step 3 — Assemble the IRQ within the 30-question budget
Lay out the questions in order: basics → gating → conditional branches. Show the branching explicitly ("If **No**, skip to Q14"). Confirm the **total pool ≤ 30**. Read `references/assembly-and-scoring.md` for the selection and budgeting rules.

### Step 4 — Attach the scoring key and due-diligence triggers
Behind the respondent-facing questionnaire, include the **scoring annex**: how each answer maps to a dimension score, how scores roll up to a tier (aligned with the `tprm` skill's `scoring.md`), the override triggers, and which answers escalate to which due-diligence domain. This is not shown to the respondent.

### Step 5 — Output
Produce the IRQ in the format in `references/output-template.md`: a respondent-friendly questionnaire (with a reassuring plain-language intro) plus the internal scoring annex. Offer to render it as a document or spreadsheet if the user wants to deploy it.

---

## Plain-language rules

Write every question so a smart non-specialist can answer it confidently. Concretely:

- **Ask about the business reality, not the technology.** "Will they be able to log in to or change the systems you use to run the business?" — not "Will they have privileged access to production?"
- **Spell out examples in brackets** so the respondent doesn't have to interpret a category. "sensitive details (health, financial, biometric, children's, or government ID)".
- **Prefer closed answers** (Yes/No or a short banded scale) — easier to answer and to score. Allow "Don't know" on judgement calls and treat it as higher risk (assume the worst until confirmed).
- **One idea per question.** Don't bundle "data and systems and subcontractors" into one.
- **No acronyms or regulation names** in the respondent-facing text (GDPR, DORA, PII, RTO). The mapping to those lives in the scoring annex, not the question.

### Before / after
| Too technical (don't) | Business-friendly (do) |
|----------------------|------------------------|
| "Does the vendor process special-category data under Art. 9?" | "Will they handle sensitive personal details — health, financial, biometric, children's, or government ID information?" |
| "Will the vendor have privileged access to production environments?" | "Will they be able to change settings or data in the core systems you rely on, not just their own tools?" |
| "Is this an Important Business Service with a defined impact tolerance?" | "If this supplier suddenly stopped, would it disrupt something your customers rely on?" |
| "What is the data residency and transfer mechanism?" | "Will any of your information be stored or accessed from outside the UK/EU?" |
| "Does the engagement involve sub-processors?" | "Will they use their own subcontractors or other companies to deliver the service?" |

---

## Reference files

| File | Load when… |
|------|-----------|
| `references/question-bank.md` | Selecting/wording questions — the full 30-question modular library with options, mapped dimension, score, and gate |
| `references/assembly-and-scoring.md` | Budgeting to ≤30, branching rules, scoring to a tier, override triggers, due-diligence triggers |
| `references/output-template.md` | Formatting the deliverable — respondent questionnaire + internal scoring annex + worked example |

## Output standards
- Confirm and state the **question count** for the assembled IRQ (and that the pool ≤ 30).
- Show **branching** explicitly so whoever deploys it can build the logic.
- Keep the respondent intro **short and reassuring** — make clear they don't need technical knowledge and "Don't know" is an acceptable answer.
- Always include the **scoring annex** so the IRQ actually produces a tier, not just answers.
- Note the **due-diligence domains** each high-risk answer triggers, linking the IRQ to the next lifecycle phase.
- Keep it **proportionate** — a narrow scope should yield a shorter IRQ, not a padded one.
