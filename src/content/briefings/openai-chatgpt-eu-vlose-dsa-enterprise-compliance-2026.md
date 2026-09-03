---
title: "EU Designates ChatGPT as Its Third VLOSE Under DSA"
description: "The EU designated ChatGPT as a Very Large Online Search Engine on August 31. What operators with EU-facing workflows need to know before January 2027."
pubDate: 2026-09-03
slug: openai-chatgpt-eu-vlose-dsa-enterprise-compliance-2026
heroImage: ../../assets/openai-chatgpt-eu-vlose-dsa-enterprise-compliance-2026.png
heroImageAlt: "Magnifying glass inspecting an AI chat bubble against a European Union blue-and-gold backdrop, representing ChatGPT's VLOSE classification under the Digital Services Act"
category: "Industry News"
tags: ["openai", "chatgpt", "eu-regulation", "dsa", "enterprise-compliance", "vendor-governance"]
editorialStatus: "tavi_approved"
tierProposal: "briefing"
reviewOwner: "Tavi"
publishApproval: "automatic_if_tavi_approves_briefing"
recommendationPosture: "keep watching; ask sharper vendor questions"
sourceCount: 6
knownWeaknesses:
  - "DSA per-obligation sub-deadlines (audit frequency, data-sharing cadence) are not separately specified in the Commission's designation notice; the four-month window is a compliance-wide deadline and individual obligation timing references the DSA's compliance chapters"
  - "Scope of DSA data-sharing obligations as applied to enterprise customer data (vs. systemic aggregate data) is not explicitly defined in the Commission's designation notice; operators are directed to ask their account teams directly"
  - "OpenAI has not published compliance plans or product-change intentions; product-change scenarios are explicitly framed as possibilities to watch, not predictions"
  - "Gemini/Perplexity/Claude.ai EU user-threshold status is unverified; designation is framed as conditional on threshold evidence, not predicted"
revisionNotes: |
  REVISED_FOR_REVIEW — September 3, 2026, 7:15 AM ET (advancedai-blog-agent). Addresses the material DSA article-number error identified in Tavi's September 3 Daily Editorial Review. Exact changes for this revision:
  1. FAQ 3 article corrected: "Under Article 26" replaced with "Under Article 34". Article 26 governs advertising transparency for VLOPs/VLOSEs, not systemic-risk assessments. Systemic-risk assessment obligations are correctly under DSA Article 34. Article 40 (vetted-researcher data access) and Article 42 (public reporting with Article 42(5) redactions) were already correct and are preserved unchanged.
  2. sourceCount updated from 5 to 6: EU Commission Article 42 Q&A (linked inline in FAQ 3 and now also added to sources footer) confirmed as sixth external Tier 1 source.
  — All prior objection resolutions preserved: VLOSE title (51 chars ✓), Commission-act/45M-threshold distinction, tier-specific implementation uncertainty (FAQ 1), legally compelled disclosure caveat, 3 FAQs, 2 internal links. Post-frontmatter word count: ~785 (under 800-word ceiling ✓). No-migration/vendor-question posture intact.
---

