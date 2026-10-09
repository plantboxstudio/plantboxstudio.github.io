# Plant Box Studio

A complete English showcase for Plant Box Studio and Plant Box Tycoon. A static site: HTML, CSS and a small progressive-enhancement script. No build step, framework, paid services, analytics, cookies, forms or third-party runtime requests. Font and images are self-hosted.

## Review status

The target repository `plantboxstudio/plantboxstudio.github.io` was inspected and cloned on 9 October 2026. It was empty. The owner explicitly approved publication of the reviewed site on **9 October 2026**. Deployment and live verification are separate steps; this approval record does not claim the site is deployed.

## Preview locally

Open `index.html` directly for a basic preview. For browser testing, use a local HTTP server from this folder, for example:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:4173`. Clipboard access depends on browser permissions and a secure context (localhost or HTTPS). If copying is denied, the page presents a manual alternative. Email links open the visitor's mail application; this site does not send messages itself.

## Customize

| Content | Location | What to update |
| --- | --- | --- |
| Page copy, title and metadata | `index.html` | Confirm approved game description, studio details and release status. |
| Colors, sizes and layout | `styles.css` | Tokens at the top. Main colors: cream, forest green, lime and warm wood. |
| Official Roblox game URL | `site-config.js` → `robloxGameUrl` | Leave empty until confirmed. Only HTTPS `roblox.com/games/<numeric-id>` URLs activate the optional CTA. |
| Actual screenshots | `site-config.js` → `screenshots` | Add local `.webp`, `.png`, `.jpg` or `.jpeg` assets, meaningful alt text and a caption. |
| Email address | `index.html` and `script.js` | Currently `plantboxstudio.contact@gmail.com`. Update both mail links, visible address and copy action together. |
| Brand icon | `assets/mark.svg` | Original box-and-sprout vector mark; also used as the favicon. |
| Hero artwork | `assets/garden-hero.webp` | Original AI-generated concept artwork, explicitly labeled as non-gameplay. |
| Social sharing artwork | `assets/garden-social.jpg` and `og:image` | Confirm the published domain before release; update the absolute image URL if it changes. |

Screenshot example:

```js
screenshots: {
  garden: {
    src: "assets/screenshots/garden.webp",
    alt: "Describe what the actual game screenshot shows",
    caption: "The garden"
  },
  discovery: null,
  world: null
}
```

Frames keep their placeholder if an image fails to load. Only same-origin raster assets are accepted. Images are displayed as non-interactive figures. After adding screenshots, update the gallery introduction and note in `index.html` to match what is now available. The larger first frame crops the source; keep its subject centered or change `object-fit` if the complete frame matters.

## Fields still to confirm

- Official Roblox experience URL and whether access is public.
- Approved gameplay/features and release date. The site deliberately describes a **planned direction**, not released mechanics.
- Three real game screenshots, their accurate captions, and permission to use them.
- Final studio wording and brand mark approval.
- Any official social/community links the owner wants included. None are invented or linked.
- Final domain and relevant legal/publisher details, if required for the actual organization and audience. No legal entity or jurisdiction has been invented.

## Publish to GitHub Pages

This is the account site repository, so the intended address is `https://plantboxstudio.github.io/`. This is an expected deployment address, **not confirmation of publication**.

1. Review the local site and complete/approve the fields above.
2. After explicit publication approval, commit the reviewed files and push them to the repository's agreed publishing branch (normally `main`).
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, the publishing branch, and **/(root)**. Save.
4. Keep `index.html` and `.nojekyll` at the repository root. No package installation or build command is needed.
5. Wait for GitHub's Pages deployment to succeed, then inspect **Visit site** and test the live URL, image/font loading, navigation and mobile layout.

These instructions follow [GitHub's official Pages creation documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), checked 9 October 2026. GitHub Pages is available for public repositories on GitHub Free. This site uses only static files.

## Roll back a release

For a later change, revert the faulty commit on the publishing branch and push the revert. Allow Pages to redeploy, then verify the restored site. Prefer a revert commit over rewriting shared history.

For a serious issue with this first release, there is no earlier published version to restore. In **Settings → Pages**, use **Unpublish site** to take it offline, preserve the repository, and fix and verify the files before publishing again.

## Accessibility and behavior

- Semantic sections, a single H1, meaningful heading hierarchy, skip link and visible keyboard focus.
- Responsive mobile menu supports Escape and closes when navigating or clicking outside.
- System reduced-motion preference and a manual animation pause button. The rotating contact decoration is nonessential.
- No JavaScript needed to read content, navigate, or use email links. With scripts disabled the mobile navigation remains visible.
- Meaningful alt text for concept artwork, decorative SVGs excluded from assistive output, live feedback for copy results.
- Local font uses `font-display: swap`. The hero image has fixed intrinsic dimensions and high fetch priority.

## Asset provenance

- **Outfit** variable font, Latin subset, from Google Fonts, licensed under the SIL Open Font License. License included at `assets/OFL-Outfit.txt`; source: https://github.com/google/fonts/tree/main/ofl/outfit.
- **Garden concept** generated with the built-in image-generation tool on 9 October 2026. This is illustrative direction, not a Roblox screenshot or a claim about implemented assets. Final prompt: `ARTWORK.md`.
- **Box-and-sprout mark and line icons** authored for this implementation. No Roblox logo or third-party game screenshots are used.

No production deployment, live Roblox link, physical-device testing, or real screenshot replacement is implied by this delivery. Review browser verification notes in `VERIFICATION.md`.
