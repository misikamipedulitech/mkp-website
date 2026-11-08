# MKP Website

Official website for Misi Kami Peduli (MKP) — a public, informational site
(not a dashboard or app). Built with Next.js (App Router), TypeScript, and
Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint
- `npm run typecheck` — run the TypeScript compiler with no output
- `npm run images` — optimise images in `public/images` (see [Images](#images))

## Routes

| Path | Page |
| --- | --- |
| `/` | Landing Page (includes current MKP program overview, e.g. MKP 2027: Way Kambas, Lampung) |
| `/about` | About Us |
| `/about/past-sponsors` | Past Sponsors |
| `/about/our-team` | Our Team |
| `/programs/current` | Current Programs |
| `/programs/past` | Past Programs |

`/programs` redirects to `/programs/current` for existing links.

## Project structure

```
src/
  app/                  # routes (App Router)
    about/_components/  # sections used only by that route (colocated, not routable)
  components/layout/    # Navbar, Footer, and shared layout pieces
  components/ui/        # reusable primitives (Button, Polaroid, SectionTag)
  lib/site-config.ts    # site metadata + navigation structure (single source of truth)
  lib/team.ts           # team members (temporary data store)
  lib/programs.ts       # past programs shown on the footprints map (temporary data store)
scripts/                # one-off maintenance scripts (images, footprints map)
```

Navigation (including dropdown items) is defined once in
[`src/lib/site-config.ts`](src/lib/site-config.ts) and consumed by both the
`Navbar` and `Footer` components — add or rename a route there and both
update automatically.

This is currently a project foundation: routing, shared layout, navigation,
and footer are in place, but pages use placeholder content pending the
Figma designs.

## Typography

- Headings (`h1`–`h6`): Libre Baskerville.
- Body text, navigation, and controls: Inter.
- Handwritten accents (e.g. the "MKP" in "About MKP"): Dancing Script, via `font-script`.

Fonts are loaded through `next/font/google` in `src/app/layout.tsx` and
self-hosted by Next.js. Global defaults are defined in `src/app/globals.css`.
Use Tailwind's `font-heading` for heading-style text outside heading elements
and `font-sans` for normal text.

## Images

Put images in `public/images/` (e.g. `public/images/about/hero.jpg`), then run:

```bash
npm run images
```

[`scripts/optimize-images.mjs`](scripts/optimize-images.mjs) overwrites each
`.jpg`, `.jpeg` and `.png` **in place**:

- resizes to at most 1920px wide for `hero.*` files and 1080px for everything
  else (never enlarges);
- re-encodes as JPEG (quality 80) or compressed PNG, matching the extension,
  and strips metadata.

A file is only replaced when the result is at least 10% smaller, so it is safe
to re-run after adding a new picture — already-optimised images are skipped
rather than re-compressed. Originals are not kept, so back up a full-size copy
elsewhere first if you need one.

`next/image` still resizes and serves WebP on request; this script just keeps
the source files small. If a swapped image doesn't update in the browser, hard
refresh (Ctrl+Shift+R) or give the file a new name.

## Footprints map

The map in the About page's "Our Footprints" section has two parts:

- **Pins** come from [`src/lib/programs.ts`](src/lib/programs.ts). To add a
  program, add an entry with its `year`, `title`, `description` and
  `location: { name, lat, lng }`. Pins are placed from the coordinates when the
  page renders, so nothing else needs regenerating.
- **Land outlines** are generated once from
  [Natural Earth](https://www.naturalearthdata.com/) (public domain) into
  `src/app/about/_components/footprints-map-data.ts`. Don't edit that file by
  hand.

To regenerate the outlines (requires internet access):

```bash
node scripts/generate-footprints-map.mjs
```

Re-run it only when changing what the map covers. The settings are at the top
of [`scripts/generate-footprints-map.mjs`](scripts/generate-footprints-map.mjs):

- `COUNTRIES` — drawn in solid navy (currently Indonesia);
- `CONTEXT_COUNTRIES` — drawn faintly for context (currently Malaysia and
  Singapore);
- `BOUNDS` — the area shown, in degrees. Pins move with it automatically.

Countries use their ISO 3166 alpha-3 code (e.g. `BRN` for Brunei, `TLS` for
Timor-Leste). In development, a program whose coordinates fall outside
`BOUNDS` stops the page with an error naming the program; widen `BOUNDS` and
re-run the script.

## Past sponsors archive

`src/lib/sponsors.ts` contains every year and sponsorship tier from
[MKP’s original partners and sponsors page](https://directorsmkp.wixsite.com/misikamipeduli/our-partners-sponsors),
including the six slideshow panels: 2024, 2019, 2017, 2016, 2015, and 2014.
Names use readable capitalisation; the original years and tier assignments are
preserved. NGO partners, sponsors, and endorsements are listed
separately. The 2014 NGO is named only “Foundation” in the source. These records do not represent secured sponsorship for MKP 2027.

The archive is rendered at `/about/past-sponsors`. Its photograph is downloaded
from the same Wix page into `public/images/sponsors/hero.jpg`. The source does
not provide sponsor logos, so the page recognises sponsors by name.
