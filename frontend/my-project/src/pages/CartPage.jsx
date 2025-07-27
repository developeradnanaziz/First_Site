import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.new_price ?? item.price) * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-gray-500">₹{item.new_price ?? item.price} x {item.quantity}</div>
                  <div className="text-gray-700">Subtotal: ₹{(item.new_price ?? item.price) * item.quantity}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-amber-300">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-amber-300">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <div className="text-xl font-bold mb-4">Total: ₹{total}</div>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
}