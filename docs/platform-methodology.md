# TPRM Lifecycle Platform — methodology reference (v3.3)

Extracted from the app's `DEFAULT_SCHEMA` on 5 Sep 2026, revised 9 Sep 2026 for the
local service 13 Sep 2026 for the lifecycle phases and 25 Sep 2026 for monitoring and exit. Source: `index.html` in `Najeemoyeyemi/TPRM_Prj` (identical to
`TPRM Lifecycle Platform.html`). Use this instead of re-parsing the 289KB file.
Stage 3 report intake and analysis are documented in [`screening-analysis.md`](screening-analysis.md).

## Phases

One organisational register. The multi-client workspace was removed from the
interface on 13 Sep 2026; its stored data is untouched and the feature can return.

| Phase | Stage | Produces |
|---|---|---|
| Onboarding | 1 | Intake, profile, weighted tier. A third party on the register. |
| Assessment | 2, 3, 4 | Inherent risk, screening, due diligence, risk register. |
| Contracting | 5 | The cyber security schedule. |
| Monitoring | 6 | Cadence by tier, signal sources, triaged alerts, escalation. |
| Renew or exit | 7 | Reassessment, decision with a named approver, offboarding evidence. |

Every stage carries an ownership strip: AI-led, human plus AI, or human-led.
See [`ai-operating-model.md`](ai-operating-model.md) for the model behind it.

Onboarding is separate from assessment by design: completing it returns to the
inventory, so a low-tier supplier can sit on the register unassessed rather than
reading as unfinished. Each record carries its state — Onboarded, Assessed,
Contracted, Monitoring, Exited — stamped as `onboardedAt`, `assessedAt`,
`contractedAt`, `monitoringFrom` and `exitedAt`.

## Stage 1 — Onboarding: profile & tiering
Tier score = Σ (factor points × weight). Thresholds: **Tier 1 ≥ 38, Tier 2 ≥ 20, Tier 3 < 20**.

| Factor | Weight | Notes |
|---|---|---|
| Type of data accessed/stored | 1.5 | multi-select, aggregate = max. Auth credentials 10, PHI 10, PII 9, payroll 8, IP 8, HR 7, non-sensitive 1, none 0 |
| Business criticality | 1.5 | Critical 10 / High 7 / Medium 4 / Low 1 |
| Service type | 1.0 | Cloud 8, Tech-SaaS 7, Data 7, Financial 6, Legal 5, Professional 4, Logistics 3, Facilities 2 |
| Availability of alternative | 1.0 | Sole 10 / Difficult 7 / Possible 4 / Easy 1 |
| Fourth-party involvement | 0.8 | Yes 6 / Unknown 4 / No 0 |
| Geographical presence | 0.8 | High-risk jurisdictions 8 / 3+ regions 5 / cross-border 3 / domestic 1 |
| Supports a regulated process | 0.5 | Yes 4 / No 0 |
| Certifications held | 1.0 | negative sum, floored at −5. ISO 27001 −2, SOC 2 −2, ISO 22301 −1, PCI DSS −1, CE+ −1 |

Worked examples: cloud host with auth data + sole provider = 54.8 → Tier 1.
Facilities contractor, no data access = 6.8 → Tier 3.

## Stage 2 — Inherent Risk Questionnaire
25 questions; 18 conditional, 7 always. Six are Tier 1–2 only. Answered by the Service Owner.

- General `GEN.01–07` (7) · InfoSec `CYB.01–07` (7) · ABAC `ABAC.01–05` (5) · Privacy `GDPR.01–03` (3) · Sustainability `SUS.01–03` (3)

Bands: Minimal 0 · Low 1–8 · Medium 9–18 · High 19–30 · Critical 31+

Cross-question rules:
- `GEN.05` or `CYB.01` indicating system access → auto-scopes Security Governance + People Management
- `GDPR.03` + `CYB.04` both Yes/Unsure → scopes Fourth Parties with a DPA flow-down note

## Stage 3 — Screening
Gating: **Tier 1 always · Tier 2 at ≥ Medium · Tier 3 at ≥ High**.

**Bypass.** Where the gate is not met the stage is bypassed rather than left
blank: the assessment moves from the IRQ straight to due diligence, and the
bypass is written to the record with its reason and timestamp, so the file shows
a decision taken rather than a step missed. It appears in the stepper, the side
summary, the CSV export and the vendor pack. The analyst can reopen the stage
and run the checks anyway, and the bypass is revoked automatically the moment a
change to the tier or the inherent risk rating makes screening required.
Bypassing a screening that is required is not offered — that is a control
exception and belongs in exception management.

| Connector | Type | Identifier | Auto-flag |
|---|---|---|---|
| BitSight | Cyber rating | company GUID | score < 650 |
| SecurityScorecard | Cyber rating | primary domain | grade D/F or < 70 |
| D&B / Creditsafe | Financial | DUNS / co. number | band C–E |
| Sanctions & adverse media | Compliance | legal entity name | any Hit |

