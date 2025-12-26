# Project Context

## Purpose

**LumeUI** is a TypeScript-first React component library designed for wallet-frontend applications. It provides 35+ pre-built UI components with a focus on financial/trading interfaces, including forms, data display, navigation, and feedback components.

**Goals:**

- Provide a comprehensive, reusable component library for financial applications
- Ensure strong TypeScript typing for better developer experience
- Support theming with light/dark mode capabilities
- Deliver accessible components built on Radix UI primitives
- Maintain consistent design patterns across the wallet-frontend ecosystem

## Tech Stack

### Core Technologies

- **TypeScript** - Primary language for all components and utilities
- **React** >= 16.8.0 - UI framework with hooks support
- **React DOM** >= 16.8.0 - DOM rendering

### Build & Development

- **tsup** - Production bundling (CJS, ESM, declarations)
- **Vite** - Development server and hot module replacement
- **Emotion** - CSS-in-JS runtime styling
- **Sass** - Traditional CSS preprocessing for component styles

### UI & Design

- **Radix UI** - Accessible UI primitives (dialog, accordion, tabs, switch, radio, portal, dismissable-layer)
- **React Component Libraries** (rc-\*) - Base component implementations:
  - rc-select, rc-picker, rc-slider, rc-rate, rc-upload, rc-checkbox, rc-tooltip, rc-util
- **Tailwind CSS** (via tailwind-merge) - Utility class merging
- **class-variance-authority** - Component variant management

### Data & Utilities

- **@tanstack/react-table** - Advanced table component
- **decimal.js** - Financial math precision
- **dayjs** - Date/time manipulation
- **clsx** - Conditional class names
- **nuka-carousel** - Carousel component

### Path Aliases

- `@/` → `src/` (Vite dev config)
- `~/` → `src/` (TypeScript tsconfig)

## Project Conventions

### Code Style

**Component Structure:**

- Each component resides in its own directory: `src/components/ComponentName/`
- Directory contains:
  - `index.tsx` - Component implementation
  - `ComponentName.test.tsx` - Tests (if present)
  - `style.scss` - Component-specific styles
- All components exported from `src/components/index.ts`

**Naming Conventions:**

- PascalCase for components and TypeScript types/interfaces
- camelCase for functions, variables, and hooks
- kebab-case for file and directory names (except component index files)

**Styling Approach:**

- Combine Emotion CSS-in-JS with CSS variables
- Use `cn()` utility (clsx + tailwind-merge) for class merging
- Leverage `class-variance-authority` for component variants
- CSS variables for theming (light/dark mode support)

**TypeScript:**

- Strict mode enabled
- Explicit type annotations for component props
- Exported type definitions alongside components

### Architecture Patterns

**Component Patterns:**

1. **Compound Components** - Where appropriate (e.g., Tabs with TabList, Tab, TabPanel)
2. **Controlled/Uncontrolled** - Support both patterns where applicable
3. **Variant-Based** - Use CVA for managing component states/sizes/variants
4. **Composition Over Inheritance** - Prefer composition for flexibility
5. **Accessibility First** - Built on Radix UI primitives for WCAG compliance

**Entry Points:**

- `src/index.ts` - Main public API (exports all components, hooks, theme)
- `src/icons/index.tsx` - Icon components
- `src/hooks/` - Reusable hooks (useTheme, useRTL)
- `src/lib/utils.ts` - Shared utilities

**Layered Architecture:**

```
UI Components (src/components/)
    ↓
Base Components (rc-*, Radix UI)
    ↓
Utilities & Hooks (src/hooks/, src/lib/)
    ↓
Theme System (CSS Variables)
```

### Testing Strategy

**Current State:**

- No formal test framework configured
- Manual testing via `npm run dev:serve` on port 3000
- Component examples in `examples/compTest/` and `examples/pages/`

**Testing Approach:**

- Visual testing using the dev server
- Interactive testing via route-based examples (`examples/routes.ts`)
- Test files included in component directories (`.test.tsx`) for future automation

### Git Workflow

**Branching:**

- `main` - Primary development branch (protected for PRs)

**Commit Conventions:**

- Conventional commits recommended:
  - `feat:` - New features or components
  - `fix:` - Bug fixes
  - `refactor:` - Code refactoring without behavior changes
  - `style:` - Code style changes (formatting, etc.)
  - `docs:` - Documentation updates
  - `chore:` - Build process, tooling, or dependency updates
  - `test:` - Test additions or modifications

**Release:**

- Automated changelog generation via conventional commits
- Version management follows semantic versioning

## Domain Context

**Financial/Trading UI Requirements:**

- **Precision** - Use `decimal.js` for all financial calculations to avoid floating-point errors
- **Input Validation** - Strict validation for numeric inputs, currency amounts, percentages
- **Number Formatting** - Locale-aware formatting for currency, percentages, and large numbers
- **Data Tables** - Advanced sorting, filtering, and pagination for financial data
- **Date/Time** - Accurate date handling for transaction history, charts, and time-series data
- **Accessibility** - WCAG 2.1 AA compliance for financial applications

**Component Categories:**

1. **Form Components** - Input, Select, Checkbox, Radio, Switch, Slider, Rate, Upload, DatePicker
2. **Data Display** - Table, Card, List, Tooltip, Progress, Tree
3. **Navigation** - Tabs, Breadcrumb, Menu, Pagination
4. **Feedback** - Toast, Dialog, Alert, Loading, Empty states
5. **Layout** - Layout, Divider, Spacer
6. **Media** - Carousel, Image

## Important Constraints

**Peer Dependencies:**

- React >= 16.8.0 (hooks support required)
- React DOM >= 16.8.0

**Browser Support:**

- Modern browsers (ES2020+)
- No IE11 support

**Bundle Size:**

- Tree-shakeable exports (ESM)
- Avoid unnecessary dependencies
- Lazy loading for heavy components (e.g., DatePicker, Table)

**Performance:**

- Use React.memo() for expensive components
- Virtualization for long lists (Table component)
- Debouncing for search/filter inputs

**Security:**

- Sanitize user inputs in form components
- XSS prevention in rich text/data display
- CSP-compatible styling (Emotion with CSP support)

## External Dependencies

**UI Libraries:**

- Radix UI primitives (unpkg)
- React Component (rc-\*) libraries (npm registry)

**Development Tools:**

- Vite dev server (local)
- TypeScript compiler (local)

**No Runtime External Services:**

- No API calls to external services
- No analytics or tracking
- No CDN dependencies (all bundled or peer dependencies)

**Icon Resources:**

- Icons in `src/icons/` (component-based)
- Favicon in `public/favicon.ico`
