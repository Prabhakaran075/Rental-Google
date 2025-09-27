import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, RENTAL_ITEMS, TESTIMONIALS, SearchIcon, LocationIcon, CalendarIcon } from '../constants';
import RentalItemCard from '../components/RentalItemCard';
import StarRating from '../components/StarRating';

const LandingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/listings?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/listings');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1600/800')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">Your Rental Marketplace for Everything</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto drop-shadow-md">Discover a world of possibilities. Rent high-quality gear from local owners, securely and affordably.</p>
          
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/listings" className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-hover transition-all duration-300 transform hover:scale-105">
              Browse Rentals
            </Link>
            <Link to="/list-item" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
              List Your Item
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mt-12 w-full max-w-4xl bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-4">
              <div className="flex-grow w-full flex items-center bg-white rounded-md">
                <SearchIcon className="text-gray-400 mx-3" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you looking for? (e.g., 'drone', 'tent')"
                  className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="hidden md:flex items-center w-full md:w-auto bg-white rounded-md text-gray-500">
                  <LocationIcon className="text-gray-400 mx-3" />
                  <input type="text" placeholder="Location" className="p-3 w-full md:w-40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"/>
              </div>
              <div className="hidden md:flex items-center w-full md:w-auto bg-white rounded-md text-gray-500">
                  <CalendarIcon className="text-gray-400 mx-3" />
                  <span className="p-3 whitespace-nowrap">Select Dates</span>
              </div>
              <button type="submit" className="w-full md:w-auto bg-secondary text-white font-bold py-3 px-8 rounded-md hover:bg-secondary-hover transition-all duration-300">
                Search
              </button>
          </form>

        </div>
      </section>

      {/* Category Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {CATEGORIES.map(category => (
              <Link key={category.name} to={`/listings?category=${category.name}`} className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-primary mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Listings */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Trending Rentals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {RENTAL_ITEMS.slice(0, 3).map(item => (
              <RentalItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((testimonial, index) => (
                      <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                          <StarRating rating={testimonial.rating} />
                          <p className="text-gray-600 mt-4 mb-6 italic">"{testimonial.quote}"</p>
                          <div className="font-semibold text-gray-800">{testimonial.author}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

    </div>
  );
};

export default LandingPage;