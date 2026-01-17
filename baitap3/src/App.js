import React, { useState } from 'react';
import Alert from './components/Alert/Alert';

function App() {
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);

    setTimeout(() => {
      setAlertType('');
    }, 5000);
  };

  const closeAlert = () => {
    setAlertType('');
  };

  return (
    <div style={{
      padding: '40px',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>Alert Component Demo</h1>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', margin: '30px 0' }}>
        <button
          onClick={() => showAlert('success', 'Thao tác thành công!')}
          style={{ padding: '12px 24px', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Success
        </button>

        <button
          onClick={() => showAlert('warning', 'Cảnh báo: Kiểm tra lại dữ liệu!')}
          style={{ padding: '12px 24px', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Warning
        </button>

        <button
          onClick={() => showAlert('error', 'Lỗi: Có vấn đề xảy ra!')}
          style={{ padding: '12px 24px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Error
        </button>
      </div>

      <Alert 
        type={alertType} 
        message={alertMessage} 
        onClose={closeAlert} 
      />
    </div>
  );
}

export default App;