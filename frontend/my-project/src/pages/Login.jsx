// Add to pages/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border mb-3" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border mb-3" />
      <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
    </div>
  );
};

export default Login;
