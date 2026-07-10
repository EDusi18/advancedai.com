---
title: "ChatGPT Work Is OpenAI's Move Into Your Workflows"
slug: openai-chatgpt-work-enterprise-agent-2026
description: "OpenAI's ChatGPT Work agent runs multi-step tasks across Slack, Teams, Drive, and email. Here's the governance checklist before you expand access."
pubDate: '2026-07-10'
heroImage: '../../assets/openai-chatgpt-work-enterprise-agent-2026.png'
heroImageAlt: "A digital assistant interface showing ChatGPT Work completing multi-step tasks across connected business apps including Slack, Teams, and Google Drive on a laptop screen"
category: 'Industry News'
author: 'Advanced AI'
tags:
  - OpenAI
  - ChatGPT
  - Enterprise AI
  - AI Agents
  - Workflow Automation
  - AI Governance
  - GPT-5.6
  - AI Procurement
editorialStatus: 'published'
tier: 'briefing'
publishApproval: 'APPROVED_BRIEFING'
sourceCount: 5
recommendationPosture: 'run a small test'
knownWeaknesses:
  - "OpenAI's Compliance API coverage (what actions are logged, retention period, export format) is not fully documented in publicly available docs; Firstpost/secondary sources cite it as available but specifics not confirmed independently."
  - "Token-based pricing for ChatGPT Work agent runs is referenced via the Codex rate card (July 6 update); enterprise-plan token burn rates for complex multi-step Work sessions are not publicly benchmarked."
  - "Admin controls (data access scope, action restrictions) are described in OpenAI and secondary sources but individual enterprise configuration options and their limits are not fully detailed in public documentation."
  - "ChatGPT Work availability for Plus and Business subscribers is described as 'rolling out over the next few days' — not all enterprise tiers confirmed as live on July 10."
---

OpenAI [launched ChatGPT Work](https://openai.com/index/chatgpt-for-your-most-ambitious-work/) on July 9 — an autonomous agent that executes multi-step tasks across your business applications, runs projects for hours, and schedules recurring jobs. It is live now for Pro, Enterprise, and Edu users, powered by GPT-5.6.

The operator question: what happens when an AI agent has write access to your CRM, your email, and your project management software — and what your audit trail looks like when something goes wrong.

**Key takeaways**

- ChatGPT Work runs multi-step tasks across Slack, Teams, Drive, SharePoint, email, and CRM for hours if needed.
- It can schedule recurring jobs and produce finished documents, spreadsheets, and presentations.
- OpenAI says it uses ChatGPT Enterprise security controls, including a Compliance API for audit visibility.
- Agent runs moved to token-based pricing on July 6; complex Work sessions cost more than standard chats.
- **Run a small test** on low-risk workflows before connecting sensitive systems.

## What did OpenAI actually launch?

ChatGPT Work is a workplace automation layer on top of ChatGPT. Where ChatGPT answered questions, ChatGPT Work executes jobs. A user can hand it a task — "analyze last month's budget variance and update the board slides" — and it navigates connected tools, creates outputs, and checks back when it needs guidance.

Confirmed capabilities per [OpenAI's announcement](https://openai.com/index/chatgpt-for-your-most-ambitious-work/): cross-app task execution across Slack, Teams, Drive, SharePoint, email, calendars, and CRMs via a plugins directory; scheduled and event-triggered task automation; local file access via the desktop app; and an ultra mode that coordinates four agents in parallel for demanding tasks.

[Per Computerworld](https://www.computerworld.com/article/4195494/openai-launches-chatgpt-work-as-it-broadens-gpt-5-6-rollout-2.html), GPT-5.6 Sol is $5 per million input tokens and $30 per million output via the API. The Codex rate card moved to token-based pricing on July 6 — a complex Work session costs meaningfully more than a standard chat.

## Why does this raise new operator questions?

A better chatbot is a productivity tool. An agent connected to email, calendar, CRM, and internal files with permission to take actions is a different category of access.

[Firstpost reports](https://www.firstpost.com/tech/openai-launches-chatgpt-work-with-gpt-5-6-for-ai-powered-workplace-automation-14030228.html) that ChatGPT Work uses the same security framework as ChatGPT Enterprise: administrators can restrict data access, control active plugins, and limit permitted actions. A Compliance API provides audit visibility into conversations and agent actions. Those controls are meaningful — but they are not self-enforcing. Someone must configure them before employees start connecting tools.

Four questions to answer before expanding access:

1. **Data scope**: Which systems can Work read and write? What prevents employees from self-connecting sensitive libraries?
2. **Action limits**: Where is the boundary between Work recommending an action and taking it autonomously?
3. **Audit depth**: What does the Compliance API log, how long is it retained, and is it exportable for compliance review?
4. **Token cost at scale**: What happens to your AI budget when hundreds of employees each run weekly multi-step tasks?

## What to do now

For Enterprise and Edu users already on OpenAI: test ChatGPT Work on low-risk internal workflows — draft generation, research summaries, project updates — where a human reviews output before it goes anywhere. Enable and review the Compliance API before you need it.

For Business and Plus users (rolling out over the next few days): decide which app integrations to allow before employees self-connect them. A plugins directory is a data governance policy, not just a feature.

Context on what this has been building toward: [the April briefing on OpenAI's superapp trajectory](https://advancedai.com/briefings/openai-superapp-chatgpt-codex-atlas-2026/). Settle what "permitted actions" means for your organization before rollout scales.

Watch for: OpenAI documentation on default action permissions, Compliance API retention/export terms, and admin-level plugin lockdown. Also track [enterprise AI token cost signals](https://advancedai.com/briefings/salesforce-anthropic-token-spend-enterprise-ai-cost-2026/) — agent runs at scale are a different budget line from per-seat subscriptions.

---

**FAQ**

**What is ChatGPT Work and how is it different from regular ChatGPT?**
ChatGPT Work executes multi-step tasks across connected business apps — Slack, Teams, email, CRM, Drive — rather than answering questions in a chat. It runs projects for hours, produces finished documents and spreadsheets, and schedules recurring jobs autonomously.

**Does ChatGPT Work have enterprise security and audit controls?**
OpenAI says it uses the same security framework as ChatGPT Enterprise: admins can restrict data access, control active plugins, and limit permitted actions. A Compliance API provides audit visibility into agent actions. Log retention and export specifics are not fully documented at launch — verify before committing sensitive workflows.

**How does ChatGPT Work pricing work?**
GPT-5.6 Sol costs $5 per million input tokens and $30 per million output via the API. Agent runs in Business and Enterprise plans moved to token-based pricing on July 6. A complex multi-step Work session consumes significantly more tokens than a standard chat. Benchmark against a real workflow before broad rollout.
