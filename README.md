# Abbal Dhakal — tutoring &amp; counseling website

A hand-built static site (no framework, no build step). Open `index.html`
in a browser to view it locally; nothing to install.

```
index.html        Home — hero, services, college marquee, testimonials, contact
about.html        About — philosophy + projects/programs
assets/css/        styles.css  (all the design lives here)
assets/js/         main.js     (marquee loop + scroll reveals)
assets/img/        portrait + student photos + favicon  (placeholders)
assets/logos/      college logos  (placeholders)
```

## 📱 See it on your phone (GitHub Pages)

A deploy workflow is already included (`.github/workflows/pages.yml`). To turn
it on — this is the one thing you have to click yourself:

1. On GitHub, open this repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Done. Every push to the site branch (or `main`) republishes automatically.

Your live URL will be:

> **https://niraakar1.github.io/abbal-website/**

(The first deploy takes a minute or two after you flip the setting.)

## ✏️ What to customize (search the files for `CUSTOMIZE ME`)

| Thing | Where |
|---|---|
| **Your name** | search-replace `Abbal Dhakal` everywhere |
| **Your cutout photo** | the hero/about portrait is an **inline SVG illustration**. When you have a transparent cutout, drop it at `assets/img/portrait.png` and swap the `<svg class="portrait-art">` for the commented-out `<img>` (the comment is right there) |
| **Credentials** (hero left) | `index.html`, the `.creds` list |
| **Colleges** (marquee) | `index.html`, the `.marquee-track` — just edit the `.chip` text (no logo files needed) |
| **Testimonials** (up to 3–4) | `index.html`, the `.quotes` block (avatars are CSS initials — set the letter + `avatar-1/2/3` color) |
| **Philosophy** | `about.html`, the `.philosophy` block (placeholder for now) |
| **Project links** | `about.html`, set the real `href` on each `.project` |
| **Email** | the `mailto:` links (currently `abbal@superscholar.io`) |

### Colleges in the marquee
Princeton · Caltech · Haverford · Williams · Franklin &amp; Marshall ·
Gettysburg · Lehigh · Bryn Mawr · Bucknell

## Design notes
- Clean editorial "sketchbook": **anthropic-serif** (Newsreader fallback) + Inter,
  warm cream paper, navy/teal/gold ink, light hand-drawn doodle accents.
- Everything is **rendered in inline SVG / CSS** — no image files except the
  favicon (portrait, brand mark, college names, avatars, icons are all code).
- Golden primary CTA (`.btn-gold`), with teal/outline variants; buttons have
  hover + pressed states.
- Hero portrait sits **right**, credentials **left**, two CTAs.
- Respects `prefers-reduced-motion` (marquee, scribble spin, sparkles, reveals all stop).
