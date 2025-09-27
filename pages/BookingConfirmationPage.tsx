import React from 'react';
import { Link } from 'react-router-dom';

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className = "h-16 w-16" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const BookingConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
        <CheckCircleIcon className="h-20 w-20 text-green-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Booking Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-8">Your request has been sent to the owner. You'll receive a notification once they approve it.</p>
        <div className="flex space-x-4">
            <Link to="/bookings" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition-all">
                View My Bookings
            </Link>
            <Link to="/listings" className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all">
                Browse More Items
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
