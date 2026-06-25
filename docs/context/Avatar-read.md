# Avatar 组件

## 概述

Avatar 组件用于显示用户身份、钱包地址和交易者资料。它支持图片头像和文字回退，提供多种尺寸，并可以组合成头像组。

## 安装和导入

```typescript
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  getInitials,
  type AvatarProps,
  type AvatarSize,
  type LoadingStatus
} from 'LumeUI';
```

## 基础用法

### 图片头像

```tsx
<Avatar>
  <AvatarImage src="https://example.com/avatar.jpg" alt="用户名" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

### 不同尺寸

Avatar 组件支持四种预设尺寸：

```tsx
<Avatar size="small">     // 24px
<Avatar size="medium">    // 32px (默认)
<Avatar size="large">     // 40px
<Avatar size="xlarge">    // 64px
```

**示例：**

```tsx
<div style={{ display: 'flex', gap: '16px' }}>
  <Avatar size="small">
    <AvatarImage src="..." alt="小头像" />
    <AvatarFallback>S</AvatarFallback>
  </Avatar>

  <Avatar size="medium">
    <AvatarImage src="..." alt="中等头像" />
    <AvatarFallback>M</AvatarFallback>
  </Avatar>

  <Avatar size="large">
    <AvatarImage src="..." alt="大头像" />
    <AvatarFallback>L</AvatarFallback>
  </Avatar>

  <Avatar size="xlarge">
    <AvatarImage src="..." alt="超大头像" />
    <AvatarFallback>XL</AvatarFallback>
  </Avatar>
</div>
```

### 文字回退（首字母）

当图片加载失败或未提供时，Avatar 会显示 Fallback 内容：

```tsx
<Avatar>
  <AvatarImage src="..." alt="用户" />
  <AvatarFallback>{getInitials('张三')}</AvatarFallback>
</Avatar>
```

**`getInitials()` 工具函数：**

```tsx
getInitials('John Doe')     // 'JD'
getInitials('张三')         // '张'
getInitials('Alice')        // 'A'
getInitials('')             // ''
```

### 延迟显示回退

使用 `delayMs` 属性延迟显示回退内容，避免快速加载时的闪烁：

```tsx
<Avatar>
  <AvatarImage src="..." alt="用户" />
  <AvatarFallback delayMs={600}>加载中...</AvatarFallback>
</Avatar>
```

### 加载状态回调

监听图片加载状态：

```tsx
const [status, setStatus] = useState<LoadingStatus>('lazy');

<Avatar>
  <AvatarImage
    src="..."
    alt="用户"
    onLoadingStatusChange={(status) => {
      console.log('加载状态:', status);
      // status: 'lazy' | 'loading' | 'loaded' | 'error'
      setStatus(status);
    }}
  />
  <AvatarFallback>U</AvatarFallback>
</Avatar>
```

## Avatar.Group（头像组）

### 基础用法

显示多个堆叠的头像：

```tsx
<AvatarGroup>
  <Avatar>
    <AvatarImage src="user1.jpg" alt="用户1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="user2.jpg" alt="用户2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="user3.jpg" alt="用户3" />
    <AvatarFallback>U3</AvatarFallback>
  </Avatar>
</AvatarGroup>
```

### 限制显示数量

使用 `max` 属性限制显示的头像数量，超出部分显示 "+N"：

```tsx
<AvatarGroup max={3}>
  <Avatar><AvatarImage src="user1.jpg" /></Avatar>
  <Avatar><AvatarImage src="user2.jpg" /></Avatar>
  <Avatar><AvatarImage src="user3.jpg" /></Avatar>
  <Avatar><AvatarImage src="user4.jpg" /></Avatar>
  <Avatar><AvatarImage src="user5.jpg" /></Avatar>
  {/* 只显示前3个，第4个显示 "+2" */}
</AvatarGroup>
```

### 自定义间距

使用 `spacing` 属性调整头像之间的重叠间距：

```tsx
<AvatarGroup spacing={-12}>
  <Avatar>...</Avatar>
  <Avatar>...</Avatar>
</AvatarGroup>
```

**注意：** `spacing` 接受负值来实现重叠效果。

## API 参考

### Avatar

**Props:**

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `size` | `'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | 头像尺寸 |
| `className` | `string` | - | 自定义类名 |
| `style` | `CSSProperties` | - | 自定义样式 |

