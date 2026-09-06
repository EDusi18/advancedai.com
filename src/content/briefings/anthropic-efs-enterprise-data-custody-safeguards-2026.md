---
pubDate: 2026-09-06
title: "Anthropic Adds Opt-In Data Custody to Enterprise Claude"
description: "Anthropic's EFS gives enterprises opt-in controls to move Claude logs into their own cloud. Enrollment activates none automatically. What regulated operators must verify before fall."
heroImage: ../../assets/anthropic-efs-enterprise-data-custody-safeguards-2026.png
heroImageAlt: "Secure enterprise data vault with customer-held encryption keys and security alert signals flowing to an operator team"
---

**Key takeaways:**

- **EFS offers three independently opt-in controls** — customer-owned storage, customer-managed encryption keys, and automated-only review. Enrollment activates none of them automatically.
- **Access is not automatic.** Rollout is phased and request-based, targeting fall 2026.
- **Customers on Fable 5 and 5.1 may receive interim ZDR** pending EFS enrollment — confirm eligibility with Anthropic.
- **Flags route to your security team only when automated-only review is enabled** — plan triage capacity accordingly.

---

Anthropic [announced Enterprise Frontier Safeguards](https://www.anthropic.com/news/enterprise-frontier-safeguards) (EFS) on September 2, 2026 — its architectural response to enterprise pushback against the 30-day data retention policy introduced with Fable 5 in June. EFS offers three independently opt-in controls that can move Claude monitoring data out of Anthropic's infrastructure: customer-owned cloud storage, customer-managed encryption keys, and automated-only review. Enrollment alone activates none of them; each must be explicitly configured. Rollout is phased, targets fall 2026, and is not automatic.

## What Did Anthropic Actually Change About Your Data?

When customer-owned storage is enabled, EFS moves monitoring data — the rolling window Anthropic's systems scan for misuse signals — from Anthropic's infrastructure into the customer's own cloud account (S3, Azure Blob, or Google Cloud Storage). [SecurityWeek confirmed](https://www.securityweek.com/anthropic-details-response-to-security-incidents-unveils-enterprise-safeguards/) that when automated-only review is enabled, flags route to your security team rather than Anthropic staff.

Three controls are configured independently — they are not bundled defaults:

- **Customer-owned storage:** activity data saved in your existing cloud account, under your access policies.
- **Customer-managed encryption keys (CMK):** data encrypted with keys you hold, not Anthropic-managed keys.
- **Fully automated review:** no Anthropic employee can review flagged content; your team handles triage.

Anthropic states EFS carries no additional charge. Planned deployments include Claude Code, Claude Enterprise, Amazon Bedrock, [Microsoft Foundry](/briefings/anthropic-claude-azure-foundry-ga-enterprise-2026/), and Google's Agent Platform; third-party platform coverage is in development. Existing Claude Enterprise customers must apply for access — enrollment is not automatic.

## What Should Your Security Team Do Before Fall?

**Verify your current ZDR status.** If your org negotiated ZDR terms before Fable 5 launched, confirm with Anthropic whether those terms still apply, whether you qualify for interim ZDR on Fable 5/5.1, or whether 30-day retention has been active against your workloads since June.

**Request EFS access and verify eligibility.** Operators in regulated industries — financial services, healthcare, law, telecom, public sector — should contact their account team now. Anthropic has not published eligibility criteria; request access and confirm qualification rather than assuming it.

**Plan flag-triage capacity.** If you enable the automated-only review control, anomalies EFS detects — stolen credentials, offensive capability attempts, cross-session behavioral signals — route to your security team rather than Anthropic staff. [Running Claude Code or agent workflows at scale](/briefings/claude-mythos-anthropic-cybersecurity/), this becomes a staffing question before it becomes a compliance one.

**Confirm each opt-in separately.** Customer-owned storage, CMK, and automated-only review must each be explicitly configured. Assuming EFS enrollment activates all three may leave audit gaps if your compliance posture requires demonstrable CMK coverage.

Confirm eligibility, request access, and map each opt-in control to your data governance requirements before the interim window closes. Watch for Anthropic to publish eligibility tiers and an exact rollout date — that detail determines when you can move off 30-day retention.

---

### FAQ

**Q: Is Enterprise Frontier Safeguards available now?**
EFS is announced but not broadly shipped. Phased rollout targets fall 2026; eligible customers on Fable 5 and Fable 5.1 receive interim zero data retention during the transition. Access is request-based — not automatic for existing Claude Enterprise accounts.

**Q: Does EFS mean Anthropic can no longer see my Claude data?**
Not by default. Each control — customer-owned storage, CMK, automated-only review — must be explicitly enabled. When all three are active, monitoring data stays in your environment and flags route to your team. Confirm each is configured and check your ZDR agreement before assuming compliance.

**Q: Which Claude deployments does EFS cover?**
Planned coverage includes Claude Code, Claude Enterprise, Amazon Bedrock, Google's Agent Platform, and Microsoft Foundry. Third-party platform coverage is described by Anthropic as in development.

---

*Sources: [Anthropic EFS announcement](https://www.anthropic.com/news/enterprise-frontier-safeguards) (Tier 1, HTTP 200); [SecurityWeek — security incidents and EFS](https://www.securityweek.com/anthropic-details-response-to-security-incidents-unveils-enterprise-safeguards/) (Tier 2, HTTP 200); [The Hacker News — cyber AI safeguards](https://thehackernews.com/2026/09/google-anthropic-and-openai-unveil.html) (Tier 2); [QZ — Fable 5.1 and data retention transition](https://qz.com/anthropic-enterprise-frontier-safeguards-data-retention-090226) (Tier 2)*
