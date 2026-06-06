# Monitoring, KPIs, KRIs & Reporting

## Monitoring Programme Design

Continuous monitoring fills the gap between periodic assessments. The goal is to detect material changes in a third party's risk profile in time to act.

### Monitoring Architecture

INTELLIGENCE LAYER (automated feeds and alerts):
- Adverse media and reputational monitoring (e.g., LexisNexis, Dow Jones, Refinitiv)
- Sanctions and watchlist screening (real-time or daily)
- Cybersecurity intelligence (BitSight, SecurityScorecard, RiskRecon, UpGuard)
- Financial health monitoring (Dun & Bradstreet, Moody's, S&P, Creditsafe)
- Regulatory enforcement action monitoring

PERFORMANCE LAYER (internal data):
- SLA/KPI performance data from service management
- Incident and outage records
- Contract compliance tracking
- Invoice and payment patterns

RELATIONSHIP LAYER (human intelligence):
- Quarterly service reviews for Critical/High suppliers
- Business owner feedback
- Procurement team intelligence

---

## Key Performance Indicators (KPIs)

### Programme KPIs

| KPI | Measurement | Target |
|-----|-------------|--------|
| Assessment completion rate | % of due assessments completed on schedule | >=95% |
| Time-to-complete new vendor (Critical) | Days from intake to risk approval | <=15 days |
| Time-to-complete new vendor (High) | Days from intake to risk approval | <=20 days |
| Time-to-complete new vendor (Medium) | Days from intake to risk approval | <=30 days |
| Register completeness | % of active suppliers with complete and current records | 100% |
| Issue resolution rate | % of open issues resolved within target date | >=85% |
| Exception compliance | % of exceptions reviewed at or before expiry | 100% |
| Reassessment compliance | % of periodic reassessments completed on schedule | >=95% |
| Contract coverage | % of active suppliers with executed contracts | 100% (Critical/High); >=90% (Medium) |
| DPA coverage | % of data processors with executed DPAs | 100% |

### Portfolio KPIs

| KPI | Measurement |
|-----|-------------|
| Portfolio risk distribution | Number/% of suppliers by tier |
| Critical supplier count | Absolute number of Critical-tier suppliers (trend indicator) |
| Overdue assessments | Suppliers with assessments >30 days past due date |
| Open high/critical issues | Count and age of unresolved High/Critical issues |
| Spend coverage | % of third-party spend covered by assessed suppliers |
| Concentration metrics | Top-5 supplier dependency (% of critical functions) |

---

## Key Risk Indicators (KRIs)

### Cybersecurity KRIs

| KRI | Threshold | Action |
|-----|-----------|--------|
| Security rating score (BitSight/SecurityScorecard) | Drop below 700/100 or agreed baseline -20% | Immediate notification; request remediation plan within 5 days |
| Known exploited vulnerabilities (CISA KEV) | Unpatched beyond 7 days | Request evidence of patch or compensating control |
| Ransomware/breach incident reported | Any incident involving client data | Immediate escalation; invoke incident response plan |
| Penetration test critical/high findings | Unresolved >30 days after report | Request remediation timeline; escalate if no response |
| Security certification lapse | ISO 27001 / SOC 2 Type II expired | Notify TPRM; request status; assess risk of gap |

### Operational KRIs

| KRI | Threshold | Action |
|-----|-----------|--------|
| SLA breach | Availability drops below contracted threshold | Performance improvement plan; consider contract enforcement |
| Major incident | P1/P2 incident affecting client | Root cause analysis required; review BCP adequacy |
| Unplanned outage duration | >4 hours for Critical suppliers | Formal incident review; BCP adequacy check |
| BCP/DR test not conducted | >18 months since last documented test | Require test within 60 days or escalate |
| Key personnel loss | CTO, CISO, or account lead departure | Assess continuity risk; request succession plan |

### Financial KRIs

| KRI | Threshold | Action |
|-----|-----------|--------|
| Credit rating downgrade | Below BBB/Baa3 (investment grade floor) | Enhanced monitoring; assess exit options |
| Going concern qualification | Any going concern opinion | Immediate escalation; exit planning activated for Critical suppliers |
| Change of control | Acquisition, merger, new majority shareholder | Full reassessment triggered; regulatory notification if required |

### Compliance/Legal KRIs

| KRI | Threshold | Action |
|-----|-----------|--------|
| Regulatory enforcement action | Fine, sanction, licence restriction | Immediate CRO notification; Legal review |
| Sanctions listing | Any entity in supplier group on sanctions list | Contract suspension pending Legal review |
| GDPR/data protection enforcement | ICO or DPA enforcement action | Privacy Officer notification; assess data at risk |

---

## Reporting Framework

### Reporting Cadence

| Report | Audience | Frequency | Owner |
|--------|---------|-----------|-------|
| TPRM Operational Dashboard | TPRM team, Procurement | Weekly | TPRM Manager |
| Risk Portfolio Report | Risk Committee | Monthly | TPRM Manager / CRO |
| Third-Party Risk Summary | Board Risk Committee | Quarterly | CRO |
| Regulatory Reporting (e.g., DORA register) | Regulator | Annual or as required | Compliance / CRO |
| Business Owner Report | Business functions | Quarterly | TPRM Manager |

### Risk Committee Report — Standard Contents

1. Executive Summary (half page)
   - Programme health status (RAG)
   - Material issues requiring committee attention
   - Key decisions required

2. Portfolio Overview
   - Supplier count by tier (current vs. prior period)
   - New engagements approved since last meeting
   - Assessments completed / in progress / overdue

3. High & Critical Approvals
   - New High/Critical approvals since last meeting
   - Key risk findings and conditions applied

4. Issue Register Summary
   - Open High/Critical issues: count, age, owner, status
   - Issues closed since last report
   - Overdue issues requiring escalation

5. Exception Register Summary
   - Active exceptions: subject, risk accepted, expiry date
   - New exception requests

6. Monitoring Highlights
   - KRI threshold breaches and responses
   - Significant monitoring alerts
   - Incident summary

7. Upcoming Activity
   - Assessments due next period
   - Contracts due for renewal
   - Regulatory deadlines

### Board-Level Reporting

Board reports should be strategic, not operational. Focus on:
- Programme maturity and effectiveness
- Concentration risk exposure
- Emerging risks from the third-party portfolio
- Regulatory and audit findings
- Strategic decisions required (risk appetite, significant exceptions)

### TPRM Dashboard Design

A well-designed operational dashboard should answer:
- How many suppliers are overdue for reassessment?
- What is the current open critical/high issue count and trend?
- Are there any KRI breaches requiring action?
- What is the pipeline of new engagements?

Programme Health: RAG status based on assessment timeliness and unacknowledged KRI breaches.

Portfolio Tiles: Count by tier (Critical / High / Medium / Low) with trend arrows.

Assessment Pipeline: New requests this month; in progress; overdue (>14 days past SLA — red if >0).

Issues: Critical open count (days oldest); High open count; exceptions expiring in 30 days.

Monitoring Alerts this week: Cyber alerts actioned/pending; Financial alerts; Sanctions hits cleared.
