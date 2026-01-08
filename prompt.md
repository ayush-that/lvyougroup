# 📘 Frontend Specification Sheet

**Project:** Financial Advisory Homepage
**Goal:** Pixel-faithful, scalable, production-ready frontend
**Stack:** Vite · React · TypeScript · Tailwind · shadcn/ui · Zustand · Bun · OXC

---

## 1. Global Application Specs

### 1.1 Runtime & Tooling

- **Runtime & Package Manager:** Bun
- **Bundler / Dev Server:** Vite
- **Formatter:** oxcfmt
- **Linter:** oxclint
- ❌ No ESLint
- ❌ No Prettier
- ❌ No Next.js / SSR assumptions

---

### 1.2 Rendering Model

- **Pure client-side React rendering**
- No SSR
- No framework-level routing assumptions
- Page-level composition handled manually

(React Router **not required** for this single-page build, but architecture must be router-ready.)

---

### 1.3 Project Structure (Exact)

```txt
src/
 ├─ main.tsx
 ├─ App.tsx
 ├─ index.css
 ├─ components/
 │   ├─ layout/
 │   │   ├─ Header.tsx
 │   │   ├─ Footer.tsx
 │   ├─ sections/
 │   │   ├─ Hero.tsx
 │   │   ├─ Values.tsx
 │   │   ├─ WhoWeServe.tsx
 │   │   ├─ Stats.tsx
 │   │   ├─ Services.tsx
 │   │   ├─ CTA.tsx
 │   ├─ common/
 │   │   ├─ SectionHeading.tsx
 │   │   ├─ StatCard.tsx
 │   │   ├─ NavLink.tsx
 │   ├─ ui/ (shadcn components only)
 ├─ store/
 │   └─ ui.store.ts
 ├─ lib/
 │   ├─ constants.ts
 │   ├─ utils.ts
 ├─ types/
 │   └─ index.ts
 ├─ assets/
 │   └─ images/
 └─ styles/
     └─ theme.css
```

---

## 2. Layout & Spacing System

### 2.1 Global Layout Rules

- Max content width: **1280px**
- Horizontal padding:
  - Mobile: `px-4`
  - Tablet: `px-6`
  - Desktop: `px-8`
- Vertical spacing:
  - Standard sections: `py-16`
  - Major sections: `py-24`

---

## 3. Typography System (Exact)

### Fonts

- Serif (headings): loaded via CSS or fontsource
- Sans-serif (body): same

### Type Scale

| Element | Size                       | Line-height | Weight |
| ------- | -------------------------- | ----------- | ------ |
| H1      | `clamp(32px, 5.5vw, 56px)` | 1.05        | 500    |
| H2      | `clamp(28px, 4vw, 40px)`   | 1.1         | 500    |
| H3      | 22px                       | 1.2         | 500    |
| Body    | 16px                       | 1.6         | 400    |
| Small   | 14px                       | 1.5         | 400    |

---

## 4. Theme Tokens (Exact)

Defined in `styles/theme.css`:

```css
--bg-main: #faf7f3;
--bg-cream: #ece7df;
--bg-muted: #d7e6e7;
--teal-dark: #0f3940;
--teal-accent: #123b43;
--text-primary: #0b2b2e;
--text-muted: #5b6f73;
--border-subtle: rgba(15, 57, 64, 0.15);
```

Mapped into Tailwind config.

---

## 5. State Management (Zustand)

### Store (`ui.store.ts`)

```ts
interface UIState {
  mobileNavOpen: boolean;
  toggleMobileNav(): void;
  closeMobileNav(): void;
}
```

Rules:

- UI state only
- No async logic
- No persistence
- No React local state for navigation

---

## 6. Component Specifications (Exact)

---

### 6.1 Header

- Height: **72px**
- Sticky top
- Background: `--bg-main`
- Bottom border: `1px solid --border-subtle`
- Desktop nav gap: **28px**
- Font size: **14px**

#### Mobile

- Hamburger icon: 24px
- Uses shadcn `Sheet`
- Sheet width: **280px**
- Controlled exclusively via Zustand

---

### 6.2 Hero Section

- Desktop layout: 45% text / 55% image
- Mobile: stacked
- Max heading width: **560px**

#### Decorative Line

- 1px border
- Absolute positioned
- Extends right from heading midpoint

#### Image

- Aspect ratio: **21:9**
- `object-fit: cover`
- Bottom gradient overlay (30% height)

#### Image Credit

- Bottom-right
- Font size: 12px
- Backdrop blur

---

### 6.3 Values Section

- Grid:
  - Desktop: 3
  - Tablet: 2
  - Mobile: 1
- Gap: 24px

#### Cards

- Min height: 220px
- Padding: 24px
- Radius: 16px
- Shadow: subtle

---

### 6.4 Who We Serve

- Grid:
  - Desktop: 4
  - Tablet: 2
  - Mobile: 1
- Image ratio: **4:3**
- Hover scale: `1.03`
- Transition: 200ms

---

### 6.5 Stats / Presence

- Two-column layout
- Right: 2×2 grid

#### Stat Card

- Size: **180×140px**
- Background: `--teal-dark`
- Number: 32px
- Label: 13px

#### Connectors

- 1px lines
- Desktop only (≥1024px)
- Pseudo-elements

---

### 6.6 Services Section

- Left column: **240px fixed**
- Right: fluid
- Active service:
  - 3px left border
  - Font-weight: 500

---

### 6.7 CTA Section

- Full-width background image
- Overlay: rgba(0,0,0,0.55)
- Centered content
- Max width: 720px

---

### 6.8 Footer

- 4 columns desktop
- 2 tablet
- 1 mobile
- Background: `--teal-dark`
- Link hover opacity transition

---

## 7. Accessibility Requirements

- Semantic elements only
- Keyboard navigable Sheet
- Focus trapping
- Alt text mandatory
- WCAG AA contrast minimum

---

## 8. Performance Requirements

- Images optimized & sized
- No unnecessary re-renders
- Zustand selectors used
- No inline styles except overlays/connectors

---

## 9. Acceptance Criteria

The build is **valid only if**:

- `bun install && bun run dev` works
- No TypeScript errors
- No console warnings
- Layout matches hierarchy & spacing
- Codebase is scalable and readable
