# Project Context: lvyougroup

## Overview

`lvyougroup` is a modern frontend web application built with React 19, TypeScript, and Vite. It utilizes Tailwind CSS v4 for styling and shadcn/ui for accessible, composable UI components. The project also incorporates advanced animation and interaction libraries like Framer Motion and Lenis.

## Tech Stack

- **Runtime/Package Manager:** [Bun](https://bun.sh/) (Strictly enforced)
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:**
  - Tailwind CSS v4 (using `@tailwindcss/vite`)
  - [shadcn/ui](https://ui.shadcn.com/) (New York style, CSS variables, OKLCH colors)
  - `tw-animate-css` for Tailwind animations
- **State Management:** Zustand
- **Animation:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

## Development Workflow

### Scripts

- **Start Development Server:**
  ```bash
  bun dev
  ```
- **Build for Production:**
  ```bash
  bun run build
  ```
  (Runs `tsc -b` for type checking followed by `vite build`)
- **Lint Code:**
  ```bash
  bun run lint
  ```
- **Preview Production Build:**
  ```bash
  bun run preview
  ```

### File Structure & Conventions

- **Path Aliases:** `@/*` maps to `./src/*`
- **Components:**
  - UI Primitives (shadcn/ui): `src/components/ui`
  - Layout Components: `src/components/layout`
  - Section Components: `src/components/sections`
  - Common/Shared Components: `src/components/common`
- **Styling:**
  - Global styles and CSS variables are defined in `src/index.css`.
  - Uses `clsx` and `tailwind-merge` via the `cn()` utility in `src/lib/utils.ts`.
- **State:** Global stores are located in `src/store` (using Zustand).
- **Assets:** Static assets in `public/` and `src/assets`.

## Key Configuration Files

- `package.json`: Dependencies and scripts.
- `vite.config.ts`: Vite configuration, including plugins and alias resolution.
- `tsconfig.json` & `tsconfig.app.json`: TypeScript configuration.
- `components.json`: shadcn/ui configuration settings.
- `CLAUDE.md`: Additional project context and guidelines.

## Notes

- **Package Manager:** This project uses **Bun**. Do not use `npm` or `yarn`.
- **Tailwind v4:** Note that Tailwind v4 is used, which often implies configuration via CSS variables and the CSS-in-JS approach in `index.css` rather than a large `tailwind.config.js`.
