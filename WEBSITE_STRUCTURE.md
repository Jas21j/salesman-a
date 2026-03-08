# Salesman Solutions — Website Structure & Information

This document describes the structure, routes, data model, and content organization of the Salesman Solutions website.

---

## Overview

The site is a **Next.js 14** (App Router) marketing site for **Salesman Solutions**, a platform venture architecture company. It presents two product platforms — **IRIS** (digital intelligence) and **ASSAN** (applied systems) — and supports lead generation via Contact and Case Studies.

- **Tech stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion  
- **Fonts:** Cormorant Garamond (display), Satoshi (body) via Fontshare  
- **Metadata base:** `https://salesmansolutions.com`

---

## Route Structure

| Route | Purpose |
|-------|--------|
| `/` | Home — hero, platform architecture, doctrine, case studies preview, proof, CTA |
| `/solutions` | Solutions index — overview of IRIS and ASSAN |
| `/solutions/iris` | IRIS platform page — digital intelligence / optimizations |
| `/solutions/assan` | ASSAN platform page — applied systems / operations |
| `/solutions/property-operations` | Property operations offering (ASSAN) |
| `/about` | About — mission, founder timeline, company story |
| `/case-studies` | Case studies index — list of documented operations |
| `/case-studies/[slug]` | Single case study — dynamic by slug from data |
| `/contact` | Contact — form/CTA and company details |
| `/legal/privacy` | Privacy policy |
| `/legal/terms` | Terms of use |

Static assets and metadata: `favicon.ico`, `robots.ts`, `sitemap.ts` at app root.

---

## App Router Layout

- **`src/app/layout.tsx`** — Root layout: Cormorant + Satoshi, global CSS, grain overlay, metadata (title, description, keywords, Open Graph).
- **`src/app/globals.css`** — Global styles, Tailwind, CSS variables (brand tokens).
- **`src/app/not-found.tsx`** — 404 page.
- **`src/app/fonts/`** — Geist VF and GeistMono VF (optional/local fonts).

Each route is a `page.tsx` under the corresponding folder; dynamic case studies use `[slug]`.

---

## Data Layer (`src/data/`)

All content is CMS-ready TypeScript. No database required for current build.

| File | Purpose | Used by |
|------|--------|--------|
| **`case-studies.ts`** | Array of `CaseStudy` objects (slug, platform, work type, overview, problem, approach, outcomes, metrics, etc.). Filter by `status: "published"`. | Case study index, case study detail page, sitemap, CaseStudiesPreview |
| **`navigation.ts`** | `navItems` (label + href) and `companyInfo` (name, tagline, phone, email, founder, etc.). | Navbar, Footer, Contact page |
| **`stats.ts`** | Array of `Stat` (value, numericValue, suffix, label) for proof/numbers. | CompanyProof, stats displays |
| **`timeline.ts`** | Founder timeline events (id, title, description, period). | About page (FounderTimeline) |

### Types (`src/types/index.ts`)

- **`Platform`** — `"IRIS" \| "ASSAN"`
- **`WorkType`** — `"OPERATION" \| "OPTIMIZATION"`
- **`CaseStudy`** — slug, operationName, platform, workType, category[], timeline, location, overview, problem, approach, executionScope[], outcomes[], lessons, metrics[], gallery[], videoUrl?, liveUrl?, status
- **`Stat`** — value, numericValue, suffix, label
- **`TimelineEvent`** — id, title, description, period?
- **`NavItem`** — label, href

---

## Components

### Layout (`src/components/layout/`)

- **Navbar** — Logo, nav links from `navItems`, mobile menu.
- **Footer** — Links, company info from `companyInfo`, contact details.

### Sections (`src/components/sections/`)

- **Hero** — Home hero with headline and CTA.
- **CostOfComplexity** — Value prop / cost-of-complexity messaging.
- **PlatformArchitecture** — IRIS + ASSAN overview and links.
- **IndustryMorphingStrip** — Rotating industry labels.
- **Doctrine** — Company principles/doctrine.
- **CaseStudiesPreview** — Preview of case studies from `case-studies.ts`.
- **CompanyProof** — Stats from `stats.ts` (StatCard).
- **WhySS** — “Why Salesman Solutions” messaging.
- **about/** — AboutHero, MissionStatement, FounderTimeline (uses `timeline.ts`).
- **case-studies/** — CaseStudiesIndex, CaseStudyContent (single study).
- **contact/** — ContactContent (form/CTA, uses `companyInfo`).
- **projects/** — PropertyOpsHero, Capabilities, HowItWorks (property operations).
- **solutions/** — PlatformPage (shared layout for IRIS/ASSAN pages).

### UI (`src/components/ui/`)

- **CTABand** — Dual CTA band (headline, primaryCTA, secondaryCTA).
- **SectionHeader** — Reusable section title/eyebrow.
- **StatCard** — Single stat display (value + label).

### Utilities

- **`src/lib/animations.ts`** — Framer Motion variants and helpers for scroll/entrance animations.

---

## Public Assets (`public/`)

- **`images/`** — `logo.png`, `logo-alt.png`, `landingpage.png`, `founder.png`. Used in layout, OG image, and about/founder sections.
- Favicon at `src/app/favicon.ico`.

---

## Configuration

- **`tailwind.config.ts`** — Theme, brand colors (e.g. navy, sand, off-white), font families.
- **`next.config.mjs`** — Next.js config (minimal).
- **`postcss.config.mjs`** — PostCSS for Tailwind.
- **`.eslintrc.json`** — ESLint (Next.js config).

---

## SEO & Metadata

- **`src/app/sitemap.ts`** — Builds sitemap from static routes + case study slugs from `case-studies.ts`.
- **`src/app/robots.ts`** — Robots.txt (allow/disallow rules).
- Per-layout/page metadata in `layout.tsx` and individual `page.tsx` where needed.

---

## Build & Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm start
```

---

## Summary

The website is a self-contained Next.js app with all content in `src/data/` and types in `src/types/`. Routes map to marketing pages (Home, Solutions, About, Case Studies, Contact, Legal). To add content: edit the appropriate data file and, for new case studies, add an entry with a unique `slug` and `status: "published"`.
