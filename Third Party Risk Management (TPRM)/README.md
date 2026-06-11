# TPRM Lifecycle Platform

Single-file, browser-based Third-Party Risk Management platform covering the full pre-contract assessment lifecycle:

1. **Profile & Tiering** — vendor profile, demographics and operational factors drive a weighted scoring model (Tier 1/2/3).
2. **Inherent Risk Questionnaire (IRQ)** — tier-tailored question set; answers produce the inherent-risk rating and scope DDQ domains via trigger logic.
3. **Screening** — gating rules decide when screening is required; connectors for cyber ratings (BitSight, SecurityScorecard), credit rating and sanctions/adverse media with live API fetch + manual entry fallback.
4. **Due Diligence** — routes to Enhanced DDQ (all domains + mandatory evidence), standard DDQ (scoped domains) or none; per-domain status tracking.

## Files
- `TPRM Lifecycle Platform.html` — the app (open directly in a browser; data persists in localStorage).
- `Inherent Risk Assessment (IRA) App.html` — v1 (IRQ-only) app, kept for reference.
- `Cyber_IRQ_Revised.xlsx`, `Cyber _DDQ Template (1).xlsx`, `Multi_Framework_Compliance_Controls.xlsx` — source questionnaires.
- `tests/tprm_engine_tests.js` — engine unit tests (no dependencies): `node tests/tprm_engine_tests.js "TPRM Lifecycle Platform.html"`.
- `tests/dom_smoke_test.js` — end-to-end browser simulation (requires `jsdom`).

Everything (tiering weights/thresholds, gating, connectors, questions, rules, bands, evidence list) is editable in the in-app Builder; configuration exports as JSON for version control.
