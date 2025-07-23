import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between pt-20 px-12 h-100vh ">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start md:items-start">
          <p className="uppercase text-gray-700 tracking-widest mb-4 font-semibold text-lg">NEW ARRIVALS ONLY</p>
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            new <span role="img" aria-label="wave" className="inline-block align-middle text-6xl">👋</span>
            <br />
            collections <br />for everyone
          </h1>
          <Link
            to="/products"
            className="inline-flex items-center mt-8 px-8 py-4 bg-red-500 text-white rounded-full font-semibold text-xl shadow hover:bg-red-600 transition"
          >
            Latest Collection&nbsp; &rarr;
          </Link>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <img
            src="/hero_image.png"
            alt="New Collection"
            className="w-[420px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Lower Section: Men, Women, Kids */}
      <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
          <img src="/product_15.png" alt="Men" className="w-48 h-64 object-cover rounded mb-4" />
          <span className="text-xl font-bold mb-2"></span>
          <Link to="/category/men" className="px-6 py-2 bg-white text-white rounded-full font-semibold shadow transition border-black">Shop Men</Link>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
          <img src="/product_6.png" alt="Women" className="w-48 h-64 object-cover rounded mb-4" />
          <span className="text-xl font-bold mb-2"></span>
          <Link to="/category/women" className="px-6 py-2 bg-white text-white rounded-full font-semibold shadow transition">Shop Women</Link>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
          <img src="/product_30.png" alt="Kids" className="w-48 h-64 object-cover rounded mb-4" />
          <span className="text-xl font-bold mb-2"></span>
          <Link to="/category/kids" className="px-6 py-2 bg-white text-white rounded-full font-semibold shadow transition">Shop Kids</Link>
        </div>
      </div>

      {/* Lower Buttons: Shop & Shipment Tracker */}
      <div className="max-w-[1200px] mx-auto mt-12 flex flex-col md:flex-row justify-center gap-8">
        <Link to="/shop" className="px-8 py-4 bg-white text-white rounded-full font-semibold text-lg shadow transition text-center">Shop Now</Link>
        <Link to="/shipment" className="px-8 py-4 bg-white text-white rounded-full font-semibold text-lg shadow transition text-center">Track Shipment</Link>
      </div>
    </div>
  );
}