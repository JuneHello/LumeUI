export interface ComponentInfo {
  id: string;              // 组件ID (用于路由)
  name: string;            // 组件显示名称
  description: string;     // 组件简短描述
  hasExample: boolean;     // 是否有示例
}

export interface ComponentCategory {
  id: string;              // 分类ID
  name: string;            // 分类显示名称
  icon?: string;           // 分类图标 (可选)
  components: ComponentInfo[];
}

export interface ComponentExample {
  title: string;
  description?: string;
  component: React.ComponentType;
  code?: string;  // 可选：展示代码
}

export interface ComponentDetailProps {
  componentId: string;
  componentName: string;
  examples: ComponentExample[];
  api?: {
    props: Array<{
      name: string;
      type: string;
      default?: string;
      description: string;
    }>;
  };
}
