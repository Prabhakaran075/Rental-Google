import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
      <p className="text-lg text-gray-600 mb-8">Here's your personal dashboard.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/bookings" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-primary mb-2">My Bookings</h2>
            <p className="text-gray-600">View your current and past rental bookings.</p>
        </Link>
        <Link to="/wishlist" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-primary mb-2">My Wishlist</h2>
            <p className="text-gray-600">See the items you've saved for later.</p>
        </Link>
        <Link to="/list-item" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-bold text-primary mb-2">List an Item</h2>
            <p className="text-gray-600">Rent out your items and start earning.</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
