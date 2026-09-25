# Ray Guzman: completed checklist against items 1–28

Verified September 25, 2026 against the user's resupplied 28-item change list. This checklist maps one-to-one to its numbering. All 28 items are implemented in the review branch and password-free Vercel package. Item 7 still requires deployment-time confirmation of Vercel account settings; this is not a claim of live publication.

The existing design is preserved. Montecito Medical and Seed Healthcare remain as advisory experience, while advisory and speaking service invitations are removed. The explicit replacement wording controls wherever supporting documents differ.

| Item | Status | Request | Implementation / verification | Why |
|---|---|---|---|---|
| 1 | Complete | Identity | Independent Corporate Director replaces the three-service identity in the header, homepage identity, homepage metadata, and essay author badges. | Present Ray as an independent board candidate. |
| 2 | Complete | Navigation | Exactly Home, About, For Boards, Boardroom, Contact. Gold Contact action links to /contact. Desktop and mobile checked. | Provide one board-focused visitor path. |
| 3 | Complete | For Boards route | For Boards label, For Boards \| Ray Guzman title, /for-boards output and matching canonical. Permanent redirects from /boards, /advisory and /advisory.html; /boards.html also redirects. | Align the page address with its canonical and preserve old links. |
| 4 | Complete | Closing section | All 11 pages, including Contact and 404, contain the exact supplied paragraph and one Start a conversation button to /contact. For Boards uses Explore a board seat. No page is excluded from verification. | Remove parallel service invitations and satisfy every page literally. The Contact closing links to /contact as requested. |
| 5 | Complete | Footer | Exact requested Independent Corporate Director statement and strategy/capital allocation/M&A/technology/AI oversight wording. | Keep positioning consistent at the bottom of every page. |
| 6 | Complete | Em dashes | No em dashes in generated body copy on any page. | Follow Ray's punctuation rule. |
| 7 | Complete in package | Password gate | Removed from the Vercel delivery: no password form, authentication Worker, Pages Functions, secrets or preview bindings in the package. | Deliver a public-site-ready artifact. Vercel account-level access must still be checked when deployed; no live hosting changed. |
| 8 | Complete | Home metadata | Title and description match the supplied wording exactly. | Align search and sharing with board-search positioning. |
| 9 | Complete | Home hero | Original headline preserved; exact replacement paragraph and For Boards / Read Ray's bio links implemented. | Connect operating experience with director qualifications. |
| 10 | Complete | Statistics | 25+ / Years in business and the boardroom; 4 / Successful company exits; 23x / Top return on exit (Winnow); ~$7B / Fiduciary oversight, combined assets. | Show the requested operating and fiduciary evidence. |
| 11 | Complete | Short version | Removed the entire service-card/dropdown section and its service invitations. Added The short version, the exact paragraph and all six tags. | Explain experience without marketing advisory or speaking services. |
| 12 | Complete | Experience item 03 | Exact supplied independent-oversight sentence, with a colon. | Apply the requested punctuation correction. |
| 13 | Complete | Home current roles | Ascend exact committee sentence, no former box, Nearly $5B in assets. Belmont exact Trustee · Finance Chair label and committee description. S3 and Seed redundant descriptions omitted. | Use Ray's precise role wording without inventing replacement company copy. |
| 14 | Complete | Repeated role table | Removed the complete-picture table; retained Complete current-role details to /for-boards. | Avoid repeating the role section. |
| 15 | Complete | Odgers link | Exact label: Ray on AI governance: an interview with Odgers Berndtson. | Apply the requested wording and punctuation. |
| 16 | Complete | Home essays and closing | Featured-essay section unchanged apart from equivalent clean URLs. Shared closing follows item 4. | Preserve Ray's writing and update only the surrounding invitation. |
| 17 | Complete | About metadata | Exact supplied description. | Reinforce the director positioning. |
| 18 | Complete | About introduction | Both replacement paragraphs match exactly, including private equity-backed companies and four company exits. | Describe the breadth of experience and boards Ray is targeting. |
| 19 | Complete | About Belmont sentence | Exact chairs the Finance, Operations, and Investment Committee and serves on the Executive and Governance Committees wording. | Restore the specific chairmanship and memberships. |
| 20 | Complete | About preservation | All remaining main-page copy, headline and section index compared with the pre-change baseline and preserved. | Keep changes limited to Ray's requested edits. |
| 21 | Complete | For Boards metadata | For Boards \| Ray Guzman and exact supplied meta description. | Address board-search readers consistently. |
| 22 | Complete | For Boards introduction | Small heading now For Boards. Headline and paragraph preserved. | Rename the page without rewriting approved copy. |
| 23 | Complete | For Boards roles | Same four corrections as item 13; former SwitchPoint CEO, 2018–2026 and Staffing Chairman, 2019–2025 responsibilities remain. | Keep current and former responsibilities accurate. |
| 24 | Complete | Looking ahead | Section unchanged apart from the equivalent clean About link. Closing action is Explore a board seat to /contact. | Preserve Ray's stated board interests. |
| 25 | Complete | Boardroom and five essays | Boardroom copy and all five complete essay bodies, attribution, references and disclaimers preserved. Shared navigation/footer/closing updated. Author badges use Independent Corporate Director under sitewide item 1. | Retain the writing while aligning the surrounding identity. |
| 26 | Complete | Contact metadata | Exact supplied board-service meta description. | Keep inquiries focused on director roles. |
| 27 | Complete | Contact introduction | Exact supplied transformation / independent director / AI governance sentence. | Use Ray's requested invitation. |
| 28 | Complete | Contact card and details | One Prefer to write? card with the exact paragraph. Write to Ray uses subject Board service inquiry. Email, copy button, LinkedIn and Nashville unchanged. | Help board-search contacts send a useful first inquiry. |

## Verification

- 207 item-by-item assertions covering all 28 requirements: passed.
- 640 structural, internal-link, metadata, asset and complete-essay checks: passed.
- 178 content, unchanged-design and hosting-output checks: passed.
- 37 fresh local HTTP checks for all pages, clean routes, legacy redirects, query preservation and custom 404: passed.
- All 11 pages checked at 320px and 1440px: no horizontal overflow or missing images. One correct closing invitation on every page.
- New Contact desktop and 404 phone closing sections visually inspected. Closing navigation and five-item mobile menu verified. No browser console errors.

## Handoff and release boundaries

- Ray (`AccountableME`) has accepted read access, including downloads. GitHub sign-in is required because the repository is private.
- [Review PR #1](https://github.com/seed-healthcare/ray-guzman-website/pull/1) and use branch `codex/board-search-copy`; `main` remains the earlier comparison baseline.
- [Download the verified revision 2 package](https://github.com/seed-healthcare/ray-guzman-website/releases/tag/board-search-review-2026-09-25-r2). Use `ray-guzman-vercel-20260925-r2.zip` under Assets.
- No Vercel connection, production merge, live publication, DNS change or Cloudflare upload was performed.
- At Vercel deployment, confirm public access without a password and verify hosted redirects. The old protected Cloudflare preview is separate and unchanged.

## Source interpretation

The latest list explicitly supplies the full Belmont committee title and Executive/Governance memberships. That wording is used without inventing a combined role. Original source attachments are preserved. S3 and Seed descriptions are omitted, as Ray allowed, pending any replacement wording.

Clean internal URL normalization is retained for Vercel. The only editorial change within essay author cards is the sitewide Independent Corporate Director identity; essay bodies were not rewritten.
