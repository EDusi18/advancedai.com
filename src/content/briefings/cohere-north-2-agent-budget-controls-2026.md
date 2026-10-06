---
title: "Cohere North 2 Makes Agent Budgets Testable"
description: "Cohere North 2 adds agent memory, usage controls, and token limits. Operators should test whether budget and retention controls work together."
pubDate: 2026-10-06
heroImage: "../../assets/cohere-north-2-agent-budget-controls-2026.svg"
heroImageAlt: "An enterprise AI agent workflow passing through permission, memory, and spending-control gates"
---

[Cohere announced North 2 on October 5](https://cohere.com/blog/introducing-north-2), adding cross-session agent memory, reusable skills, granular permissions, usage analytics, and token-spending limits to its enterprise AI platform. The operator value is not another agent builder. It is the chance to test whether access, memory, and cost can be governed together before agents spread across a workforce.

## Key Takeaways

- North 2 combines persistent agent context with user- and agent-level usage controls.
- Administrators can set permissions, model access, consumption tiers, alerts, and token limits.
- Cohere supports private deployment, but the launch lacks independent ROI evidence.
- Operator posture: **run a small test** linking budget limits to memory and access reviews.

## What controls did Cohere North 2 add?

North 2 introduces reusable agents, shared libraries, cross-session memory, applications, automations, and connectors for services including Slack, SharePoint, Outlook, Jira, Notion, and GitHub. Cohere says North Admin can assign roles, restrict which models users or agents employ, monitor activity, and define consumption tiers based on request and token rates.

That combination is more useful than a dashboard showing total monthly spend. [VentureBeat's launch coverage](https://venturebeat.com/orchestration/coheres-north-2-puts-ai-agents-on-a-budget-and-gives-them-a-memory) says administrators can view usage down to individual users and agents. [SiliconANGLE separately reported](https://siliconangle.com/2026/10/05/cohere-unveils-north-2-ai-agent-platform-with-rebuilt-orchestration-and-token-spending-caps/) organization-wide caps and per-user or per-group controls.

Cohere also says North can run self-hosted, in a private cloud, in hybrid infrastructure, or on premises. Those deployment options can support data-sovereignty requirements, but location alone does not prove that an agent has appropriate permissions or memory handling.

## Why does persistent memory change the buying test?

Memory helps an agent avoid restarting from zero, but it also creates a new governed data store. The launch post says agents retain context across sessions; it does not spell out memory retention periods, deletion behavior, export controls, legal-hold treatment, or what administrators can inspect.

That means budget controls and information governance cannot be evaluated separately. An agent may remain below its token limit while retaining unnecessary customer, employee, or project context. Conversely, aggressive deletion could reduce risk while increasing repeated retrieval, token use, and workflow cost.

This is the same control problem behind [agent identity and containment requirements](/briefings/okta-blueprint-alliance-agent-governance-2026/) and the need to discover [unmanaged enterprise agents](/briefings/microsoft-agent-365-shadow-ai-enterprise-2026/). Cost limits are valuable, but they do not substitute for scoped access, audit logs, revocation, and lifecycle rules.

## How should operators test North 2 now?

**Run a small test** with one low-risk, repeatable workflow and a small user group. Set per-user and per-agent spend limits, restrict connectors and model access, require approval for write actions, and seed the test with information that should expire or be removed.

Measure accepted outputs, token cost per accepted output, failed or repeated runs, human review time, permission exceptions, and whether deleted or expired context disappears from later sessions. Ask Cohere to demonstrate memory creation, inspection, correction, export, deletion, and offboarding in the buyer's chosen deployment model.

Do not treat Cohere's named customer quotes as independent outcome evidence. [Unite.AI's product review](https://www.unite.ai/cohere-launches-north-2-with-redesigned-agent-harness-and-memory/) describes the same control set, but public evidence still does not establish list pricing, sustained savings, or error rates across customer workflows.

Watch next for memory-lifecycle documentation, generally available administrator controls, public pricing, independent security testing, and named deployments with before-and-after cost and quality measures.

## FAQs

### Is Cohere North 2 available on premises?

Cohere says North 2 supports self-hosted, private-cloud, hybrid, and on-premises deployment. Buyers should verify which features, updates, support terms, and certifications apply to their chosen configuration.

### Do North 2 token limits guarantee lower AI costs?

No. Limits can prevent uncontrolled consumption, but savings depend on task success, retries, model choice, retrieval, and human review. Measure cost per accepted output rather than tokens alone.

### What should buyers ask about North 2 memory?

Ask how memory is created, scoped, inspected, corrected, exported, retained, deleted, and audited. Also verify whether offboarding removes user- and agent-specific context across connected systems.
