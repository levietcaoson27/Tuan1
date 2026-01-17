import React from 'react';
import './Alert.css';

const Alert = ({ type, message, onClose }) => {
  if (!type) return null;

  const className = `alert alert-${type}`;

  return (
    <div className={className}>
      <span>{message}</span>
      <button onClick={onClose}>×</button>
    </div>
  );
};

export default Alert;