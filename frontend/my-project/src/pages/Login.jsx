import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Email and password are required.');
      toast.error('Email and password are required.');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      let msg = err.message;
      if (err.code === 'auth/user-not-found') msg = 'No user found with this email.';
      else if (err.code === 'auth/wrong-password') msg = 'Incorrect password.';
      else if (err.code === 'auth/invalid-email') msg = 'Invalid email address.';
      setError(msg);
      toast.error(msg);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (err) {
      toast.error("Google sign-in failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          type="email"
          id="login-email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="login-password"
          name="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white py-2 rounded mt-4 hover:bg-red-600 transition"
        >
          Sign in with Google
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}