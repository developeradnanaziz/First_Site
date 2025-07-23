import React, { useState } from "react";

const dummyProducts = [
  { id: 1, name: "Product A", price: 100, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Product B", price: 200, image: "https://via.placeholder.com/100" },
];

export default function ProductList() {
  const [view, setView] = useState("grid");

  return (
    <div>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setView("grid")}
        >
          Grid
        </button>
        <button
          className={`px-4 py-2 rounded ${view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setView("list")}
        >
          List
        </button>
      </div>
      <div className={view === "grid" ? "grid grid-cols-2 gap-4" : "flex flex-col gap-4"}>
        {dummyProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded flex items-center">
            <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
            <div>
              <h3 className="font-bold">{product.name}</h3>
              <p>₹{product.price}</p>
              <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}