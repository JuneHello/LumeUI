import React from 'react';
import { Badge } from '@/components/Badge';

// Example usage of the Badge component
export const BadgeExample = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2>Badge Examples</h2>

      {/* Basic badge with count */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Basic Badge:</span>
        <Badge count={5}>
          <button style={{ padding: '8px 16px' }}>Notifications</button>
        </Badge>
      </div>

      {/* Badge with dot indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Dot Badge:</span>
        <Badge dot>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
        </Badge>
      </div>

      {/* Badge with overflow count */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Overflow Count:</span>
        <Badge count={150} overflowCount={99}>
          <button style={{ padding: '8px 16px' }}>Messages</button>
        </Badge>
      </div>

      {/* Badge with zero count */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Zero Count (showZero):</span>
        <Badge count={0} showZero>
          <button style={{ padding: '8px 16px' }}>Tasks</button>
        </Badge>
      </div>

      {/* Badge with custom color */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Custom Color:</span>
        <Badge count={3} color="#52c41a">
          <button style={{ padding: '8px 16px' }}>Success</button>
        </Badge>
      </div>

      {/* Badge with secondary type */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Secondary Type:</span>
        <Badge count={12} type="secondary">
          <button style={{ padding: '8px 16px' }}>Secondary</button>
        </Badge>
      </div>

      {/* Badge with small size */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Small Size:</span>
        <Badge count={8} size="small">
          <button style={{ padding: '8px 16px' }}>Small</button>
        </Badge>
      </div>

      {/* Badge with custom offset */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Custom Offset:</span>
        <Badge count={2} offset={[10, 10]}>
          <button style={{ padding: '8px 16px' }}>Offset</button>
        </Badge>
      </div>

      {/* Badge with sup */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Sup Badge:</span>
        <Badge count={99} sup>
          <button style={{ padding: '8px 16px' }}>Sup</button>
        </Badge>
      </div>

      {/* Badge with custom content */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Custom Content:</span>
        <Badge count="NEW">
          <button style={{ padding: '8px 16px' }}>Custom</button>
        </Badge>
      </div>

      {/* Badge with React element as count */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>React Element:</span>
        <Badge count={<span style={{ fontSize: '10px' }}>★</span>}>
          <button style={{ padding: '8px 16px' }}>Star</button>
        </Badge>
      </div>

      {/* Standalone badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Standalone:</span>
        <Badge count={25} />
      </div>

      {/* Standalone dot */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Standalone Dot:</span>
        <Badge dot />
      </div>
    </div>
  );
};

export default BadgeExample;