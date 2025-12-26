import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ComponentHome from '../pages/ComponentHome';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* 默认首页重定向到组件库 */}
        <Route index element={<Navigate to="/components" replace />} />

        {/* 新的组件库路由 */}
        <Route path="components/*" element={<ComponentHome />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;