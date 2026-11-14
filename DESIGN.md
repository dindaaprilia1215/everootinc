# DESIGN.md: Everoot Inc. (Savee-Inspired Editorial Gallery Redesign)

## Design Read
Reading this as: B2B & Cultural Export-Import Company Profile (Everoot Inc., East Java, Indonesia) for international buyers and local agricultural/UMKM partners, redesigned in the Savee minimalist gallery aesthetic (`savee.com-DESIGN.md`), dial **ENERGY 2 / RHYTHM 3 / MOTION 1**.

## Dials
- **ENERGY: 2 (Balanced)** - Bold geometric display typography with tight negative tracking (`-3.35px` at `display-xl`) paired with generous whitespace and full-bleed curated spice and craft photography.
- **RHYTHM: 3 (Varied / Asymmetric)** - Varied editorial section structures across the site: asymmetric hero with curated photo mosaic, full-width quote manifesto, interactive pill-segmented timeline, asymmetric commodity spotlight, flat surface partner directory, edge-to-edge masonry gallery, and split map/RFQ contact view.
- **MOTION: 1 (Restrained & Intentional)** - Subtle surface transitions, focus rings, tab switches, and modal open/close transitions. Respects `prefers-reduced-motion: reduce`.

## Color Palette (Derived from `savee.com-DESIGN.md`)
- **Primary / Ink (`#0A0A0A` Light / `#F5F5F5` Dark)**: Display headlines, primary pill CTAs, active controls, and brand mark.
- **Canvas (`#FDFDFD` Light / `#0F0F10` Dark)**: Default page and featured card background.
- **Surface (`#E4E4E4` Light / `#1D1D1E` Dark)** & **Neutral-3 (`#F3F3F3` Light / `#161617` Dark)**: Flat color-blocked cards, panels, and secondary pill buttons without visible border strokes.
- **Body (`#404040` Light / `#D4D4D4` Dark)** & **Muted (`#595959` Light / `#9E9E9E` Dark)**: WCAG AA verified (>= 4.5:1) body copy and secondary metadata.

## Typography
- **Primary Stack**: `'DM Sans'`, `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` (weights `400` and `500` only, matching Savee's geometric voice and tight negative display tracking).
- **Technical Codes**: `'JetBrains Mono', monospace` used strictly for tabular HS codes, batch identifiers, and coordinates.

## Component Rules
- **Buttons**: Always pill-shaped (`9999px` radius), flat with zero borders; `56px` height for primary/secondary full CTAs, `46px` for compact controls, and ghost floating pills (`rgba(253,253,253,0.92)` + `shadow-md`) over media.
- **Media Cards**: `16px` (`--rounded-xs`) corner radius with zero internal image padding so photography breathes edge-to-edge.
- **Depth Strategy**: Color blocking from `--canvas` to `--surface` / `--neutral-3` preferred over shadows or borders; Savee `md` and `xl` layered-micro shadows reserved for featured cards, ghost buttons, dropdown menus, and the gallery modal.
