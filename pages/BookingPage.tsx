import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RENTAL_ITEMS } from '../constants';
import StarRating from '../components/StarRating';

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = RENTAL_ITEMS.find(i => i.id === parseInt(id || ''));

  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const numberOfDays = useMemo(() => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end <= start) return 0;
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }, [startDate, endDate]);

  const subtotal = useMemo(() => {
    if (!item) return 0;
    return numberOfDays * item.pricePerDay;
  }, [numberOfDays, item]);

  const serviceFee = useMemo(() => {
    return subtotal * 0.05; // 5% service fee
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal + serviceFee;
  }, [subtotal, serviceFee]);


  const handleConfirmBooking = () => {
    if (!startDate || !endDate) {
        setError('Please select a start and end date.');
        return;
    }
    if (new Date(endDate) <= new Date(startDate)) {
        setError('End date must be after the start date.');
        return;
    }
    setError('');
    // In a real app, this would trigger a payment flow
    navigate('/booking-confirmation');
  };

  if (!item) {
    return <div className="text-center py-20">Item not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Confirm Your Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Item Details & Price Summary */}
        <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
          <div className="flex items-start mb-6">
            <img src={item.images[0]} alt={item.title} className="w-32 h-32 object-cover rounded-lg mr-6" />
            <div>
              <p className="text-sm text-gray-500">{item.category}</p>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <div className="flex items-center mt-1">
                <StarRating rating={item.rating} />
                <span className="text-sm text-gray-500 ml-2">({item.reviewCount})</span>
              </div>
            </div>
          </div>
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Price Details</h3>
            {numberOfDays > 0 ? (
                <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                        <span>${item.pricePerDay.toFixed(2)} x {numberOfDays} {numberOfDays > 1 ? 'days' : 'day'}</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Service fee (5%)</span>
                        <span>${serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg text-gray-800 border-t pt-2 mt-2">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500">Select dates to see price details.</p>
            )}
          </div>
        </div>

        {/* Right Column: Date Selection & Confirmation */}
        <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
            <h3 className="text-xl font-semibold mb-4">Select Rental Dates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input 
                        type="date" 
                        id="start-date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        min={today}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label>
                    <input 
                        type="date" 
                        id="end-date" 
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={startDate || today}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                </div>
            </div>

            {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

            <button 
                onClick={handleConfirmBooking}
                className="w-full bg-secondary text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-secondary-hover transition-all duration-300 disabled:bg-gray-400"
                disabled={!startDate || !endDate || numberOfDays <= 0}
            >
              Confirm & Pay
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">You won't be charged yet. This will send a request to the owner.</p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
