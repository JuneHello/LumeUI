# 设计文档：Avatar 组件

## 背景说明

Avatar 组件在钱包前端应用中至关重要，用于：
- 在交易界面中显示用户身份
- 显示钱包地址所有者
- 代表交易参与者
- 显示多个用户的群组上下文（Avatar.Group）

**约束条件：**
- 必须遵循现有 LumeUI 组件模式（CVA 变体、Emotion 样式）
- 必须与现有主题系统集成（CSS 变量）
- 必须通过 `useRTL` hook 保持 RTL 支持
- 必须无障碍访问（Radix UI 原语提供 ARIA 支持）

**利益相关者：**
- 构建钱包界面的前端开发人员
- 维护视觉一致性的设计团队
- 与金融/交易界面交互的最终用户

## 目标 / 非目标

**目标：**
- 提供灵活的 Avatar 组件，支持图片和文字回退
- 支持加载状态以提供更好的感知性能
- 支持头像分组重叠显示，节省空间
- 与现有 LumeUI 组件保持设计一致性
- 通过 Radix UI 原语确保无障碍访问
- 为所有组件属性提供 TypeScript 类型

**非目标：**
- 复杂的头像编辑/裁剪功能（委托给应用层）
- 头像在线状态（在线/离线/离开）- 可能以后添加
- 头像点击操作（委托给父组件）
- 超越首字母的复杂回退模式

## 技术决策

### 1. 组件结构

**决策：** 使用 Radix UI Avatar 原语的复合组件模式

**理由：**
- Radix UI 提供 `Avatar.Root`、`Avatar.Image` 和 `Avatar.Fallback` 原语
- 复合模式允许灵活组合：`<Avatar><Avatar.Image /><Avatar.Fallback /></Avatar>`
- 与现有 Radix UI 使用保持一致（Dialog、Tabs 等）

**实现示例：**
```typescript
<Avatar>
  <Avatar.Image src="..." alt="用户" />
  <Avatar.Fallback>UN</Avatar.Fallback>
</Avatar>
```

### 2. 样式方案

**决策：** 结合 Emotion CSS-in-JS 和 class-variance-authority（CVA）

**理由：**
- 与 Button 和其他组件保持一致
- Emotion 用于动态样式（尺寸、颜色）
- CVA 用于尺寸变体（small、medium、large、xlarge）
- 主题 Token 确保整个库的尺寸一致性

**考虑的替代方案：**
- **纯 Tailwind：** 拒绝 - 现有组件使用 Emotion 进行主题化
- **纯 SCSS：** 拒绝 - 不提供 React 友好的动态样式
- **CSS Modules：** 拒绝 - 在主题集成方面不如 Emotion 灵活

### 3. 尺寸变体

**决策：** 四种尺寸，符合金融 UI 惯例

```typescript
type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge'
```

**尺寸规格：**
- `small`: 24px - 用于紧凑列表和表格
- `medium`: 32px - 表单和卡片的默认尺寸
- `large`: 40px - 用于标题和突出显示的部分
- `xlarge`: 64px - 用于个人资料页面和主要部分

**考虑的替代方案：**
- **仅 3 种尺寸：** 拒绝 - 对金融 UI 来说粒度不足
- **5+ 种尺寸：** 拒绝 - 过度设计，增加复杂性

### 4. 回退策略

**决策：** 使用提供的名称中的首字母或自定义回退内容

**理由：**
- Radix UI Avatar.Fallback 在图片失败时自动显示
- 首字母是标准模式（例如，"张三" → "张" 或 "ZS"）
- 允许自定义 React 节点以提高灵活性

**实现示例：**
```typescript
// 如果设置了 fallbackDelay，自动生成首字母
<Avatar.Fallback delayMs={600}>
  {getInitials("张三")} // "张" 或 "ZS"
</Avatar.Fallback>
```

### 5. 加载状态

**决策：** 如果 `loading` 属性为 true，在图片加载期间显示 Skeleton 组件

**理由：**
- 在网络延迟期间提供视觉反馈
- 重用现有的 Skeleton 组件
- 通过 prop 可选，避免不必要的 UI 复杂性

