# Risk Scoring & Classification Methodology

This is the consolidated methodology for classifying third parties by risk. It expands on the inherent-risk dimensions introduced in `lifecycle.md` (Phase 2) and the residual-risk logic in Phase 4, and is the reference to use when **building, explaining, or defending** the scoring model.

A good scoring model is **consistent** (same inputs → same tier, regardless of assessor), **defensible** (every score traces to documented criteria and evidence), and **proportionate** (it drives effort toward real risk). Auditors and regulators will test all three.

---

## 1. The two-stage model

```
INHERENT RISK  →  (apply control effectiveness)  →  RESIDUAL RISK
   "how much risk does this relationship             "how much risk remains
    create before we look at controls?"               after the third party's controls?"
        drives ASSESSMENT DEPTH                            drives APPROVAL & MONITORING
```

Keep the two separate. Inherent risk is a property of the *engagement* (what data, what access, how critical) and barely changes year to year. Residual risk is a property of the *third party's control environment* and can change with every incident, certification lapse, or reassessment.

---

## 2. Inherent risk scoring

### 2.1 Dimensions and scale
Score each applicable dimension 1–4. The dimensions below are the recommended default; add or remove to fit the organisation, but keep the 1–4 scale so scores are comparable.

| Dimension | 1 (Low) | 2 (Medium) | 3 (High) | 4 (Critical) |
|-----------|---------|------------|----------|--------------|
| **Data sensitivity** | No data access | Non-sensitive business data | Sensitive/confidential or employee data | Personal, regulated (financial/health), or classified data |
| **System access** | None | Read-only, non-critical | Write/admin non-critical, or read critical | Privileged/admin to critical or production systems |
| **Business criticality** | Easily substitutable | Substitutable < 30 days | Substitution 30–90 days | Substitution > 90 days or infeasible |
| **Regulatory exposure** | None | Minor (general data processing) | Regulated activity / supervised outsourcing | Critical/material outsourcing, DORA in scope |
| **Geographic risk** | Domestic / EEA / comparable | Standard intl. with transfer controls | Higher-risk jurisdiction / transfer complexity | Sanctioned or high-risk, weak rule of law |
| **Concentration** | Many interchangeable suppliers | Preferred but alternatives exist | Sole supplier, limited market | Industry-wide / systemic dependency |

### 2.2 Weighting
Two valid approaches — choose one and document why:

- **Equal-weighted average** — simplest, easiest to defend, good default for a first programme.
- **Weighted average** — emphasise the dimensions that matter most to the organisation. A common information-risk-led weighting:

| Dimension | Weight |
|-----------|--------|
| Data sensitivity | 25% |
| System access | 25% |
| Business criticality | 20% |
| Regulatory exposure | 15% |
| Geographic risk | 10% |
| Concentration | 5% |

Only score dimensions that apply; re-normalise weights across the applicable ones so an N/A dimension doesn't drag the score down.

### 2.3 From score to tier

```
Weighted score        Tier
≥ 3.5                  CRITICAL
2.5 – 3.49             HIGH
1.5 – 2.49             MEDIUM
< 1.5                  LOW
```

### 2.4 Critical overrides (non-negotiable triggers)
Some characteristics should force a tier regardless of the average, because averaging can mask a single unacceptable exposure. Recommended overrides:

- **Privileged access to production AND critical business function** → minimum **Critical**.
- **Processing of special-category personal data at volume** → minimum **High**.
- **Designated material/critical outsourcing** under DORA/EBA/PRA → minimum **High** (often Critical).
- **Sole-source provider of a critical capability** → minimum **High** (concentration risk).

Document every override rule in the methodology so the jump from "average says Medium" to "tier is High" is transparent, not arbitrary.

---

## 3. Control effectiveness

Due diligence produces evidence; this step converts it into a single judgement per domain and overall. Rate control effectiveness using the **evidence hierarchy** (see `lifecycle.md` Phase 3) — stronger evidence supports a more favourable rating.

| Rating | Meaning | Typical evidence |
|--------|---------|------------------|
| **Strong** | Controls independently verified, no material gaps | Current ISO 27001 / SOC 2 Type II covering scope, clean pen test |
| **Adequate** | Controls present, minor gaps with remediation | Completed questionnaire + supporting evidence |
| **Weak** | Material gaps, partial coverage | Questionnaire only, unremediated findings |
| **Absent** | No credible evidence of controls | Self-attestation only, or refusal to provide evidence |

---

## 4. Residual risk

```
Residual = Inherent adjusted by Control Effectiveness

Strong    → reduce inherent by one tier (floor at Low)
Adequate  → hold at inherent tier
Weak      → hold, or raise one tier where gaps touch the dominant risk
Absent    → raise inherent by one tier (cap at Critical)
```

Residual risk drives the **approval authority** required (see `lifecycle.md` Phase 4) and the **monitoring/reassessment intensity** (Phases 6–7). Never let residual fall below Low, and never accept Critical residual without explicit senior governance and compensating controls.

---

## 5. Worked examples (mixed vendor types)

The model must hold up across categories — IT, professional services, facilities, logistics. The point is that the *same dimensions* produce sensible, comparable tiers.

**A — Cloud HR SaaS (IT vendor).** Data sensitivity 4 (payroll/personal), system access 3, criticality 3, regulatory 3 (GDPR), geographic 2, concentration 2. Weighted ≈ 3.1 → **High**; override (special-category volume) keeps ≥ High. Strong controls (ISO 27001 + SOC 2 Type II) → residual **Medium**.

**B — Management consultancy (professional services).** Data sensitivity 3 (sees strategy/IP), system access 1, criticality 2, regulatory 1, geographic 1, concentration 1. Weighted ≈ 1.9 → **Medium**. Adequate controls (NDA, questionnaire) → residual **Medium**.

**C — Office cleaning (facilities).** Data sensitivity 1, system access 1 (physical only), criticality 1, regulatory 1, geographic 1, concentration 1. Weighted = 1.0 → **Low**. Note: if "physical access to areas with sensitive material" applies, Physical Security raises data/access scores — illustrating why the *same* model flexes by context.

**D — Sole-source logistics carrier (logistics).** Data sensitivity 2, system access 2 (tracking integration), criticality 4, regulatory 2, geographic 2, concentration 4. Weighted ≈ 2.6 → **High**; concentration override holds it at High. Weak resilience evidence (no tested BCP) → residual **High**, with a remediation issue raised.

The lesson to convey to clients: one model, applied consistently, with context-driven scoring — not a different framework per category.

---

## 6. Making the model audit-defensible

A scoring model is only as good as its governance. Build in:

- **Documented criteria** — the tables above, published in the TPRM Standard, so any assessor scores the same way.
- **Evidence linkage** — every dimension score cites the input that justified it (questionnaire answer, certificate, data-flow record).
- **Override register** — every time an override or manual adjustment changes the computed tier, record who, why, and the evidence.
- **Calibration** — periodically re-score a sample of vendors with a second assessor and compare; investigate divergence > 1 tier. Run this at least annually and when onboarding new assessors.
- **Version control** — the methodology is a controlled document; changes are approved (CRO/Risk Committee) and dated, so a past assessment can be read against the method version in force at the time.
- **Bias checks** — watch for "tier creep" (assessors defaulting high to be safe, overloading the programme) or "tier suppression" (scoring low to avoid work). Calibration and portfolio distribution review catch both.

Distribution sanity check: in most portfolios the tiers form a pyramid — many Low/Medium, fewer High, a handful Critical. If most vendors land High/Critical, the thresholds or weighting need recalibration, not more analysts.
