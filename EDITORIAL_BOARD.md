# AdvancedAI Editorial Board

Shared source of truth for AdvancedAI editorial control.

## Operating Rule

**Avdi writes drafts. Tavi approves. Main publishes.**

**Editorial north star:** AdvancedAI should make business executives/operators practically enlightened about AI. Every piece must help someone like Erol understand the landscape better and make better decisions about vendors, teams, workflows, costs, customer experience, risk, or roadmap.

Avdi may research, draft, revise, and propose tiering. Avdi must not publish directly or move articles into live folders without approval.

Live folders:
- `src/content/briefings/`
- `src/content/analysis/`

Draft-only lane:
- `src/content/drafts/`
- branch: `avdi/drafts`

---

## This Week's Analysis Candidate

- Status: **selected for Avdi draft**
- Topic: **The AI Vendor-Financing Loop** - Nvidia, Microsoft, OpenAI, and adjacent infrastructure partners are increasingly funding the customers and suppliers that sustain AI demand.
- Proposed thesis: The most important AI infrastructure story is no longer just capex scale, but capital circularity: the same companies selling compute, buying compute, financing labs, and guaranteeing demand are creating a durable buildout engine and a new concentration-risk problem for enterprise buyers.
- Why this passes the analysis bar:
  - Six-month relevance: AI capex, supply guarantees, and vendor financing will shape 2026 cloud/model negotiations, procurement risk, and investor scrutiny.
  - Synthesis potential: connects Nvidia's $40B+ equity spree, hyperscaler capex/backlogs, OpenAI/Anthropic enterprise ventures, and Bloomberg's circular-deals mapping into one operator-facing framework.
  - Depth/source availability: CNBC, Nvidia SEC filings, earnings materials, Bloomberg deal mapping, Reuters/regulatory coverage, and existing AdvancedAI briefings provide enough named cases and independent sources for 1,200-2,500 words.
  - Operator usefulness: gives buyers a practical due-diligence sequence for mapping financial entanglement, supplier optionality, capacity commitments, and conflict-of-interest risk this quarter.
- Strongest counterpoint to address: circular financing may simply be rational ecosystem-building in a capacity-constrained market, not bubble behavior; AI labs and data-center operators need upfront capital before revenue arrives, and Nvidia/Microsoft are the logical balance sheets to provide it.
- Tavi decision: pending review after Avdi draft
- Erol approval needed: yes

---

## Drafts Awaiting Review

Add new Avdi drafts here before review.

- [ ] Draft slug: `ai-zero-day-exploit-google-threat-intelligence-2026`
  - Path: `src/content/briefings/ai-zero-day-exploit-google-threat-intelligence-2026.md`
  - Proposed tier: **briefing**
  - Date drafted: May 12, 2026
  - **REVISED_FOR_REVIEW** (May 12, 2026 — Avdi)
  - Primary sources: Google GTIG blog (May 11 — primary), The Hacker News, CNBC (May 11), OpenAI announcement, CNBC OpenAI GPT-5.5-Cyber (May 7), CNBC Anthropic Mythos (April 7)
  - Source count: 6 external links, 2 internal links
  - Hero image: `src/assets/ai-zero-day-exploit-google-threat-intelligence-2026.png` ✅
  - Build check: ✅ passed (60 pages, 0 errors — re-verified May 12, 7:06 AM)
  - Known weaknesses:
    - Google did not name the affected open-source system admin tool or the hacker group — some operator specificity unavailable.
    - Anthropic Mythos testers list (Apple, CrowdStrike, Microsoft, Palo Alto Networks) cited from CNBC secondary; Anthropic press release not directly fetched.
  - Changes made:
    - Cut from ~1,230 body words to ~580 — now within briefing spec (400–700 words).
    - Reduced FAQ from 5 to 3: kept zero-day explainer, Gemini denial, and vendor contract guidance; removed 2FA bypass FAQ and Mythos/GPT-5.5 explainer FAQ.
    - Stripped full Mythos/OpenAI context paragraph — replaced with one sentence + internal link to earlier Mythos briefing.
    - Condensed 'What to Watch Next' from standalone H2 section to a 2-sentence close paragraph.
    - Operator posture (ask sharper vendor questions, patch-window review) preserved and strengthened throughout.
    - Frontmatter: revisionNotes updated.
  - Tavi decision: **APPROVED_BRIEFING / PR_OPEN** (May 12, 2026 — Tavi after Avdi revision)
  - Publish path: `src/content/briefings/ai-zero-day-exploit-google-threat-intelligence-2026.md`
  - Build proof: revised draft moved to live folder; `npm run build` passed May 12, 2026 (61 pages, 0 errors); GitHub required `build` check passed on PR #1
  - Publish proof: included in PR #1 on branch `tavi/publish-cerebras-ipo-inference-chips-2026-2026-05-12`, commit `0d58dd0`; merge blocked by repository policy requiring one approving review with write access.

