# Project Context: lvyougroup

## Overview
`lvyougroup` is a modern web application built with **React 19**, **TypeScript**, and **Vite**. It utilizes **Tailwind CSS 4** for styling and is configured to use **shadcn/ui** for UI components. The project uses **Bun** strictly as the package manager and runtime.

## Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite 7
- **Language:** TypeScript (~5.9)
- **Styling:** Tailwind CSS 4
- **UI Library:** shadcn/ui (Style: New York, Base Color: Neutral)
- **Icons:** Lucide React
- **Package Manager:** Bun (Strict)

## Project Structure
- `src/`: Source code directory.
  - `App.tsx`: Main application component.
  - `lib/utils.ts`: Utility functions (cn helper for shadcn).
  - `index.css`: Global styles (Tailwind directives).
- `components.json`: Configuration for shadcn/ui components.
- `vite.config.ts`: Vite configuration.
- `bun.lock`: Bun lockfile (ensures deterministic installs).

## Development Workflow

### Prerequisites
- **Bun** must be installed.

### Commands
All commands should be run using `bun`.

- **Start Development Server:**
  ```bash
  bun run dev
  ```
- **Build for Production:**
  ```bash
  bun run build
  ```
- **Lint Code:**
  ```bash
  bun run lint
  ```
- **Preview Production Build:**
  ```bash
  bun run preview
  ```

### Key Conventions
1.  **Package Management:** Always use `bun add`, `bun install`, etc. Do not use `npm` or `yarn`.
2.  **Component Import Aliases:**
    - Components: `@/components`
    - UI Components: `@/components/ui`
    - Lib/Utils: `@/lib`
    - Hooks: `@/hooks`
3.  **Styling:** Use Tailwind CSS utility classes. For conditional class merging, use the `cn` utility from `@/lib/utils` (wraps `clsx` and `tailwind-merge`).
4.  **UI Components:** Add new shadcn/ui components via the CLI (e.g., `bunx --bun shadcn@latest add button`).

## Configuration Details
- **Tailwind:** Configured via `@tailwindcss/vite` plugin (Tailwind v4).
- **TypeScript:** Strict mode enabled.
- **ESLint:** Configured for React and TypeScript with React Hooks and Refresh plugins.
