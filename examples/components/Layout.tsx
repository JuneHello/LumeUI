// src/components/Layout.jsx
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const isComponentsPage = location.pathname.startsWith('/components');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <nav style={{
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <div style={{
          maxWidth: isComponentsPage ? '100%' : '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ margin: 0, fontSize: '24px' }}>
            <Link to="/" style={{ color: '#333', textDecoration: 'none' }}>
              Moly 组件库
            </Link>
          </h1>

          <div style={{ display: 'flex', gap: '15px' }}>
            <Link
              to="/components"
              style={{
                padding: '8px 16px',
                textDecoration: 'none',
                color: location.pathname.startsWith('/components') ? '#1890ff' : '#333',
                borderRadius: '4px',
                backgroundColor: location.pathname.startsWith('/components') ? '#e6f7ff' : '#f0f0f0'
              }}
            >
              组件库
            </Link>
          </div>
        </div>
      </nav>

      <div style={{
        maxWidth: isComponentsPage ? '100%' : '1200px',
        margin: '0 auto',
        padding: isComponentsPage ? '0' : '0 20px'
      }}>
        <Outlet />
      </div>

      <footer style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: 'white',
        textAlign: 'center',
        borderTop: '1px solid #e8e8e8'
      }}>
        <p>© 2024 Moly Component Library. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;