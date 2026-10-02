---
name: Lumina Interface
colors:
  surface: '#121314'
  surface-dim: '#121314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1d'
  surface-container: '#1f2021'
  surface-container-high: '#292a2b'
  surface-container-highest: '#343536'
  on-surface: '#e3e2e3'
  on-surface-variant: '#c5c7c9'
  inverse-surface: '#e3e2e3'
  inverse-on-surface: '#303031'
  outline: '#8f9194'
  outline-variant: '#44474a'
  surface-tint: '#c6c6c8'
  primary: '#ffffff'
  on-primary: '#2f3132'
  primary-container: '#e2e2e4'
  on-primary-container: '#636466'
  inverse-primary: '#5d5e60'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#ffffff'
  on-tertiary: '#003824'
  tertiary-container: '#6ffbbe'
  on-tertiary-container: '#00734e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e4'
  primary-fixed-dim: '#c6c6c8'
  on-primary-fixed: '#1a1c1d'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#121314'
  on-background: '#e3e2e3'
  surface-variant: '#343536'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 4.5rem
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: -0.035em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.75rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: '1.35'
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.04em
  label-ui:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 3rem
---

## Brand & Style

This design system expresses the discipline and creative velocity of a creative technologist. The aesthetic merges architectural minimalism with digital craft: deliberate structure, hyper-curated content density, expansive whitespace, and meticulous typography. 

The emotional response should be one of quiet authority, technological sophistication, and restraint. The interface deliberately avoids decorative noise to foreground case studies, interactive prototypes, and code experiments. Interactive micro-states use measured transitions and subtle luminous cues rather than heavy skeuomorphic effects.

## Colors

The system uses a dual-palette architecture anchored in an ultra-deep obsidian dark mode and a gallery-grade warm paper light mode.

- **Dark Mode (Default):**
  - **Canvas Base:** `#0C0D0E` (Deep neutral void)
  - **Surface Tier 1:** `#141618` (Project card and utility surfaces)
  - **Surface Tier 2:** `#1C1F22` (Active/elevated states and floating controls)
  - **Borders & Dividers:** `rgba(255, 255, 255, 0.08)` baseline; `rgba(255, 255, 255, 0.18)` on hover/focus.
  - **Primary Text:** `#F4F4F6` (High-contrast pure reading level)
  - **Muted Text:** `#8E9299` (Metadata, captions, secondary labels)
  - **Accent / Interactive:** `#6366F1` (Electric Iris for kinetic focus and interaction points)

- **Light Mode (Warm Gallery):**
  - **Canvas Base:** `#F9F8F6` (Warm exhibition paper)
  - **Surface Tier 1:** `#FFFFFF` (Card surfaces and modules)
  - **Surface Tier 2:** `#F1EFEA` (Interactive hover layers and pill tags)
  - **Borders & Dividers:** `rgba(18, 19, 20, 0.08)`
  - **Primary Text:** `#121314` (Deep soot black)
  - **Muted Text:** `#6E7176` (Editorial secondary text)
  - **Accent / Interactive:** `#4F46E5` (Balanced rich indigo for light contrast)

## Typography

The type system pairs **Plus Jakarta Sans** for structural editorial communication with **JetBrains Mono** for technical attribution, metadata, timestamps, and specs.

- Tight negative tracking is applied to headlines (`-0.015em` to `-0.035em`) to create a compact, modern graphic profile.
- Body copy uses balanced line-heights (`1.6` to `1.65`) for prolonged reading of design case studies.
- `label-mono` is strictly used for uppercase technical tags, index markers (e.g., `01 // ARCHITECTURE`), code blocks, and system states.

## Layout & Spacing

The foundation uses a 12-column dynamic grid system engineered to support both expansive work showcases and dense data specs.

- **Desktop (>= 1024px):** 12-column layout, max-width `1440px`, centered with `margin: 4rem` and `gutter: 1.5rem`.
- **Tablet (768px - 1023px):** 8-column layout with `margin: 2rem` and `gutter: 1.25rem`.
- **Mobile (< 768px):** 4-column layout with `margin: 1.25rem` and `gutter: 1rem`.

