# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is Otávio Sbms's personal portfolio: a static site with no build step, no
package manager and no test suite. Everything lives in three files —
`index.html`, `css/style.css`, `js/main.js` — plus `img/favicon.svg` and
`files/CV-Otavio-SBMS.pdf`. It is deployed as-is via GitHub Pages.

## Working locally

There is no build/lint/test tooling. To preview changes, serve the folder
with any static file server (opening `index.html` directly via `file://`
breaks the reveal-on-scroll and i18n JS in some browsers due to fetch/module
restrictions):

```bash
python -m http.server 8790
```

Then open `http://localhost:8790/`.

## Architecture

### Single-page structure

All markup, copy and section content live in `index.html` as one long page
with anchor-linked sections (`#sobre`, `#experiencia`, `#skills`,
`#projetos`, `#formacao`, `#contato`). `css/style.css` and `js/main.js` are
each a single flat file — there is no bundler, no CSS preprocessor, no
component system. New sections/cards should follow the existing markup
patterns (`.skill-card`, `.project-card`, `.highlight-card`, `.edu-card`)
rather than introducing new structural conventions.

### Toggle pattern (theme + language)

Both the dark/light theme and the PT/EN language toggle follow the same
design, implemented in `js/main.js`:

- State lives as an attribute on `<html>` (`data-theme`, `data-lang`) and is
  persisted to `localStorage` (`theme`, `lang` keys).
- CSS reacts purely via attribute selectors, e.g. `html[data-theme="light"]`
  and `html[data-lang="en"]`, including cross-fading icon/label pairs
  (`.theme-toggle .fa-sun`/`.fa-moon`, `.lang-toggle .lang-pt`/`.lang-en`).
- A small circular `<button>` in `.nav-actions` drives each toggle. New
  toggles of this kind (if ever added) should reuse this same
  attribute+localStorage+CSS-selector approach rather than toggling classes
  in JS.

### i18n system

Portuguese is the source of truth, written directly in the HTML. English is
a translation layer applied at runtime:

- Any element with a translatable string carries `data-i18n="key"` (innerHTML
  swap), `data-i18n-aria="key"` (aria-label swap), or, for the meta
  description, `data-i18n-content="key"`.
- On load, `main.js` captures the original (Portuguese) `innerHTML`/
  `aria-label`/`content` of every tagged element into a `Map`, keyed by
  element — this is the fallback used whenever the active language isn't
  English.
- `translationsEn` in `main.js` is a flat `{ key: 'English string' }`
  dictionary. `applyLang(lang)` swaps every tagged element's content between
  the captured PT original and `translationsEn[key]`.
- **When adding or editing any user-facing copy**, add/update the
  `data-i18n*` attribute in `index.html` *and* the matching key in
  `translationsEn` in the same change — the two must stay in sync. A key
  present in the HTML but missing from the dictionary silently falls back to
  Portuguese instead of erroring, so this is easy to miss.
- Proper nouns, technology names and product names (TypeScript, NestJS,
  MarIA, PedBot, company names, etc.) are intentionally left untranslated —
  don't add `data-i18n` to those.
- The hero's typed-role effect has its own parallel PT/EN arrays
  (`rolesByLang` in `main.js`) rather than using `data-i18n`, since it's
  driven by a typing animation, not static DOM content.

### Reveal-on-scroll + animation system

Elements with class `.reveal` start hidden/offset and fade in via an
`IntersectionObserver` in `main.js` (`observer`), which adds `.in-view` and
then unobserves. Grid items (`.skills-grid`, `.projects-grid`,
`.exp-highlights`, `.edu-grid`) get a cascading stagger purely in CSS via
`nth-child` `transition-delay` rules — new items added to those grids beyond
the currently-defined `nth-child` count won't get a delay (harmless, just no
stagger). A separate `IntersectionObserver` (`sectionObserver`) drives the
active-nav-link highlight based on scroll position. All animation/transition
rules are neutralized under `@media (prefers-reduced-motion: reduce)` at the
bottom of `style.css` — keep new animations covered by that rule (it targets
`*`, so this is automatic for standard `animation`/`transition` properties).

### Design tokens

Colors, spacing radius and fonts are CSS custom properties on `:root` in
`style.css`, with a light-theme override block (`html[data-theme="light"]`).
New colors/spacing should be added as tokens there rather than hardcoded in
component rules.

## Content & positioning conventions

These reflect explicit direction from the site owner — keep new copy aligned
with them:

- **Full Stack identity.** The site positions Otávio as a Full Stack
  developer (not backend-only) — copy across the hero, about section and
  terminal card should reflect both front-end and back-end work. The
  terminal-style `$` / `>_` logo and favicon (instead of a literal `</>`)
  is a CLI/dev-tools aesthetic choice, independent of that positioning —
  keep it, don't reintroduce `</>`-style branding.
- **No industry over-emphasis.** Client/project descriptions were
  deliberately rewritten to lead with technology and architecture (APIs,
  LangGraph, agent orchestration, WhatsApp/MCP integrations) rather than the
  client's business sector. Keep new project/experience copy framed the same
  way — technical substance first, sector/company context secondary.
- **Chips/tags stay terse.** Skill chips (`.chips span`) and project tags
  (`.project-tags span`) are short (1–3 words), title-cased technology or
  concept names, not sentences.
- **PHP/Laravel are listed as regular, equal-weight skills** (not visually
  de-emphasized) even though they're not the primary focus — don't add
  special muted styling to de-prioritize specific skills; if something is
  secondary, that's conveyed by ordering/context in prose, not by a
  different visual treatment.

## Git workflow

Commits in this repo are made in small, logically-scoped units (one commit
per distinct content/feature change, e.g. "Adicionar Redis, PHP e Laravel ao
stack..." separate from "Adicionar projeto X..."), with commit messages as
short Portuguese imperative sentences (no Conventional Commits prefixes).
Do not push to `origin` unless explicitly asked — commits are routinely
created locally ahead of `origin/main` and pushed only on request.
