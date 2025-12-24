<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**moly-comp** is a TypeScript-first React component library for wallet-frontend. It exports 35+ UI components with a focus on financial/trading interfaces.

## Build Commands

| Command             | Purpose                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `npm run build`     | Production build via tsup (outputs CJS, ESM, declarations to `dist/`) |
| `npm run dev`       | Watch mode for development (rebuilds on changes)                      |
| `npm run dev:serve` | Start Vite dev server on port 3000 for component testing              |
| `npm run lint`      | TypeScript type checking (`tsc --noEmit`)                             |

## Architecture

### Entry Points

- `src/index.ts` → Main exports (all components, hooks, theme)
- `src/icons/index.tsx` → Icon components

### Source Structure

```
├── public/              # 公共静态资源
│   └── favicon.ico
├── src/
│   ├── icons/           # icons
│   ├── components/      # 组件目录
│   │   ├── Button/
│   │   │   ├── index.tsx      # 组件实现
│   │   │   ├── Button.test.tsx
│   │   │   └── style.scss
│   │   ├── Input/
│   │   │   └── ...
│   │   └── index.ts            # 全局统一导出
│   ├── hooks/           # useTheme, useRTL
│   │   └── useTheme.ts
│   ├── lib/             # Utilities (cn, toast, wave, utils.ts)
│   │   └── utils.ts
│   └── index.ts         # 库入口
├── examples/            # 示例项目
│   ├── compTest/        # Component examples
│   ├── pages/           # Demo pages
│   └── routes.ts        # Route definitions
├── scripts/             # 构建或发布脚本
│   └── build.ts
├── dist/                # 打包输出目录（自动生成）
└── types/               # 类型声明（自动生成或手写）
```


### Component Patterns

1. **Directory Structure**: Each component has its own directory with `index.tsx`
2. **Variants**: Use `class-variance-authority` (CVA) for variant management
3. **Styling**: Combine Emotion CSS-in-JS with CSS variables via the `cn()` utility (`clsx` + `tailwind-merge`)
4. **Accessibility**: Built on Radix UI primitives for dialog, accordion, tabs, radio, progress, etc.
5. **Base Components**: Many components wrap React Component (rc-) libraries:
   - `rc-select`, `rc-picker`, `rc-slider`, `rc-rate`, `rc-upload`, `rc-checkbox`
   - `@tanstack/react-table` for Table component

### Utilities

- `cn(...inputs)` - Class merging utility from `src/lib/utils.ts:5`
- `getValues(vals, defaultVal)` - First non-null/undefined value from `src/lib/utils.ts:20`
- `opacityColorByPercent(color, percent)` - Hex color transparency

### Theming

- CSS variables for theming (light/dark mode)
- NumberTokens in `src/theme/constants.ts` for spacing/sizing tokens
- useTheme hook for theme context

## Key Dependencies

- **Peer Dependencies**: React >=16.8.0, React-DOM >=16.8.0
- **UI Primitives**: Radix UI (dialog, accordion, tabs, switch, radio, portal, dismissable-layer)
- **Data**: TanStack Table, decimal.js (financial math), dayjs (dates)
- **Styling**: Emotion, tailwind-merge, clsx, class-variance-authority
- **Base Components**: rc-select, rc-picker, rc-slider, rc-rate, rc-upload, rc-checkbox, rc-tooltip, rc-util
- **Other**: nuka-carousel (carousel)

## Path Aliases

- `@/` → `src/` (used in Vite dev config)
- `~/` → `src/` (TypeScript path alias in tsconfig)

## Development Testing

No formal test framework is configured. Use `npm run dev:serve` to start the dev server and manually test components using the examples in `src/test/`.
