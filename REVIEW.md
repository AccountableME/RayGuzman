# Board-search content update

Implemented September 25, 2026 from Ray's supplied change list. The existing visual design was preserved. Original attachments and `sources/original` were not edited.

## Completed

- Independent Corporate Director identity in shared navigation, homepage, metadata and essay author cards.
- Five navigation items: Home, About, For Boards, Boardroom, Contact. Canonical clean paths are used throughout.
- One closing invitation on all 11 pages, including Contact and 404, labeled Start a conversation or Explore a board seat on For Boards. Advisory and speaking service invitations are removed.
- Exact replacement footer, homepage hero paragraph, four-stat row, short-version paragraph, six expertise tags and Odgers label.
- Removed the three service cards/dropdowns and repeated eight-role overview. Retained the full-role link.
- Applied Ascend, Belmont, S3 and Seed changes on both Home and For Boards through their shared role records. Retained Montecito and Seed as experience, plus former SwitchPoint CEO and Staffing chairman responsibilities.
- Applied the two About introduction paragraphs and restored the precise Belmont sentence. Remaining full biography preserved, including the pre-existing clarification that Intermedix was later acquired by R1 RCM.
- Retained For Boards headline, introduction and Looking ahead section. Renamed its eyebrow, title and actual output file.
- Preserved all five essay bodies, source links, disclaimers, attribution and the Boardroom landing copy.
- Replaced the Contact introduction and three inquiry cards with the requested single Prefer to write? card. Retained email, copy action, LinkedIn and Nashville.
- No em dashes in generated body copy.

## Source precedence

The change list gives the full Belmont Finance, Operations, and Investment Committee title and Executive/Governance memberships. The supplied LinkedIn profile and full website biography agree. The one-page July board bio uses the shorter Finance Committee and Governance Committee summary. The explicit replacement wording was followed without inventing or merging a new title. Other descriptions requested to remain unchanged were preserved. S3 and Seed placeholders were removed without inventing company descriptions.

## Design and verification

The existing foundational, refinement, navigation and font CSS files match the pre-change snapshot byte for byte. Existing images are unchanged. New CSS is limited to the requested content additions and text-wrapping support.

- 640 structural, internal-link, metadata, asset and full-essay-preservation checks passed.
- 178 board-search content, design-preservation and hosting-output checks passed.
- 40 local HTTP checks passed, including clean paths, legacy redirects, query preservation, custom 404 and exact asset bytes.
- All 11 pages checked for horizontal overflow at 320, 390, 768 and 1440 CSS pixels.
- Home, About, For Boards, Contact and an essay checked with 200% text. A few long phrases required wrapping corrections; final checks pass at 320 pixels and a wide desktop viewport.
- Simplified mobile menu, For Boards to Contact path, board inquiry mailto, no-JavaScript navigation, reduced-motion role layout and opaque materials checked.
- Browser console reported no errors during the review.

Evidence: `CONTENT-CHECKS.json`, `HTTP-CHECKS.json`, `BROWSER-CHECKS.json` and screenshots in this folder. Initial enlarged-text findings are retained in the browser record along with subsequent passing checks.

## Vercel package

The built package has root-level `index.html` and `vercel.json`, `cleanUrls: true`, `trailingSlash: false`, and permanent redirects from `/boards`, `/boards.html`, `/advisory`, `/advisory.html` to `/for-boards`. No legacy duplicate HTML, password gate, Cloudflare Functions, `_worker.js`, `_routes.json`, `_headers`, `_redirects`, credentials or source attachments are included. Font license notices are included.

The repository root can accept the built files without running the generator. The source checkout also has a separate Vercel configuration for a build from source. Configuration was checked against [Vercel's official reference](https://vercel.com/docs/project-configuration/vercel-json); routing has been verified locally, not against a hosted Vercel deployment.

GitHub handoff is authorized in the new private `seed-healthcare/ray-guzman-website` repository. Production publishing and Vercel integration have not been performed. The protected Cloudflare preview remains unchanged.

## Final numbered acceptance pass

The resupplied items 1–28 were verified individually through 207 passing assertions. The omitted shared closing sections were added to Contact and 404, and validation now checks every page. Thirty-seven fresh HTTP checks passed; all 11 pages passed responsive checks at 320px and 1440px. No design styles or original essay bodies changed in this final pass.

Evidence: `final-pass/NUMBERED-ACCEPTANCE.json`, `final-pass/HTTP-CHECKS.json`, `final-pass/BROWSER-CHECKS.json`. See `RAY-REQUEST-CHECKLIST.md` for the exact 1–28 mapping.

## GitHub result

Private repository [seed-healthcare/ray-guzman-website](https://github.com/seed-healthcare/ray-guzman-website), [PR #1](https://github.com/seed-healthcare/ray-guzman-website/pull/1), and [revision 2 release](https://github.com/seed-healthcare/ray-guzman-website/releases/tag/board-search-review-2026-09-25-r2) contain the review handoff. Ray (`AccountableME`) has accepted read access, including downloads. The release and remote file checks are recorded after upload. No merge or deployment was performed.
