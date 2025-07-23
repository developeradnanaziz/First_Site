import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';

const TrackShipment = () => {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = getFirestore();
  const auth = getAuth();

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const q = query(
          collection(db, 'shipments'),
          where('userId', '==', user.uid)
        );

        const querySnapshot = await getDocs(q);
        const shipmentList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setShipments(shipmentList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching shipments:', error);
      }
    };

    fetchShipments();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📦 Your Shipments</h1>

      {loading ? (
        <p className="text-gray-600">Loading shipments...</p>
      ) : shipments.length === 0 ? (
        <p className="text-gray-500">No shipments found.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {shipments.map(shipment => (
            <div key={shipment.id} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <h2 className="font-semibold text-lg mb-2">Tracking ID: {shipment.id}</h2>
              <p><span className="font-medium">To:</span> {shipment.receiver}</p>
              <p><span className="font-medium">Package Size:</span> {shipment.packageSize}</p>
              <p><span className="font-medium">Status:</span> <span className="text-green-600">{shipment.status}</span></p>
              <Link
                to={`/track-shipment/${shipment.id}`}
                className="mt-3 inline-block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Track
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackShipment;