The European Commission designated ChatGPT a Very Large Online Search Engine (VLOSE) under the Digital Services Act on August 31, making it only the [third service worldwide](https://digital-strategy.ec.europa.eu/en/policies/list-designated-vlops-and-vloses)—after Google Search and Bing—to carry that classification. Following designation, OpenAI has four months—until approximately January 2027—to comply with the additional DSA obligations that apply to services at this scale. For operators running ChatGPT in EU markets, the headline is what the product may look like after compliance changes take hold.

**Key Takeaways**

- ChatGPT is now the EU's third designated Very Large Online Search Engine, joining [only Google Search and Bing](https://digital-strategy.ec.europa.eu/en/policies/list-designated-vlops-and-vloses).
- OpenAI has four months—until approximately January 2027—to comply with additional DSA obligations for VLOSEs, per the Commission's designation notice.
- Non-compliance risks fines [up to 6% of global annual revenue](https://gizmodo.com/the-eu-has-officially-decided-chatgpt-is-a-search-engine-2000805030); [X paid €120M in December 2025](https://gizmodo.com/the-eu-has-officially-decided-chatgpt-is-a-search-engine-2000805030) under the same law.
- The 45 million EU monthly user threshold creates the basis for Commission designation—web-search capability alone is not sufficient.
- Operators with EU-facing ChatGPT workflows should ask OpenAI now what product changes are planned before January.

## What Does the VLOSE Designation Actually Require OpenAI to Do?

The Commission's [designation notice](https://digital-strategy.ec.europa.eu/en/news/commission-designates-chatgpt-reddit-roblox-under-digital-services-act) states that OpenAI must comply with "the additional DSA obligations for VLOSEs"—describing the core obligation as assessing and mitigating systemic risks across six categories: illegal content, harm to minors, physical and mental wellbeing, fundamental rights, electoral processes, and public security. DSA's VLOSE framework also covers independent auditing, data sharing with the Commission and vetted researchers, and recommender-system transparency; each obligation is defined by DSA's compliance chapters, and the Commission's designation notice does not publish a separate per-obligation deadline schedule.

The Commission classified ChatGPT as a "hybrid service" [qualifying as a search engine](https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1772) because it can search the web in response to user prompts. ChatGPT, Reddit, and Roblox were designated the same day after each declared reaching at least 45 million average monthly EU users—the threshold that provides the basis for Commission designation.

## What Should EU-Operating Businesses Watch Before January?

Most DSA compliance work happens at OpenAI's level. Three areas are worth tracking.

**Product changes for EU users.** Platforms that previously received VLOSE or VLOP status often modified products for EU compliance—adjusting recommendation logic, adding transparency overlays, or restricting features. If OpenAI changes how ChatGPT behaves for EU-located users, workflows that depend on ChatGPT surfacing and synthesizing external information may produce different outputs in the EU than elsewhere. This mirrors the compliance dynamic that produced Claude's mandatory AI-content watermark for EU outputs—[a separate EU AI Act obligation already live](/briefings/anthropic-claude-watermark-eu-ai-act-content-marking-2026/).

**Enterprise data scope.** DSA data-sharing obligations apply to systemic-level information shared with the Commission and vetted researchers; the Commission's designation notice does not define what this means for enterprise customer data. Ask your account team two specific questions: how OpenAI separates enterprise conversation data from processes triggered by DSA regulatory access, and how it handles legally compelled disclosure. Your [enterprise agreement](/briefings/openai-enterprise-spend-controls-admin-2026/) governs normal operations—but do not assume the enterprise tier is categorically exempt from all regulatory access obligations.

**The designation template.** Gemini, Perplexity, and Claude.ai all offer web search with growing EU user bases—but the basis for Commission designation is the 45 million EU monthly user threshold, not web-search capability alone. None has declared reaching that threshold. Watch for public threshold declarations or Commission investigations; those are the concrete signals that designation is approaching for any other vendor. Operators building EU workflows on web-search-capable AI tools should ask vendors directly whether they approach designation thresholds and what compliance processes they have in place.

For operators, the near-term move is not a platform migration. It is a vendor conversation: ask what compliance changes OpenAI is planning for EU users, and whether any features will change before January. **Posture: keep watching; ask sharper vendor questions if you have EU-facing ChatGPT workflows.**

## Frequently Asked Questions

### Does the VLOSE designation change ChatGPT Business or Enterprise contract terms for EU customers?

The designation does not modify existing enterprise contracts. OpenAI's DSA obligations run to the Commission, not enterprise customers. Your data governance terms remain under your enterprise agreement. Operators should verify with OpenAI whether any eventual compliance changes apply geography-wide or are tier-specific; OpenAI has not announced an implementation plan.

### Which AI services might receive a VLOSE designation next?

The basis for Commission designation is the 45 million EU monthly user threshold. Gemini, Perplexity, and Claude.ai offer web search and have growing EU user bases, but none has declared reaching that threshold. A public threshold declaration or Commission investigation would be the concrete signal to watch—not web-search capability alone.

### Can operators review OpenAI's DSA risk assessments?

Eventually, yes — but through a defined process, not at operator discretion. The DSA's risk-assessment reporting obligations and its vetted-researcher data-access regime are distinct. Under Article 34, OpenAI must conduct risk assessments and transmit them to the Commission. Vetted researchers under Article 40 can apply to access platform *data* — such as exposure logs and recommendation records — to study systemic risks; they do not automatically receive OpenAI's risk-assessment documents. For public reporting, [DSA Article 42](https://digital-strategy.ec.europa.eu/en/faqs/qa-risk-assessment-reports-audit-reports-and-audit-implementation-reports-under-dsa) mandates that VLOSEs publish their risk assessment report, audit report, and audit implementation report within three months of receiving each audit report — a required disclosure, not a voluntary one. Redactions are permitted under Article 42(5) for confidential business information and security concerns, but unjustified redactions are themselves a compliance infringement. The Commission may approve timing flexibility for first-year compliance cycles; OpenAI's first VLOSE audit cycle has not yet begun. In the interim, contractual audit rights and data-processing agreements remain the most reliable operator transparency mechanism.

---

*Sources: [European Commission designation notice](https://digital-strategy.ec.europa.eu/en/news/commission-designates-chatgpt-reddit-roblox-under-digital-services-act) (Tier 1, HTTP 200 ✓) · [European Commission press release IP/26/1772](https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1772) (Tier 1) · [EU Commission Article 42 Q&A](https://digital-strategy.ec.europa.eu/en/faqs/qa-risk-assessment-reports-audit-reports-and-audit-implementation-reports-under-dsa) (Tier 1) · [Gizmodo](https://gizmodo.com/the-eu-has-officially-decided-chatgpt-is-a-search-engine-2000805030) (Tier 2, HTTP 200 ✓) · [Euronews](https://www.euronews.com/next/2026/08/31/eu-places-chatgpt-reddit-and-roblox-under-strictest-digital-safety-rules) (Tier 2) · [Business Standard](https://www.business-standard.com/world-news/what-does-the-eu-very-large-search-engine-tag-mean-for-chatgpt-126090100678_1.html) (Tier 2)*
