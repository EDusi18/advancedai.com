---
title: "Microsoft's First AI Models Land in GitHub Copilot"
description: "Microsoft launched MAI-Code-1-Flash and MAI-Thinking-1 at Build 2026 — its first in-house AI models. With Copilot now on token billing, which model you pick directly affects cost."
pubDate: 2026-06-03
heroImage: "../../assets/microsoft-mai-models-copilot-enterprise-2026.png"
heroImageAlt: "Microsoft Build 2026 keynote stage with MAI model logos displayed on large screens"
category: "Industry News"
author: "Advanced AI"
editorialStatus: "published"
tier: "briefing"
reviewOwner: "Tavi"
publishApproval: "APPROVED_BRIEFING"
sourceCount: 4
knownWeaknesses:
  - "McKinsey '10x cost efficiency vs GPT-5.5' is Mustafa Suleiman's onstage claim at Build 2026 — not independently benchmarked"
  - "MAI-Code-1-Flash pricing on GitHub listed as being finalized; figures may change before GA"
  - "MAI-Thinking-1 is private preview only; no independent benchmark comparison available yet"
recommendationPosture: "ask sharper vendor questions"
revisionNotes: "Cut body from ~839 to ~450 pre-FAQ words (total ~630, under 800 ceiling). Added all 4 external source links in-body at specific claims: Microsoft Build blog (intro), GitHub pricing page (pricing bullet), microsoft.ai announcement (MAI-Code-1-Flash section), CNBC Build 2026 (MAI-Thinking-1 section). Removed: adaptive solution-length control paragraph, Fireworks AI/third-party availability sentence, duplicate Microsoft-independence paragraph. Compressed 'Why Does Model Choice Matter' section. Preserved all vendor-skepticism caveats, 3 FAQs, and operator posture. Internal links reduced from 3 to 2 unique targets (enterprise-ai-agent-token-cost-reckoning used once, microsoft-openai-decoupling used once). sourceCount remains 4."
---

GitHub Copilot users can now choose Microsoft-built AI models instead of routing every request through OpenAI or Anthropic. At [Build 2026 on June 2](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/), Microsoft launched **MAI-Code-1-Flash** (a coding model) and **MAI-Thinking-1** (a reasoning model) — the company's first models built entirely in-house. The timing matters: [GitHub Copilot switched to token-based billing on June 1](/briefings/enterprise-ai-agent-token-cost-reckoning-2026/). Which model your team uses now has a direct line to what you pay.

**Key takeaways:**
- MAI-Code-1-Flash is live in the GitHub Copilot model picker (VS Code); MAI-Thinking-1 is in private preview on Azure Foundry.
- Microsoft's own benchmarks: 60% fewer tokens vs. Claude Haiku 4.5 on coding tasks — independent confirmation not yet available.
- Indicative pricing: $0.75/M input and $4.50/M output tokens for MAI-Code-1-Flash — [marked "being finalized"](https://github.com/features/copilot/plans) by GitHub.
- Microsoft's AI chief claimed 10× cost efficiency vs. GPT-5.5 for McKinsey workloads — vendor-reported, not independently benchmarked.

## What Did Microsoft Launch at Build 2026?

[MAI-Code-1-Flash](https://microsoft.ai/news/introducingmai-code-1-flash/) is Microsoft's first in-house coding model. Trained on GitHub Copilot's production harnesses rather than benchmark leaderboards, it scored 51.2% vs. 35.2% for Claude Haiku 4.5 on SWE-Bench Pro — a 16-point lead — while completing tasks using up to 60% fewer tokens. It is rolling out to Copilot individual users in VS Code's model picker starting today.

**MAI-Thinking-1** is Microsoft's first in-house reasoning model, targeting enterprise architecture, compliance, and complex decision workflows. [Per CNBC's Build 2026 coverage](https://cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html), AI CEO Mustafa Suleiman said it outperformed GPT-5.5 at 10× better cost efficiency for McKinsey's workloads — a vendor-reported, workload-specific claim with no independent benchmarks yet. MAI-Thinking-1 is in private preview through Microsoft Foundry.

## Why Does Model Choice in Copilot Matter Right Now?

Model selection in Copilot was mostly a quality preference until June 1, when [GitHub switched to consumption-based billing](/briefings/enterprise-ai-agent-token-cost-reckoning-2026/). Agentic coding tasks — code review, multi-file refactoring, test generation — consume thousands of tokens per session. Defaulting to GPT-5.5 for everything means premium pricing on every token. MAI-Code-1-Flash, if its efficiency claims hold in your workflows, offers a substantially lower rate for the same task category.

This is also Microsoft's structural move toward pricing independence from OpenAI — a shift that accelerated after [the Microsoft-OpenAI relationship changed materially in April 2026](/briefings/microsoft-openai-decoupling-azure-enterprise-2026/). Running MAI models on Azure avoids OpenAI royalties, a cost advantage Microsoft can pass to enterprise customers.

**Near-term move:** Evaluate MAI-Code-1-Flash on routine tasks — inline completion, refactoring, documentation — where a cheaper, efficient model reduces consumption cost with minimal risk. Reserve frontier models for complex or high-stakes work. Ask your GitHub or Azure account team which MAI models are available under your enterprise agreement, how costs are metered, and when MAI-Thinking-1 exits preview.

---

## FAQ

**Does switching to MAI-Code-1-Flash break my existing Copilot workflows?**
No. MAI-Code-1-Flash appears as an additional choice in Copilot's model picker. Your current model defaults remain; you opt in via the picker or auto-picker. Switching is reversible.

**How does MAI-Code-1-Flash pricing compare to GPT-5.5?**
Published pricing is $0.75 per million input tokens and $4.50 per million output tokens — though GitHub notes this is still being finalized. GPT-5.5 pricing through GitHub Copilot is higher. Independent price comparisons have not yet been published; verify current rates directly with your GitHub enterprise agreement before making budget commitments.

**Should enterprises use MAI-Thinking-1 for compliance or legal workflows?**
Too early. MAI-Thinking-1 is in private preview with no independent benchmarks and no disclosed pricing. Microsoft's onstage efficiency claim (10× better cost vs. GPT-5.5 for McKinsey workloads) is vendor-reported and workload-specific. Express interest in the preview, test it on non-sensitive tasks first, and wait for peer-reviewed or customer-published comparisons before relying on it for regulated workflows.
