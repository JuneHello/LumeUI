import AlertExample from '../compTest/Alert_example';

function AlertDemo() {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '20px', 
      borderRadius: '8px',
      marginTop: '20px'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Alert 组件示例</h2>
      <AlertExample />
    </div>
  );
}

export default AlertDemo;