- [ ] Draft slug: `cerebras-ipo-inference-chips-2026`
  - Path: `src/content/drafts/cerebras-ipo-inference-chips-2026.md`
  - Proposed tier: **briefing**
  - Date drafted: May 11, 2026
  - **REVISED_FOR_REVIEW** (May 12, 2026 — Avdi)
  - Primary sources: Reuters (May 10 - IPO price hike), Reuters (May 4 - original filing with revenue/profit data), Cerebras.ai homepage, Cerebras press release (inference speed), CNBC (CFIUS clearance March 2025), CNBC confirmation
  - Source count: 8 external links, 2 internal links
  - Hero image: `src/assets/cerebras-ipo-inference-chips-2026.png` ✅
  - Build check: ✅ passed (59 pages, 0 errors — re-verified May 12)
  - Known weaknesses:
    - Inference speed claim (up to 20x) now sourced to Cerebras' own press release (primary company data). Tavi may wish to add independent benchmark citation.
    - Post-IPO roadmap language is forward-looking without a named source; framed as editorial guidance.
  - Changes made:
    - Replaced Wikipedia inference-speed cite with direct Cerebras press release (cerebras.ai/press-release, March 2025) + added "company claims" qualifier; also added Cerebras Feb 2026 blog (21x Blackwell comparison) as secondary.
    - Added CNBC source (March 31, 2025) for CFIUS clearance; rephrased sentence to cite the clearance directly.
    - Removed redundant "timing aligns" paragraph (~35 words).
    - Tightened enterprise buyer section: removed unsupported deployment prediction, reframed as "too early to spec into contracts / watch post-IPO roadmap."
    - Net trim: ~110 words. Draft now well under 800-word threshold.
    - Frontmatter: publishApproval, sourceCount, knownWeaknesses, revisionNotes added.
  - Tavi decision: **APPROVED_BRIEFING / PR_OPEN** (May 12, 2026 — Tavi)
  - Publish path: `src/content/briefings/cerebras-ipo-inference-chips-2026.md`
  - Build proof: `npm run build` passed May 12, 2026 (60 pages, 0 errors); later combined PR build passed with both approved briefings (61 pages, 0 errors); GitHub required `build` check passed on PR #1
  - Publish proof: branch `tavi/publish-cerebras-ipo-inference-chips-2026-2026-05-12`, commit `fd89e51`, PR #1 opened and updated with zero-day briefing at `0d58dd0`. Merge blocked by repository policy requiring one approving review with write access; Tavi cannot approve its own PR.

- [ ] Draft slug: `nvidia-40b-ai-venture-investor-2026`
  - Path: `src/content/drafts/nvidia-40b-ai-venture-investor-2026.md`
  - Proposed tier: **briefing**
  - Date drafted: May 10, 2026
  - **REVISED_FOR_REVIEW** (May 12, 2026 — Avdi)
  - Primary sources: CNBC (May 9), Nvidia SEC annual filing, Bloomberg circular deals, CNBC Corning/IREN deal stories
  - Source count: 6 external links, 3 internal links
  - Hero image: `src/assets/nvidia-40b-ai-venture-investor-2026.png` ✅
  - Build check: ✅ passed (59 pages, 0 errors — re-verified May 12)
  - Known weaknesses:
    - Bloomberg circular-deals URL (bloomberg.com/graphics/2026-ai-circular-deals/) should be verified as live before publish — returned 403 on automated check.
    - Jensen Huang April podcast quote removed (no URL found); February earnings-call quote retained.
  - Changes made:
    - Cut from ~1,014 words (body) to ~550 words body + 2 FAQs — now firmly within briefing spec.
    - Decision: kept as briefing (not retiered to analysis); circular financing analysis is already planned separately as "AI Vendor-Financing Loop" piece.
    - Removed unsourced April podcast quote; retained February 2026 earnings-call attribution.
    - Condensed portfolio detail section; stripped 3 of 5 FAQs; tightened operator takeaway.
    - Frontmatter: publishApproval, sourceCount, knownWeaknesses, revisionNotes added.
  - Tavi decision: **HOLD_FOR_ANALYSIS** (May 12, 2026 — Tavi)
  - Reason: revised briefing is much improved, but the strongest editorial value is the broader circular-capital/vendor-financing pattern already selected as this week's analysis candidate. Avoid publishing a same-day briefing that pre-spends the analysis thesis.
  - Next step: use as source material for Avdi's **AI Vendor-Financing Loop** analysis draft; do not publish automatically.

---

## Approved for Publish

- [ ] Slug:
  - Final tier:
  - Approved by:
  - Approval date:
  - Publish path:

---

## Needs Revision

- [ ] Slug:
  - Main problem:
  - Required revision:
  - Owner:

---

## Killed / Skipped Topics

- Topic:
  - Reason skipped:
  - Date:

---

## Weekly Review Notes

Use this section for Sunday analysis-selection decisions and daily editorial review summaries.

### Week of May 10, 2026

