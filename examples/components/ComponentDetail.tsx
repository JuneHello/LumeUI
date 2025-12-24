import React, { Suspense, lazy } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { findComponentById } from '../config/componentCategories';

// 懒加载组件示例
const AlertExample = lazy(() => import('../compTest/Alert_example'));
const BadgeExample = lazy(() => import('../compTest/Badge_example'));
const TextExamples = lazy(() => import('../compTest/TextExamples'));

const ComponentDetail: React.FC = () => {
  const { componentId } = useParams<{ componentId: string }>();
  const component = findComponentById(componentId || '');

  if (!component || !component.hasExample) {
    return <Navigate to="/components" replace />;
  }

  // 根据 componentId 渲染对应组件
  const renderComponent = () => {
    switch (componentId) {
      case 'alert':
        return <AlertExample />;
      case 'badge':
        return <BadgeExample />;
      case 'text':
        return <TextExamples />;
      default:
        return <div className="text-gray-500">示例开发中...</div>;
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto p-8 pb-20">
        {/* 组件标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {component.name} 组件
          </h1>
          <p className="text-gray-600">{component.description}</p>
        </div>

        {/* 组件示例 */}
        <div className="space-y-6">
          <Suspense fallback={<div className="text-gray-500">加载中...</div>}>
            {renderComponent()}
          </Suspense>
        </div>

        {/* API 文档 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">API</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-600">
              API 文档开发中...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
