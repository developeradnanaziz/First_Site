import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow flex items-center justify-between px-8 py-4">
      {/* Logo and Brand */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Shopper Logo" className="w-8 h-8" />
        <span className="font-bold text-2xl text-gray-800">SHOPPER</span>
      </Link>
      {/* Centered Links */}
      <div className="flex space-x-8">
        <Link to="/shop" className="text-gray-700 hover:text-blue-600">Shop</Link>
        <Link to="/men" className="text-gray-700 hover:text-blue-600">Men</Link>
        <Link to="/women" className="text-gray-700 hover:text-blue-600">Women</Link>
        <Link to="/kids" className="text-gray-700 hover:text-blue-600">Kids</Link>
      </div>
      {/* Right Side: Auth and Cart */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-gray-700 font-medium">
              {user.displayName || user.email}
            </span>
            <button
              onClick={() => { logout(); navigate("/"); }}
              className="px-4 py-1 rounded border border-gray-300 hover:bg-gray-100 bg-amber-100"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="ml-4 px-4 py-1 rounded border border-gray-300 hover:bg-gray-100">Register</Link>
            <Link to="/login" className="px-4 py-1 rounded border border-gray-300 hover:bg-gray-100">Login</Link>
          </>
        )}
        <Link to="/cart" className="relative">
          <svg className="w-6 h-6 text-gray-700 bg-amber-50" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L21 9M7 13V6a1 1 0 011-1h3m4 0h2a1 1 0 011 1v7"></path>
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}