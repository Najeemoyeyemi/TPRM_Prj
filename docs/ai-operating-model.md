# AI-enabled TPRM: operating model and agent architecture

Added 25 Sep 2026 from the AI TPRM framework material. Companion to
[`platform-methodology.md`](platform-methodology.md), which covers the assessment engine, and
[`screening-analysis.md`](screening-analysis.md), which covers report intake and analysis.

## The principle

AI accelerates execution inside defined guardrails. People set risk appetite,
approve outcomes and manage exceptions. Every activity in the lifecycle falls
into one of three bands, and the band is a control statement, not a
description of tooling:

- **AI-led** — preparation, extraction, analysis, watching. Output is a draft or
  a signal, never a decision.
- **Human + AI** — a person acts, with the machine assembling the material and
  proposing the shape of the answer.
- **Human-led** — the decision itself. No agent may take it.

## Ownership by lifecycle stage

Four verbs run across every stage: capture and prepare, analyse and recommend,
decide and approve, act and evidence. The decide column is human in every row.

| Stage | Prepare | Analyse | Decide | Act and evidence |
|---|---|---|---|---|
| Identify | Capture service details and business need (Human + AI) | Read the request pack, analyse service risk (AI) | Confirm inherent risk of the service (Human) | Launch the relevant due diligence (AI) |
| Assess | Run screening checks: adverse media, sanctions, cyber, credit (AI) | Tailor the questionnaire and evidence requirements (AI) | Determine residual risk and treatment plan (Human) | Assign remediation actions and owners (Human + AI) |
| Approve and contract | Prepare the risk recommendation (AI) | Accept or reject the residual risk (Human) | Draft tiered contractual obligations from service and risk (Human + AI) | Approve obligations and SLAs (Human) |
| Monitor | Watch internal and external signals: ongoing screening, change orders, renewals (AI) | Triage alerts and detect material change (AI) | Direct material change, incidents and remediation to owners (Human + AI) | Escalate material risk to the risk committees (Human) |
| Renew or exit | Trigger reassessments (AI) | Recommend renewal or exit (AI) | Approve renewal or termination (Human) | Offboard and retain evidence (Human + AI) |

## Agent catalogue

Modular by design: adopt what fits today and expand, without replacing the
existing TPRM, procurement or contract platform. Each agent either improves
risk management, speeds execution, or both.

**Inherent risk** — document intake (extracts request data), requestor outreach
(collects missing inputs), inherent risk scoring (scores service risk).

**Screening** — screening agent (runs posture and watchlist checks).

**Due diligence** — questionnaire tailoring (selects the risk questions),
evidence capture (extracts control evidence), supplier completion (guides
supplier responses), quality review (checks evidence quality), treatment
playbook (recommends remediation), residual decision support.

**Contracting** — clause library (selects approved clauses), obligation mapping
(maps clauses to the controls they enforce).

**Monitoring** — continuous monitoring (watches risk signals), alert triage
(prioritises material alerts), renewal reassessment (refreshes risk at renewal).

**Termination** — exit assurance (checks offboarding controls).

**Cross-lifecycle** — concierge (guides business users), platform support
(resolves user issues), reporting and data insights (produces MI), coordination
agent (orchestrates handoffs between agents), configuration agent (manages rules
and workflows).

## Architecture layers

- **Users** — business owners, procurement, risk and compliance, legal, vendor
  management, internal audit, and the TPRM team as human in the loop.
- **Orchestration** — enterprise model, agent studio, integration gateway (MCP),
  enterprise knowledge, and guardrails, evaluation and governance. The last of
  these is the one that makes the rest defensible.
- **TPRM tooling** — workflow and automation, risk assessments, supplier portal,
  dashboards and MI, information management as the single source of truth.
- **External data feeds** — sanctions and watchlists, adverse media, credit and
  financial, supply chain mapping, regulatory and ESG, cyber ratings.
- **Enterprise systems** — procurement, contract management, ERP and finance,
  security operations and IAM, data and analytics.

Reference integrations named in the framework: ServiceNow TPRM and OneTrust for
TPRM; ServiceNow CMDB and Entra ID for asset and identity; Icertis and Coupa for
contracts; ServiceNow IRM and Microsoft Sentinel for GRC and SOC; Bitsight and
SecurityScorecard for external signals.

## How the platform implements this

The TPRM Lifecycle Platform is a working instance of the model at small scale,
built to run locally with no external model call.

| Framework stage | Platform | Built |
|---|---|---|
| Identify | Stage 1 onboarding | Profile, weighted tiering, tier confirmed by a person |
| Assess | Stages 2 to 4 | IRQ, screening with local report analysis, scoped DDQ, risk register |
| Approve and contract | Stage 5 | Clause set from tier, scope, verdict and certification gaps |
| Monitor | Stage 6 | Cadence by tier, signal sources, alert triage, escalation, hand-off to the register |
| Renew or exit | Stage 7 | Trigger, recommendation, approver, offboarding evidence |

Each stage shows its ownership strip in the interface, so the analyst sees which
steps are theirs before they start. The screening analyser is the clearest
worked example of the AI-led band: it reads the reports, cites a page and a
sentence for every finding, elevates the control areas those findings touch, and
then stops. The verdict is a human field.

## What is not built

- Agents are a single deterministic analyser, not a catalogue. No orchestration
  layer, no agent studio, no MCP gateway, no coordination or configuration agent.
- No supplier portal, so supplier completion and requestor outreach are manual.
- Connectors are configured but not live against Bitsight, SecurityScorecard,
  D&B or a sanctions provider; the lookups run server-side and need credentials.
- No accounts, roles or audit trail of who changed what. For the human-led bands
  to mean anything in an audit, this is the next thing to build.
- Guardrails and evaluation exist only as the constraint that nothing leaves the
  machine. There is no model evaluation harness because there is no model.
