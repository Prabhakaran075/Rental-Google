import React from 'react';
import { Category, RentalItem, Testimonial } from './types';

// SVG Icons as React Components
export const FurnitureIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5"/><path d="M4 15v-5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5"/><path d="M4 19h16"/><path d="M12 15v4"/></svg>
);
export const ElectronicsIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="13" rx="2" ry="2"/><path d="M16 21V7"/><path d="M8 21V7"/><path d="M12 15v6"/></svg>
);
export const VehiclesIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M4 17H2v-5l2-3h5l2 3v5h2V7h4v10h2"/><path d="M10 5L8 7"/></svg>
);
export const SportsIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a5 5 0 0 0-5 5c0 1.66.84 3.12 2.12 4h5.76C16.16 10.12 17 8.66 17 7a5 5 0 0 0-5-5z"/><path d="M12 12a5 5 0 0 1-5-5h10a5 5 0 0 1-5 5z"/></svg>
);
export const ToolsIcon: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
);
export const LocationIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
);
export const CalendarIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h28.5" /></svg>
);

export const CATEGORIES: Category[] = [
  { name: 'Furniture', icon: <FurnitureIcon /> },
  { name: 'Electronics', icon: <ElectronicsIcon /> },
  { name: 'Vehicles', icon: <VehiclesIcon /> },
  { name: 'Sports', icon: <SportsIcon /> },
  { name: 'Tools', icon: <ToolsIcon /> },
];

export const RENTAL_ITEMS: RentalItem[] = [
  {
    id: 1,
    title: 'Modern Ergonomic Office Chair',
    category: 'Furniture',
    pricePerDay: 15,
    rating: 4.8,
    reviewCount: 124,
    images: ['https://picsum.photos/seed/chair/800/600', 'https://picsum.photos/seed/chair2/800/600'],
    description: 'A comfortable and stylish ergonomic chair, perfect for your home office. Features adjustable height, lumbar support, and smooth-rolling casters.',
    specs: { 'Material': 'Mesh, Aluminum', 'Color': 'Black', 'Dimensions': '25"W x 26"D x 42"H' },
    owner: { name: 'Jane Doe', avatar: 'https://picsum.photos/seed/avatar1/100/100' },
  },
  {
    id: 2,
    title: 'Professional 4K Camera Drone',
    category: 'Electronics',
    pricePerDay: 75,
    rating: 4.9,
    reviewCount: 88,
    images: ['https://picsum.photos/seed/drone/800/600', 'https://picsum.photos/seed/drone2/800/600'],
    description: 'Capture stunning aerial footage with this professional-grade 4K drone. Comes with 3 batteries, a controller, and a carrying case. 30-minute flight time per battery.',
    specs: { 'Resolution': '4K HDR', 'Flight Time': '90 mins (total)', 'Range': '5 km' },
    owner: { name: 'John Smith', avatar: 'https://picsum.photos/seed/avatar2/100/100' },
  },
  {
    id: 3,
    title: 'Mountain Bike - Full Suspension',
    category: 'Vehicles',
    pricePerDay: 40,
    rating: 4.7,
    reviewCount: 210,
    images: ['https://picsum.photos/seed/bike/800/600', 'https://picsum.photos/seed/bike2/800/600'],
    description: 'Conquer any trail with this high-performance full-suspension mountain bike. Lightweight aluminum frame and top-tier components.',
    specs: { 'Frame Size': 'Medium', 'Wheel Size': '29 inch', 'Gears': '12-speed' },
    owner: { name: 'Alex Johnson', avatar: 'https://picsum.photos/seed/avatar3/100/100' },
  },
  {
    id: 4,
    title: 'Camping Tent for 4 People',
    category: 'Sports',
    pricePerDay: 25,
    rating: 4.6,
    reviewCount: 150,
    images: ['https://picsum.photos/seed/tent/800/600', 'https://picsum.photos/seed/tent2/800/600'],
    description: 'Spacious and weatherproof 4-person tent. Easy setup and takedown. Perfect for weekend getaways and family camping trips.',
    specs: { 'Capacity': '4 Persons', 'Waterproof': 'Yes', 'Weight': '12 lbs' },
    owner: { name: 'Emily Carter', avatar: 'https://picsum.photos/seed/avatar4/100/100' },
  },
  {
    id: 5,
    title: 'Portable Power Station',
    category: 'Electronics',
    pricePerDay: 30,
    rating: 4.9,
    reviewCount: 95,
    images: ['https://picsum.photos/seed/power/800/600', 'https://picsum.photos/seed/power2/800/600'],
    description: 'Reliable portable power station for camping, emergencies, or outdoor events. Multiple AC, DC, and USB outlets to charge all your devices.',
    specs: { 'Capacity': '500Wh', 'Outlets': '2 AC, 4 USB, 1 DC', 'Solar Ready': 'Yes' },
    owner: { name: 'John Smith', avatar: 'https://picsum.photos/seed/avatar2/100/100' },
  },
  {
    id: 6,
    title: 'High-Powered Cordless Drill Kit',
    category: 'Tools',
    pricePerDay: 20,
    rating: 4.8,
    reviewCount: 180,
    images: ['https://picsum.photos/seed/drill/800/600', 'https://picsum.photos/seed/drill2/800/600'],
    description: 'A versatile and powerful cordless drill kit for all your DIY projects. Comes with two batteries, a charger, and a set of bits.',
    specs: { 'Voltage': '20V', 'Battery': '2x Li-ion', 'Chuck Size': '1/2 inch' },
    owner: { name: 'Michael Brown', avatar: 'https://picsum.photos/seed/avatar5/100/100' },
  }
];


export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Renting a camera for my vacation was seamless. The platform is incredibly user-friendly and the item was in perfect condition. Highly recommended!",
        author: "Sarah L.",
        role: "Photography Enthusiast",
        rating: 5,
    },
    {
        quote: "I listed my spare bike and it got booked within a day! The process was simple and I love the extra income. The AI pricing suggestion was spot on.",
        author: "Mike R.",
        role: "Bike Owner",
        rating: 5,
    },
    {
        quote: "Needed a specific power tool for a weekend project and found it here for a great price. Saved me a lot of money compared to buying it.",
        author: "David C.",
        role: "DIY Homeowner",
        rating: 4,
    }
];