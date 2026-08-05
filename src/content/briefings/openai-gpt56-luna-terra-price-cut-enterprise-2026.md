---
title: "OpenAI Cuts GPT-5.6 Luna 80%, Adds Sol Fast Mode"
slug: openai-gpt56-luna-terra-price-cut-enterprise-2026
description: "OpenAI cut GPT-5.6 Luna 80% to $0.20/M tokens and Terra 20% to $2/M on July 30. GPT-5.4 retires in Codex August 31. What operators need to act on now."
pubDate: '2026-08-05'
heroImage: '../../assets/openai-gpt56-luna-terra-price-cut-enterprise-2026.png'
heroImageAlt: "Abstract enterprise diagram showing three interconnected AI model tiers — Sol in gold, Terra in deep blue, Luna in cyan — connected by data streams on a dark navy background, representing OpenAI's GPT-5.6 tiered pricing and routing architecture"
author: 'Advanced AI'
category: 'Industry News'
tags:
  - AI
  - Enterprise AI
  - OpenAI
  - API Pricing
  - Workflow Automation
  - Agent Infrastructure
---

**Key takeaways:**
- On July 30, OpenAI cut [GPT-5.6 Luna](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/) by 80% to $0.20/M input / $1.20/M output tokens (from $1/$6), and Terra by 20% to $2/$12 (from $2.50/$15). Sol remains at $5/$30.
- GPT-5.6 Sol gains a new [Fast mode](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/) in the API: up to 2.5× faster than Standard processing at 2× the price, replacing Priority Processing with backward compatibility.
- OpenAI reports 1 billion active users and 2 million+ businesses served, per its [July 29 engineering post](https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency/).
- **Hard deadline:** Per OpenAI's [Codex rate card](https://help.openai.com/en/articles/20001106-codex-rate-card), GPT-5.4 and GPT-5.4 mini retire in Codex on August 31, 2026 — for users signed in with ChatGPT. OpenAI API access and Codex with your own API key are not affected by this retirement.
- Operator posture: **run a small test** — route one high-volume, well-specified workflow step to Luna and validate quality. **Act now** if your team uses GPT-5.4 in Codex; the August 31 deadline is firm.

OpenAI cut the price of its GPT-5.6 Luna model by 80% on July 30, according to its [official pricing announcement](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/). Luna — the fastest and most affordable tier in the GPT-5.6 family — now costs $0.20 per million input tokens and $1.20 per million output tokens, down from $1 and $6. Terra, the mid-range tier, dropped from $2.50 and $15 to $2 and $12. These are API pricing changes, not ChatGPT subscription changes: they directly affect teams building on the OpenAI API. Sol's price is unchanged at $5/$30.

## What Did OpenAI Change, and What's Behind It?

The cuts [follow an efficiency campaign disclosed the day before](https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency/): GPT-5.6 Sol autonomously rewrote production kernels and ran hundreds of experiments, reducing end-to-end serving costs by 20% and improving token-generation efficiency by more than 15%. Those infrastructure gains are partly being passed to customers as lower Luna and Terra prices, not as a Sol discount.

Sol itself gets Fast mode instead: as of July 30, 2026, up to 2.5× faster than Standard processing at twice the price. Fast mode is backward compatible — API requests tagged for Priority Processing automatically switch, with no code changes needed. For operators running customer-facing agents, real-time document review, or latency-critical pipelines, Fast mode is now an explicit API configuration rather than a support arrangement.

The timing is not incidental. [Reuters reported](https://www.reuters.com/business/retail-consumer/openai-cuts-prices-smaller-models-businesses-scrutinize-ai-spend-2026-07-30/) that businesses are scrutinizing AI spend more carefully, and [VentureBeat framed the cuts as a response to competitive pressure](https://venturebeat.com/technology/ai-price-wars-openai-cuts-gpt-5-6-luna-prices-by-80-as-model-competition-shifts-toward-cost) from Chinese frontier models. Luna is now priced near DeepSeek V4 Pro ([per Heise's model comparison: $0.44/$0.87 input/output per million tokens](https://www.heise.de/en/news/GPT-5-6-OpenAI-lowers-prices-for-Luna-and-Terra-11395769.html)), and Terra falls below the [Qwen3.8-Max list price of $2/$6](https://advancedai.com/briefings/alibaba-qwen38-max-frontier-pricing-enterprise-2026/) — territory previously occupied only by Chinese-origin models.

## What Should Operators Do Before August 31?

**Migrate Codex workflows first.** Per OpenAI's [Codex rate card](https://help.openai.com/en/articles/20001106-codex-rate-card), GPT-5.4 and GPT-5.4 mini will be retired in Codex on August 31, 2026, for users signed in with ChatGPT. OpenAI API access and Codex with your own API key are not affected — only Codex accessed through the ChatGPT interface loses these model IDs on that date. The migration path is direct: replace GPT-5.4 with GPT-5.6 Terra, and GPT-5.4 mini with GPT-5.6 Luna — both at lower or equal cost to current GPT-5.4 pricing.

Beyond the deadline, the 80% Luna cut makes tiered routing worth evaluating in any [agent workflow currently running high-volume steps on Terra or Sol](https://advancedai.com/briefings/gpt-56-grok-45-public-launch-enterprise-july-2026/). OpenAI's announcement describes the pattern explicitly: use Sol or Terra for reasoning-heavy, ambiguous, or high-stakes decisions; route well-specified execution and evaluation steps to Luna. A query that cost $1.00 on Sol now costs $0.04 on Luna — a 25× per-query difference. Whether Luna meets your quality bar for a specific step requires your own evaluation. OpenAI claims Luna "outperforms Fable 5 at an estimated cost per task nearly 99% lower" on Agents' Last Exam, but that is a vendor-reported benchmark on a curated task set, not evidence of production parity for your workflow.

For operators, the near-term move is not a full stack migration. It is one targeted test: pick a high-volume, well-specified step in an existing workflow, route it to Luna for a week, and measure output quality against your current model. If it passes, you have a durable cost lever that compounds with scale. Watch for whether Anthropic and Google respond with matching cuts on their mid-tier models — that would indicate a broader price floor reset across enterprise AI APIs.

---

### FAQ

### Does the GPT-5.6 Luna price cut apply to ChatGPT Plus or Team subscriptions?

No. The 80% price reduction applies to the OpenAI API — it is not a ChatGPT subscription change. OpenAI has not announced changes to Plus, Team, or Work subscription tiers as of August 5, 2026. If you are building on the API, your per-token costs for Luna drop immediately; if you access GPT-5.6 through a ChatGPT subscription, your pricing model is unchanged.

### What exactly is being retired on August 31, and what replaces it?

Per OpenAI's [Codex rate card](https://help.openai.com/en/articles/20001106-codex-rate-card), GPT-5.4 and GPT-5.4 mini will be retired from Codex for users signed in with ChatGPT on August 31, 2026. OpenAI API access and Codex with your own API key are not affected. The replacements are GPT-5.6 Terra (swap for GPT-5.4) and GPT-5.6 Luna (swap for GPT-5.4 mini). At current pricing, both replacements cost the same or less than their GPT-5.4 equivalents.

### Should operators immediately move all workflows to Luna?

Not without testing first. Luna is appropriate for high-volume, well-specified execution steps — not for reasoning-heavy decisions where Sol or Terra provides materially better results. The 25× per-query cost gap between Sol and Luna is compelling, but routing decisions should be based on your own output quality evaluation for each specific workflow step, not OpenAI's published benchmarks, which are vendor-reported and not independently verified.
