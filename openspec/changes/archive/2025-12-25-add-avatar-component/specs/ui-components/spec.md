## ADDED Requirements

### Requirement: Avatar 组件

The system SHALL provide an Avatar component for displaying user identities, wallet addresses, and trader profiles with image and text fallback support.

#### 场景：显示图片头像

- **当**开发人员向 `Avatar.Image` 提供有效的 `src` URL 时
- **那么**组件应在指定尺寸下显示图片
- **并且**图片应包含在圆形容器内
- **并且**组件应保持图片宽高比

#### 场景：图片加载失败时回退到首字母

- **当**`Avatar.Image` 加载失败或未提供 `src` 时
- **那么**组件应显示 `Avatar.Fallback` 内容
- **并且**回退应默认为用户的首字母
- **并且**回退应使用主题中的纯色背景

#### 场景：显示不同的头像尺寸

- **当**开发人员将 `size` 属性设置为 'small' | 'medium' | 'large' | 'xlarge' 时
- **那么**头像应使用相应的尺寸（24px、32px、40px、64px）渲染
- **并且**所有内部元素应按比例缩放

#### 场景：图片加载期间显示骨架屏

- **当**`loading` 属性为 true 且图片正在加载时
- **那么**组件应显示 Skeleton 占位符
- **并且**骨架屏应与头像尺寸匹配
- **并且**加载完成后骨架屏应被图片替换

#### 场景：向屏幕阅读器宣布头像内容

- **当**渲染 Avatar 时
- **那么**组件应包含适当的 ARIA 属性
- **并且**`Avatar.Image` 应要求提供 `alt` 属性以确保无障碍访问
- **并且**`Avatar.Fallback` 内容应向屏幕阅读器宣布

#### 场景：处理图片加载状态变化

- **当**开发人员向 `Avatar.Image` 提供 `onLoadingStatusChange` 回调时
- **那么**每次状态变化时应调用回调
- **并且**状态应为以下之一：'lazy' | 'loading' | 'loaded' | 'error'
- **并且**回调应接收当前状态作为参数
- **并且**开发人员可以使用此状态实现自定义加载逻辑

### Requirement: Avatar.Group 组件

The system SHALL provide an Avatar.Group component for displaying multiple stacked avatars with overlap for space-efficient multi-user display.

#### 场景：显示带重叠的堆叠头像

- **当**多个 Avatar 组件被包裹在 `Avatar.Group` 中时
- **那么**头像应水平重叠显示
- **并且**重叠应由 `spacing` 属性控制（默认：-8px）
- **并且**每个后续头像应在视觉上分层在前一个头像之上

#### 场景：限制可见头像并显示计数

- **当**`Avatar.Group` 的头像数量超过 `max` 属性值时
- **那么**组件应仅显示前 `max` 个头像
- **并且**组件应显示最后一个 "+N" 头像，显示隐藏的数量
- **并且**"+N" 头像应使用 `Avatar.Fallback` 组件

#### 场景：在 RTL 布局中支持头像组

- **当**`Avatar.Group` 在 RTL（从右到左）上下文中使用时
- **那么**重叠方向应反转
- **并且**头像应从右到左堆叠
- **并且**`useRTL` hook 应提供方向上下文

#### 场景：自定义头像组间距

- **当**开发人员向 `Avatar.Group` 提供自定义 `spacing` 属性时
- **那么**组件应使用指定的负边距值
- **并且**间距应接受 CSS 值（例如，"-12px"、"-16px"）
- **并且**默认间距应为 "-8px"

### Requirement: Avatar 样式和主题

The Avatar component SHALL support consistent theming through CSS variables and match the visual style of the LumeUI component library.

#### 场景：将主题 Token 应用于头像尺寸

- **当**渲染具有特定尺寸的 Avatar 时
- **那么**组件应使用 CSS 变量作为尺寸（--bds-avatar-size-*）
- **并且**border-radius 应使用 --bds-avatar-border-radius（默认：50%）
- **并且**更改主题变量应更新所有头像实例

#### 场景：通过 classNames 和 styles 属性支持自定义样式

- **当**开发人员向 Avatar 组件提供 `classNames` 或 `styles` 属性时
- **那么**组件应使用 `cn()` 将自定义类与基类合并
- **并且**自定义样式应覆盖默认样式而不破坏布局
- **并且**组件应接受根、图片和回退元素的单独覆盖

#### 场景：与现有 LumeUI 模式集成

- **当**Avatar 组件与其他 LumeUI 组件一起使用时
- **那么**它应遵循相同的样式模式（Emotion + CVA）
- **并且**它应使用相同的前缀约定（"moly-avatar"）
- **并且**它应支持与 Button/Badge 相同的自定义属性（classNames、styles）

### Requirement: Avatar 与其他组件的组合

The Avatar component SHALL support composition with other Radix UI components to create more complex interaction patterns.

#### 场景：与 Tooltip 组合创建可点击的头像

- **当**Avatar 作为 `Tooltip.Trigger` 的子组件使用时
- **那么**头像应正常渲染和显示
- **并且**悬停或焦点时应显示 Tooltip
- **并且**头像应保持所有现有功能（图片加载、回退等）
- **并且**组合不应破坏任何组件的无障碍访问功能

#### 场景：与 Dialog 或其他模态组件组合

- **当**Avatar 用在 Dialog 或其他模态上下文中时
- **那么**头像应正确渲染
- **并且**z-index 和 Portal 行为应正确处理
- **并且**头像不应干扰模态交互

### Requirement: Avatar 工具函数

The system SHALL provide utility functions for common avatar operations like generating initials from user names.

#### 场景：从全名生成首字母

- **当**开发人员使用带有全名的 `getInitials()` 工具时
- **那么**函数应返回代表名称的 1-2 个字符
- **并且**对于双词名称（例如，"张三"），应返回 "张" 或 "ZS"
- **并且**对于单词名称，应返回第一个字符
- **并且**对于多词名称，应使用第一个和最后一个单词的首字母

#### 场景：处理首字母生成中的边缘情况

- **当**`getInitials()` 接收到特殊字符或数字时
- **那么**函数应优雅地处理它们
- **并且**空字符串应返回空字符串
- **并且**仅空白字符串应返回空字符串
- **并且**函数应在处理前修剪空白
