// src/components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';

function Layout() {

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <nav style={{
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: 0,
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px'
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
                color: '#1890ff',
                borderRadius: '4px',
                backgroundColor: '#e6f7ff'
              }}
            >
              组件库
            </Link>
          </div>
        </div>
      </nav>

      <div style={{
        maxWidth: '100%',
        margin: '0 auto',
        padding: '0',
        width: '100%',
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;