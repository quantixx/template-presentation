# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This repository provides presentation templates for speakers at **Devoxx France 2026** (theme: "Happy AI" — robots in the spirit of Fallout / Wes Anderson's "Asteroid City"). It is a static asset repository with no build system.

Supported formats:
- **PowerPoint** — `PowerPoint/MAIN_2026.pptx`
- **Keynote v13** — `Keynote v13/MAIN2026.key`
- **SliDesk** (HTML/CSS slides) — `SliDesk/`
- **Google Slides** — import the PowerPoint file and adapt

The official design guide is `MAIN_2026.pdf`.

## SliDesk

SliDesk is the only format with editable code. Install via `brew install gouz/tools/slidesk`, then run `slidesk` from the `SliDesk/` directory and open in a browser.

**Key files:**
- `SliDesk/main.sdf` — slide content in SliDesk Markup Format (`.sdf`). Each slide is a `##` heading with an optional CSS class (e.g. `.[simple-slide]`). HTML is supported inline.
- `SliDesk/devoxx_fr/theme.css` — all visual styling. Defines slide layouts and Devoxx brand CSS variables.
- `SliDesk/devoxx_fr/theme.js` — runs on `DOMContentLoaded`; reorganizes title-slide DOM and stamps "Devoxx France" footer on all slides.

**Slide layout classes** (applied via `.[class-name]` on `##` headings):
- `main-slide` — full-screen intro/section divider
- `title-slide` — opening title with speaker name, company, subtitle
- `simple-slide` — standard content slide with title and body
- `no-title-slide` — body only, no title bar
- `thanks-slide` — closing slide

**Brand fonts** (installed from `fonts/` or `SliDesk/devoxx_fr/fonts/`):
| Role | Font |
|---|---|
| Titles | Conthrax SemiBold |
| Devoxx labels / subtitles | Pirulen |
| Body text | Open Sans |
| Supplemental | Poppins |

**Brand colors** (defined as CSS variables in `theme.css`):
- Primary accent: `#78E23A` (lime green)
- Dark background: `#151515` / `#3A3938`
- Alternate accents: blue `#8FAADC`, orange `#F4B183`, yellow `#FFD966`

## Images

2026 visuals are in `images/2026/` with subdirectories: `visuals/`, `robots/`, `compressed/`, `banner_web/`. Use these for slide backgrounds and decorative elements.

## Constraints

- All slides must be **16:9** aspect ratio.
- Presentations must comply with the [Devoxx France Code of Conduct](https://www.devoxx.fr/code-de-conduite/).
- If using a custom deck, the first slide must still use the Devoxx France theme.
- On macOS, if Keynote does not recognize Pirulen: Format > Font > Show Fonts > All Fonts > select Pirulen manually.