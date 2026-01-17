import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: '', message: '' }), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      showAlert('warning', 'Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (username === 'admin' && password === '123456') {
      showAlert('success', 'Đăng nhập thành công!');
    } else {
      showAlert('error', 'Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        {alert.type && (
          <div className={`alert alert-${alert.type} show`}>
            <span>{alert.message}</span>
            <button onClick={() => setAlert({ type: '', message: '' })}>×</button>
          </div>
        )}

        <h2>Đăng nhập</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên đăng nhập"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;