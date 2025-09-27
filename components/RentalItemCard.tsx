import React from 'react';
import { Link } from 'react-router-dom';
import { RentalItem } from '../types';
import StarRating from './StarRating';

interface RentalItemCardProps {
  item: RentalItem;
}

const RentalItemCard: React.FC<RentalItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group">
      <Link to={`/item/${item.id}`} className="block">
        <div className="relative">
          <img src={item.images[0]} alt={item.title} className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2 bg-secondary text-white text-sm font-bold px-3 py-1 rounded-full">
            ${item.pricePerDay}/day
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase font-semibold">{item.category}</p>
          <h3 className="text-lg font-semibold text-gray-800 mt-1 truncate group-hover:text-primary">{item.title}</h3>
          <div className="flex items-center mt-2">
            <StarRating rating={item.rating} />
            <span className="text-gray-600 text-sm ml-2">({item.reviewCount} reviews)</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RentalItemCard;
