# Stage 3 — report intake and local analysis (server v1.0)

Added 9 Sep 2026. Lives in `server/` in `Najeemoyeyemi/TPRM_Prj`. Companion to
[`platform-methodology.md`](platform-methodology.md), which covers the assessment engine itself.

## Why it exists

Screening ran entirely in the browser. Three consequences: connector calls hit
the CORS wall and usually failed, credentials sat in `localStorage`, and an
uploaded report was recorded as a filename with nothing read from it.

## Architecture

A Node service on the analyst's own machine, bound to `127.0.0.1:4317`, which
also serves the app so page and API share an origin. Started with
`cd server && npm start`.

**Local only by design.** No external model API, no cloud storage, no
telemetry. This was a deliberate decision: SOC 2 reports and pen test results
are confidential to the supplier, and a position of "nothing leaves the
machine" is the easiest one to defend to a client and to write into contract
terms. The trade-off is weaker comprehension of prose-heavy reports than a
model would give.

The app still opens as a plain file. With no service running it says so and
falls back to manual entry exactly as before.

## Endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/health` | Service state, key presence, limits |
| GET | `/api/records/:id` | Reports and last analysis for an assessment |
| POST | `/api/records/:id/reports` | Multipart upload, up to 12 files |
| DELETE | `/api/records/:id/reports/:reportId` | Remove a report |
| GET | `/api/records/:id/reports/:reportId/file` | Serve the file back for verification |
| POST | `/api/records/:id/analyse` | Run the analysis across every report on the record |
| GET / PUT | `/api/keys[/:connectorId]` | Credential presence; values are never returned |
| POST | `/api/connectors/fetch` | Server-side connector lookup |

Storage is flat files under `server/data`: one JSON per record, uploads
alongside, credentials in a `0600` `keys.json`. Greppable on purpose — it
matters when an auditor asks what was held and when.

## Analysis pipeline

1. **Extract** text per page. PDF via pdfjs with line reconstruction so tables
   keep shape; DOCX via mammoth; XLSX/CSV per sheet; text chunked and numbered
   so citations behave the same everywhere.
2. **Classify** against 13 document types — SOC 2, SOC 1/ISAE 3402, ISO 27001,
   ISO 22301, PCI DSS, pen test, cyber rating, credit, sanctions, BC/DR, DPA,
   policy, insurance.
3. **Signal detection** — 15 signals with severity and weight, each scoped to
   the document types where it means something. Examples: qualified opinion
   (Critical), control exception noted (High), sub-service carve-out (High),
   complementary user entity controls (Medium), scope statement to confirm,
   critical/high pen test finding, finding not retested, continuity plan not
   tested in period, international transfer mechanism.
4. **Attribution** — this is the part that matters. A test result belongs to
   the criterion it sits *under*, found by scanning back up to 900 characters
   for the nearest preceding reference. Without that rule, one "exceptions
   noted" swept in every criterion within the window and wrongly reinstated
   controls that had been tested clean. Document-level signals (scope, opinion,
   carve-out, expiry) borrow no criterion at all.
5. **Roll-up** to the platform's own control areas via the TSC and ISO Annex A
   maps plus a control-area term vocabulary. Each area comes out as focus /
   review / evidenced / seen.

Every finding carries file, page and the sentence it came from.

## How the insight reaches Stage 4

Two actions on the analysis panel, both writing into structures the app already
had, so nothing downstream needed a special case:

- **Adopt suggested verdict** — sets the screening verdict, appends the
  analysis to the screening summary.
- **Carry areas into due diligence** — elevated areas join the IRQ's scoped
  domains (via a wrapper on `curIRQ`), and every SOC 2 criterion tested with an
  exception is written to `V.ddq.exceptions`. That list already drives
  `ddqQuestionStatus`, so those questions flip from Covered to Exception and
  stay in the vendor pack. The risk register already turns exceptions into
  risks. The DDQ table, vendor pack CSV and exports pick all of it up unchanged.

A qualified opinion sets `relianceVoid` rather than reinstating specific
criteria — if the opinion is qualified, nothing in the report can be relied on.

## Configuration

The whole vocabulary is data in `server/lib/taxonomy.js`: document signatures,
control-area terms, signals with severity and weight, and the SOC 2 / ISO maps.
A client with their own control library edits that file. The analysis code does
not change.

`TPRM_PORT` (4317) and `TPRM_MAX_MB` (40) are the only environment settings.

## Verified

`server/selftest.js` builds a SOC 2 with two genuine exceptions among five
tested controls, a pen test with open criticals, and a clean sanctions
screening. It asserts the verdict comes out Adverse, that areas are elevated,
that only `CC6.2` and `CC8.1` are reinstated (not the three tested clean), and
that missing evidence types are reported. Passing as of 9 Sep 2026.

## Limits

- Scanned PDFs with no text layer cannot be read. Reported per file rather than
  silently returning nothing. No OCR.
- The analyser finds signals; it does not form a judgement. The suggested
  verdict is a starting point for the analyst.
- Single-analyst store: no accounts, no roles, no audit of who changed what.
  That remains the next build.
