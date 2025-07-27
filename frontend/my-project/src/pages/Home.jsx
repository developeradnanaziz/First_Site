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
            to="/latest"
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

      {/* Company Policies Section */}
      <section className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Return Policy</h3>
          <p className="text-gray-600 text-center">Easy 30-day returns on all products. No questions asked.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Shipping Policy</h3>
          <p className="text-gray-600 text-center">Free shipping on orders over ₹999. Fast & reliable delivery.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Privacy Policy</h3>
          <p className="text-gray-600 text-center">Your data is secure with us. We never share your information.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-[1000px] mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <p className="text-gray-700 italic mb-4">“Amazing quality and super fast delivery. Will shop again!”</p>
            <span className="font-semibold text-indigo-600">— Priya S.</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <p className="text-gray-700 italic mb-4">“Customer support was very helpful and resolved my issue quickly.”</p>
            <span className="font-semibold text-indigo-600">— Rahul M.</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <p className="text-gray-700 italic mb-4">“Great selection and easy returns. Highly recommend!”</p>
            <span className="font-semibold text-indigo-600">— Ayesha K.</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-[1000px] mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/star_icon.png" alt="Free Shipping" className="w-12 h-12 mb-3" />
            <h4 className="font-semibold mb-2">Free Shipping</h4>
            <p className="text-gray-600 text-center">Enjoy free shipping on all eligible orders.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/hand_icon.png" alt="24/7 Support" className="w-12 h-12 mb-3" />
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p className="text-gray-600 text-center">Our team is here to help you anytime, day or night.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/exclusive_image.png" alt="Exclusive Offers" className="w-12 h-12 mb-3" />
            <h4 className="font-semibold mb-2">Exclusive Offers</h4>
            <p className="text-gray-600 text-center">Get access to members-only deals and discounts.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 mt-16 py-8 w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
          <div className="text-center md:text-left">
            <div className="font-bold text-lg mb-2">E-Commerce Shipment App</div>
            <div className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</div>
          </div>
          <div className="text-center md:text-right text-sm">
            <div>Contact: <a href="mailto:support@ecommerce.com" className="underline">support@ecommerce.com</a></div>
            <div>Phone: <a href="tel:+911234567890" className="underline">+91 12345 67890</a></div>
            <div>Address: 123, Main Street, Mumbai, India</div>
            <div className="mt-2">
              <a href="/privacy" className="underline mr-4">Privacy Policy</a>
              <a href="/help" className="underline">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}