---
title: "Anthropic Buys the SDK Tool OpenAI and Google Relied On"
description: "Anthropic acquired Stainless for reportedly over $300M and immediately shut its SDK generator to rivals. What operators building on AI APIs should do now."
pubDate: "2026-05-19"
heroImage: "../../assets/anthropic-stainless-sdk-acquisition-developer-toolchain-2026.png"
category: "Industry News"
author: "Advanced AI"
editorialStatus: "needs_review"
tierProposal: "briefing"
reviewOwner: "Tavi"
publishApproval: "automatic_if_tavi_approves_briefing"
sourceCount: 4
recommendationPosture: "ask sharper vendor questions"
knownWeaknesses:
  - "$300M+ price reported by The Information (paywalled); Anthropic did not disclose deal terms. TechCrunch and multiple outlets confirmed the figure via The Information; cited as 'reportedly' throughout."
  - "Stainless customer list (enterprises using competitor SDKs) is not publicly enumerated beyond named companies (OpenAI, Google, Cloudflare, Replicate, Runway)."
revisionNotes: |
  First revision (May 19, 2026 — Avdi REVISE):
  - Cut body from ~954 words to ~530 pre-FAQ words — now within briefing spec (400–700 pre-FAQ, under 800 total).
  - Removed standalone "What Is Stainless" H2 section; folded essential context into the opening paragraph.
  - Compressed numbered vendor question list from 4 items to 3 tight bullet points.
  - Reduced FAQ from 3 to 2; merged "$300M" context into opening; retained MCP neutrality and broken SDK FAQs as most operator-relevant.
  - sourceCount corrected from 5 to 4: anthropic.com, stainless.com, techcrunch.com, speakeasyapi.dev (all body-linked; Speakeasy is a product reference, not a reporting source, but is an external body link and useful operator redirect).
  - Hero image asset added (generated May 19, 2026).
  - Original sources: Anthropic press release (anthropic.com, May 18 — HTTP 200), Stainless blog post (stainless.com, May 18 — HTTP 200), TechCrunch article (May 18 — HTTP 200) for $300M figure and investor detail.
  - Internal links: microsoft-claude-code-github-copilot-ai-tool-vendor-2026, mcp-agent-integration-layer-business-software.
---

**Key takeaways:**
- [Anthropic acquired Stainless](https://www.anthropic.com/news/anthropic-acquires-stainless), the SDK and MCP server tooling startup used by OpenAI, Google, and Cloudflare, for reportedly over $300 million.
- Stainless immediately shut its hosted SDK generator — no new projects or SDKs for non-Anthropic users.
- Existing customers keep their generated SDKs and have full rights to modify and maintain them independently.
- Anthropic, which created the MCP open standard, now also owns the leading MCP server tooling.
- Operator posture: **ask sharper vendor questions** about SDK dependencies, MCP tooling neutrality, and platform exit cost.

On May 18, 2026, [Anthropic acquired Stainless](https://www.anthropic.com/news/anthropic-acquires-stainless) — the startup whose software automatically generated and maintained the official client SDKs for OpenAI, Google, Cloudflare, and dozens of other AI providers. [TechCrunch reported](https://techcrunch.com/2026/05/18/anthropic-has-acquired-the-dev-tools-startup-used-by-openai-google-and-cloudflare/) the deal exceeded $300 million, citing The Information. As of the same day, Stainless wound down all hosted products. No new SDKs will be generated through Stainless for any non-Anthropic customer. According to [Stainless's own announcement](https://www.stainless.com/blog/stainless-is-joining-anthropic/), roughly a quarter of the world's professional developers have used an SDK or documentation site Stainless generated. The team and tooling are now exclusively Anthropic's.

## What Changes for Operators Building on AI APIs?

The immediate impact on your existing integrations is limited. If your engineering team uses an OpenAI, Google, or Cloudflare SDK that Stainless generated, those SDKs work today, and you own them outright. The issue is forward maintenance: the automated pipeline that kept SDKs in sync with upstream API changes no longer exists for non-Anthropic customers. When your AI provider updates its API, the old workflow of regenerating an updated SDK through Stainless is gone. Your team will need to maintain manually or migrate to an alternative like [Speakeasy](https://www.speakeasyapi.dev/).

The structural signal matters more than the immediate inconvenience. Stainless also built the leading toolchain for [Model Context Protocol](https://advancedai.com/analysis/mcp-agent-integration-layer-business-software/) (MCP) servers — the connectivity layer for AI agents. Anthropic created MCP as an open standard and now owns the primary tooling to implement it. Open standard plus proprietary tooling is a meaningfully different risk profile than a fully open stack.

This follows last week's [Claude Code multi-agent redesign story](https://advancedai.com/briefings/claude-code-multi-agent-redesign-2026/) exactly: the tooling layer of AI development is consolidating fast, and model vendors are making the infrastructure decisions that determine your integration options — with or without advance notice.

## What Should Operators Ask Their Vendors Now?

**Recommendation: ask sharper vendor questions.**

Your existing SDKs are not breaking — but your next AI platform evaluation should include tooling-layer questions you may not have asked before:

- **Which SDKs in our stack were Stainless-generated?** Check SDKs from OpenAI, Google, Cloudflare, Replicate, or Runway for Stainless attribution in the README or license file.
- **What is our maintenance plan for those SDKs?** Options are manual maintenance, migration to Speakeasy or similar, or direct HTTP calls. None are urgent, but all require a decision before the next upstream API change.
- **If a provider controls both the MCP standard and the dominant MCP tooling, what does vendor neutrality actually look like?** Ask for specifics on interoperability commitments, not just open-standard reassurances.

Watch for: whether OpenAI or Google respond by acquiring or building competing SDK infrastructure; and whether Anthropic's MCP tooling ownership translates into measurable developer-onboarding advantages in the next round of enterprise AI platform evaluations.

---

## FAQ

### Does Anthropic acquiring Stainless break existing SDKs built by other companies?

No. SDKs already generated through Stainless continue to work. Existing customers own their generated SDKs outright and can modify and extend them freely. The change is that the hosted generator — used to keep SDKs current as APIs change — is no longer available to non-Anthropic customers going forward.

### Is MCP still a neutral open standard now that Anthropic controls the leading MCP tooling?

The MCP specification remains openly published and available to any developer or vendor. But controlling the primary tooling for generating MCP servers gives Anthropic an onboarding speed and ecosystem-momentum advantage. Operators should treat "open standard, proprietary tooling" as a nuanced vendor relationship — worth flagging in your AI platform due diligence, not a lock-in crisis requiring immediate action.
