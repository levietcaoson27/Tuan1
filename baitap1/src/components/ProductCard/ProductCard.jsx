import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price.toLocaleString('vi-VN')} ₫</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => alert(`Đã thêm "${name}" vào giỏ hàng!`)}
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductCard;