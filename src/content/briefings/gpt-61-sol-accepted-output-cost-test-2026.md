---
title: "GPT-6.1 Sol Changes the Mid-Tier Model Test"
description: "OpenAI says GPT-6.1 Sol approaches Astra at lower cost. Operators should test accepted-output economics before changing any production routes."
pubDate: 2026-10-07
heroImage: "../../assets/gpt-61-sol-accepted-output-cost-test-2026.svg"
heroImageAlt: "A business workflow balancing model capability, latency, and accepted-output cost"
---

[OpenAI launched GPT-6.1 Sol on October 6](https://openai.com/index/introducing-gpt-6-1-sol/) at $2 per million input tokens, $0.10 per million cached inputs, and $10 per million output tokens. OpenAI says it approaches its higher-priced Astra model on coding, documents, computer use, and business workflows. For operators, that is a reason to test model routing—not proof that production workloads should move.

## Key Takeaways

- GPT-6.1 Sol is available in the API, ChatGPT Work, and Codex—not regular Chat.
- OpenAI prices standard input and output at one-fifth of Astra's rates.
- Launch comparisons measure vendor-selected evaluations, not sustained customer workflows.
- Operator posture: **run a small test** using accepted-output cost and review effort.

## What did OpenAI actually release?

GPT-6.1 Sol is available as `gpt-6.1-sol` through the API and to eligible Plus, Pro, Business, Enterprise, and Edu users in ChatGPT Work and Codex. OpenAI says it is not yet available in regular Chat. The [model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-sol) lists a 1.05-million-token context window and 128,000 maximum output tokens.

The headline economics are more important than the benchmark table. OpenAI's [current API pricing](https://developers.openai.com/api/docs/pricing) puts standard GPT-6.1 Sol input/output at $2/$10 per million tokens, versus $10/$50 for GPT-6 Astra. Cached input is $0.10 per million tokens, which could matter for agents that repeatedly reuse long instructions or reference material.

But lower rates do not guarantee a cheaper completed task. Reasoning tokens, retries, tool calls, latency, human review, and rejected outputs can outweigh the list-price difference. The same distinction applies to earlier [OpenAI price cuts](/briefings/openai-gpt56-sol-price-cut-api-enterprise-2026/) and broader [agent token-cost controls](/briefings/enterprise-ai-agent-token-cost-reckoning-2026/).

## Why should operators distrust the easy comparison?

OpenAI reports that GPT-6.1 Sol nears Astra on several evaluations at roughly one-fifth the cost per task, and beats or approaches Anthropic's Opus 5.5 on selected document, automation, and scientific tasks. Those are useful launch signals, but they remain vendor-selected tests with vendor-defined prompts, reasoning settings, and acceptance criteria.

OpenAI also reports fewer factual errors than GPT-6 Sol on difficult, de-identified conversations, while warning that the prompts are not representative of typical usage. Its [system card addendum](https://deploymentsafety.openai.com/gpt-6-1-sol) provides additional safety results, but does not establish reliability in a buyer's tools, permissions, data, or approval process.

Announcement and deployment should stay separate: the model is available, while independently verified workflow savings are not.

## How should a business test GPT-6.1 Sol now?

**Run a small test** on 20–50 low-risk, repeatable tasks already handled by GPT-6 Sol, Astra, or another incumbent. Hold prompts, tools, permissions, reasoning settings, and acceptance rubrics constant. Measure total run cost, accepted outputs, retries, elapsed time, reviewer minutes, corrections, and failures requiring fallback.

Test cached-input economics separately on workflows that genuinely reuse stable context. Do not redesign prompts merely to manufacture cache hits, and do not route consequential work to the model until permission and approval behavior passes the same test.

OpenAI says GPT-6.1 Sol Ultrafast will arrive in coming days with up to eight-times-faster token generation in Codex. Treat that as a future option, not a current business case. OpenAI's [speed guidance](https://help.openai.com/en/articles/20001596-response-speed-and-usage-resets-in-work-and-codex) distinguishes output speed from overall task completion. Watch for Ultrafast pricing, independent workload tests, production reliability evidence, and customer results measured per accepted output.

## FAQs

### Should operators replace GPT-6 Astra with GPT-6.1 Sol?

Not broadly. Test workloads where Astra's added capability may not improve acceptance rates enough to justify its higher rate card. Keep Astra where error or failure costs dominate token savings.

### Does the cached-input price guarantee major savings?

No. Savings depend on how much stable context is reused, whether the cache applies, and whether output quality holds. Measure the entire accepted task, not cached tokens alone.

### Is GPT-6.1 Sol available in ChatGPT Chat?

OpenAI says no. It is available through the API, ChatGPT Work, and Codex for eligible plans; workspace administrators may also control access.
