---
title: "OpenAI Cuts GPT-5.6 Sol API Prices 20% Through November"
description: "OpenAI cut GPT-5.6 Sol API prices by 20%+ on August 21, setting $4/$20 per million tokens — now cheaper than Claude Opus 5 — through November 2026."
pubDate: "2026-08-23"
heroImage: "../../assets/openai-gpt56-sol-price-cut-api-enterprise-2026.png"
heroImageAlt: "Split price tag comparison showing GPT-5.6 Sol dropping to dollar-four input and dollar-twenty output versus Claude Opus 5 at dollar-five and dollar-twenty-five, with a calendar marking November 21 2026"
category: "Industry News"
tags: ["OpenAI", "API pricing", "GPT-5.6", "enterprise AI", "cost management"]
author: "Advanced AI"
editorialStatus: "tavi_approved"
tierProposal: "briefing"
reviewOwner: "Tavi"
publishApproval: "automatic_if_tavi_approves_briefing"
sourceCount: 5
knownWeaknesses:
  - "$4/$20 API rate confirmed on OpenAI's developer pricing page (Tier 1, developers.openai.com); the 'promotional' label is Reuters' characterization and the rate card's explicit notation for Work/Codex usage — the API page lists it as standard pricing without a promotional label; Reuters corroborates >20% cut"
  - "Old Sol rate ($5/$30) sourced to pre-announcement aggregator (benchlm.ai, Tier 3); described as 'July launch rate' without asserting the exact prior figure — consistent with magnitude confirmed by AWS Bedrock announcement"
  - "Post-November 21 API pricing not disclosed by OpenAI; briefing appropriately scoped to the promotional window with explicit no-rearchitecture warning"
revisionNotes: |
  REVISED August 23, 2026 (Avdi) — Tavi REVISE objections addressed:
  (1) $4/$20 API price now linked to OpenAI developer pricing page (developers.openai.com/api/docs/pricing, Tier 1) instead of aipricing.guru (Tier 3); the developer page explicitly lists gpt-5.6-sol at $4.00 input / $20.00 output per 1M tokens. OpenAI rate card link retained for November 21 date and Work/Codex scope.
  (2) "First time OpenAI's flagship tier has undercut Anthropic's equivalent on price" removed from KT3; replaced with factual current-price comparison without historical or product-equivalence claims.
  (3) IPO-motive inference ("consistent with a vendor prioritizing adoption over per-token margin heading into an IPO period") removed from body; only observed repricing pattern stated.
  (4) "Anthropic faces pricing pressure on its mid-tier" recast: Opus 5 correctly identified as Anthropic's top-tier model; speculative competitor response removed; Watch Next now says watch for any Anthropic price adjustment or expanded enterprise commitments.
  (5) Promotional-price caveat, workload benchmark, no-rearchitecture warning, and November 21 watch signal all preserved. Word count within 800-word ceiling.
---

