import React from 'react';
import './Button.css';

const Button = ({
  type = 'primary',
  children,
  onClick,
  disabled = false,
  className = '',
  ...rest
}) => {
  let variantClass = 'btn-primary';

  if (type === 'danger') {
    variantClass = 'btn-danger';
  } else if (type === 'success') {
    variantClass = 'btn-success';
  }

  return (
    <button
      className={`btn ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;