**考虑的替代方案：**
- **始终显示骨架屏：** 拒绝 - 对于缓存的图片会增加闪烁

### 6. Avatar.Group 实现

**决策：** 用于堆叠头像的独立复合组件

**理由：**
- 交易界面中的常见模式（显示多个用户）
- 需要负边距实现重叠效果
- 独立组件保持 API 整洁

**实现示例：**
```typescript
<Avatar.Group>
  <Avatar><Avatar.Image src="user1.jpg" /></Avatar>
  <Avatar><Avatar.Image src="user2.jpg" /></Avatar>
  <Avatar><Avatar.Fallback>+3</Avatar.Fallback></Avatar>
</Avatar.Group>
```

**功能特性：**
- 通过 `spacing` 属性配置间距（负边距）
- 在截断之前配置最大头像数
- 隐藏头像的 "+N" 回退显示

### 7. Radix UI 集成

**决策：** 完整暴露 Radix UI 的核心 API

**理由：**
- `onLoadingStatusChange` 回调是 Radix UI 的核心功能
- 允许精细控制图片加载状态
- 支持与其他 Radix UI 组件组合（Tooltip、Dialog 等）

**实现细节：**
```typescript
// Avatar.Image 支持加载状态回调
<Avatar.Image
  src="..."
  onLoadingStatusChange={(status) => {
    // status: 'lazy' | 'loading' | 'loaded' | 'error'
    console.log('图片加载状态:', status);
  }}
/>
```

### 8. 主题 Token 设计

**决策：** 为 Avatar 尺寸和颜色添加 CSS 变量

```css
--bds-avatar-size-small: 24px;
--bds-avatar-size-medium: 32px;
--bds-avatar-size-large: 40px;
--bds-avatar-size-xlarge: 64px;
--bds-avatar-border-radius: 50%;
--bds-avatar-fallback-bg: var(--base-bds-gray-t3);
--bds-avatar-fallback-text: var(--base-bds-gray-t1-title);
--bds-avatar-group-spacing: -8px; /* 重叠量 */
```

## 组件架构

```
Avatar (根组件)
├── Avatar.Image (图片源)
├── Avatar.Fallback (文字回退)
└── Styles (Emotion + CVA 变体)

Avatar.Group (容器)
├── 多个 Avatar 子组件
└── 重叠用的负边距
```

## 文件结构

```
src/components/Avatar/
├── index.tsx              # 主要 Avatar 组件导出
├── Avatar.tsx             # Avatar 根组件
├── AvatarImage.tsx        # Avatar.Image 子组件
├── AvatarFallback.tsx     # Avatar.Fallback 子组件
├── AvatarGroup.tsx        # Avatar.Group 组件
├── useStyles.ts           # Emotion 样式
├── Avatar.test.tsx        # 测试（占位符）
└── utils.ts              # 辅助函数（getInitials 等）
```

## 风险与权衡

### 风险 1：图片加载性能
**风险：** 加载缓慢的图片导致布局偏移或空白
**缓解措施：**
- 在 Avatar 容器上设置明确的尺寸
- 使用 `delayMs` 的回退避免闪烁
- 可选的 Skeleton 加载状态

### 风险 2：无障碍访问
**风险：** 屏幕阅读器可能无法正确宣布头像内容
**缓解措施：**
- Radix UI 提供 ARIA 属性
- 要求在 Avatar.Image 上提供 `alt` 属性
- 默认宣布 Avatar.Fallback 内容

### 风险 3：RTL 支持
**风险：** Avatar.Group 在 RTL 布局中可能无法正确堆叠
**缓解措施：**
- 使用 `useRTL` hook 翻转边距
- 使用 RTL 示例进行测试
- 遵循 Badge 组件的现有 RTL 模式

### 权衡：组件复杂度 vs 灵活性
**决策：** 偏向复合组件模式，而非单一组件 API
**权衡：** API 稍微冗长，但更加灵活
**理由：** 与 Radix UI 模式和现有组件保持一致

## 迁移计划

不适用 - 这是一个新组件，没有迁移路径。

## 待解决的问题

无。范围定义明确，与现有模式保持一致。
