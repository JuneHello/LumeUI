import BadgeExample from '../compTest/Badge_example';

function BadgeDemo() {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '20px', 
      borderRadius: '8px',
      marginTop: '20px'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Badge 组件示例</h2>
      <BadgeExample />
    </div>
  );
}

export default BadgeDemo;