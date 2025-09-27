import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RENTAL_ITEMS } from '../constants';
import StarRating from '../components/StarRating';

const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = RENTAL_ITEMS.find(i => i.id === parseInt(id || ''));
  const [mainImage, setMainImage] = useState(item?.images[0]);

  if (!item) {
    return <div className="text-center py-20">Item not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <img src={mainImage} alt={item.title} className="w-full h-auto object-cover rounded-lg shadow-lg mb-4 aspect-video" />
          <div className="flex space-x-2">
            {item.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${item.title} thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'} hover:border-primary transition-all`}
              />
            ))}
          </div>
        </div>

        {/* Item Details and Booking */}
        <div>
          <p className="text-sm text-gray-500 uppercase font-semibold">{item.category}</p>
          <h1 className="text-4xl font-bold my-2">{item.title}</h1>
          <div className="flex items-center mb-6">
            <StarRating rating={item.rating} />
            <span className="text-gray-600 text-sm ml-2">({item.reviewCount} reviews)</span>
          </div>

          <div className="text-3xl font-bold text-primary mb-6">${item.pricePerDay} <span className="text-lg text-gray-500 font-normal">/ day</span></div>
          
          <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>
          
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Specifications</h3>
            <ul className="space-y-2 text-gray-600">
              {Object.entries(item.specs).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="font-medium">{key}:</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            <Link 
              to={`/booking/${item.id}`}
              className="w-full block text-center bg-secondary text-white font-bold py-4 px-6 rounded-lg text-xl hover:bg-secondary-hover transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          <div className="mt-8 flex items-center">
            <img src={item.owner.avatar} alt={item.owner.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-semibold">{item.owner.name}</p>
              <p className="text-sm text-gray-500">Verified Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;