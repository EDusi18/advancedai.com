---
title: "DeepSeek V4 Runs on Huawei Chips — Not Nvidia"
description: "DeepSeek's V4 preview, released April 24, 2026, is the first major open-source model built natively for Huawei chips, signaling China's AI stack is decoupling from US hardware."
pubDate: 'Apr 24 2026'
category: 'Industry News'
heroImage: '../../assets/deepseek-v4-huawei-chips-2026.png'
heroImageAlt: 'Abstract dark blue and cyan neural network circuit visualization representing DeepSeek V4 AI model and Huawei chip technology'
---

DeepSeek released preview versions of its long-awaited V4 model on April 24, 2026 — and the headline isn't the benchmark numbers. It's the hardware. [Reuters reports](https://www.reuters.com/technology/chinas-deepseek-returns-with-new-model-year-after-viral-rise-2026-04-24/) that V4 was built in close collaboration with Huawei and optimized for Huawei's Ascend chips, marking a significant departure from DeepSeek's prior reliance on Nvidia hardware. For executives tracking the AI supply chain, this is the story: China's frontier AI is no longer dependent on US silicon.

**Key takeaways:**
- DeepSeek V4 launched April 24, 2026, in two variants: V4-Pro (1.6T parameters) and V4-Flash (284B parameters), both with 1M token context windows.
- V4 was natively adapted for Huawei Ascend chips — the first major open-source model to do so at this scale.
- V4-Pro outperforms all other open-source models in world-knowledge benchmarks, trailing only Google's closed-source Gemini-Pro-3.1.
- Pricing undercuts frontier models sharply: V4-Flash at $0.14/M input tokens vs. comparable Western models costing multiples more.
- V4 is optimized for agentic tasks, with DeepSeek claiming strong performance on tool-use and multi-step reasoning.

## What did DeepSeek actually release?

DeepSeek dropped two preview models today: [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) and [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash), both available on Hugging Face under an MIT license. Both are Mixture-of-Experts architectures with 1 million token context windows.

[Simon Willison's detailed breakdown](https://simonwillison.net/2026/Apr/24/deepseek-v4/) notes that V4-Pro, at 1.6 trillion total parameters (49B active), is the new largest open-weights model as of April 24, 2026 — larger than Kimi K2.6 (1.1T) and GLM-5.1 (754B). V4-Flash is the lightweight tier — 284B total, 13B active — designed for low-latency and low-cost inference. Willison also notes V4-Flash may run on consumer hardware like an M5 MacBook Pro with quantization, while V4-Pro requires enterprise-scale infrastructure.

On cost, [DeepSeek's pricing page](https://api-docs.deepseek.com/quick_start/pricing) lists V4-Flash at $0.14 per million input tokens and $0.28 per million output tokens. V4-Pro comes in at $1.74/M input and $3.48/M output. For context, [Willison's pricing comparison](https://simonwillison.net/2026/Apr/24/deepseek-v4/) shows V4 substantially undercuts frontier models from Anthropic, OpenAI, and Google at current list prices.

## Why does the Huawei chip angle matter?

This is the part most AI coverage is underselling. Every leading AI model — until today — has been trained and run on Nvidia's chips. US export controls have been systematically tightening Nvidia's access to Chinese customers since 2022. The policy assumption was that hardware constraints would eventually create a performance ceiling for Chinese AI.

DeepSeek V4 is a direct challenge to that assumption. [Reuters quotes](https://www.reuters.com/technology/chinas-deepseek-returns-with-new-model-year-after-viral-rise-2026-04-24/) He Hui, semiconductor research director at Omdia: "Huawei's Ascend chips are the country's best homegrown alternative to Nvidia, and supporting DeepSeek V4 shows that top Chinese AI models can now run on Chinese hardware."

Nvidia CEO Jensen Huang has been blunt about the risk. In an interview this month on the Dwarkesh Podcast, [Huang said](https://www.reuters.com/technology/chinas-deepseek-returns-with-new-model-year-after-viral-rise-2026-04-24/): "The day that DeepSeek comes out on Huawei first, that is a horrible outcome for our nation." That day arrived Friday morning.

The timing adds political weight: the launch comes one day after the White House accused China of [stealing US AI labs' intellectual property on an industrial scale](https://www.reuters.com/world/white-house-accuses-china-industrial-scale-theft-ai-technology-ft-reports-2026-04-23/), and weeks ahead of a planned Trump-Xi meeting in Beijing.

## Will this hit markets the way R1 did?

Probably not, and that's an instructive data point on its own. When DeepSeek released R1 in January 2025, [Nvidia shed nearly $600 billion in market cap](https://www.cnbc.com/2025/01/27/nvidia-sheds-almost-600-billion-in-market-cap-biggest-drop-ever.html) in a single day. Markets have since repriced the reality that efficient Chinese AI is here to stay.

Ivan Su, senior equity analyst at Morningstar, told [CNBC](https://www.cnbc.com/2026/04/24/deepseek-v4-llm-preview-open-source-ai-competition-china.html) that V4's debut is "unlikely to have the same market impact as R1, because traders have already priced in the reality that Chinese AI is competitive and cheaper to use." Neil Shah, vice president of research at Counterpoint Research, described V4 as "a serious flex" — strong performance, lower inference costs — but not a shock.

The more significant shift is competitive positioning within China. Alibaba, Baidu, and domestic rivals have all released strong models in the 18 months since R1. DeepSeek V4 is now explicitly targeting Chinese competitors as much as Western labs — a framing, as the Morningstar analyst noted, that "didn't exist with R1."

## What should executives take from this?

Three practical reads:

**On procurement:** V4-Flash at sub-$0.20 per million tokens is a serious alternative for high-volume applications — internal search, document processing, agentic workflows — where inference cost is the dominant variable. The MIT license means it can be self-hosted. [Evaluate it on your actual workloads](https://openrouter.ai/deepseek/deepseek-v4-flash), not just published benchmarks.

**On the chip geopolitics:** Export controls are now confirmed to have a ceiling. If Huawei Ascend can support a 1.6 trillion parameter frontier model, the constraint on Chinese AI is no longer hardware — it's data, talent, and compute scale. US policy will need to recalibrate accordingly.

**On open-source AI strategy:** V4's MIT license and Hugging Face availability mean any enterprise can run it. As we wrote in our piece on [the open-source AI resurgence](/briefings/open-source-ai-resurgence/), the gravitational center of enterprise AI is shifting toward models you control, not models you rent. DeepSeek V4 is more fuel on that fire.

For teams already building with agentic frameworks, [CNBC reports](https://www.cnbc.com/2026/04/24/deepseek-v4-llm-preview-open-source-ai-competition-china.html) that DeepSeek says V4 has been optimized for popular agent tools — strong news for anyone running high-throughput pipelines where [agentic infrastructure choices](/analysis/agentic-stack-problem-2026/) are compounding quickly.

## Frequently asked questions

### What is DeepSeek V4 and when was it released?

DeepSeek V4 is a large language model released in preview on April 24, 2026, by the Chinese AI startup DeepSeek. It comes in two variants — V4-Pro (1.6T parameters) and V4-Flash (284B parameters) — both with 1 million token context windows and MIT open-source licenses. V4-Pro is currently the largest open-weights model available.

### What makes DeepSeek V4 different from previous DeepSeek models?

DeepSeek V4 is the first major DeepSeek model built in close collaboration with Huawei and adapted to run natively on Huawei's Ascend chips rather than Nvidia's. It also significantly scales up from V3.2 (685B parameters) to 1.6T parameters in the Pro variant, claims stronger performance on agentic tasks, and prices inference substantially lower than comparable Western models.

### How does DeepSeek V4 pricing compare to OpenAI or Anthropic?

DeepSeek V4-Flash is priced at $0.14 per million input tokens and $0.28 per million output tokens. V4-Pro runs $1.74/M input and $3.48/M output. Comparable models from OpenAI and Anthropic typically cost between 5x and 20x more at current list prices, making V4 particularly attractive for high-volume enterprise applications.

### Will DeepSeek V4 have the same market impact as R1?

Analysts say no. Morningstar's Ivan Su told CNBC the market impact "is unlikely to match R1" because investors have already priced in competitive, low-cost Chinese AI. The more significant dynamic is DeepSeek positioning V4 against domestic Chinese competitors — Alibaba, Baidu — rather than positioning purely against Western labs.

### Can DeepSeek V4 run on US hardware?

Yes. Both V4 models are available on Hugging Face and through APIs like OpenRouter. While DeepSeek has adapted V4 for Huawei Ascend chips, the models run on standard GPU infrastructure. V4-Flash may run on consumer-grade hardware with quantization; V4-Pro requires enterprise-scale compute.

### What does the Huawei chip integration mean for US export controls?

It signals that US chip export controls, while disruptive, have not capped Chinese AI capability at a lower performance tier. A 1.6 trillion parameter model running on Huawei's Ascend hardware — with frontier-competitive benchmarks — suggests the hardware constraint on Chinese AI is more limited than policymakers assumed in 2022 when the initial restrictions were imposed.

---

*Published April 24, 2026. Advanced AI covers AI strategy for business leaders.*

*[Advanced AI](https://advancedai.com) is an independent publication for executives navigating the AI landscape.*