### AvatarImage

**Props:**

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `src` | `string` | - | 图片 URL |
| `alt` | `string` | - | 替代文本（必需，用于无障碍访问） |
| `onLoadingStatusChange` | `(status: LoadingStatus) => void` | - | 加载状态变化回调 |
| `className` | `string` | - | 自定义类名 |
| `style` | `CSSProperties` | - | 自定义样式 |

**LoadingStatus 类型：**

```typescript
type LoadingStatus = 'lazy' | 'loading' | 'loaded' | 'error';
```

- `lazy`: 未开始加载
- `loading`: 正在加载
- `loaded`: 加载成功
- `error`: 加载失败

### AvatarFallback

**Props:**

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `delayMs` | `number` | - | 延迟显示的时间（毫秒） |
| `className` | `string` | - | 自定义类名 |
| `style` | `CSSProperties` | - | 自定义样式 |
| `children` | `ReactNode` | - | 回退内容（通常为文字或首字母） |

### AvatarGroup

**Props:**

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `spacing` | `string \| number` | `-8` | 头像之间的间距（负值实现重叠） |
| `max` | `number` | - | 最大显示的头像数量 |
| `className` | `string` | - | 自定义类名 |
| `style` | `CSSProperties` | - | 自定义样式 |
| `children` | `ReactNode` | - | Avatar 组件数组 |

### 工具函数

#### getInitials()

从用户名生成首字母。

**签名：**

```typescript
function getInitials(name: string): string
```

**参数：**

- `name`: 用户全名

**返回值：**

- 1-2 个字符的首字母

**示例：**

```typescript
getInitials('John Doe')     // 'JD'
getInitials('张三')         // '张'
getInitials('Alice')        // 'A'
getInitials('A B C')        // 'AC'
```

## 主题定制

Avatar 组件使用 CSS 变量进行主题化。你可以通过覆盖这些变量来自定义样式：

```css
:root {
  /* 尺寸变量 */
  --bds-avatar-size-small: 24px;
  --bds-avatar-size-medium: 32px;
  --bds-avatar-size-large: 40px;
  --bds-avatar-size-xlarge: 64px;

  /* 样式变量 */
  --bds-avatar-border-radius: 50%;
  --bds-avatar-fallback-bg: var(--base-bds-gray-t3);
  --bds-avatar-fallback-text: var(--base-bds-gray-t1-title);

  /* 头像组间距 */
  --bds-avatar-group-spacing: -8px;
}
```

## 无障碍访问

- **ARIA 支持**: Avatar 组件基于 Radix UI，自动包含适当的 ARIA 属性
- **Alt 文本**: `AvatarImage` 要求提供 `alt` 属性，确保屏幕阅读器可以描述图片内容
- **键盘导航**: Avatar 支持键盘导航和焦点管理
- **屏幕阅读器**: `AvatarFallback` 的内容会自动向屏幕阅读器宣布

## 与其他组件组合

### 与 Tooltip 组合

```tsx
import { Tooltip } from 'LumeUI';

<Tooltip.Root>
  <Tooltip.Trigger>
    <Avatar>
      <AvatarImage src="user.jpg" alt="用户" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  </Tooltip.Trigger>
  <Tooltip.Content>用户详情</Tooltip.Content>
</Tooltip.Root>
```

## 实施细节

- **基础组件**: 基于 Radix UI Avatar 原语
- **样式系统**: 使用 Emotion CSS-in-JS
- **类型支持**: 完整的 TypeScript 类型定义
- **RTL 支持**: 支持 RTL 布局（阿拉伯语、希伯来语等）
- **主题集成**: 与 LumeUI 主题系统完全集成

## 文件位置

```
src/components/Avatar/
├── Avatar.tsx           # 根组件
├── AvatarImage.tsx      # 图片组件
├── AvatarFallback.tsx   # 回退组件
├── AvatarGroup.tsx      # 头像组组件
├── useStyles.ts         # 样式系统
├── utils.ts            # 工具函数
└── index.tsx           # 导出文件
```

## 示例

完整示例请参考：[examples/pages/AvatarDemo.tsx](../../examples/pages/AvatarDemo.tsx)

## 相关规范

- [ui-components 规范](../../../openspec/specs/ui-components/spec.md)
- [Avatar 变更提案](../../../openspec/changes/archive/2025-12-25-add-avatar-component/)
