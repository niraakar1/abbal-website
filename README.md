# Abbal Dhakal — tutoring &amp; counseling

Hand-built static site. No framework, no build step, **no image files** — every
illustration, icon, avatar and doodle is inline SVG or CSS. Open `index.html`
in a browser to view locally.

```
index.html        Home — hero, college marquee, services, approach, stats, testimonials, contact
about.html        About — philosophy + projects
assets/css/style.css   the whole design system
assets/js/app.js       marquee loop + scroll reveals
```

## Live on your phone
The included workflow (`.github/workflows/pages.yml`) auto-deploys on every push.
Pages is already enabled, so just wait ~1–2 min after a push:

> **https://niraakar1.github.io/abbal-website/**

## Customize (search files for `CUSTOMIZE ME`)
| Thing | Where |
|---|---|
| Name | search-replace `Abbal Dhakal` |
| Photo | the hero/about `.figure__arch` is a placeholder — replace it with `<img src="..." alt="Abbal Dhakal">` (the comment shows where) |
| Credentials | `index.html`, the `.creds` list |
| Colleges | `index.html`, the `.marquee__row` (edit the `<span>` names) |
| Stats | `index.html`, the `.stats` block |
| Testimonials | `index.html`, the `.quote` figures (avatars are CSS initials) |
| Philosophy | `about.html`, the `.prose` block |
| Projects | `about.html`, set each `.proj` `href` |
| Email | `mailto:` links (`abbal@superscholar.io`) |

## Design
- **anthropic-serif** (Newsreader fallback) display + Inter body.
- Warm cream paper with a faint dot-grid, navy / teal / gold ink.
- Golden primary button (`.btn--gold`); bracketed pill buttons with hover/press states.
- Tasteful hand-drawn accents (headline underline, arrows, star bullets) — kept restrained.
- Respects `prefers-reduced-motion`.