Connector lookups run server-side when the local service is running, which removes
the browser CORS constraint. API tokens are held by that service in `server/data/keys.json`
at mode `0600`; the API reports presence only, never the value, and tokens are excluded
from every export and from git. With no service running the app falls back to manual
entry, which produces the same threshold evaluation.

**Report intake and analysis.** Stage 3 accepts multiple report uploads per assessment —
SOC 2, ISO certificates, pen tests, sanctions screening, financials, BC/DR, DPAs,
insurance. Files are stored and read locally; nothing is sent to any external service.
The analyser classifies each document, detects 15 assurance signals with page and quote
citations, and rolls them up to control areas. Two actions carry the result into Stage 4:
adopting the suggested verdict, and carrying elevated areas across — which joins the IRQ's
scoped domains and writes every exception-tested SOC 2 criterion into `V.ddq.exceptions`,
so those DDQ questions flip from Covered to Exception. See [`screening-analysis.md`](screening-analysis.md).

## Stage 4 — Due diligence routing
- **EDDQ** — Tier 1, or rating ≥ High, or adverse screening. All domains + 8 mandatory evidence items (SOC 2 / ISO+SoA, pen test summary, BC/DR test, cyber insurance, IS policy set, fourth-party register, DPA with transfer safeguards, exit plan).
- **Scoped DDQ** — only IRQ-triggered focus areas (plus any area elevated by report analysis), from a bank of **99 questions across 13 focus areas** (IAM 13, System Development 12, Threat & Incident 11, Data Privacy 10, System Management 9, Security Governance 8, Information Management 7, Network 6, Physical 6, People 5, Cloud 4, Fourth Parties 4, Technical Security 4). Every question carries an evidence request.
- **Certificate reliance** — Tier 3 at ≤ Medium holding ISO 27001, SOC 2 Type II, CE+, ISO 22301 or PCI DSS.

## Certification reliance
82 of 99 DDQ questions carry a SOC 2 TSC reference; 14 focus areas map to ISO/IEC 27001:2022
Annex A ranges. Coverage marked full or partial — cloud security and ISMS scope flagged for
scope confirmation; Data Privacy only covered where the SOC 2 Privacy criteria were in scope.
Analyst can override any question to Required / Covered / N/A. Where a report is uploaded and
analysed, reliance is now evidence-tested rather than assumed: a criterion tested with an
exception is reinstated as Required, and a qualified opinion voids reliance on the report entirely.

## Taxonomy
3 risk domains (Cyber / InfoSec, ABAC, Sustainability / ESG) over 16 focus areas. The DDQ bank
currently covers 13 of them — ABAC, ESG and Artificial Intelligence scope correctly but have no
deep question set yet.

## Stage 5 — Contracting
18-clause cyber security schedule selected from tier, scope, screening verdict and certification
gaps. Open risks from Stage 4 are shown read-only beside the clauses, so nothing is agreed
around them; the register itself stays on Stage 4 where the findings are raised.

## Stage 6 — Monitoring
Review cadence defaults from the tier: **Tier 1 quarterly, Tier 2 half-yearly, Tier 3 annually**,
counted from the contract date and overridable. Ten signal sources are recorded as actually in
use rather than assumed. Alerts are logged with a source, a severity and a materiality call; a
material alert takes an owner and can be raised onto the risk register in one step, carrying the
severity and the signal text. Escalation to a risk committee stays a human act.

## Stage 7 — Renew or exit
Triggered by schedule, renewal date, material change, incident, rating deterioration or a business
exit decision. Carries a recommendation, then a decision with a named approver. Offboarding is a
seven-step evidenced checklist: access revoked, assets returned, data returned or destroyed with a
certificate, knowledge transfer, downstream dependencies reassessed, contract closed, evidence
retained. A termination cannot be recorded until every step is evidenced. A renewal does not close
the record; it restarts the monitoring clock. Includes right to audit, incident notification, fourth-party flow-down, data residency,
responsible AI use, step-in rights, secure exit, and pre-contract remediation as a condition precedent.

## Known gaps (as of v3.3)
- Single-analyst service: no accounts, roles or audit trail of who changed what. The
  human-led bands only mean something in an audit once this exists
- Monitoring is a register and a cadence, not a live feed: no connector polls a signal
  source automatically, so alerts are entered or pasted in
- No input validation preventing a sensitive data type from resolving to a low tier
- No procurement / IAM / CMDB integrations
- No OCR: a scanned PDF with no text layer cannot be analysed and is reported as such
- The analyser detects signals; it does not form a judgement. The suggested verdict is a
  starting point for the analyst, not a decision
- The app still runs from a file with no service, in which case screening reverts to manual
  entry and no report analysis is available
