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
| **Your cutout photo** | replace `assets/img/portrait.svg` → e.g. `portrait.png` (transparent PNG looks best), then update the `<img src>` in `index.html` / `about.html` |
| **Credentials** (hero left) | `index.html`, the `.creds` list |
| **College logos** | drop real files into `assets/logos/`, keeping the same filenames |
| **Testimonials** (up to 3–4) | `index.html`, the `.quotes` block + `assets/img/student-*.svg` |
| **Philosophy** | `about.html`, the `.philosophy` block (placeholder for now) |
| **Project links** | `about.html`, set the real `href` on each `.project` |
| **Email** | the `mailto:` links (currently `abbal@superscholar.io`) |

### Colleges in the marquee
Princeton · Caltech · Haverford · Williams · Franklin &amp; Marshall ·
Gettysburg · Lehigh · Bryn Mawr · Bucknell

## Design notes
- Editorial / scholarly feel: Fraunces (display serif) + Inter (body), a warm
  paper background with a real grain texture, academic green + ochre accents.
- The hero portrait sits to the **right**, credentials to the **left**, with
  two CTAs (Get counseling / Get SAT tutoring).
- Respects `prefers-reduced-motion` (marquee + reveals turn off).
