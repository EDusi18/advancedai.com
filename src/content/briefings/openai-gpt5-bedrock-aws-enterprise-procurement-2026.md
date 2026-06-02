---
title: "OpenAI's Frontier Models Are Now Live on AWS"
description: "GPT-5.5 and Codex reached GA on Amazon Bedrock on June 1. AWS enterprises can now run OpenAI's top models under existing AWS contracts and security controls."
pubDate: "2026-06-02"
category: "Industry News"
heroImage: "../../assets/openai-gpt5-bedrock-aws-enterprise-procurement-2026.png"
heroImageAlt: "OpenAI and Amazon Web Services logos representing the Bedrock GPT-5.5 general availability announcement for enterprise procurement"
editorialStatus: "published"
tier: "briefing"
publishApproval: "APPROVED_BRIEFING"
sourceCount: 4
recommendationPosture: "ask sharper vendor questions"
knownWeaknesses:
  - "GovCloud availability confirmed by OpenAI blog; specific compliance-framework coverage is operator's responsibility to verify — GA on GovCloud does not mean automatic compliance approval."
  - "AWS commitment credit applicability depends on individual enterprise agreement terms; actual credit value will vary by contract."
  - "Pricing parity claim sourced to Amazon and OpenAI primary announcements; no independent audit conducted."
revisionNotes: |
  Drafted June 2, 2026 (5:30 AM ET). GA announcement published June 1, 2026.
  Sources checked:
  - Amazon newsroom (aboutamazon.com): HTTP 200 confirmed
  - AWS ML Blog (aws.amazon.com/blogs/machine-learning/): HTTP 200 confirmed
  - OpenAI blog (openai.com/index/): HTTP 200 confirmed
  - AWS News Blog (aws.amazon.com/blogs/aws/): confirmed via search snippet
  Internal links to microsoft-openai-decoupling briefing and enterprise-ai-agent-token-cost-reckoning briefing verified live in briefings folder.
---

**Key takeaways:**
- GPT-5.5, GPT-5.4, and Codex went generally available on Amazon Bedrock on June 1, 2026 — one month after the limited preview.
- Pricing matches OpenAI's direct rates with no additional fees; usage counts toward existing AWS commitments.
- IAM, VPC isolation, and encryption apply — no separate OpenAI data-processing contract required.
- Available in both commercial and GovCloud regions.
- Operator posture: **ask sharper vendor questions** — Azure is no longer the only enterprise-grade path to OpenAI's frontier models.

OpenAI's frontier models are now in general availability on AWS. As of June 1, GPT-5.5 (OpenAI's most capable model), GPT-5.4, and the Codex coding agent are [generally available on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/openai-models-and-codex-on-amazon-bedrock-are-now-generally-available/). The one-month preview period is over. Any AWS customer can now deploy these models in production today.

## What Changed Since the Preview?

The April 28 partnership announcement put OpenAI models in [limited preview on Bedrock](https://www.aboutamazon.com/news/aws/bedrock-openai-models). June 1 GA removes the preview gate. GPT-5.5 runs on Bedrock's next-generation inference engine; Codex — used by more than 5 million people per week per [OpenAI's announcement](https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws/) — is available through the app, CLI, and IDE integrations with inference routed entirely through Bedrock.

Two commercial terms matter most: pricing matches OpenAI's own API rates with no Bedrock markup, and OpenAI usage through Bedrock counts toward your existing AWS committed spend. Both are confirmed in the [AWS ML Blog GA post](https://aws.amazon.com/blogs/aws/get-started-with-openai-gpt-5-5-gpt-5-4-models-and-codex-on-amazon-bedrock/).

## Why Should Operators Care?

Until now, enterprise access to OpenAI frontier models ran through one of two paths: OpenAI's API directly, or Azure OpenAI Service. Bedrock GA creates a third — and for AWS-primary organizations, it may be the most operationally straightforward.

**Governance without new contracts.** AWS customers can route OpenAI traffic through existing IAM policies, VPC configurations, and compliance frameworks. No new data-processing agreement. No separate OpenAI billing relationship. The months-long procurement and security review cycle that has blocked many enterprises from adopting OpenAI compresses significantly.

**AWS commitment credits.** If your organization has an enterprise agreement with committed AWS spend, OpenAI usage on Bedrock now counts against that commitment. That shifts the cost comparison with Azure OpenAI Service: the question is no longer only per-token price, but which platform maximizes your committed dollars.

**The Codex angle.** Earlier this month Microsoft [canceled most internal Claude Code licenses](/briefings/enterprise-ai-agent-token-cost-reckoning-2026/) and has been redirecting engineers toward GitHub Copilot CLI. Codex on Bedrock is a different procurement path for agentic coding — one governed by AWS IAM and VPC controls, with pay-per-token billing tied to existing infrastructure spend.

This does not mean you should immediately abandon Azure OpenAI Service. Existing Microsoft 365 integrations, active contracts, and embedded workflows represent real switching costs. The operative shift is in negotiating position. Azure is no longer the only enterprise-grade path to OpenAI's most capable models. Before your next Azure OpenAI contract renewal, ask: what is the pricing delta between Azure and Bedrock for our workloads, and does our AWS enterprise agreement make Bedrock cheaper all-in?

The [Microsoft/OpenAI decoupling story](/briefings/microsoft-openai-decoupling-azure-enterprise-2026/) showed OpenAI moving multi-cloud. Bedrock GA is that transition arriving in your vendor negotiations.

**Watch next:** Microsoft's pricing or capability response on Azure OpenAI Service; OpenAI's Daybreak cyber models (announced as coming to Bedrock); and whether Google Vertex AI makes a comparable OpenAI access move.

---

## Frequently Asked Questions

**Does GPT-5.5 on Bedrock cost more than buying directly from OpenAI?**
No — Amazon confirmed pricing matches OpenAI's own API rates with no additional Bedrock fees. The commercial advantage isn't a lower per-token cost; it's that usage counts toward your existing AWS committed spend and flows through your existing AWS security and billing infrastructure.

**Should enterprises drop Azure OpenAI Service now that Bedrock is GA?**
Not automatically. Active Azure integrations, Microsoft 365 dependencies, and contract terms represent real switching costs. The operative change is leverage: Azure is no longer the only enterprise path to OpenAI frontier models. If you are in a renewal window, bring Bedrock pricing and AWS commitment credit terms to the table before you sign.

**What is Codex and why is it on Bedrock?**
Codex is OpenAI's software engineering agent — it writes, reviews, debugs, and modernizes code across large codebases. On Bedrock, it runs through AWS IAM and VPC controls, giving enterprises a governed path to agentic coding without a separate OpenAI contract. OpenAI reports 5 million weekly users.
