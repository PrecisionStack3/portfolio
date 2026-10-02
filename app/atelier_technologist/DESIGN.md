---
name: Atelier Technologist
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002114'
  on-tertiary-container: '#069669'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
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
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies the disciplined convergence of high-end editorial curation and precision software craft. Built for a senior design engineer and creative technologist, it balances restrained minimalism with calculated structural rigor. The aesthetic avoids cold abstraction in favor of gallery-grade poise: expansive negative space, deliberate rhythmic cadences, ultra-crisp typography, and tactile structural delineation.

The emotional objective is absolute confidence, quiet authority, and meticulous attention to detail. Every surface, border, and character serves a functional and compositional purpose, creating an environment where complex engineering artifacts and refined interactive prototypes are framed with museum-level clarity.

## Colors

The palette is engineered around an architectural foundation of layered off-whites, neutral slate washes, and high-density carbon values.

- **Primary Canvas & Surfaces:** The base canvas defaults to `#FAFAFA` with layered containers resting at `#FFFFFF`. Inset code panels and technical asides leverage a subtle stone-slate wash at `#F1F5F9`.
- **Text & Contrast:** Primary text is commanded by obsidian slate (`#0F172A`), providing deep, ink-like contrast without the harshness of pure black. Secondary narrative text uses charcoal (`#334155`), while captions, meta-data, and technical labels sit at `#64748B`.
- **Structural Outlines:** Subtle, hairline dividing borders leverage `#E2E8F0` and `#EAECF0` to maintain clean structural planes without cluttering sightlines.
- **Accents:** Secondary royal blue (`#2563EB`) provides purposeful interaction signals and active status indicators. Tertiary emerald (`#059669`) serves strictly for live project badges, availability status, and production telemetry indicators.

## Typography

The typographic hierarchy implements a high-contrast pairing between three distinct typefaces:

1. **Plus Jakarta Sans (Headlines & Display):** Selected for its modern geometric architecture with sculpted ink traps, creating a decisive editorial visual statement for major section titles and case study intros.
2. **Inter (Body & Narrative):** The benchmark for high-legibility interface reading. Tuned for sustained reading across long-form case studies, design rationales, and architectural breakdowns.
3. **JetBrains Mono (Technical Metadata & System Labels):** Anchors the technical craft identity. Applied to commit tags, runtime performance metrics, technology stack badges, and structural indices.

Headings feature tight, deliberate negative letter-spacing to emphasize authority. Body typography adheres strictly to a 1.5x–1.6x line-height ratio to guarantee breathing room.

## Layout & Spacing

This design system uses a 12-column dynamic fluid grid capped at a maximum content width of 1280px to preserve editorial balance on ultra-wide viewports. 

- **Grid Architecture:** 
  - **Desktop (>= 1024px):** 12 columns, 1.5rem (`24px`) gutters, and 3rem (`48px`) minimum outer margin.
  - **Tablet (768px – 1023px):** 8 columns, 1.25rem (`20px`) gutters, and 2rem (`32px`) margins.
  - **Mobile (< 768px):** 4 columns, 1rem (`16px`) gutters, and 1.25rem (`20px`) margins.
- **Rhythm & Proportions:** Spacing follows an 8-point base module. Major narrative chapters and portfolio projects are divided by `space-3xl` (96px) to reinforce an intentional gallery pacing. Components within cards are bound tightly using `space-xs` through `space-md`, establishing clear gestalt groupings.

## Elevation & Depth

Visual hierarchy relies on structural planes and diffused ambient illumination rather than aggressive physical drop shadows.

- **Surface Layering:**
  - Base: `#FAFAFA`
  - Floating Container / Elevated Card: `#FFFFFF`
  - Inset Technical Pane: `#F8FAFC` with a hairline 1px border (`#E2E8F0`).
- **Shadow Profiles:**
  - **Flat / Structured:** `box-shadow: none`, defined solely by a 1px border (`#EAECF0`).
  - **Ambient Rest:** `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
  - **Interactive Hover:** `box-shadow: 0 12px 28px -4px rgba(15, 23, 42, 0.05), 0 8px 10px -6px rgba(15, 23, 42, 0.02)`.
  - **Focus & Dialog Overlays:** Backdrop blur of `12px` using `rgba(250, 250, 250, 0.8)` paired with an inner border of `rgba(226, 232, 240, 0.8)`.

## Shapes

The shape vocabulary uses soft, calculated radii to maintain an architectural, engineering-first aesthetic. Excessive roundedness is discarded to avoid playful or toy-like impressions.

- Standard buttons, input surfaces, and tags utilize `0.25rem` (4px).
- Cards, modal dialogue containers, and framed media utilize `rounded-lg` (`0.5rem` / 8px).
- Complex canvas viewports, interactive prototypes, and master preview modules scale to `rounded-xl` (`0.75rem` / 12px).
- Status indicators and live system pings are the sole circular elements (`rounded-full`).

## Components

- **Buttons:**
  - *Primary:* Solid `#0F172A` background, `#FFFFFF` text, subtle 1px border (`#0F172A`), `0.25rem` radius. Interactive state transitions cleanly to `#1E293B`.
  - *Secondary / Outline:* Pure `#FFFFFF` surface with a 1px `#E2E8F0` border, `#0F172A` label. Hover activates `#F8FAFC` background and darkened border (`#CBD5E1`).
  - *Text / Ghost:* Transparent background, `#334155` text with micro-interaction hover to `#0F172A` and underline indicator.
- **Badges & Chips:**
  - Compact form factor using `label-sm` font.
  - Neutral badge: `#F1F5F9` background, `#334155` label, `#E2E8F0` border.
  - Active / Production badge: `#ECFDF5` background, `#047857` label, `#A7F3D0` border, punctuated by a 6px pulsing green dot.
- **Cards & Case Study Frames:**
  - Constructed on `#FFFFFF` grounds with 1px border (`#EAECF0`) and `rounded-lg` geometry.
  - Top or bottom metadata strips utilize `JetBrains Mono` at `label-sm` to categorize client, role, and stack.
  - Hover states subtly translate the container `-2px` along the Y-axis accompanied by the diffused elevation shadow.
- **Lists & Data Rows:**
  - Border-bottom divider of 1px `#F1F5F9`.
  - High alignment: Left-aligned title in `Plus Jakarta Sans` (`headline-sm`), right-aligned release year and tech stack in `JetBrains Mono` (`label-md`).
- **Inputs & Filters:**
  - Height fixed at 40px for precise rhythm.
  - Off-white interior (`#FFFFFF`), border `#E2E8F0`, typography in `Inter` (`body-sm`).
  - Active focus ring uses a crisp 1px `#0F172A` offset border without heavy rings.
- **Interactive Code & Prototype Blocks:**
  - Background set to `#F8FAFC`, surrounded by a 1px border (`#E2E8F0`).
  - Integrated header displaying terminal tabs and active branch or version labels using `label-sm`.