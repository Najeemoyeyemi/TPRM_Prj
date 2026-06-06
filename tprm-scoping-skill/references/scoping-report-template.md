# Scoping & Configuration Report — Output Template

This is the handoff artefact produced in Step 5. It must be **decision-ready**: a sponsor should be able to approve scope, budget, and sequencing from it, and the build team (the `tprm` skill) should be able to execute against it.

Adapt depth to the engagement. For a light-touch client, sections can be brief; for a regulated tier-1, expand the regulatory and findings sections. Keep the mandatory-vs-recommended distinction visible throughout.

---

## Report structure — use this template

```
TPRM SCOPING & CONFIGURATION REPORT
Client: [name]   |   Date: [date]   |   Prepared by: [author]   |   Status: [Draft/Final]

──────────────────────────────────────────────────────────────
1. ENGAGEMENT CONTEXT
──────────────────────────────────────────────────────────────
- Client profile: [size, structure, vendor population estimate]
- Sector(s): [...]
- Operating jurisdictions: [countries of operation, data residency, key vendor/sub-processor locations]
- Current maturity: [ad hoc / defined / managed / optimised; net-new or enhancement]
- Engagement objective: [what the client wants this programme to achieve]
- Key assumptions: [anything inferred where the client did not specify — state plainly]

──────────────────────────────────────────────────────────────
2. CONFIRMED SCOPE — RISK DOMAINS
──────────────────────────────────────────────────────────────
Table of every core domain: In scope (Y/N) + rationale/driver.
Mark each driver as [Mandatory–regulatory] or [Recommended–risk-based].

| Risk Domain | In scope | Driver | Mandatory/Recommended |
|-------------|----------|--------|------------------------|
| Cybersecurity | ... | ... | ... |
| Data Privacy | ... | ... | ... |
| Operational Resilience | ... | ... | ... |
| ABAC | ... | ... | ... |
| ESG | ... | ... | ... |
| Financial Risk | ... | ... | ... |
| Regulatory & Compliance | ... | ... | ... |
| Legal & Contractual | ... | ... | ... |
| Reputational | ... | ... | ... |
| Fourth-Party | ... | ... | ... |
| Physical Security | ... | ... | ... |
| AI / Model Risk | ... | ... | ... |
| Supply Chain | ... | ... | ... |
| [Client-specific] | ... | ... | ... |

──────────────────────────────────────────────────────────────
3. REGULATORY OBLIGATIONS MAP
──────────────────────────────────────────────────────────────
For each obligation triggered (from jurisdiction-regulatory-map.md):

| Obligation | Why it applies (trigger) | What it requires of TPRM | Key reference |
|-----------|--------------------------|--------------------------|---------------|
| [e.g. DORA] | EU financial entity | ICT register, Art.30 clauses, exit strategy, concentration assessment | Art. 28–31 |
| [e.g. UK GDPR] | UK personal data | Art.28 DPA, transfer mechanism, 72h breach chain | Art. 28, 32, 33, 44–49 |
| ... | ... | ... | ... |

Note explicitly: cross-cutting obligations (privacy, ABAC, supply chain, AI) and where local legal review is required.

──────────────────────────────────────────────────────────────
4. LIFECYCLE PHASES IN SCOPE
──────────────────────────────────────────────────────────────
List the 12 phases with In scope (Y/N). Flag any phase excluded that an
in-scope domain or obligation actually requires (carry to Findings).

──────────────────────────────────────────────────────────────
5. COHERENCE REVIEW FINDINGS
──────────────────────────────────────────────────────────────
The heart of the report. One row per finding from coherence-checks.md.

| ID | Type | Finding | Spans | Risk if unaddressed | Recommendation | Priority |
|----|------|---------|-------|---------------------|----------------|----------|
| F1 | Gap | ... | ... | ... | ... | High |
| F2 | Over-scope | ... | ... | ... | ... | Med |
| F3 | Dependency | ... | ... | ... | ... | ... |
| F4 | Conflict | ... | ... | ... | ... | ... |

Group by type. Lead with Gaps (highest value), then Conflicts requiring a
decision, then Dependencies (sequencing), then Over-scope (efficiency).

──────────────────────────────────────────────────────────────
6. DELIVERABLES PLAN
──────────────────────────────────────────────────────────────
Every requested deliverable mapped to what it serves, with build order.

| Deliverable | Serves (domains/phases/obligations) | Prerequisite(s) | Effort | Build phase |
|-------------|-------------------------------------|-----------------|--------|-------------|
| TPRM Policy | All; mandatory under [reg] | None | M | 1 |
| ... | ... | ... | ... | ... |

Flag: any obligation/phase with NO deliverable (gap), any deliverable with
NO driver (over-scope), carried from Findings.

──────────────────────────────────────────────────────────────
7. RECOMMENDED CONFIGURATION (validated)
──────────────────────────────────────────────────────────────
The adjusted configuration after the review: the domains, phases, and
deliverables you recommend the client proceed with — i.e., their selection
+ added gaps - confirmed over-scope. This is what the build stage executes.

──────────────────────────────────────────────────────────────
8. OPEN QUESTIONS FOR THE CLIENT
──────────────────────────────────────────────────────────────
Decisions only the client can make (from Conflict findings + assumptions to
confirm). Number them so the client can answer point-by-point.

──────────────────────────────────────────────────────────────
9. INDICATIVE ROADMAP
──────────────────────────────────────────────────────────────
Phased plan honouring the dependency order (coherence-checks Group 4 /
deliverables-catalogue sequencing). Show quick wins, then foundation,
methodology, operations, reporting, technology, enablement.

Phase 0 (Quick wins): register, intake form, tiering — immediate visibility
Phase 1 (Foundation): Gap/Maturity → TOM → Roadmap; Policy/Standard/Operating Model
Phase 2 (Methodology & assessment): scoring, templates, DDQs, baselines, clauses
Phase 3 (Operations): workflows, SOPs, monitoring, offboarding
Phase 4 (Reporting & tech): KPI/KRI, dashboard, tooling, integrations
Phase 5 (Enablement): training, embedding, continuous improvement

──────────────────────────────────────────────────────────────
10. HANDOFF
──────────────────────────────────────────────────────────────
State that, on client sign-off of the Recommended Configuration (section 7),
the build stage proceeds — the `tprm` skill produces the selected deliverables
in the sequence at section 9.
```

---

## Quality bar before you deliver the report

- [ ] Jurisdiction + sector explicitly captured; no silent assumptions.
- [ ] Every obligation says *why it applies* and *what it requires*.
- [ ] Every Gap finding states the *risk of leaving it unaddressed*.
- [ ] Mandatory vs Recommended is visible everywhere.
- [ ] Every in-scope obligation/phase has a deliverable; every deliverable has a driver.
- [ ] Recommendations are proportionate to client size/sector/maturity.
- [ ] Roadmap honours the dependency order — no deliverable scheduled before its prerequisite.
- [ ] Open questions are genuinely client decisions, not things you could resolve yourself.
- [ ] Handoff to the build stage (`tprm` skill) is explicit.
