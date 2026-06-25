# 变更提案：添加 Avatar 组件

## 变更原因

LumeUI 目前缺少 Avatar 组件，而该组件对于钱包前端应用展示用户身份、钱包地址和交易者资料至关重要。Avatar 组件是金融应用中显示用户信息的核心 UI 模式，特别用于显示账户持有人、交易者和交易参与方。

## 变更内容

- 添加基于 Radix UI 原语的新 `Avatar` 组件
- 添加新的 `Avatar.Group` 子组件，用于显示多个堆叠的头像
- 支持图片头像（通过 URL）
- 实现文字回退显示（图片加载失败或不可用时显示首字母）
- 添加加载骨架屏状态（图片加载过程中）
- 提供多种尺寸变体（small、medium、large、xlarge）
- 确保 RTL（从右到左）支持，服务国际化用户
- 从主组件索引导出 Avatar
- 支持加载状态变化回调（`onLoadingStatusChange`）
- 支持与其他 Radix UI 组件组合（如 Tooltip）

## 影响范围

- **受影响的规范：** 新功能 - `ui-components`（Avatar）
- **受影响的代码：**
  - 新组件目录：`src/components/Avatar/`
  - 更新：`src/components/index.ts`（添加 Avatar 导出）
  - 更新：`package.json`（添加 @radix-ui/react-avatar 依赖）
  - 新的主题 Token 用于 Avatar 尺寸和间距
- **新增依赖：** `@radix-ui/react-avatar`（Radix UI 原语）
- **示例：** 在 `examples/compTest/` 或 `examples/pages/` 中添加 Avatar 示例

## 破坏性变更

无。这是一个新组件添加，不会修改现有组件。
