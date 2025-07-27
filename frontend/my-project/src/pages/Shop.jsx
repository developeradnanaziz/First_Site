import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import all_product from '../../public/all_product.js';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState({ brand: '', size: '', price: '' });
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    setProducts(all_product);
    setFilteredProducts(all_product);
  }, []);

  useEffect(() => {
    let filtered = products.filter(product => {
      return (
        (!filters.brand || product.brand === filters.brand) &&
        (!filters.size || product.size === filters.size) &&
        (!filters.price || product.new_price <= parseFloat(filters.price)) &&
        (product.name.toLowerCase().includes(search.toLowerCase()))
      );
    });
    setFilteredProducts(filtered);
  }, [filters, search, products]);

  const filterByCategory = (category) => navigate(`/category/${category}`);
  const trackShipment = () => navigate('/shipment');

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop All Products</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => filterByCategory('men')} className="px-4 py-2 bg-blue-600 text-white rounded">Men</button>
        <button onClick={() => filterByCategory('women')} className="px-4 py-2 bg-pink-600 text-white rounded">Women</button>
        <button onClick={() => filterByCategory('kid')} className="px-4 py-2 bg-green-600 text-white rounded">Kids</button>
        <button onClick={trackShipment} className="px-4 py-2 bg-gray-800 text-white rounded">Track Shipment</button>
      </div>

      <div className="flex gap-4 flex-wrap justify-center mb-4">
        <input
          type="text"
          id="shop-search"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded w-60"
        />
        <select
          id="shop-brand"
          name="brand"
          onChange={e => setFilters(f => ({ ...f, brand: e.target.value }))}
          className="border p-2 rounded"
        >
          <option value="">Brand</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
        </select>
        <select
          id="shop-size"
          name="size"
          onChange={e => setFilters(f => ({ ...f, size: e.target.value }))}
          className="border p-2 rounded"
        >
          <option value="">Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <select
          id="shop-price"
          name="price"
          onChange={e => setFilters(f => ({ ...f, price: e.target.value }))}
          className="border p-2 rounded"
        >
          <option value="">Max Price</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
        <button onClick={() => setView(view === 'grid' ? 'list' : 'grid')} className="px-4 py-2 bg-yellow-500 text-white rounded">
          Toggle View
        </button>
      </div>

      <div className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : 'space-y-4'}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            view={view}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;