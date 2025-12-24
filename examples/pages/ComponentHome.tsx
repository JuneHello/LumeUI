import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComponentNavigation from '../components/ComponentNavigation';
import ComponentDetail from '../components/ComponentDetail';

const ComponentHome: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* 左侧导航 */}
      <ComponentNavigation />

      {/* 右侧内容区 */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route
            index
            element={
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-500">
                  <h2 className="text-2xl font-semibold mb-2">欢迎使用 Moly 组件库</h2>
                  <p>请从左侧选择一个组件查看详情</p>
                </div>
              </div>
            }
          />
          <Route path=":componentId" element={<ComponentDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default ComponentHome;
