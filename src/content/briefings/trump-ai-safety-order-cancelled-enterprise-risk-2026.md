---
title: "No Federal AI Safety Review: What Operators Do Now"
description: "Trump cancelled a planned AI safety EO after last-minute tech lobbying. Here's what no federal model review means for your vendor contracts."
pubDate: 2026-05-26
author: "Advanced AI"
category: "Industry News"
tags: ["AI", "AI governance", "enterprise risk", "regulation"]
heroImage: "../../assets/trump-ai-safety-order-cancelled-enterprise-risk-2026.png"
heroImageAlt: "Split image of a government document stamped WITHDRAWN next to a corporate AI vendor evaluation checklist"
editorialStatus: "published"
tier: "briefing"
reviewOwner: "Tavi"
publishApproval: "APPROVED_BRIEFING"
sourceCount: 5
recommendationPosture: "ask sharper vendor questions"
knownWeaknesses:
  - "Politico and Axios articles return 403 on direct automated fetch (paywalled/bot-blocked); both cited per confirmed search-snippet text — Politico on Sacks concerns, Axios on NIST voluntary testing context."
  - "Exact list of all CEOs invited to the cancelled signing is unconfirmed; Musk, Zuckerberg, and Sacks named consistently across NBC News, Guardian, and Washington Post reports."
  - "Whether or when a revised EO could be signed is speculative; framed as open question throughout."
revisionNotes: |
  New draft, May 26, 2026 — Avdi.
  Story: Trump pulled a planned AI executive order on May 22 that would have created voluntary pre-release government safety review for frontier models. Last-minute lobbying by Musk, Zuckerberg, and former AI czar David Sacks caused the reversal. The trigger was Anthropic's Claude Mythos Preview, which can autonomously find thousands of cybersecurity vulnerabilities. Anthropic's response is Project Glasswing — a private-sector defensive consortium, not a public standard.
  Sources checked: NBC News (HTTP 200), Guardian (HTTP 200), Anthropic Glasswing page (HTTP 200). Politico and Axios confirmed via search snippet content; both return 403 on direct fetch.
  Internal links: ai-zero-day-exploit briefing and anthropic-compute-deal briefing.
  Pre-FAQ word count target: 400-700. Estimated: ~510. Total estimated: ~690 (under 800 ceiling).
---

On May 22, 2026, President Trump pulled a planned executive order that would have created a voluntary government safety review of frontier AI models before public release. Last-minute phone calls from Elon Musk, Mark Zuckerberg, and former White House AI czar David Sacks persuaded Trump to stand down. The order is withdrawn — for now. The practical result for enterprise operators: no federal safety backstop when procuring AI.

**Key takeaways:**
- Trump cancelled an AI EO on May 22 after last-minute lobbying from Musk, Zuckerberg, and Sacks.
- The order would have established voluntary pre-release government review of frontier AI models.
- Anthropic's Claude Mythos — which can autonomously find thousands of cybersecurity vulnerabilities — triggered the White House's concern.
- Anthropic's Project Glasswing is a private defensive consortium, not a public enterprise procurement standard.
- No federal review gate means operators must build their own AI vendor safety due diligence now.

---

## What Was the Order Going to Do?

