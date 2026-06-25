# 实施任务清单

## 1. 依赖和设置
- [ ] 1.1 通过 npm 安装 `@radix-ui/react-avatar` 包
- [ ] 1.2 创建 `src/components/Avatar/` 目录结构
- [ ] 1.3 创建基础文件：`index.tsx`、`Avatar.tsx`、`AvatarImage.tsx`、`AvatarFallback.tsx`、`AvatarGroup.tsx`、`useStyles.ts`、`utils.ts`

## 2. 核心 Avatar 组件
- [ ] 2.1 使用 Radix UI Avatar.Root 实现 `Avatar` 根组件
- [ ] 2.2 使用 src 和 alt 属性实现 `Avatar.Image` 子组件
- [ ] 2.3 实现 `Avatar.Fallback` 子组件，支持 delayMs
- [ ] 2.4 为所有组件添加 TypeScript 属性接口
- [ ] 2.5 为所有组件添加 `displayName`（用于开发工具调试）
- [ ] 2.6 在 Avatar.Image 上实现 `onLoadingStatusChange` 回调
- [ ] 2.7 导出 LoadingStatus 类型（'lazy' | 'loading' | 'loaded' | 'error'）

## 3. 样式和主题
- [ ] 3.1 在主题系统中定义 Avatar CSS 变量（尺寸、颜色、间距）
- [ ] 3.2 使用 Emotion CSS-in-JS 实现 `useStyles.ts`
- [ ] 3.3 创建 size 属性的 CVA 变体（small、medium、large、xlarge）
- [ ] 3.4 实现 `cn()` 类合并工具集成
- [ ] 3.5 使用 `useRTL` hook 添加 RTL 支持（如需要）
- [ ] 3.6 添加 `classNames` 和 `styles` 属性用于自定义
- [ ] 3.7 为根、图片和回退元素添加单独的样式覆盖

## 4. Avatar.Group 组件
- [ ] 4.1 实现 `Avatar.Group` 容器组件
- [ ] 4.2 为头像重叠添加负边距样式
- [ ] 4.3 添加 `spacing` 属性以控制重叠量
- [ ] 4.4 添加 `max` 属性以限制可见头像
- [ ] 4.5 实现隐藏头像的 "+N" 计数显示
- [ ] 4.6 确保组间距方向的 RTL 支持

## 5. 工具函数
- [ ] 5.1 实现 `getInitials(name: string)` 辅助函数
  - 提取第一个/最后一个单词的首字母
  - 处理边缘情况（单词、特殊字符）
- [ ] 5.2 添加颜色工具（可选的头像背景颜色）
- [ ] 5.3 添加验证工具（URL 验证、alt 文本存在性）

## 6. Radix UI 集成
- [ ] 6.1 确保 `asChild` 属性在所有子组件上正常工作
- [ ] 6.2 测试 `onLoadingStatusChange` 回调的所有状态
- [ ] 6.3 验证与 Radix UI Portal 的兼容性
- [ ] 6.4 确保 ARIA 属性正确传递

## 7. 集成和导出
- [ ] 7.1 从 `src/components/Avatar/index.tsx` 导出所有 Avatar 组件
- [ ] 7.2 将 `export * from "./Avatar"` 添加到 `src/components/index.ts`
- [ ] 7.3 确保 TypeScript 类型已导出且可用
- [ ] 7.4 运行 `npm run lint` 验证没有类型错误

## 8. 示例和文档
- [ ] 8.1 在 `examples/pages/` 或 `examples/compTest/` 中创建基本 Avatar 示例
- [ ] 8.2 创建不同尺寸的头像示例
- [ ] 8.3 创建带回退（首字母）的头像示例
- [ ] 8.4 创建带多个用户的 Avatar.Group 示例
- [ ] 8.5 创建带加载状态的头像示例
- [ ] 8.6 创建 `onLoadingStatusChange` 回调示例
- [ ] 8.7 创建带 Tooltip 组合的可点击头像示例
- [ ] 8.8 创建与其他 Radix UI 组件组合的示例
- [ ] 8.9 向组件属性添加 JSDoc 注释
- [ ] 8.10 在组件文件注释中添加使用示例

## 9. 测试和验证
- [ ] 9.1 启动开发服务器（`npm run dev:serve`）
- [ ] 9.2 视觉测试所有头像尺寸（small、medium、large、xlarge）
- [ ] 9.3 测试图片加载成功场景
- [ ] 9.4 测试图片加载失败（回退显示）
- [ ] 9.5 测试 Avatar.Group 重叠和间距
- [ ] 9.6 测试 `onLoadingStatusChange` 回调的所有状态
- [ ] 9.7 使用 `useRTL` 上下文测试 RTL 布局
- [ ] 9.8 测试键盘导航和屏幕阅读器宣布
- [ ] 9.9 验证 TypeScript 类型检查通过
- [ ] 9.10 使用浏览器开发工具测试无障碍访问

## 10. 组件组合测试
- [ ] 10.1 测试 Avatar 与 Tooltip 组合
- [ ] 10.2 测试 Avatar 与 Dialog 组合
- [ ] 10.3 测试 Avatar 在 Portal 上下文中
- [ ] 10.4 验证组合场景的 z-index 正确性
- [ ] 10.5 确保组合不破坏无障碍访问功能

## 11. 代码质量
- [ ] 11.1 确保与现有组件一致的代码风格（Button、Badge）
- [ ] 11.2 遵循命名约定（PascalCase 组件、camelCase 属性）
- [ ] 11.3 添加适当的错误处理（缺失 src、无效 URL）
- [ ] 11.4 确保 `logVersion()` 被调用以进行组件跟踪
- [ ] 11.5 为已弃用的用法添加适当的控制台警告（如有）

## 12. 性能优化
- [ ] 12.1 确保组件使用 React.memo() 进行适当优化
- [ ] 12.2 验证没有不必要的重新渲染
- [ ] 12.3 测试多个头像（100+）的性能
- [ ] 12.4 检查内存泄漏（组件卸载时清理）

## 13. 国际化测试
- [ ] 13.1 测试中文姓名的首字母生成
- [ ] 13.2 测试 RTL 阿拉伯语/希伯来语布局
- [ ] 13.3 验证所有语言的无障碍访问
- [ ] 13.4 测试不同字符集（emoji、特殊字符）

## 14. 最终验证
- [ ] 14.1 运行 `openspec validate add-avatar-component --strict`
- [ ] 14.2 验证构建成功完成（`npm run build`）
- [ ] 14.3 检查包大小影响（应最小）
- [ ] 14.4 验证浏览器中没有控制台错误或警告
- [ ] 14.5 确认组件已准备好用于生产
- [ ] 14.6 创建组件使用文档（README 或 Storybook）
