# Ray Guzman website: review and handoff

The corrected website is ready as built static files. This private repository contains Ray's board-search copy update while preserving the existing visual design. All five original essay bodies remain unchanged.

**Start with [HANDOFF.md](HANDOFF.md).** It explains access, download, transfer to Ray's repository, Vercel preview checks, publication and rollback.

- [Review the pull request](https://github.com/seed-healthcare/ray-guzman-website/pull/1)
- [Download the board-search review package](https://github.com/seed-healthcare/ray-guzman-website/releases/tag/board-search-review-2026-09-25-r2)
- [Check each request against Ray's documents](RAY-REQUEST-CHECKLIST.md)
- [Read the change summary](REVIEW.md)

## Access

Sign in to GitHub with an authorized account. A private repository returns a 404 to signed-out or unauthorized visitors. Toddperman has administrator access; Ray's `AccountableME` account has accepted read access and can download the files.

## Which files to use

Use the named `ray-guzman-vercel-20260925-r2.zip` release asset or this `codex/board-search-copy` branch. `main` preserves the earlier review baseline until approval. The built ZIP has `index.html` and `vercel.json` at its root, with assets and font licenses. It requires no framework, installation or build step.

Clean routes, permanent Boards/Advisory redirects and the `www.rayguzman.com` canonical origin are included. No password gate, credentials, Cloudflare functions or source attachments are included.

## Review status

- All 28 requested items verified through 207 item-by-item assertions.
- 640 structural, link, asset and essay-preservation checks passed.
- 178 content, design and hosting-output checks passed.
- 37 fresh local HTTP checks passed.
- All 11 pages checked at 320px and 1440px with no overflow or missing images. Earlier tablet, enlarged-text and accessibility checks remain documented.

This repository is not connected to Ray's live Vercel project. No hosted Vercel preview or production deployment has been created. The existing protected Cloudflare preview is unchanged.
