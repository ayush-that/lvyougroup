# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `bun dev` (or `npm run dev`)
- **Build**: `bun run build` (runs TypeScript check then Vite build)
- **Lint**: `bun run lint`
- **Preview production build**: `bun run preview`

## Architecture

This is a React 19 + TypeScript application using Vite 7 as the build tool.

**Stack:**
- React 19 with TypeScript
- Tailwind CSS v4 (using `@tailwindcss/vite` plugin)
- shadcn/ui components (new-york style, configured in `components.json`)
- Lucide React for icons

**Path Aliases:**
- `@/*` maps to `./src/*`

**shadcn/ui Configuration:**
- Components: `@/components` and `@/components/ui`
- Utilities: `@/lib/utils` (includes `cn()` helper for class merging)
- Hooks: `@/hooks`
- Uses CSS variables for theming with light/dark mode support
- Base color: neutral

**CSS:**
- Theme variables defined in `src/index.css` using OKLCH color space
- Dark mode uses `.dark` class variant
- Animation utilities from `tw-animate-css`
