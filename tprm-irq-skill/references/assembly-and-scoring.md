# Assembly, Branching & Scoring

How to turn the question bank into a specific IRQ, keep it within 30, and convert answers into a risk tier and due-diligence triggers.

---

## 1. Assembly — selecting questions for a scope

1. **Always include** Section A (A1–A5) and Section B (B1–B9). That's 14 questions and it never changes.
2. **Add Section C modules** only where **both** are true:
   - the module's **gate** can fire (the gate question is present — all gates are in Section B, so they always are), and
   - the **related domain is in scope** (use the module-to-domain map in `question-bank.md`).
3. **Respect the cap.** A + B + all of C = exactly 30. If every domain is in scope, you include all 16 Section C questions and land on 30 — never more. If you ever feel pressure to add a question, cut a lower-value follow-up instead.
4. **Narrow scope → shorter IRQ.** If only Cyber + Privacy are in scope, include C-C, C-IT, C-P, C-G (6 conditional) for a 20-question pool — don't pad it back up to 30.

### Branching presentation
Show the logic so whoever deploys it (in a form tool, spreadsheet, or GRC platform) can wire it:
- After each gate, state the jump: *"B3 — If **No**, skip to B4."*
- Group each module directly under the gate that opens it.
- Mark conditional questions clearly (e.g., "Only if B1 = Yes").

The respondent experiences a short path; the *pool* is what's capped at 30.

---

## 2. Scoring — answers to dimension scores

Each scored answer carries a 1–4 value (given in the bank). Roll them up into the six inherent-risk dimensions used by the `tprm` skill (`scoring.md`), taking the **highest** contributing answer for each dimension (inherent risk is driven by the worst exposure, not an average of signals within a dimension):

| Dimension | Fed by |
|-----------|--------|
| **Data sensitivity** | B1, B2, C-P1, C-P2, C-C1 |
| **System access** | B3, B7, C-IT1, C-IT2, C-PH1 |
| **Business criticality** | A3, A4, A5, B4, C-O1, C-O2 |
| **Regulatory exposure** | C-P2, C-A1, C-A2, C-AI1 |
| **Geographic** | B9, C-G1, C-A1 |
| **Concentration** | A5, C-F1, C-CON1 |

Domain side-signals (ABAC, ESG, Financial, AI, Fourth-party) are also recorded for the **due-diligence triggers** below, even where they don't move one of the six dimensions.

### Dimension score → overall tier
Apply the same method as `scoring.md`: take the (optionally weighted) average of the **applicable** dimensions, then:

```
Average score      Tier
≥ 3.5              CRITICAL
2.5 – 3.49         HIGH
1.5 – 2.49         MEDIUM
< 1.5              LOW
```

Use equal weighting by default (simplest to explain to a business audience). If the programme already uses the weighting in `scoring.md`, mirror it.

---

## 3. Override triggers (auto-escalation)

Averages can hide a single unacceptable exposure. Apply these regardless of the average:

- **C-IT1 = "administer or control core systems" AND B4 = Yes** → minimum **Critical** (privileged access to a critical service).
- **C-P2 = Yes AND C-P1 ≥ 10,000** → minimum **High** (sensitive personal data at volume).
- **C-O1 = "serious harm/safety/major financial" OR C-O2 = "immediately"** → minimum **High** (critical operational dependency).
- **C-A1 = Yes** (government interaction / higher-risk markets on your behalf) → minimum **High** and mandatory ABAC + sanctions screening.
- **C-CON1 = "None"** → minimum **High** for concentration, flag for exit-planning attention.
- **Any gate answered "Don't know" on a high-impact item** → do not score as low; treat as the higher-risk option until confirmed, and note it as an open question.

State every override that fired in the output, so the jump from computed average to final tier is transparent.

---

## 4. Due-diligence triggers (linking IRQ to the next phase)

The IRQ's second job is to tell the programme *what due diligence to run*. Map high-risk answers to the due-diligence domain they trigger:

| Answer signal | Triggers |
|---------------|----------|
| B1 Yes + (C-P2 Yes or C-P1 ≥ 10k) | Full **Data Privacy** due diligence + DPA / transfer assessment |
| B3 Yes + C-IT1 ≥ 3 (change/administer) | Full **Cybersecurity** due-diligence questionnaire (vendor-facing) |
| B4 Yes + (C-O1 ≥ 3 or C-O2 ≥ 3) | **Operational Resilience** / BCP-DR review, exit-plan consideration |
| B5 Yes + (C-A1 Yes or C-A2 Yes) | **ABAC** due diligence + sanctions/adverse-media screening |
| B6 Yes / Don't know | **Fourth-party** sub-processor disclosure & flow-down review |
| B8 Yes + C-AI1 Yes | **AI / Model risk** assessment + transparency/oversight checks |
| B9 Yes / Don't know + C-G1 ≥ 3 | **Cross-border transfer** assessment |
| C-E1 Yes | **ESG / supply-chain** due diligence (e.g., modern-slavery checks) |
| C-FIN1 Yes | **Financial viability** assessment |

A **Low** tier with no triggers can proceed on a light-touch / self-certification path. **Critical/High** tiers route to the approval authority defined in the `tprm` skill (`lifecycle.md` Phase 4) and pick up the triggered due-diligence modules.

---

## 5. Quality checks before issuing an IRQ

- [ ] Total question **pool ≤ 30** (state the count).
- [ ] Every conditional question has a clear **gate**; no orphan questions.
- [ ] No question uses jargon, a regulation name, or a technical control term in the respondent-facing text.
- [ ] Every scored question maps to a **dimension**; unscored questions are only A1/A2.
- [ ] The **scoring annex** is present and lists the override and due-diligence triggers.
- [ ] "Don't know" is available on judgement questions and treated as higher risk.
- [ ] The assembled IRQ matches the **scoped domains** — no module for an out-of-scope domain, no missing module for an in-scope one.
