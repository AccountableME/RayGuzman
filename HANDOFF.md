# Website handoff for Ray Guzman

The website files are ready for review and transfer. This repository is private, and it is not connected to Ray's live Vercel project. The pull request and release are review artifacts, not a hosted website preview.

## 1. Open the review

Sign in to GitHub with an account that has access to `seed-healthcare/ray-guzman-website`. Toddperman has administrator access. Ray's GitHub account `AccountableME` has accepted read access, including downloads.

GitHub shows a **404 / Page not found** when a signed-out or unauthorized visitor follows a private repository link. Sign in, accept any repository invitation, then reopen the link. Do not make the repository public to solve a sign-in problem.

- [Pull request and discussion](https://github.com/seed-healthcare/ray-guzman-website/pull/1)
- [Updated website files](https://github.com/seed-healthcare/ray-guzman-website/tree/codex/board-search-copy)
- [Numbered 1–28 checklist](RAY-REQUEST-CHECKLIST.md)
- [Change summary](REVIEW.md)

`main` preserves the previous website review baseline so the PR shows the changes clearly. Use the review branch or the packaged release for the corrected website.

## 2. Download the finished files

Open the [**Board-search review package, revision 2**](https://github.com/seed-healthcare/ray-guzman-website/releases/tag/board-search-review-2026-09-25-r2) release and download `ray-guzman-vercel-20260925-r2.zip` under Assets. This is the website-only ZIP. Use this named asset instead of GitHub's automatically generated Source code archives.

The accompanying `SHA256SUMS.txt` records the ZIP's checksum. On macOS or Linux, compare the result of:

```sh
shasum -a 256 ray-guzman-vercel-20260925-r2.zip
```

The ZIP contains 34 files: 11 HTML pages, 20 assets, two font licenses and `vercel.json`. It contains no source attachments, credentials, passwords, Cloudflare Worker or Pages Functions.

## 3. Put the files in Ray's existing website repository

1. Create a review branch from the current default branch of Ray's existing website repository.
2. Extract the ZIP and place its **contents** at the website root. `index.html` and `vercel.json` must be at that root, alongside `assets/` and `licenses/`. Do not leave everything inside an extra ZIP-named directory.
3. Replace the previous website files with the supplied files. Remove obsolete `boards.html` and `advisory.html`; their old addresses are handled by redirects. Keep repository administration files and existing hosting integration settings unless an intentional change is needed.
4. Commit the changes and open a pull request in Ray's existing repository.

Alternatively, a new Vercel project can be connected to this private Seed review repository for preview purposes. That is a separate hosting action and has not been performed.

## 4. Check Vercel's project settings and preview

This is a plain static website. No dependency installation, framework or generator is needed for these built files.

| Setting | Expected value |
|---|---|
| Framework preset | Other / no framework |
| Website root | Directory containing the supplied `index.html` and `vercel.json` |
| Build command | Empty; no build step |
| Output directory | `.` (the website root) |
| Clean URLs | Enabled in `vercel.json` |
| Trailing slash | Disabled in `vercel.json` |

Use the preview deployment associated with the pull request in Ray's connected Vercel project. If no preview appears, check that the repository and project are connected and branch previews are enabled. No new Vercel preview exists for this Seed repository yet.

The canonical origin remains `https://www.rayguzman.com`. Existing production domain settings should remain attached to Ray's production project. There is no application-level password gate in the delivered files; the separately hosted Cloudflare review is unchanged.

## 5. Review before publication

- [ ] Compare the site's wording with `RAY-REQUEST-CHECKLIST.md`.
- [ ] Open Home, About, For Boards, Boardroom, all five essays and Contact in the Vercel preview.
- [ ] Confirm the navigation and single board-focused Contact invitation work on desktop and phone.
- [ ] Confirm `/boards`, `/boards.html`, `/advisory` and `/advisory.html` redirect to `/for-boards`.
- [ ] Confirm clean routes such as `/about` work and `/about.html` redirects correctly.
- [ ] Confirm an unknown address returns the custom 404 page.
- [ ] Confirm photographs, fonts, mobile menu and reading contents load correctly.
- [ ] Confirm Write to Ray opens an email draft with subject Board service inquiry; no email needs to be sent for this check.
- [ ] Confirm public production access has no application password gate or Vercel project-level authentication requirement.
- [ ] Obtain Ray's approval of the preview.

Local checks have passed. The checks above are the remaining hosted acceptance checks, not claims that Vercel has already been tested.

## 6. Publish and retain rollback

After Ray approves the preview, merge the PR in the repository connected to his production Vercel project using the existing release process. Merging this separate Seed review repository alone will not update `www.rayguzman.com`.

Keep the prior production deployment or commit available. If needed, use the project's existing Vercel rollback process or revert the production merge. No production merge, DNS change, hosting connection or deployment has been performed as part of this handoff preparation.
