import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-40 h-56 object-cover rounded mb-4" />
      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-2">₹{product.price}</p>
      <Link to={`/product/${product.id}`} className="px-4 py-2 bg-gray-900 text-white rounded-full font-semibold shadow hover:bg-gray-800 transition">
        View Details
      </Link>
    </div>
  );
}