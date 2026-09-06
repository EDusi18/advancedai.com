---
pubDate: 2026-09-06
title: "CISA: LiteLLM's MCP Endpoint Is Actively Exploited"
description: "CISA confirmed active exploitation of LiteLLM's MCP auth bypass. Attackers steal API keys from exposed AI gateways. Patch to v1.84.0 or block /mcp/ routes now."
heroImage: ../../assets/litellm-mcp-auth-bypass-ai-infrastructure-security-2026.png
heroImageAlt: "Enterprise AI gateway diagram with broken padlock on MCP endpoint and red threat-actor alert signals targeting stored API keys"
---

**Key takeaways:**

- **CISA confirmed active exploitation** of CVE-2026-59822 (LiteLLM MCP auth bypass, CVSS 8.8) on September 2, 2026.
- **A fabricated Bearer token grants full MCP tool access** — no credentials, no prior access needed.
- **Patch to v1.84.0 now.** Upgrading only to v1.83.0 for a prior flaw leaves the MCP bypass fully open.
- **Rotate API keys** if your LiteLLM instance ran below v1.84.0 with a network-exposed MCP endpoint.
- **3 of 7 CISA KEV additions on September 2 target AI infrastructure** — LiteLLM, Kestra, and Starlette.

---

The U.S. Cybersecurity and Infrastructure Security Agency [confirmed active exploitation](https://www.cisa.gov/news-events/alerts/2026/09/02/cisa-adds-seven-known-exploited-vulnerabilities-catalog) of an authentication bypass in LiteLLM's Model Context Protocol endpoint on September 2, 2026. LiteLLM is one of the most widely deployed open-source LLM gateways; the flaw — [CVE-2026-59822](https://github.com/BerriAI/litellm/security/advisories/GHSA-7488-6r32-c95q), CVSS 8.8 — lets an unauthenticated attacker reach all configured MCP tools using a fabricated Bearer token. Patch to v1.84.0 or block `/mcp/` routes immediately.

## How Does the LiteLLM MCP Auth Bypass Work?

According to [GitHub's reviewed advisory](https://github.com/BerriAI/litellm/security/advisories/GHSA-7488-6r32-c95q), LiteLLM's MCP Streamable HTTP endpoint accepts a crafted Authorization header and forwards the request with an empty authentication object, granting full tool access without valid credentials.

All versions below v1.84.0 are affected. This flaw is separate from [CVE-2026-35029](https://aicybr.com/blog/litellm-cve-2026-35029-admin-api-takeover), an admin API flaw fixed in v1.83.0. Operators who patched only to v1.83.0 remain fully exposed. The effective minimum safe version is v1.84.0.

CISA set September 16 as the remediation deadline for federal agencies under BOD 26-04 and recommends all organizations treat KEV entries as urgent.

## Why Are Ransomware Groups Targeting AI Gateways?

[Microsoft's security research](https://www.microsoft.com/en-us/security/blog/2026/08/26/when-ai-infrastructure-becomes-target-securing-gateways-control-points/) explains the incentive: LiteLLM stores upstream AI provider API keys, model configurations, and virtual tokens in its database — a compromised gateway yields working credentials for every AI provider connected through it.

[The Hacker News confirmed](https://thehackernews.com/2026/09/cisa-adds-seven-exploited-flaws-as.html) groups linked to the Qilin ransomware family have exploited CVE-2026-59822 in the wild, harvesting credentials and deploying XMRig miners. The September 2 KEV batch also included Kestra OSS (command injection, CVSS 10.0) and Starlette (HTTP smuggling, CVSS 6.5) — both common in AI workflow infrastructure.

Microsoft's guidance: "Defenders should monitor AI workloads according to their control-plane role, not only as isolated applications." [AI tooling is now an established attack surface](/briefings/ai-zero-day-exploit-google-threat-intelligence-2026/), not a theoretical risk.

## What Should Operators Running LiteLLM Do Right Now?

**Patch to v1.84.0 immediately.** Verify running container images — updating a manifest does not replace a live container or pod.

**Interim containment:** Block `/mcp/` paths at the reverse proxy until the upgrade is confirmed. Standard inference clients don't require MCP access; that surface can be isolated separately.

**Rotate exposed API keys.** If LiteLLM ran below v1.84.0 with an internet-accessible MCP endpoint, treat stored provider credentials as compromised — rotate keys for every AI provider connected through the gateway.

**Restrict MCP and admin surfaces to trusted networks.** These are control-plane endpoints, not inference surfaces. Gate them behind an authenticated network layer separately from model-serving routes.

For operators who deployed [open-source AI tooling](/briefings/claude-mythos-anthropic-cybersecurity/) to reduce costs or add routing flexibility: treat the gateway as a security control plane and audit it accordingly. Watch for further CISA KEV additions targeting AI infrastructure — September 2's three-of-seven is a pattern, not an anomaly.

---

### FAQ

**Q: What is LiteLLM and why is it common in enterprise AI deployments?**
LiteLLM is an open-source LLM proxy that routes requests across AI providers — OpenAI, Anthropic, Gemini, and others — from a single endpoint. It manages model routing, cost controls, rate limits, and API key management centrally. Because it stores upstream provider credentials, a compromised instance gives attackers access to every AI provider connected through it.

**Q: Which version of LiteLLM fixes the MCP authentication bypass?**
v1.84.0 fixes CVE-2026-59822. If you previously upgraded only to v1.83.0 for CVE-2026-35029, you remain fully exposed to the MCP bypass. The effective minimum safe version is v1.84.0. Verify the running container version after deployment — updating a manifest does not restart a live container.

---

*Sources: [CISA KEV alert — September 2, 2026](https://www.cisa.gov/news-events/alerts/2026/09/02/cisa-adds-seven-known-exploited-vulnerabilities-catalog) (Tier 1, HTTP 200); [GitHub advisory GHSA-7488-6r32-c95q](https://github.com/BerriAI/litellm/security/advisories/GHSA-7488-6r32-c95q) (Tier 1); [The Hacker News — CISA seven exploited flaws](https://thehackernews.com/2026/09/cisa-adds-seven-exploited-flaws-as.html) (Tier 2, HTTP 200); [Microsoft Security Blog — AI infrastructure attacks](https://www.microsoft.com/en-us/security/blog/2026/08/26/when-ai-infrastructure-becomes-target-securing-gateways-control-points/) (Tier 2); [AiCybr — LiteLLM CVE version table](https://aicybr.com/blog/litellm-cve-2026-35029-admin-api-takeover) (Tier 3, HTTP 200)*
