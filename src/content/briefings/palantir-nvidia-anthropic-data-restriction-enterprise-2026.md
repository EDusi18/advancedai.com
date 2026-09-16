---
title: "What Palantir's AI Pullback Signals for Your Data Contracts"
description: "Palantir, Nvidia, and Booz Allen are restricting Anthropic and OpenAI models over data fears. Here is what enterprise operators need to ask now."
pubDate: 2026-09-15
heroImage: "../../assets/palantir-nvidia-anthropic-data-restriction-enterprise-2026.png"
heroImageAlt: "A padlocked server rack icon split between two AI lab logos, representing enterprise data custody restrictions on advanced AI models"
---

**Key takeaways:**

- [The Information reported](https://www.theinformation.com/articles/anthropic-data-fears-prompt-nvidia-palantir-booz-allen-restrict-model-use) that Palantir, Nvidia, and Booz Allen Hamilton are restricting or threatening to drop Anthropic and OpenAI's advanced models over data concerns.
- Palantir demanded irrevocable zero-data-retention (ZDR) guarantees before making Claude available on its platform.
- Nvidia shifted sensitive internal work to its own Nemotron models. Booz Allen barred commercial Claude from cybersecurity work.
- The trigger: Anthropic's June policy requiring 30-day log retention for Mythos-class Covered Models — not for training, but for safety monitoring.
- "We don't train on your data" and "zero data retention" are different guarantees. Verify which one your agreement provides for the specific models you deploy.

## What Did These Companies Actually Do?

[The Information reported exclusively](https://www.theinformation.com/articles/anthropic-data-fears-prompt-nvidia-palantir-booz-allen-restrict-model-use) on September 14 — with [Reuters reporting the same account](https://www.reuters.com/business/palantir-nvidia-curb-ai-model-use-over-data-fears-information-reports-2026-09-14/) the same day — that three large enterprise and defense firms moved to limit advanced AI model use:

- **Palantir** pressed Anthropic for irrevocable ZDR guarantees before making Claude models available through its platform. That negotiation has not publicly resolved.
- **Nvidia** limited Anthropic models to less-sensitive internal tasks, preferring its [own Nemotron models](https://www.varindia.com/news/nvidia-palantir-booz-allen-curb-anthropic-use-over-data-fears) for proprietary work.
- **Booz Allen** barred employees from using commercial Claude for cybersecurity work — citing the [firm's own Cyber Weapon Index](https://www.boozallen.com/insights/cyber/cyber-weapon-index.html), which found [Claude Mythos](/briefings/claude-mythos-anthropic-cybersecurity/) is the only tested AI model that can autonomously complete a full cyberattack kill chain. When a model's capability profile reaches that level, the stakes of any log retention — however bounded — change for security-focused operators.

## Why Does This Matter Beyond Defense and Tech?

The trigger is Anthropic's June 9 policy [documented on its support page](https://support.claude.com/en/articles/15425996-data-retention-practices-for-covered-models): organizations with ZDR agreements that access Mythos-class Covered Models through Claude Console, Claude Code Enterprise, AWS Bedrock, Google Cloud Agent Platform, or Microsoft Foundry now face 30-day usage log retention for safety monitoring. The stated purpose is abuse detection — not model training. Anthropic states it does not train on enterprise customer data by default.

The operational gap: "no training" and "zero retention" are distinct guarantees. Check your own model-, tier-, and channel-specific terms — ZDR scope varies by contract and does not automatically extend to newly designated Covered Models.

The Booz Allen case adds a second dimension: capability risk. A model's offensive capability profile can independently disqualify it from sensitive workloads, regardless of data terms.

## What Should You Do Now?

**Ask sharper vendor questions.** Which models you use are designated as Covered Models? Does your ZDR agreement specify whether it covers those models and channels? How will you be notified if Covered Model designations or retention terms change?

**Audit your active agreements** — verify in writing which models and channels your ZDR clause covers, and what retention terms apply to the specific models you deploy.

For context on Anthropic's enterprise positioning, see our briefing on [Anthropic's Series H and enterprise buyer implications](/briefings/anthropic-series-h-965b-enterprise-buyers-2026/).

**Watch for:** any publicly confirmed ZDR resolution between Anthropic and Palantir; and whether Anthropic expands or narrows its Covered Model list in its support documentation.

## FAQs

### Does Anthropic train on enterprise data?

Anthropic states it does not train on enterprise customer data by default. The separate question — whether they retain usage logs, and under what terms — has a different answer. Anthropic's support page documents 30-day retention for Mythos-class Covered Models for safety purposes. Review the specific terms that apply to your agreement tier and the models you use.

### What is zero-data-retention, and can I get it?

What ZDR covers in practice — model scope, channel applicability, and which forms of log retention are included or excluded — is defined by your specific vendor contract. Per Anthropic's support documentation, Mythos-class Covered Models are subject to 30-day retention even for organizations that previously held ZDR under the June 9 policy. Get any ZDR guarantee in writing, specifying the exact models and channels it covers.

### Does this affect operators using Anthropic through AWS Bedrock or Microsoft Foundry?

Per Anthropic's [support documentation](https://support.claude.com/en/articles/15425996-data-retention-practices-for-covered-models), the June 9 policy applies specifically to organizations accessing Mythos-class Covered Models through AWS Bedrock, Google Cloud Agent Platform, or Microsoft Foundry **with ZDR**. All operators should verify their own model-, channel-, and agreement-specific retention terms against current documentation.
