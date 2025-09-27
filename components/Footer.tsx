import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Rentify</h3>
            <p className="text-gray-400">Your one-stop shop for renting anything, anytime.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Navigate</h3>
            <ul>
              <li className="mb-2"><Link to="/listings" className="hover:text-secondary">Browse</Link></li>
              <li className="mb-2"><Link to="/list-item" className="hover:text-secondary">List an Item</Link></li>
              <li className="mb-2"><Link to="#" className="hover:text-secondary">About Us</Link></li>
              <li className="mb-2"><Link to="#" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-secondary">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
             {/* SVGs for social icons */}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rentify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
