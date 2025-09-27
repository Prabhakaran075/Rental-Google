import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

// SVG Icons for the header
const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
);
const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);
const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);
const BellIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
);


const Header: React.FC = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    setProfileMenuOpen(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileMenuRef]);


  const AuthLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => (
    <div className={isMobile ? 'flex flex-col space-y-4 pt-4 border-t' : 'flex items-center space-x-4'}>
      {isLoggedIn ? (
        <>
            {!isMobile && (
              <>
                <button className="relative text-gray-600 hover:text-primary transition-colors">
                    <BellIcon className="h-6 w-6" />
                    <span className="absolute top-0 right-0 block h-2 w-2 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-secondary ring-2 ring-white"></span>
                </button>
                <div className="relative" ref={profileMenuRef}>
                    <button onClick={() => setProfileMenuOpen(prev => !prev)} className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition">
                        <UserIcon className="h-6 w-6"/>
                    </button>
                    {isProfileMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                            <Link to="/dashboard" onClick={() => setProfileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                            <Link to="/bookings" onClick={() => setProfileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Bookings</Link>
                            <Link to="/wishlist" onClick={() => setProfileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wishlist</Link>
                            <div className="border-t my-1"></div>
                            <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
              </>
            )}
            {isMobile && (
              <>
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-primary">Dashboard</Link>
                <Link to="/bookings" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-primary">My Bookings</Link>
                <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-primary">Wishlist</Link>
                <button onClick={handleLogout} className="text-left text-gray-700 hover:text-primary">
                    Logout
                </button>
              </>
            )}
        </>
      ) : (
        <div className={isMobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-2'}>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-full">Log In</Link>
          <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-secondary-hover transition-colors">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Rentify
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/listings" className="text-gray-600 hover:text-primary transition-colors">Browse</Link>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Help</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
            <Link to="/list-item" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-hover transition-colors text-sm font-medium">
                List an Item
            </Link>
            <AuthLinks />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
                <MenuIcon className="h-6 w-6" />
            </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-white z-50 flex flex-col p-6 transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">Rentify</span>
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                    <CloseIcon className="h-6 w-6"/>
                </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4 text-lg">
                <Link to="/listings" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-primary">Browse</Link>
                <Link to="/list-item" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-primary">List an Item</Link>
                <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-primary">About</a>
                <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-primary">Help</a>
            </nav>
            <div className="mt-auto">
                <AuthLinks isMobile={true}/>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