[OpenAI announced on August 21](https://www.reuters.com/technology/openai-cuts-developer-pricing-frontier-gpt-56-sol-model-by-more-than-20-2026-08-21/) that it is cutting API pricing for GPT-5.6 Sol — its flagship model — by more than 20% on input and 33% on output. The new rate, now [$4 per million input tokens and $20 per million output tokens](https://developers.openai.com/api/docs/pricing) on OpenAI's developer pricing page, is labeled promotional by [OpenAI's rate card](https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing) through at least November 21, 2026. At that rate, Sol is now cheaper per token than [Claude Opus 5](https://platform.claude.com/docs/en/about-claude/pricing) ($5 input / $25 output, as of August 21, 2026). The cut covers the API, eligible ChatGPT Work credits, and Codex plans.

**Key takeaways:**
- **New live rates:** GPT-5.6 Sol is $4 input / $20 output per million tokens — a 20%-plus input cut and 33% output cut from its July 9 launch rate.
- **Time-bounded:** Promotional pricing runs through at least November 21, 2026. OpenAI has made no commitment about the post-November rate.
- **Competitive shift:** Sol at $4/$20 is now cheaper than Claude Opus 5 at $5/$25 on both input and output — OpenAI's flagship model currently priced below Anthropic's top-tier model.
- **Pattern:** This is OpenAI's third GPT-5.6 pricing move in six weeks — Luna fell 80%, Terra fell 20% on July 30; Sol follows on August 21.
- **Scope:** Applies to API access, ChatGPT Work credit usage, and Codex plans. Consumer ChatGPT subscription pricing is unchanged.

## Why Is OpenAI Cutting Its Best Model's Price Now?

OpenAI's stated rationale is ongoing efficiency improvement — the announcement says continued gains make lower prices possible. The competitive context is clearer. [Claude Opus 5 at $5/$25](https://platform.claude.com/docs/en/about-claude/pricing) (as of August 21, 2026) has been the pricing ceiling for high-capability models since Anthropic launched it. Sol at $4/$20 goes below that floor.

The pattern across six weeks tells the fuller story. [Luna dropped 80% to $0.20/$1.20 and Terra dropped 20% to $2/$12 on July 30](https://benchlm.ai/openai/api-pricing) (via pricing aggregator benchlm.ai; OpenAI has not published a consolidated model changelog), leaving Sol at its launch rate. The August 21 cut completes the sweep — all three GPT-5.6 tiers repriced within weeks of general availability.

The "promotional" label is the most important word in the announcement. The November 21 deadline means operators treating $4/$20 as a baseline have roughly 90 days before the rate may revert.

## What Should Operators Do Before November 21?

The most immediate question is routing. If your workflows send document analysis, contract review, or long-form generation to Claude Opus 5 because Sol was more expensive, that logic is now inverted. Sol's output rate ($20) versus Opus 5's output rate ($25) is a 20% reduction per million output tokens — where most [inference cost accumulates](/briefings/anthropic-samsung-chip-inference-cost-enterprise-2026/) in generation-heavy workloads.

Three actions for this window:

**Benchmark your highest-cost task types.** Run them against Sol at the new rate. The performance-per-dollar equation has shifted; routing logic that was optimal at the old price needs re-testing.

**Do not restructure cost models around this rate.** Model a reversion scenario before baking $4/$20 into multi-year automation economics.

**Get pricing clarity in writing.** Promotional prices belong in your contingency model; contractual rates belong in your agreements.

Operator posture: **run a small test** — benchmark Sol at the new rate against your current provider for your most token-heavy task. Route to it if the output quality holds. Do not re-architect. For context on how this fits the broader [AI pricing war between vendors](/briefings/ai-credit-war-startup-lock-in-enterprise-2026/), see our earlier coverage.

## What to Watch Next

- **Whether OpenAI extends or makes the Sol rate permanent after November 21.** A second extension signals a structural repricing; expiration signals promotional volume-grab.
- **Anthropic's response.** Claude Opus 5 is Anthropic's top-tier model — not mid-tier — and it now costs more per token than Sol on both dimensions. Watch for any Anthropic price adjustment or expanded ZDR and enterprise commitments as a signal of competitive response.

---

## Frequently Asked Questions

### Does this affect ChatGPT Business or Enterprise subscription pricing?

No. The promotional rate applies to token-based API usage, ChatGPT Work credit consumption, and Codex plans. Fixed-seat ChatGPT Business plans ($20/user/month) are not directly affected. Enterprise customers on credit-based billing should verify their rate card with OpenAI.

### How does GPT-5.6 Sol now compare to Claude Opus 5 in cost?

At the promotional rate, Sol ($4 input / $20 output per million tokens) is cheaper than Claude Opus 5 ($5 input / $25 output) on both dimensions. Performance varies by task. Operators should benchmark their specific workloads before rerouting production traffic based on price alone.

### What should operators plan for after November 21, 2026?

OpenAI has not stated what Sol pricing will be after the promotional window. Plan for both outcomes: the rate stays, or it reverts toward the pre-cut range. Do not lock multi-year automation cost projections into a promotional price without a written, contractual commitment to that rate.