Section padding alternates rhythmically between `space-lg` (internal element groups) and multi-factor multiples of `space-xl` (vertical pacing between distinct portfolio projects). Grid alignments should remain flush: case study headers, preview viewports, and metadata sidebars must snap directly to parent column bounds.

## Elevation & Depth

This design system avoids simulated physical drop shadows, relying instead on **low-contrast micro-outlines, tonal surfaces, and ambient glows**.

- **Level 0 (Base Canvas):** Natural background `#0C0D0E` (or `#F9F8F6`). No borders.
- **Level 1 (Cards, Modules, Feed Blocks):** Surface Tier 1 backed by a 1px border `rgba(255, 255, 255, 0.07)` (dark) or `rgba(18, 19, 20, 0.08)` (light).
- **Level 2 (Hovered & Active Panels):** Surface Tier 2 with border `rgba(255, 255, 255, 0.16)`. An ultra-diffuse ambient bloom may be applied on interactive elements: `0 8px 32px -4px rgba(99, 102, 241, 0.12)`.
- **Level 3 (Overlay Modals, Command Menus, Media Lightboxes):** Frosted glass surface using backdrop-filter blur (`20px`) with `rgba(12, 13, 14, 0.85)` fill, rimmed with a 1px `rgba(255, 255, 255, 0.12)` keyline.

## Shapes

The interface embraces a tailored **Soft (Level 1)** geometric silhouette.

- Base elements (buttons, project cards, input fields) use `0.25rem` (4px) to `0.5rem` (8px).
- Badges and technical metric chips retain a tight `0.25rem` (4px) corner radius to avoid excessive softness, mirroring technical terminals.
- Floating command palettes and bottom action bars use `0.75rem` (12px) for structural containment.
- Circular shapes (`rounded-full`) are strictly reserved for avatar portraits, status beacons, and standalone icon triggers.

## Components

### Buttons
- **Primary:** Filled with high-contrast neutral (`#F4F4F6` in dark mode, `#121314` in light mode). Typography is `label-ui` with medium weight. Hover state triggers a subtle scale transition (`1.01`) and faint accent halo.
- **Secondary / Ghost:** Transparent background with a 1px border `rgba(255, 255, 255, 0.1)`. Hover shifts background to Surface Tier 2 and brightens border to `0.25` opacity.
- **Icon Button:** Square bounds matching button heights (`40px` default, `32px` compact) with centered icon, maintaining consistent 1px hairline styling.

### Chips & Tags
- Engineered as technical badges using `label-mono`. Height is constrained to `24px` with horizontal padding of `space-sm`.
- Styled with low-opacity tint backgrounds (`rgba(99, 102, 241, 0.08)`) and matching keylines.

### Project & Case Study Cards
- Composed of an image or interactive viewport framed in a 1px border, followed by metadata (`label-mono`), project title (`headline-sm`), and a brief description (`body-sm`).
- Hover shifts the entire card border to the accent tone (`#6366F1`) via a `200ms ease-out` transition without abrupt vertical elevation changes.

### Lists & Activity Feeds
- Structured as border-delimited rows with flush edges.
- Each item splits into three spatial anchors: Index/Date (`label-mono`, left), Title/Description (center-fill), and Arrow/Action indicator (right).
- Row hover triggers a subtle background highlight of Surface Tier 1.

### Form Inputs & Command Palette
- Dark inset backgrounds with transparent borders that brighten upon focus.
- Placeholder text in muted neutral (`#8E9299`).
- Focus rings are replaced with a crisp 1px accent keyline and a gentle ambient tint without standard browser outlines.

### Code Snippets & Interactive Sandboxes
- Terminal-inspired containers with an integrated header bar displaying language, file path, and a copy button.
- Background uses pure dark neutral (`#08090A`), separating code sandboxes clearly from adjacent portfolio editorial surfaces.