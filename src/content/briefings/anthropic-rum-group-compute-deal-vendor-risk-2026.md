---
title: "What Anthropic's Reported $13.7B RUM Deal Means for Buyers"
description: "The Information reports Anthropic signed a $13.7B, 6-year compute deal with RUM Group. Maysville data center isn't built. What operators should ask now."
pubDate: 2026-09-14
heroImage: "../../assets/anthropic-rum-group-compute-deal-vendor-risk-2026.png"
heroImageAlt: "Abstract data-center infrastructure and contract documents representing Anthropic’s reported long-term compute agreement with RUM Group"
---

[The Information reports](https://www.theinformation.com/articles/anthropic-strikes-13-7-billion-compute-deal-trump-linked-rum-group) that Anthropic signed a six-year, $13.7 billion compute agreement with RUM Group — formerly Rumble, [backed in 2021 by JD Vance's Narya Capital and Peter Thiel](https://www.forbes.com/sites/kylemullins/2024/12/20/the-jd-vance-backed-youtube-clone-rumble-is-finally-relevant-but-its-running-out-of-cash/). RUM Group's [8-K filed August 24](https://www.sec.gov/Archives/edgar/data/1830081/000121390026092801/ea0303131-8k_rumgroup.htm) named only "an unaffiliated U.S.-based third party cloud customer"; neither company has confirmed Anthropic's identity publicly. The Maysville, Georgia data center is not yet built, and RUM Group has not secured financing to construct it or purchase GPUs.

## Key Takeaways

- The Information reports Anthropic committed $13.7B over six years to RUM Group for GPU services at an unbuilt Georgia data center; neither company has confirmed the buyer's identity publicly.
- RUM Group's early backers include JD Vance's Narya Capital and Peter Thiel; Tether entities reported approximately 50.3% beneficial ownership of Class A shares in a September 4 SEC filing.
- No routing or contract change has been announced for AWS Bedrock or Google Cloud Vertex AI operators; direct Anthropic API customers should verify which infrastructure their agreement references.
- Anthropic received warrants for up to 50.8M RUM shares at one cent each — a financial tie uncommon in standard compute contracts.
- RUM Group has no confirmed financing for Maysville; Anthropic holds a contractual exit on the third tranche.

## What Did Anthropic Actually Sign?

RUM Group's [8-K filed August 24](https://www.sec.gov/Archives/edgar/data/1830081/000121390026092801/ea0303131-8k_rumgroup.htm) describes a $13.7 billion GPU services agreement with "an unaffiliated U.S.-based third party cloud customer," split into three tranches of roughly $4.57 billion each. [The Information reported](https://www.theinformation.com/articles/anthropic-strikes-13-7-billion-compute-deal-trump-linked-rum-group) on September 13 that Anthropic is the buyer; neither company confirmed this publicly as of Sunday evening.

Anthropic also receives a 10-year warrant for up to 50.8 million RUM Class A shares at $0.01 each — approximately 18% of Class A outstanding, worth an estimated $364 million at Friday's close, [per TECHi's analysis of the filing](https://www.techi.com/anthropic-rum-group-13-7-billion-gpu-deal-warrant/). Half vests on Maysville GPU purchases; the other half activates only if Anthropic opts into 400–500 MW of additional capacity at a second RUM facility. Anthropic must approve RUM Group's delivery timeline before third-tranche obligations apply — a contractual exit on roughly one-third of the commitment.

Tether entities reported approximately 50.3% beneficial ownership of RUM Group's Class A shares per [TECHi's analysis](https://www.techi.com/anthropic-rum-group-13-7-billion-gpu-deal-warrant/) of the September 4 Schedule 13D/A. [NewsBytesApp reports](https://www.newsbytesapp.com/news/business/anthropic-signs-13-7b-ai-compute-deal-with-rum-group/story) that RUM Group has not secured financing to build the Maysville site or procure GPUs.

## What Should Enterprise Operators Actually Ask?

No routing or contract change has been announced for AWS Bedrock or Google Cloud Vertex AI operators. Direct API customers should verify which infrastructure their agreement references.

This deal extends an emerging pattern of [long-term specialty compute commitments](/briefings/anthropic-compute-deal-xai-enterprise-vendor-risk-2026/) alongside hyperscaler relationships. RUM Group introduces a distinct risk profile: no secured financing, new construction required, ownership more complex than a hyperscaler contract. Log it in vendor risk documentation alongside Anthropic's [Series H positioning](/briefings/anthropic-series-h-965b-enterprise-buyers-2026/) — not a reason to exit today.

Ask your Anthropic account team which infrastructure serves production workloads in 2027–2028, and whether any planned migration would trigger DPA or subprocessor updates. Watch for those revisions as the signal that Maysville capacity is entering the production path.

---

## Frequently Asked Questions

**Does this deal change my Anthropic contract or data terms today?**
No routing or contract change has been announced for AWS Bedrock or Google Cloud Vertex AI operators. Absence of an announcement does not confirm that no agreement-specific term has changed — verify any routing, data-term, or subprocessor effects with your AWS Bedrock, Google Cloud Vertex AI, or direct Anthropic account team. Watch for subprocessor list or DPA notices as a signal that Maysville capacity may be approaching production.

**Why does Tether's ownership of RUM Group matter to enterprise risk teams?**
For most commercial operators it isn't a direct contractual issue today. Regulated enterprises — financial services, healthcare, government-adjacent sectors — should note the ownership structure in vendor risk documentation and reassess if Anthropic's compute infrastructure shifts meaningfully toward RUM Group capacity.

**What happens if RUM Group can't secure financing to build Maysville?**
Anthropic's third-tranche exit clause provides a contractual off-ramp if the facility falls behind schedule. A failed or delayed build would require Anthropic to source alternative compute; the impact on capacity plans and service availability is unknown and should be monitored against future disclosures.
