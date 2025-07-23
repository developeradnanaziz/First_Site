// src/pages/Shop.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/products.json`)
// assuming you placed it in public/data/
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to load products:', err));
  }, []);

  const filterByCategory = (category) => {
    navigate(`/category/${category}`); // will be handled by dynamic route
  };

  const trackShipment = () => {
    navigate('/shipment');
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop All Products</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => filterByCategory('mens')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Men
        </button>
        <button
          onClick={() => filterByCategory('womens')}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Women
        </button>
        <button
          onClick={() => filterByCategory('kids')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Kids
        </button>
        <button
          onClick={trackShipment}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Track Shipment
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
