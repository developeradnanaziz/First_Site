import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Shipments from "./pages/Shipments";
import TrackShipment from "./pages/TrackShipment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./components/UserProfile";
import CategoryPage from './pages/CategoryPage';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shipment" element={<Shipments />} />
          <Route path="/track-shipment/:id" element={<TrackShipment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;