# LumeUI

前端 h5 自适应 react 组件库，tailwind+react

## 项目结构

```
lumeui
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── vite.config.ts
├── README.md
├── LICENSE
├── .gitignore
├── .eslintrc.js
├── .prettierrc
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