**Stories considered:**
1. Claude in Microsoft Office (Excel/Word/PowerPoint/Outlook, GA May 7) - already covered by `anthropic-finance-agents-claude-2026.md` which mentions M365 integration; skipped to avoid overlap.
2. Anthropic-Akamai $1.8B cloud deal - strong but less executive-actionable than story #3.
3. **Nvidia $40B AI equity investment spree** → selected, briefing tier. Story breaks the chipmaker-as-venture-backer angle that hasn't been covered on site yet.

**Analysis selection update (Sunday May 10):** Selected **The AI Vendor-Financing Loop** for Avdi to draft as analysis now, not in 2-3 weeks. The Nvidia draft already surfaced enough source density and operator risk to justify elevating the pattern beyond a briefing if Avdi writes it as synthesis rather than recap.

**Candidate scores (1-5):**
1. **AI Vendor-Financing Loop / circular AI capital** - six-month 5, synthesis 5, depth 5, originality 4, operator usefulness 5, source availability 5. **Selected.**
2. **Private-equity as the AI implementation channel** - six-month 4, synthesis 4, depth 4, originality 4, operator usefulness 4, source availability 4. Strong, but already covered as a briefing on OpenAI/Anthropic enterprise ventures; hold unless more named portfolio deployments emerge.
3. **Finance agents move from benchmark demo to regulated workflow** - six-month 4, synthesis 3, depth 4, originality 3, operator usefulness 5, source availability 4. Useful but currently too close to Anthropic product news; better as follow-up after adoption cases or regulator response.
4. **Government/regulatory pre-release oversight of frontier models** - six-month 4, synthesis 3, depth 3, originality 3, operator usefulness 3, source availability 3. Monitor; not enough concrete development this week for AdvancedAI analysis bar.

**Selected candidate rationale:** The circular capital thesis passes the analysis bar because it connects multiple recent facts that AdvancedAI has already covered separately: hyperscaler capex/backlogs, AI labs moving into enterprise transformation, Nvidia's $40B+ investment role, and vendor-financed infrastructure risk. Required draft angle: named cases first, steelman the ecosystem-building counterargument, then give operators a sequencing answer for Q2 vendor/procurement reviews.

### Week of May 12, 2026 (Tuesday)

**Agent run (5:30 AM):** Avdi revised both REVISE drafts (Nvidia + Cerebras). No new draft created — all REVISE items addressed. Build verified ✅ (59 pages, 0 errors).

**Agent run (5:34 AM):** No REVISE drafts remaining. New briefing drafted: `ai-zero-day-exploit-google-threat-intelligence-2026`. Story: Google GTIG confirmed first real-world AI-generated zero-day exploit (May 11, 2026). Strong operator-relevance — confirmed threat class, patch-window implications, vendor question framework. 6 external sources + 2 internal links. Build ✅ (59 pages, 0 errors). Awaiting Tavi review.

**Tavi review (7:02 AM):** Reviewed 3 briefing drafts. Approved `cerebras-ipo-inference-chips-2026` as today's briefing; build passed locally (60 pages, 0 errors) and PR #1 build check passed. Main is protected and merge is blocked by required approving review, so the briefing is staged in PR #1 rather than live. Marked `ai-zero-day-exploit-google-threat-intelligence-2026` REVISE because it is over briefing spec and has 5 FAQs; Avdi should trim and resubmit immediately. Marked `nvidia-40b-ai-venture-investor-2026` HOLD_FOR_ANALYSIS to preserve the circular-capital thesis for the selected analysis piece.

**Agent run (7:04 AM):** Revised `ai-zero-day-exploit-google-threat-intelligence-2026` per Tavi's REVISE notes. Cut from ~1,230 to ~580 body words; reduced FAQ from 5 to 3; stripped Mythos/OpenAI detail to one sentence + internal link; preserved operator posture (ask sharper vendor questions, patch-window review). Build ✅ (60 pages, 0 errors). Resubmitted for Tavi review.

**Tavi re-review (7:08 AM):** Approved revised `ai-zero-day-exploit-google-threat-intelligence-2026` as a briefing and moved it to `src/content/briefings/`. Build passed locally (61 pages, 0 errors). Added to PR #1 alongside Cerebras; GitHub build passed, but PR merge remains blocked by required external approval.

---

### Week of May 11, 2026 (Monday)

**Stories considered:**
1. **Cerebras IPO surges to $4.8B, 20x oversubscribed (May 10/11)** → selected, briefing tier. Concrete facts, executive-relevant inference chip angle, pricing May 13. Clean primary sources via Reuters.
2. **Stanford HAI 2026 AI Index released** — experts vs. public perception gap, China AI parity. Strong but requires more primary-source depth from the actual report PDF; may revisit for a synthesis briefing this week.
3. **AI agent governance "1% catastrophe" / WEF board guidance** — Forbes piece (May 7) is too editorial/secondary to anchor a briefing without primary WEF source; skipped for today.

**Daily briefing:** `cerebras-ipo-inference-chips-2026` — drafted, build-checked, hero image generated, awaiting Tavi review.
