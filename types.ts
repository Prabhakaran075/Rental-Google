import React from 'react';

export interface Category {
  name: string;
  icon: React.ReactNode;
}

export interface RentalItem {
  id: number;
  title: string;
  category: string;
  pricePerDay: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  specs: { [key: string]: string };
  owner: {
    name: string;
    avatar: string;
  };
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}
