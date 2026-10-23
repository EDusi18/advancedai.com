---
title: "OpenAI Decisions API: Cheap Calls, Costly Errors"
description: "OpenAI’s Decisions API makes classification faster and cheaper, but operators should test error costs, escalation thresholds, and data controls first."
pubDate: 2026-10-23
heroImage: "../../assets/openai-decisions-api-bounded-workflow-test-2026.svg"
heroImageAlt: "A stream of business requests passing through three bounded decision gates labeled choice, score, and probability before human review"
category: "Industry News"
---

OpenAI has made its **Decisions API** generally available for fast, bounded judgments such as classifying a request, choosing a route, or scoring severity. The low price makes high-volume automation easier to justify. It does not make wrong routing cheap. Operators should **run a small test** that prices false positives, false negatives, and human escalation before allowing the API to control consequential workflows.

## Key Takeaways

- Decisions returns a probability, predefined choice, or rubric score.
- OpenAI charges for input tokens, with no output-token fee.
- Bounded answers simplify integration but do not establish business accuracy.
- Test error costs and escalation rules before automating routing.

## What did OpenAI make generally available?

[OpenAI’s October 22 announcement](https://openai.com/index/decisions-api/) says the GPT-6 Luna-powered endpoint is now generally available after public beta. It accepts text, images, and structured JSON, and returns one of three bounded answer types: a probability, a choice from supplied options, or a score against ordered levels.

OpenAI says Decisions can run up to ten times faster than GPT-6 Luna through the Responses API. Its [developer guide](https://developers.openai.com/api/docs/guides/decisions) allows up to 400 questions in one request and supports prompt caching, US and EU regional processing, and eligible Zero Data Retention and HIPAA configurations. Those are product capabilities, not independent evidence of accuracy in a buyer’s workflow.

The [published rate](https://developers.openai.com/api/docs/pricing) is $0.10 per million input tokens and $0.01 per million cached input tokens, with no output-token charge. That can make the model bill almost invisible beside integration and review labor. It can also encourage teams to automate decisions before measuring the cost of a wrong answer.

## Why is a bounded answer not a business rule?

A choice such as “continue, retry, or escalate” is easier for software to consume than free-form text. The application still decides what evidence the model sees, what confidence is acceptable, and which errors require human review. A high probability is an estimate, not authorization.

That distinction matters in support triage, invoice coding, fraud review, lead routing, and agent tool selection. A false negative can hide an urgent case; a false positive can flood a review queue. The same aggregate accuracy can therefore produce very different operating costs.

This is the inexpensive decision layer missing from many agent stacks, but it should sit inside controls rather than replace them. Our earlier [AI agent explainer](/briefings/ai-agents-explained-how-they-work/) separates model judgment from permissions and execution. The [enterprise spend-controls briefing](/briefings/openai-enterprise-spend-controls-admin-2026/) shows why usage visibility also belongs in the operating design.

## How should operators test the Decisions API?

**Run a small shadow test** on roughly 200 historical, labeled decisions from one low-risk workflow. Keep the API out of the live path while you compare its choices with the actual outcome. Measure false positives, false negatives, abstentions, latency, reviewer time, and remediation cost by customer or case segment.

Then set two thresholds: one for automatic routing and one for mandatory review. Send ambiguous cases to a person, log the input version and decision result, and rerun the test when instructions, categories, upstream data, or the model changes. OpenAI’s [data-control documentation](https://developers.openai.com/api/docs/guides/your-data) should be checked against the effective account configuration, especially for images or regulated data. [NIST’s generative-AI risk profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) supports documenting human oversight, monitoring, and incident response rather than treating deployment as a one-time approval.

The posture is **test, not default-route yet**. Watch for independent error distributions, customer deployment evidence, clearer version-change controls, and stable measured performance on your own edge cases.

## FAQs

### Is the Decisions API a cheaper replacement for the Responses API?

Only for bounded questions that can be expressed as a probability, predefined choice, or ordered score. Generative tasks still need a different endpoint.

### Can a confidence score approve a consequential action?

It can inform a rule, but the operator must define thresholds, permissions, review paths, and acceptable error costs. Sensitive actions should fail closed.

### What is the safest first use?

Start with a reversible, high-volume classification task such as internal queue routing. Run it in shadow mode before allowing its result to change a live workflow.
