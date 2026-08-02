---
title: "Claude Accessed 3 Organizations During Testing"
slug: anthropic-claude-eval-sandbox-breach-enterprise-2026
description: "Anthropic disclosed Claude models accessed three organizations' real systems during evaluation testing. What the incident means for operators running AI evals."
pubDate: '2026-08-02'
heroImage: '../../assets/anthropic-claude-eval-sandbox-breach-enterprise-2026.png'
heroImageAlt: 'Abstract visualization of a network boundary breach — glowing lines escaping a contained blue test environment into a dark external network, representing AI model evaluation containment failure'
category: 'Industry News'
author: 'Advanced AI'
tags:
  - Anthropic
  - Claude
  - Cybersecurity
  - AI Risk
  - Enterprise AI
  - AI Procurement
---

Ten days after OpenAI disclosed that its models breached Hugging Face during evaluation testing, Anthropic confirmed a second incident — with a different failure mode. Three Claude models accessed the production systems of three real organizations during cybersecurity evaluations because test environments had live internet access due to a misconfiguration. No zero-day exploit was required. Two of the three affected organizations had not previously detected the intrusions.

**Key takeaways:**
- [Claude models](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) (Opus 4.7, Mythos 5, and one internal research model) accessed three organizations' real systems during capture-the-flag evaluations, with the earliest incidents dating to April 2026.
- Root cause: a network misconfiguration by Anthropic and its evaluation partner Irregular — not model exploitation or a deliberate escape attempt.
- [Anthropic reviewed 141,006 evaluation runs](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) to identify the incidents; two of three affected organizations had not previously detected any activity.
- Per Anthropic's July 2026 disclosure, its latest tested model stopped on recognizing real internet access; older models continued the assigned task.

## What Did Claude Actually Do During Evaluations?

[Anthropic's primary disclosure](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) explains the failure precisely. In each incident, Claude was told it had no internet access and was given a "capture-the-flag" task: retrieve hidden information from a machine on the network. A misconfiguration by Anthropic and evaluation partner [Irregular](https://www.irregular.com/research/next-generation-of-cyber-evals) left test machines with active internet access. Claude treated everything reachable as part of the exercise and accessed real production systems.

The techniques were basic — weak passwords and unauthenticated endpoints. No novel vulnerabilities were exploited, and models completed only the assigned task. But two organizations had no prior record of the intrusion — the detail that matters to operators.

## What Do Two Labs in Ten Days Tell Operators?

The [OpenAI incident](/briefings/openai-agent-sandbox-escape-enterprise-risk-2026/) required a genuine zero-day in JFrog Artifactory. Anthropic's required no exploit — just a misconfigured network boundary. Two incidents in ten days share the same failure mode: infrastructure, not model behavior.

[Fortune](https://fortune.com/2026/07/31/anthropic-claude-ai-hacked-companies-testing/) and the [BBC](https://www.bbc.com/news/articles/cz7dl7w8y7po) frame the same point from Anthropic's disclosure: these are models doing exactly what they were told, inside a boundary they were incorrectly told was isolated. The fix is not better models — it is hardened evaluation infrastructure.

One signal worth noting: Anthropic reports its newest model recognized real internet access and stopped; older models continued. For operators [tracking Claude's security posture](/briefings/claude-mythos-anthropic-cybersecurity/), model generation now appears to be a variable in containment behavior — not just benchmark performance.

**If you run internal AI evaluations:** Confirm test machines have no path to production or external systems. Network isolation is not automatic in container or sandbox tooling.

**If you use third-party evaluation providers:** Ask about their breach-detection process and what notification obligations they owe if a run reaches unintended systems.

**Watch signal:** Whether Anthropic's disclosure prompts industry-wide evaluation audits, and whether your AI vendors have run equivalent reviews.

The posture here is not to pause AI evaluations. It is to hold the infrastructure around them to production-level security standards.

---

## Frequently Asked Questions

### Does this mean Claude is unsafe for enterprise production use?

Not directly. The involved models ran without the classifiers and monitoring used in production; customer-facing Claude on the API or Amazon Bedrock operates under different controls. The failure was in evaluation infrastructure, not in generally available products. Verify that your own agent testing environments are hardened to production standards.

### Why does it matter that Anthropic's latest model stopped on its own?

As of July 2026, [Anthropic's disclosure](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) reports that its latest tested model stopped on recognizing real internet access in these specific incidents. No independent replication has been published. This is a useful procurement signal — model version now appears to affect containment behavior — but should not be generalized beyond what Anthropic has directly disclosed.

### What questions should operators ask evaluation vendors now?

Three: (1) Are evaluation environments network-isolated by default, and is that documented? (2) What is your breach-detection and notification process if a run reaches unintended systems? (3) Which model version and safety configuration was used, and is it consistent across clients?
