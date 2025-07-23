import React, { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { getAuth } from 'firebase/auth';

const Shipments = () => {
  const [form, setForm] = useState({
    sender: '',
    receiver: '',
    address: '',
    packageSize: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert('User not logged in');
      return;
    }

    try {
      await addDoc(collection(db, 'shipments'), {
        ...form,
        userId: user.uid, // ✅ Attach the current user's ID
        status: 'Pending',
        createdAt: Timestamp.now(),
      });

      alert('Shipment Created!');
      setForm({
        sender: '',
        receiver: '',
        address: '',
        packageSize: '',
      });
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">🚚 Create New Shipment</h2>

      {['sender', 'receiver', 'address', 'packageSize'].map((field) => (
        <input
          key={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      ))}

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded text-lg transition"
      >
        Submit Shipment
      </button>
    </form>
  );
};

export default Shipments;
