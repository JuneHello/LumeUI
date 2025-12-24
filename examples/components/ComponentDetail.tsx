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
    <div className="min-h-full bg-white">
      <div className="max-w-5xl mx-auto px-8 py-10">
        {/* Header Section */}
        <div className="mb-10 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              {component.name}
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
              Component
            </span>
          </div>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            {component.description}
          </p>
        </div>

        {/* Component Preview Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Preview</h2>
          </div>
          
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5">
            <div className="p-10 flex items-center justify-center min-h-[240px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
              <Suspense fallback={
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                  <span>Loading preview...</span>
                </div>
              }>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  {renderComponent()}
                </div>
              </Suspense>
            </div>
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-end">
               <span className="text-xs text-gray-400 font-mono">Interactive Example</span>
            </div>
          </div>
        </div>

        {/* API Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            API Reference
          </h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50/50 px-6 py-12 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-3 text-gray-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 font-medium">API Documentation coming soon</p>
              <p className="text-xs text-gray-400 mt-1">Detailed props and methods will be listed here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
