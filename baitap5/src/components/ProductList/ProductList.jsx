import React from 'react';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: "Giày Sneaker Nike Air Force 1",
    price: "2.850.000 ₫",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    id: 2,
    name: "Áo Hoodie Oversize Adidas",
    price: "1.450.000 ₫",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500"
  },
  {
    id: 3,
    name: "Túi đeo chéo Gucci Marmont",
    price: "48.900.000 ₫",
    image: "https://hotgirlshop.vn/uploads/picture/27022023/News/20227205825-Tui-deo-vai-nu-Gucci-GG-Marmont-Size-22-Matelasse-Leather-Mini-Bag.jpg "
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
    price: "9.990.000 ₫",
    image: "https://th.bing.com/th/id/OIP.GDBO4ECHwDvCasPM5A0_ZwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 5,
    name: "Đồng hồ Apple Watch Series 9",
    price: "11.990.000 ₫",
    image: "https://th.bing.com/th/id/OIP.5HryVf3EtaL-306JQfjQ3wHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 6,
    name: "MacBook Air M2 2022",
    price: "27.990.000 ₫",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
  }
];

function ProductList() {
  return (
    <div className="product-list-page">
      <h1>Danh sách sản phẩm</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button>Thêm vào giỏ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;