---
pubDate: 2026-09-09
title: "Six Chinese AI Companies Named for Industrial Model Distillation"
description: "NSA, CISA, and FBI named six Chinese AI firms for extracting billions of tokens from U.S. models. What operators using Chinese AI or aggregators need to know."
heroImage: ../../assets/nsa-cisa-fbi-china-ai-distillation-enterprise-vendor-risk-2026.png
heroImageAlt: "Six interconnected AI company nodes under a federal cybersecurity review, illustrating model distillation and enterprise vendor risk"
---

NSA, CISA, and FBI published a joint advisory on September 8, 2026, naming six China-based AI companies for extracting billions of tokens from U.S. frontier AI models through what the agencies call "aggressive, malicious, and targeted" knowledge distillation campaigns. The named companies — DeepSeek, Moonshot AI, Alibaba, MiniMax, StepFun, and Z.AI — ran these campaigns since at least late 2024, likely with Chinese government awareness.

**Key Takeaways**
- NSA, CISA, and FBI name six Chinese AI companies for extracting "billions of tokens" from Claude, GPT, Gemini, and Grok since late 2024.
- Third-party API aggregators are named as a key extraction pathway — relevant if your teams use AI cost-optimization routing layers.
- DeepSeek's widely cited $5.6M training cost excludes distillation-acquired data, per the advisory.
- No enterprise procurement ban has been announced; this is a vendor risk and due-diligence signal.
- Named companies: DeepSeek, Moonshot AI, Alibaba, MiniMax, StepFun, and Z.AI.

## What Did the Agencies Actually Find?

Advisory [AA26-251A](https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-251a) describes three extraction pathways: direct API access via fraudulent accounts, remote cloud provider relays, and third-party aggregators that automatically strip user metadata to avoid detection. A gray market of proxy services — called "transfer stations" — resold U.S. model access while masking origin and evading geographic restrictions.

Tactics included chain-of-thought reasoning extraction, automated failover between providers when one pathway was blocked, and quality-evaluation frameworks to test whether captured outputs met training standards. DeepSeek extracted outputs from Claude Sonnet 4, Sonnet 4.5, Opus 4.1, multiple GPT and Gemini versions, and Grok 4 to build its R1 and V3 models. Moonshot AI extracted Claude Fable 5 data to train Kimi-K3. The advisory states that DeepSeek's publicly cited $5.6 million training cost is "misleading" because it excludes data acquired through distillation.

## What Should Operators Do With This?

The advisory is addressed to U.S. AI model providers — not enterprise buyers. Its recommended actions (detect anomalous usage, subtly alter responses for suspected extraction attempts, share intelligence across providers) target OpenAI, Anthropic, Google, and xAI. Three implications remain relevant for operators managing AI vendor relationships.

**Aggregator exposure.** The advisory specifically names third-party aggregators — services that automatically obfuscate user metadata — as one of the three primary extraction pathways. If your teams route AI workloads through cost-optimization or routing layers, ask your provider whether your usage is attributable to your account at the model-provider level and what metadata controls are in place.

**Chinese AI vendor due diligence.** If evaluations of [DeepSeek](/briefings/deepseek-v4-huawei-chips-2026/), Alibaba Qwen, Moonshot AI, or other named models included cost-efficiency arguments based on published training costs, those figures are now federally contested. The advisory does not prohibit enterprise use — it changes the sourcing question in vendor risk documentation.

**Government-adjacent compliance.** Federal attribution of these campaigns, with Chinese government awareness explicitly noted, is a meaningful procurement signal for organizations with government contracts, export-sensitive workflows, or regulated data. Brief your compliance team on advisory AA26-251A before including any of the six named companies in a vendor evaluation. When tracking how [Chinese AI models have evolved against U.S. models](/briefings/chinese-ai-models-enterprise-token-usage-2026/), this advisory reframes the efficiency narrative as a sourcing question.

For operators, the near-term action is not a vendor exit. It is adding the six named companies and the aggregator-pathway risk to your AI vendor risk register. Watch for Commerce Department or White House follow-on action — formal procurement restrictions naming these companies would change the calculus materially.

---

### FAQ

#### Does this advisory prohibit enterprise use of DeepSeek or other named models?
No. The advisory is addressed to U.S. AI model providers — OpenAI, Anthropic, Google, xAI — not enterprise buyers. No formal procurement restriction on enterprise use has been announced. Organizations with active government contracts should verify existing contract terms and any applicable supply-chain requirements independently.

#### Is my enterprise AI traffic contributing to these distillation campaigns?
Not directly. The extraction was conducted by the six named Chinese companies — not by enterprise customers of U.S. models. The indirect risk is to enterprises routing traffic through third-party aggregators that strip user metadata, which the advisory identifies as part of the extraction infrastructure pathway.

#### What changed in how to evaluate Chinese AI models after this advisory?
Two questions now belong in vendor due diligence: Does your vendor risk policy address models trained on systematically extracted U.S. model outputs? And does your current AI routing or aggregation layer allow your usage to be attributed to your organization at the model-provider level? The advisory provides the sourcing to open both conversations with legal and compliance teams.

---

*Sources: [CISA Advisory AA26-251A](https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-251a) (Tier 1, primary, HTTP 200 ✓); [Nextgov/FCW](https://www.nextgov.com/artificial-intelligence/2026/09/intelligence-agencies-warn-chinas-large-scale-ai-model-distillation-efforts/415851/) (Tier 2, HTTP 200 ✓ — CISA Acting Director Andersen quote, full agency attribution); [Unite.AI](https://www.unite.ai/nsa-cisa-fbi-warn-china-based-ai-firms-distill-us-frontier-models/) (Tier 2, HTTP 200 ✓ — specific model attributions including DeepSeek target model list); [IBTimes UK](https://www.ibtimes.co.uk/us-agencies-accuse-chinese-ai-firms-extracting-us-ai-model-capabilities-1818601) (Tier 2, HTTP 200 ✓ — extraction infrastructure and broader context). Internal: [Chinese AI Models: What Enterprise Token Usage Reveals](/briefings/chinese-ai-models-enterprise-token-usage-2026/); [DeepSeek V4 and the Huawei Chip Signal](/briefings/deepseek-v4-huawei-chips-2026/).*
