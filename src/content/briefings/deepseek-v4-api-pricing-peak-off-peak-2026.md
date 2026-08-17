---
title: "DeepSeek Raised V4 API Prices — Audit Your Batch Jobs"
slug: deepseek-v4-api-pricing-peak-off-peak-2026
description: "DeepSeek raised V4 API prices August 16 at 16:00 UTC. V4-Pro peak output is now $3.96/1M (was $0.87). Off-peak rates also rose. Audit your batch job UTC timing."
pubDate: '2026-08-17'
category: 'Industry News'
heroImage: '../../assets/deepseek-v4-api-pricing-peak-off-peak-2026.png'
heroImageAlt: 'Split-screen graphic showing a DeepSeek API pricing table with peak rates highlighted in red and off-peak rates in blue, overlaid on a dark technical circuit background'
author: 'Advanced AI'
tags: ['AI', 'DeepSeek', 'AI pricing', 'API costs', 'cost management']
---

**Key takeaways:**
- **Now live:** DeepSeek raised V4-Pro peak output from $0.87 to $3.96 per 1M tokens, effective 16:00 UTC August 16, 2026. Live pricing page verified August 17.
- **Two daily peak windows:** 01:00–04:00 and 06:00–10:00 UTC (7 hrs/day). All other hours are off-peak at half the peak rate.
- **Biggest impact on cache hits:** V4-Pro cache-hit prices [jump over 1,100% at peak](https://qz.com/deepseek-api-price-increase-v4-peak-off-peak-081326), making scheduled batch jobs that reuse context the highest-risk workloads.
- **US business hours are off-peak:** 9am–5pm Eastern maps to 13:00–21:00 UTC — outside both peak windows. Off-peak V4-Pro output still rises from $0.87 to $1.98/1M (2.3x the prior flat rate).

[DeepSeek raised its V4 API prices](https://api-docs.deepseek.com/quick_start/pricing/) at 16:00 UTC on August 16, reversing an introductory rate that [DeepSeek pledged to make permanent](https://www.engadget.com/2180062/deepseek-permanently-reduces-the-price-of-its-flagship-v4-model-by-75-percent/) in May after the original promotion expired. Output tokens for V4-Pro jumped to $3.96 per million at peak hours, up from $0.87. Whether this affects your costs depends on when your workloads run — something most teams using DeepSeek have never audited.

## What Are the New Prices?

[DeepSeek's updated pricing page](https://api-docs.deepseek.com/quick_start/pricing/) lists both models under the new structure:

**deepseek-v4-flash** (per 1M tokens):
- Off-peak: $0.22 input / $0.66 output
- Peak: $0.44 input / $1.32 output (up from $0.14/$0.28)

**deepseek-v4-pro** (per 1M tokens):
- Off-peak: $0.66 input / $1.98 output
- Peak: $1.32 input / $3.96 output (up from $0.435/$0.87)

Cache-hit input tokens — the biggest cost advantage for repetitive batch work — are the steepest change. V4-Pro cache hits rise from $0.0036 to $0.044 at peak (roughly 12x) and to $0.022 off-peak (6x). The prior promotional pricing, pledged permanent in May, was revised upward into this two-tier structure at 16:00 UTC on August 16, 2026. The DeepSeek pricing page confirms the new structure is live.

Even at peak rates, [DeepSeek remains cheaper than Claude Sonnet 5 or GPT-5.6 Sol](https://www.engadget.com/2236912/deepseek-ai-models-get-four-times-pricier/). But at peak, V4-Pro output ($3.96/1M) now exceeds [OpenAI's GPT-5.6 Luna](https://developers.openai.com/api/docs/pricing) ($1.20/1M output, as of August 2026), and V4-Flash at peak ($1.32/1M) is also more expensive than Luna. If your V4 workloads run during peak hours, recalculate your unit economics — the actual impact depends on your output mix, cache hit rate, quality requirements, and what migration to an alternative would cost.

## Are Your Batch Jobs Running During Peak Hours?

Peak hours are 01:00–04:00 and 06:00–10:00 UTC — 9pm–midnight and 2am–6am Eastern. US business-day workloads are entirely off-peak. The risk is overnight automation: jobs queued to run "after hours" in local time often land inside those UTC peak windows.

Pull your API logs and group calls by UTC hour. Substantial call volume between 01:00–04:00 or 06:00–10:00 UTC means peak billing. Shifting a batch job from 3am ET to 6am ET moves it entirely to off-peak.

Teams running [high-volume AI agent workflows](/briefings/enterprise-ai-agent-token-cost-reckoning-2026/) that already track per-task token cost should re-run their unit economics against the new off-peak floor, not the old flat rate. [DeepSeek V4-Pro](/briefings/deepseek-v4-huawei-chips-2026/) was a cost story as much as a capability story — off-peak, it still is. At peak, you may need a different answer.

**Operator posture: ask sharper vendor questions.** Check API logs for UTC call timing, recalculate V4-Pro cost if a meaningful share of calls lands in peak windows, and move batch jobs off-peak before your next invoice.

**Watch next:** Subscribe to [DeepSeek's API changelog](https://api-docs.deepseek.com/updates/) for further changes. Whether DeepSeek will shift peak windows or add additional tiers is not stated.

---

## Frequently Asked Questions

### Does DeepSeek still cost less than competitors after the price increase?

For off-peak output tokens, yes. V4-Flash off-peak ($0.66/1M output) remains cheaper than most US-based alternatives. V4-Pro off-peak ($1.98/1M) undercuts Claude Sonnet 5 and GPT-5.6 Sol by a wide margin. At peak rates, V4-Pro output ($3.96/1M) is now more expensive than GPT-5.6 Luna ($1.20/1M), reversing the cost advantage for workloads that run during peak windows.

### Which workloads are most affected by the peak/off-peak structure?

Batch jobs that reuse the same context window — re-indexing, nightly document processing, repeated prompt sequences — because cache-hit pricing jumped the most (up to 12x at V4-Pro peak). Real-time interactive workloads during US business hours avoid the peak tier — those calls run during 13:00–21:00 UTC — but they still face the new off-peak rates. V4-Pro off-peak output rises from $0.87 to $1.98/1M (2.3x the prior flat rate).

### Do I need to change my API integration to use peak and off-peak rates?

No. The pricing tiers apply automatically based on UTC call time — no API or header changes are required. Your existing integration will be billed at the applicable rate based on when each call lands. The only action required is auditing your call timing and, where practical, rescheduling jobs that fall in peak windows.
