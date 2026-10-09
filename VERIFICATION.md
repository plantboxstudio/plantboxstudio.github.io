# Local verification

Verified 9 October 2026 in isolated Playwright Chromium 151 on Windows, served at `http://127.0.0.1:4173`.

The owner approved publication on 9 October 2026 after local review. The checks below describe local verification before deployment, not live hosting status.

## Passed

- Responsive checks at **320, 390, 768, 1024 and 1440 CSS pixels**: no horizontal document overflow or broken images.
- **200% base text at 390 pixels**: no horizontal document overflow. Content and contact address wrap.
- **axe-core 4.10.3**, WCAG 2 A/AA and WCAG 2.1 A/AA rules: zero detected violations at all five widths. This is automated evidence, not a complete accessibility certification.
- Desktop and mobile full-page screenshots reviewed for hierarchy, spacing, legibility and content disclosure.
- Keyboard skip link moves focus to main content. Mobile menu opens, closes on navigation, closes with Escape and restores focus to the menu button.
- Clipboard success displays feedback and copies the correct address. Clipboard denial displays the manual-copy/mail-app alternative.
- Reduced-motion preference is respected; manual animation pause state changes correctly.
- JavaScript-disabled mobile navigation remains available and section anchors work.
- No JavaScript errors, failed page resources, or third-party network requests during the normal-page test.
- Official Roblox-link configuration accepts a valid HTTPS Roblox game URL and rejects malformed values, non-game URLs, script URLs and lookalike hosts.
- Malformed screenshot URLs leave their placeholder intact and do not prevent another valid local screenshot from loading with its supplied alt text and caption.
- `git diff --check` passed. At the time of these local checks, no push or publication had been performed.
- Final source scan found no credential-like secrets or private keys. All referenced local scripts, stylesheet, font, icon, hero artwork and social artwork are present; font license is included.

## Scope and limits

The repository started empty, so there was no existing site to preserve or regression suite to run. This site has no compilation/build step. The website and all included assets total approximately **470 KB** before this report; the first visit loads about **270 KB** of first-party page assets (the social JPEG is metadata only).

Safari, Firefox, physical mobile devices, assistive-technology users, production hosting and live Roblox access were not tested. Real game screenshots and confirmed release details remain for the owner to supply. The original hero illustration is clearly labeled concept artwork.

The preview server is a temporary local process, not hosting. Reopen it using the command in `README.md` when needed. Screenshot previews are delivered alongside the repository, not inside the publishing root.