The cancelled executive order had two components, [according to NBC News](https://www.nbcnews.com/tech/tech-news/trump-scraps-signing-landmark-executive-order-regulating-ai-rcna346288): a cybersecurity section and a frontier model review section. The model review piece would have directed CISA, the White House's Office of the National Cyber Director, and the Office of Science and Technology Policy to build a framework for government access to advanced models before their public release — on a voluntary basis.

The trigger was Anthropic's Claude Mythos Preview, which has [already found thousands of high-severity vulnerabilities](https://www.anthropic.com/glasswing) across major operating systems and web browsers. Anthropic chose not to release Mythos publicly; instead, it formed [Project Glasswing](https://www.anthropic.com/glasswing) — a consortium with Amazon, Apple, Cisco, CrowdStrike, Google, JPMorganChase, Microsoft, Nvidia, and Palo Alto Networks — to use Mythos for defensive security purposes. Vice President Vance publicly acknowledged the risk: "A bad actor could use Mythos to target various cybersecurity vulnerabilities."

The EO was pulled hours before signing. David Sacks raised concerns that a voluntary review framework could eventually become a mandatory precedent, [according to Politico](https://www.politico.com/news/2026/05/21/trump-ai-order-sacks-00933295). Trump told reporters: "We're leading China, we're leading everybody, and I don't want to do anything that's going to get in the way of that lead."

The [Guardian reported](https://www.theguardian.com/technology/2026/may/23/trump-ai-order-big-tech) that Musk, Zuckerberg, and Sacks each made personal calls to the president, warning that even voluntary vetting could act as a brake on AI development. Whether or when a revised order could return is unclear.

## What Does This Mean for How You Buy AI?

The cancelled EO was far from a guarantee of safety — it was voluntary, and it was still being designed. But its absence removes a potential external anchor for enterprise AI procurement: the assumption that frontier models would have passed any government-level review before reaching your workflows.

What this changes for operators:

**No federal pre-release review gate** means AI vendors can ship new models on their own timelines, with their own internal testing standards and whatever voluntary programs they choose to join. NIST's Center for AI Safety and Innovation offers voluntary testing that [some companies already use](https://www.axios.com/2026/05/21/trump-ai-executive-order-postponed-why), but participation is not disclosed or standardized across the industry. Glasswing membership is notable but narrowly scoped — it is a cybersecurity defense program, not a general safety certification available to enterprise buyers.

This gap matters most in regulated industries — financial services, healthcare, legal — where AI model safety has both compliance and liability dimensions. If you have assumed a regulatory floor was coming, that assumption is now weaker.

**Questions to ask your AI vendors now:**
1. Do you participate in NIST's voluntary AI safety testing? Can you share results?
2. What is your formal pre-release red-teaming process, and how is it documented for customers?
3. When a new model version changes behavior that affects my workflows, how are enterprise customers notified?
4. Does your safety evaluation specifically address offensive cybersecurity capabilities?

Operator posture: **ask sharper vendor questions** before your next contract renewal or pilot launch. The absence of a federal framework does not reduce AI risk — it transfers the due diligence burden to the buyer. Documented vendor governance is now more important, not less. For more on AI-generated offensive capabilities already in use, see our earlier briefing on [Google's confirmed AI-generated zero-day exploit](/briefings/ai-zero-day-exploit-google-threat-intelligence-2026). For context on Anthropic's supply-chain relationships, see [Anthropic's compute deal with xAI](/briefings/anthropic-compute-deal-xai-enterprise-vendor-risk-2026).

**What to watch next:** Whether Trump signs a revised executive order — the door was left open; whether NIST voluntary testing participation grows as an industry disclosure signal; and whether Glasswing-style private consortiums become a standard reference point in enterprise AI vendor questionnaires.

---

## FAQ

**Does this mean AI vendors can now release any model without oversight?**
Not exactly. AI vendors still face competitive, reputational, and contractual pressure to test models. Voluntary frameworks like NIST's Center for AI Safety and Innovation remain available. Some vendors like Anthropic have created their own pre-release programs (Glasswing). But there is now no government-mandated review process — voluntary or otherwise — that enterprise buyers can expect their AI vendors to have completed.

**Should my company pause AI vendor decisions while waiting for new regulation?**
No. Regulatory clarity is unlikely on any predictable timeline, and waiting is not a risk management strategy. The better move is to build your own vendor evaluation checklist now: require documentation of pre-release testing, red-team processes, capability change policies, and security-vulnerability disclosure procedures. That framework is useful regardless of what any future executive order requires.

**What is Project Glasswing, and does it affect AI I'm already using?**
Project Glasswing is an Anthropic-led initiative using Claude Mythos Preview to find and patch critical software vulnerabilities across major operating systems and browsers — in a controlled setting with major tech partners (Amazon, Apple, Google, Microsoft, etc.). It is a defensive cybersecurity program. It does not certify AI products for enterprise use and is not directly relevant to whether your current AI vendor tools have been independently safety-reviewed.
