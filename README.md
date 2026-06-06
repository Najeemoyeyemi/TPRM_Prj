# Third-Party Risk Management (TPRM)

Enterprise TPRM framework assets and Claude skills for designing, scoping, and operationalising end-to-end third-party risk management programmes.

## Contents

### `tprm-skill/` — TPRM framework builder skill
A senior TPRM/GRC consultant skill that designs and operationalises enterprise-wide TPRM frameworks across the full vendor lifecycle (intake → inherent risk → due diligence → evaluation/approval → contracting → continuous monitoring → reassessment → issue/exception management → renewal → offboarding).

Reference modules: lifecycle, risk domains, governance, regulatory alignment, monitoring/KPIs/KRIs, tooling, and ready-to-use templates.

### `tprm-scoping-skill/` — Requirements review & scoping skill
A scoping front-end that reviews a client's configuration (risk domains, operating jurisdictions + sector, lifecycle phases, desired deliverables), maps jurisdictions to applicable regulatory obligations, and runs coherence checks (gaps / over-scope / dependencies / conflicts) to produce a decision-ready Scoping & Configuration Report.

Reference modules: jurisdiction–regulatory map, coherence checks, deliverables catalogue, and the scoping report template.

The two skills are complementary: **`tprm-scoping`** validates and scopes the engagement → hands off to **`tprm`** which builds the selected deliverables.

### `Third Party Risk Management (TPRM)/` — Working artefacts
- `Cyber _DDQ Template (1).xlsx` — cybersecurity due-diligence questionnaire template
- `Cyber_IRQ_Revised.xlsx` — cybersecurity inherent-risk questionnaire
- `Multi_Framework_Compliance_Controls.xlsx` — cross-framework compliance control mapping

## Skill structure

Each skill follows the Claude skill format:

```
<skill>/
├── SKILL.md            # Skill instructions + metadata (name, description)
├── references/         # Reference docs loaded on demand
└── evals/evals.json    # Test cases
```

Package a skill into an installable `.skill` bundle with the skill-creator's `package_skill.py` (run against the skill source folder). Packaged `.skill` files are build artefacts and are git-ignored.
