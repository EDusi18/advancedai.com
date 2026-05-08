# AdvancedAI Drafts

This folder is the draft-only lane for AdvancedAI article production.

## Rule

New article work starts here. Files in this folder are **not publishable** and should not be moved to `src/content/briefings/` or `src/content/analysis/` until Tavi or Erol approves them.

## Required frontmatter for drafts

```yaml
---
title: "Draft title"
description: "Draft description for review only."
pubDate: 2026-05-08
category: "Industry News"
tags: []
editorialStatus: "draft"
tierProposal: "briefing"
reviewOwner: "Tavi"
publishApproval: "required"
---
```

## Allowed `editorialStatus` values

- `draft`
- `needs_review`
- `revise`
- `approved_by_tavi`
- `approved_by_erol`
- `killed`
- `hold_for_analysis`

## Publishing boundary

Only approved files may move into:

- `src/content/briefings/`
- `src/content/analysis/`

`main` is the live publishing branch. Avdi should work in this draft lane or on the `avdi/drafts` branch, not directly in live content folders on `main`.
