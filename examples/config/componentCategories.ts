import { ComponentCategory } from '../types/component.types';

export const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    id: 'basic',
    name: '基础组件',
    components: [
      { id: 'text', name: 'Text', description: '文本组件', hasExample: true },
      { id: 'button', name: 'Button', description: '按钮', hasExample: false },
      { id: 'icon-button', name: 'IconButton', description: '图标按钮', hasExample: false },
      { id: 'space', name: 'Space', description: '间距', hasExample: false },
      { id: 'divider', name: 'Divider', description: '分割线', hasExample: false },
    ],
  },
  {
    id: 'data-display',
    name: '数据展示',
    components: [
      { id: 'badge', name: 'Badge', description: '徽标', hasExample: true },
      { id: 'card', name: 'Card', description: '卡片', hasExample: false },
      { id: 'table', name: 'Table', description: '表格', hasExample: false },
      { id: 'image', name: 'Image', description: '图片', hasExample: false },
      { id: 'carousel', name: 'Carousel', description: '轮播图', hasExample: false },
      { id: 'empty', name: 'Empty', description: '空状态', hasExample: false },
      { id: 'result', name: 'Result', description: '结果页', hasExample: false },
      { id: 'skeleton', name: 'Skeleton', description: '骨架屏', hasExample: false },
      { id: 'tag', name: 'Tag', description: '标签', hasExample: false },
      { id: 'text-link', name: 'TextLink', description: '文本链接', hasExample: false },
      { id: 'progress-bar', name: 'ProgressBar', description: '进度条', hasExample: false },
      { id: 'rate', name: 'Rate', description: '评分', hasExample: false },
    ],
  },
  {
    id: 'form',
    name: '表单组件',
    components: [
      { id: 'input', name: 'Input', description: '输入框', hasExample: false },
      { id: 'textarea', name: 'Textarea', description: '多行输入', hasExample: false },
      { id: 'search', name: 'Search', description: '搜索框', hasExample: false },
      { id: 'select', name: 'Select', description: '选择器', hasExample: false },
      { id: 'boxed-select', name: 'BoxedSelect', description: '盒式选择器', hasExample: false },
      { id: 'checkbox', name: 'Checkbox', description: '复选框', hasExample: false },
      { id: 'radio', name: 'Radio', description: '单选框', hasExample: false },
      { id: 'switch', name: 'Switch', description: '开关', hasExample: false },
      { id: 'slider', name: 'Slider', description: '滑块', hasExample: false },
      { id: 'upload', name: 'Upload', description: '上传', hasExample: false },
      { id: 'date-picker', name: 'DatePicker', description: '日期选择器', hasExample: false },
    ],
  },
  {
    id: 'navigation',
    name: '导航组件',
    components: [
      { id: 'breadcrumb', name: 'Breadcrumb', description: '面包屑', hasExample: false },
      { id: 'tabs', name: 'Tabs', description: '标签页', hasExample: false },
      { id: 'collapse', name: 'Collapse', description: '折叠面板', hasExample: false },
    ],
  },
  {
    id: 'feedback',
    name: '反馈组件',
    components: [
      { id: 'alert', name: 'Alert', description: '警告提示', hasExample: true },
      { id: 'modal', name: 'Modal', description: '模态框', hasExample: false },
      { id: 'drawer', name: 'Drawer', description: '抽屉', hasExample: false },
      { id: 'toast', name: 'Toast', description: '轻提示', hasExample: false },
      { id: 'notification', name: 'Notification', description: '通知', hasExample: false },
      { id: 'popover', name: 'Popover', description: '气泡卡片', hasExample: false },
      { id: 'tooltip', name: 'Tooltip', description: '文字提示', hasExample: false },
      { id: 'spin', name: 'Spin', description: '加载中', hasExample: false },
      { id: 'countdown', name: 'Countdown', description: '倒计时', hasExample: false },
    ],
  },
];

// 获取所有有示例的组件列表
export const getComponentsWithExamples = () => {
  return COMPONENT_CATEGORIES.flatMap(category =>
    category.components.filter(comp => comp.hasExample)
  );
};

// 根据ID查找组件
export const findComponentById = (id: string) => {
  for (const category of COMPONENT_CATEGORIES) {
    const component = category.components.find(comp => comp.id === id);
    if (component) return component;
  }
  return null;
};
