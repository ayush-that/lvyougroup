# AGENTS.md

Guide for AI coding agents working in this repository.

## Project Overview

Financial Advisory Homepage - a single-page React application built with Vite, TypeScript, Tailwind CSS v4, shadcn/ui, and Zustand state management.

## Build/Lint/Test Commands

```bash
bun install          # Install dependencies (use Bun as package manager)
bun run dev          # Start development server
bun run build        # TypeScript check + production build
bun run lint         # Run ESLint
bun run preview      # Preview production build
```

**Note:** No test framework configured. If tests are added, prefer Vitest.

## Project Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Root component
├── index.css             # Global styles + Tailwind
├── components/
│   ├── layout/           # Header, Footer (page-level layout)
│   ├── sections/         # Page sections (Hero, Values, Stats, etc.)
│   ├── common/           # Reusable components (NavLink, SectionHeading, etc.)
│   └── ui/               # shadcn/ui primitives only
├── store/                # Zustand stores (*.store.ts)
├── lib/                  # Utilities (cn, constants)
├── types/                # TypeScript interfaces (index.ts)
└── styles/               # CSS theme tokens (theme.css)
```

## Code Style Guidelines

### Imports

- **Path alias:** Always use `@/` for src imports (e.g., `@/components/ui/button`)
- **Order:** External packages first, then internal modules
- **Type imports:** Use `import type` for type-only imports

```typescript
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/types";
```

### Component Patterns

- **Named function exports:** Use `function` keyword, not arrow functions
- **Props interface:** Define inline above component or in `@/types/index.ts`
- **Barrel exports:** Each component folder should have an `index.ts`

```typescript
// Good
export function MyComponent({ title }: MyComponentProps) { ... }

// Avoid for components
export const MyComponent = ({ title }: MyComponentProps) => { ... }
```

### Naming Conventions

| Type          | Convention            | Example               |
| ------------- | --------------------- | --------------------- |
| Components    | PascalCase            | `SectionHeading.tsx`  |
| Stores        | kebab-case + `.store` | `ui.store.ts`         |
| Constants     | SCREAMING_SNAKE_CASE  | `NAV_ITEMS`, `IMAGES` |
| Interfaces    | PascalCase            | `SectionHeadingProps` |
| CSS variables | kebab-case with `--`  | `--bg-main`           |

### Formatting

- Semicolons: Yes
- Quotes: Single for JS/TS, double for JSX attributes
- Indentation: 2 spaces
- Trailing commas: Yes

### TypeScript

- **Strict mode:** Enabled - no implicit any, unused vars/params are errors
- **verbatimModuleSyntax:** Use `import type` for type-only imports
- **Target:** ES2022
- **Non-null assertions:** Use sparingly (e.g., `document.getElementById("root")!`)

### Styling

- **Tailwind CSS v4:** Use utility classes, avoid inline styles
- **cn() utility:** Use for conditional class merging (from `@/lib/utils`)
- **CSS variables:** Defined in `styles/theme.css`
- **shadcn/ui:** "new-york" style, use Lucide icons

```typescript
<div className={cn('base-classes', condition && 'conditional', className)} />
```

### State Management (Zustand)

- Store in `@/store/ui.store.ts`, UI state only (no async, no persistence)
- Use selectors for performance:

```typescript
// Good - selective subscription
const mobileNavOpen = useUIStore((state) => state.mobileNavOpen);

// Avoid - subscribes to entire store
const store = useUIStore();
```

### Error Handling

- Use optional chaining (`?.`) for potentially undefined values
- Provide fallback content for conditional rendering
- Alt text mandatory for all images
- Semantic HTML elements only

## Theme Tokens

CSS variables in `styles/theme.css`:

```css
--bg-main: #faf7f3;
--bg-cream: #ece7df;
--bg-muted: #d7e6e7 --teal-dark: #0f3940;
--teal-accent: #123b43 --text-primary: #0b2b2e;
--text-muted: #5b6f73 --border-subtle: rgba(15, 57, 64, 0.15);
```

## Layout Specifications

- Max content width: **1280px**
- Horizontal padding: `px-4` (mobile), `px-6` (tablet), `px-8` (desktop)
- Header height: **72px** (sticky)
- Typography: Fluid scaling with `clamp()` for headings

## Key Dependencies

React 19, Tailwind CSS 4, shadcn/ui (Radix), Zustand, Framer Motion, Lenis, Lucide React

## Acceptance Criteria

Code is valid only if:

1. `bun install && bun run dev` works
2. `bun run build` completes with no TypeScript errors
3. `bun run lint` passes with no errors
4. No console warnings in browser
5. Codebase follows patterns established above

## ESLint Configuration

Uses flat config (ESLint 9.x):

- Extends: `@eslint/js` recommended, `typescript-eslint` recommended
- Plugins: `react-hooks`, `react-refresh`
- Target: `**/*.{ts,tsx}`, Ignores: `dist/`
