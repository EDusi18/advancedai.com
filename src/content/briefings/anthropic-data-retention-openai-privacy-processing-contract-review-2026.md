---
title: "Anthropic Ends ZDR for Top Models — Audit Contracts Now"
description: "Anthropic now requires 30-day data retention for Claude Fable 5 and Mythos 5. OpenAI preserves zero retention eligibility. Check your contract now."
pubDate: "2026-08-21"
updatedDate: "2026-08-21"
slug: anthropic-data-retention-openai-privacy-processing-contract-review-2026
category: "Industry News"
heroImage: "../../assets/anthropic-data-retention-openai-privacy-processing-contract-review-2026.png"
heroImageAlt: "Split-screen illustration comparing Anthropic's 30-day retention policy with OpenAI's zero-data-retention preview"
author: "Advanced AI"
---

**Key takeaways:**

- **Anthropic requires 30-day data retention** for Claude Fable 5 and Mythos 5 across all platforms (Bedrock, Google Cloud, Microsoft Foundry) as of June 9, 2026.
- **This can break ZDR eligibility** for organizations whose contracts, policies, or data-use authorizations require zero or bounded vendor data retention.
- **OpenAI announced Private Safety Processing** in preview, stating GPT-5.6 Sol remains ZDR-eligible — though implementation details and contractual terms require validation.
- **Bloomberg reported** Anthropic's internal risk assessment acknowledged the policy "will be unpopular with customers who have come to expect zero retention."
- **Operator posture:** audit ZDR agreements now; ask sharper vendor questions before any Covered Model deployment.

## What Did Anthropic Change?

[Anthropic announced June 9, 2026](https://support.claude.com/en/articles/15425996-data-retention-practices-for-covered-models) that Claude Fable 5 and [Mythos 5](/briefings/claude-mythos-anthropic-cybersecurity) ("Covered Models") now require 30-day data retention across all platforms: Claude's web interface, AWS Bedrock, Google Cloud, Microsoft Foundry. If your ZDR agreement covers these models, they are now *excluded*.

Anthropic justified the change by citing coordinated attacks — best-of-N jailbreaking, state-sponsored espionage, data extortion — that only emerge across multiple requests. [Bloomberg reported](https://www.bloomberg.com/news/articles/2026-08-20/anthropic-plans-to-change-data-retention-policy-for-advanced-ai) that Anthropic's internal risk assessment acknowledged the policy "will be unpopular with customers who have come to expect zero retention."

## Why Does This Matter for Enterprise Contracts?

Some legal firms, financial institutions, healthcare systems, and government contractors require ZDR or tightly bounded vendor data retention in their contracts, internal risk policies, or data-use authorizations as a condition for AI vendor eligibility.

Anthropic's Covered Model exclusion can create a contract, policy, or authorization mismatch that your legal and security teams must assess. Existing ZDR agreements may carve out model-specific exceptions in fine print — or be silent on the issue entirely — creating a gap that won't surface until contract renewal, an audit, or a customer inquiry.

## What Did OpenAI Do?

[OpenAI announced Private Safety Processing on August 20](https://openai.com/index/offering-zero-data-retention-for-frontier-models/) as a preview capability. Per that announcement, GPT-5.6 Sol remains ZDR-eligible. [TechCrunch reported OpenAI explicitly positioned this against Anthropic's move](https://techcrunch.com/2026/08/19/openai-seeks-to-one-up-anthropic-with-new-customer-privacy-protections/), using data governance as competitive differentiation. [BetaNews covered additional technical context.](https://betanews.com/article/openai-private-safety-processing/)

What exactly Private Safety Processing does with safety metadata, what state it processes or retains, and what contractual terms apply under the preview are not fully disclosed in the announcement. Before treating GPT-5.6 Sol as a ZDR-eligible replacement for a regulated use case, verify the current preview terms and confirm coverage with your legal team.

## What Should You Do Now?

**Audit your ZDR agreement immediately** if you use Anthropic under zero-retention terms. Confirm whether Fable 5 or Mythos 5 are in scope and whether their exclusion creates a mismatch with your own customer or internal data-handling commitments. Escalate to legal and security if there is a gap.

**Ask sharper vendor questions** for any AI procurement. "Which models are excluded from zero retention?" and "How will we be notified of any model reclassification?" are now standard due diligence. Do not assume the most capable model carries the same data-handling guarantee as the standard tier. For context on how these vendor contract dynamics are evolving, see our briefing on [OpenAI and enterprise contract implications](/briefings/openai-ipo-enterprise-contract-implications-2026).

## What Should You Watch Next?

Two signals would change the current risk picture. First, **OpenAI's final Private Safety Processing terms**: the preview announcement does not specify how safety metadata is processed or retained, or what the enterprise contractual terms are. When those terms are finalized and disclosed, re-evaluate whether GPT-5.6 Sol genuinely satisfies your ZDR requirements. Second, **Anthropic's Covered Model scope**: the policy reserves the right to designate future models with "similar capabilities" as Covered — meaning the exclusion could expand. Watch Anthropic's usage policy updates for any change to scope or retention duration.

Affected operators should audit their actual agreements and ask sharper vendor questions — not assume either vendor is currently compliant with their ZDR requirements.

## FAQs

### Does this apply to all Claude models?

No. [Only Claude Fable 5 and Mythos 5 require 30-day retention](https://support.claude.com/en/articles/15425996-data-retention-practices-for-covered-models). Older models, Opus, and Haiku remain under ZDR. Anthropic reserves the right to designate future models with "similar capabilities" as Covered.

### Can I opt out of 30-day retention and still use Fable 5?

[No.](https://support.claude.com/en/articles/15425996-data-retention-practices-for-covered-models) The 30-day window is mandatory for Covered Models on all platforms. There is no contractual waiver.

### How does this affect our compliance or contract commitments?

That depends on what your specific contracts, internal policies, or data-use authorizations require. If ZDR or bounded vendor data retention is a stated condition in those documents, Anthropic's Covered Model exclusion creates a mismatch your legal and security teams must assess — the answer is not derivable from the model announcement alone. Review your actual agreements and escalate to counsel if there is a gap.
