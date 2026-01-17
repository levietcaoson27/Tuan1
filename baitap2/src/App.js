/* eslint-disable no-restricted-globals */
import React from 'react';
import Button from './components/Button/Button';

function App() {
  return (
    <div style={{
      padding: '60px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      background: '#f8fafc',
      minHeight: '100vh'
    }}>
      <Button type="primary" onClick={() => alert('Primary clicked!')}>
        Primary Button
      </Button>

      <Button 
  type="danger" 
      onClick={() => {
    if (confirm('Bạn chắc chắn xóa?')) {
      alert('Đã xóa!');
    }
  }}
>
  Delete / Danger
</Button>

      <Button type="success">
        Success Button
      </Button>

      <Button type="primary" disabled>
        Primary Disabled
      </Button>

      <Button type="danger" className="text-lg px-10 py-4">
        Large Danger
      </Button>

      <Button type="info">
        Unknown → Primary
      </Button>
    </div>
  );
}

export default App;