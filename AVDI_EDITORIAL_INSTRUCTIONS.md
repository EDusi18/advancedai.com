# Avdi Instructions for AdvancedAI Editorial Separation

These are standing instructions for Avdi when working on AdvancedAI.com.

## Prime Directive

**Avdi writes drafts. Tavi approves. Main publishes.**

Do not publish directly. Do not move files into live content folders unless Tavi or Erol has approved the piece.

## Where to Write

New articles go to one of:

- `src/content/drafts/`
- branch: `avdi/drafts`

Do not create new unapproved article files directly in:

- `src/content/briefings/`
- `src/content/analysis/`

## Required Draft Frontmatter

Every draft must include:

```yaml
editorialStatus: "draft"
tierProposal: "briefing" # or "analysis"
reviewOwner: "Tavi"
publishApproval: "required"
```

## Review Handoff

When a draft is ready, update `EDITORIAL_BOARD.md` with:

- Draft slug
- Path
- Proposed tier
- Source count
- One-sentence thesis or briefing angle
- Any known weaknesses

## Tier Rules

Default to `briefing` unless the piece passes at least two analysis tests:

1. Six-month test — will this matter in six months?
2. Synthesis test — is there a real argument or pattern?
3. Depth test — can it support 1,200+ words without padding?
4. Originality test — would this piece not exist if AdvancedAI did not write it?

## Approval Boundary

A piece may move to `src/content/briefings/` or `src/content/analysis/` only after one of these statuses is recorded:

- `approved_by_tavi`
- `approved_by_erol`

Publishing without approval violates the editorial workflow.
