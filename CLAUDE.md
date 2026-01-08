# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Financial Advisory Homepage - a single-page React application built with Vite, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Commands

```bash
bun install       # Install dependencies
bun run dev       # Start development server
bun run build     # TypeScript check + production build
bun run lint      # ESLint
bun run preview   # Preview production build
```

## Architecture

### Tech Stack

- **Runtime/Package Manager:** Bun
- **Build:** Vite with `@tailwindcss/vite` plugin
- **UI:** React 19, Tailwind CSS v4, shadcn/ui (new-york style)
- **State:** Zustand for UI state only
- **Animations:** Framer Motion, Lenis (smooth scroll)
- **Path Alias:** `@/` maps to `src/`

### Project Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer
│   ├── sections/    # Hero, Values, WhoWeServe, Stats, Services, CTA
│   ├── common/      # SectionHeading, StatCard, NavLink, SmoothScroll, BlurOverlay
│   └── ui/          # shadcn components (button, separator, sheet)
├── store/           # Zustand store (ui.store.ts)
├── lib/             # Utilities (cn function in utils.ts)
├── types/           # TypeScript interfaces
├── styles/          # theme.css (color tokens, typography)
└── assets/          # Images
```

### Key Patterns

**Component Organization:** Barrel exports via `index.ts` in each component folder. Import from folder path, not individual files.

**Styling:**

- Theme tokens defined in `src/styles/theme.css` (--bg-main, --teal-dark, --text-primary, etc.)
- Tailwind classes reference these via `bg-bg-main`, `text-text-primary`, etc.
- Typography uses `--font-serif` (Instrument Serif) for headings, `--font-sans` (Inter Tight) for body

**State Management:** UI state (mobile nav, active service) managed via Zustand store. Access with `useUIStore` hook and selectors.

**Layout:**

- Max content width: 1280px (`.container` utility)
- Responsive padding: `px-4` (mobile) → `px-6` (tablet) → `px-8` (desktop)
- Section spacing: `py-16` standard, `py-24` major sections

### Adding shadcn Components

```bash
bunx --bun shadcn@latest add <component>
```

Components install to `src/components/ui/`. Config in `components.json`.
