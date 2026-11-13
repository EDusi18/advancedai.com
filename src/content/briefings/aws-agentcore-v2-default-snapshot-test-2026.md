---
pubDate: 2026-11-13
title: "AWS Made Snapshot Runtimes the AgentCore Default"
description: "AWS now defaults new AgentCore deployments to snapshot-based runtime V2. Operators should test startup state, credentials, uniqueness, latency, and cost."
slug: aws-agentcore-v2-default-snapshot-test-2026
heroImage: ../../assets/aws-agentcore-v2-default-snapshot-test-2026.svg
heroImageAlt: "An AI agent runtime restored from a shared snapshot, with startup state separated from per-request credentials and identifiers"
category: "AI Operations"
author: "Advanced AI"
editorialStatus: "tavi_approved"
tierProposal: "briefing"
reviewOwner: "Tavi"
publishApproval: "automatic_if_tavi_approves_briefing"
sourceCount: 5
recommendationPosture: "run a small test"
knownWeaknesses:
  - "Performance and memory-saving figures are AWS-reported and lack independent production validation"
  - "The November 12 change affects newly created runtimes by default; existing AgentCore runtimes remain on their current version unless moved"
---

AWS now makes its snapshot-based AgentCore runtime the default for newly created runtimes in supported regions. The change can cut startup delay and idle-memory charges, but it is not a drop-in performance switch: startup credentials, identifiers, random state, timestamps, and tool catalogs can be frozen into every restored session. Operators should **run a small snapshot-safety test before adopting or migrating**.

**Key takeaways:**

- New AgentCore runtimes now default to V2 in supported regions.
- Existing runtimes do not move automatically.
- Snapshots can copy stale or non-unique startup state.
- Test correctness and accepted-output cost before migrating.

## What did AWS change in AgentCore?

On November 12, AWS made [AgentCore Runtime V2 the default](https://aws.amazon.com/about-aws/whats-new/2026/11/new-agentcore-runtime-default/) for new runtimes in listed regions. Existing runtimes stay on their current version until an operator moves them; teams can explicitly select V1 or V2 with the platformVersion setting.

V2 initializes an agent once, snapshots that environment, and restores the snapshot for each new session. AWS says a 2 GB image starts in under two seconds at the 75th percentile, versus 29.7 seconds on V1. Sessions can scale to 8 vCPU and 32 GB, while each remains in a hardware-isolated Firecracker microVM. Those are vendor measurements, not a guarantee for a buyer's code or traffic.

AWS first made the runtime [generally available in September](https://aws.amazon.com/about-aws/whats-new/2026/09/new-agentcore-runtime-generally-available/). November's operational change is the default: teams creating new runtimes may now receive snapshot semantics without making an explicit migration decision.

## Why can a faster default change agent behavior?

A snapshot preserves startup memory. AWS's [V2 optimization guidance](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-v2-optimize.html) warns that values created before the snapshot can be identical across restored instances. Random-number state may repeat; startup timestamps remain fixed; credentials can expire; and a tool catalog loaded during initialization can stay frozen until the agent version changes.

That makes initialization placement a control decision. Reusable model files and parsed configuration may belong before the snapshot. Credentials, request IDs, current time, authorization context, and changing tool inventories generally belong in request handling or a refresh path. AWS also warns Node.js teams not to assume common cryptographic-library calls will reseed safely after restore; its guidance says to read fresh randomness from the operating system per request.

The runtime still provides [session-level microVM isolation](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agents-tools-runtime.html), and memory is sanitized when a session ends. Isolation does not prove that application state inside each restored session is current or unique.

## What should operators test before adopting V2?

**Run a small test** on one read-only or draft-only agent. Deploy the same version to separate V1 and V2 endpoints, then exercise 25–50 representative tasks with concurrent sessions. Verify unique request and session identifiers, credential refresh, current tool availability, timestamps, network reconnection, and correct behavior after an agent-version update.

Measure cold-start latency, CPU and memory usage, total runtime cost, retries, and accepted outputs—not just vendor unit rates. AWS's [pricing page](https://aws.amazon.com/bedrock/agentcore/pricing/) says V2 bills actual CPU and memory consumption per second, includes system overhead, and reclaims idle memory after 120 seconds. The real saving depends on session shape and application behavior.

For existing workloads, migration is optional. Keep V1 until the comparison passes; for new workloads, set the platform version explicitly so infrastructure configuration records the decision. This extends the diligence in our coverage of [stateful Bedrock runtimes](/briefings/aws-openai-bedrock-stateful-runtime/) and [agent consumption costs](/briefings/enterprise-ai-agent-token-cost-reckoning-2026/).

Watch next for independent latency and cost results, region expansion, snapshot-safe library guidance, and customer evidence that V2 lowers cost per accepted task without introducing state defects.

## FAQs

### Did AWS automatically migrate existing AgentCore runtimes?

No. AWS says existing runtimes remain on their current version until an operator updates them.

### What is the main snapshot risk?

State created during startup can be copied into every restored instance, making credentials stale or supposedly unique values repeat.

### What is the first practical test?

Compare one low-authority workflow on V1 and V2, checking state correctness, concurrency, latency, resource use, and cost per accepted output.
