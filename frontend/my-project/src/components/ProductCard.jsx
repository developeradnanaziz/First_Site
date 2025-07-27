import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, view, addToCart }) {
  return (
    <div className={`bg-white rounded-lg shadow p-4 flex ${view === "list" ? "flex-row" : "flex-col items-center"}`}>
      <img src={product.image} alt={product.name} className="w-40 h-56 object-cover rounded mb-4" />
      <div className="flex-1 flex flex-col items-center">
        <h3 className="font-bold text-lg mb-2 text-center">{product.name}</h3>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">₹{product.new_price ?? product.price}</span>
          {product.old_price && (
            <span className="text-gray-400 line-through ml-2">₹{product.old_price}</span>
          )}
        </p>
        <div className="flex gap-2">
          <Link to={`/product/${product.id}`} className="px-4 py-2 bg-gray-900 text-white rounded-full font-semibold shadow hover:bg-gray-800 transition">
            View Details
          </Link>
          <button
            onClick={addToCart}
            className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}