import React from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import './App.css'; // nếu bạn có style chung

function App() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      name: "Giày Sneaker Nike Air Force 1",
      price: 2500000,
    },
    {
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500",
      name: "Áo Hoodie Adidas Originals",
      price: 1200000,
    },
    {
      image: "https://khoinguonsangtao.vn/wp-content/uploads/2022/09/mau-tui-xach-gucci.jpg",
      name: "Túi xách Gucci Marmont",
      price: 45000000,
    },
  ];

  return (
    <div 
      style={{ 
        padding: '40px 20px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
        Sản phẩm nổi bật
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 250px)',
        gap: '24px',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;