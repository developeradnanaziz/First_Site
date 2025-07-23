import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/products.json`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(p => p.category.toLowerCase() === category.toLowerCase());
        setFilteredProducts(filtered);
      })
      .catch(err => console.error('Error loading category:', err));
  }, [category]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4 capitalize">{category} Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
