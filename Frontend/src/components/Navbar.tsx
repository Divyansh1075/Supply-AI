import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Bell, User, Menu, X, ChevronDown, LogOut, Settings } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();
  const { state: authState, logout } = useAuth();

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setIsProfileDropdownOpen(false);
    };

    if (isProfileDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isProfileDropdownOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/ai-engine', label: 'AI Engine' },
    { path: '/insights', label: 'Insights' },
    { path: '/contact', label: 'Contact' },
    { path: '/catalog', label: 'Catalog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#0B1222] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-lg flex items-center justify-center">
              <span className="text-[#0B1222] font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
              SupplyAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#00E3FF] ${
                  isActive(link.path) ? 'text-[#00E3FF]' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Search, Icons, and Auth */}
          <div className="flex items-center space-x-1">
            {/* Search bar - Only on large screens */}
            <div className="hidden xl:flex items-center bg-gray-800/50 rounded-lg px-3 py-2 w-48 mr-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm text-white placeholder-gray-400 w-full focus:outline-none"
              />
            </div>

            {/* Icons section */}
            <div className="flex items-center space-x-1">
              {/* Search icon for mobile/tablet */}
              <button className="xl:hidden p-2 text-gray-400 hover:text-[#00E3FF] transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Cart */}
              <Link
                to="/cart"
                className="p-2 text-gray-400 hover:text-[#00E3FF] transition-colors relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#00E3FF] text-[#0B1222] rounded-full flex items-center justify-center text-xs font-bold">
                    {state.items.length}
                  </span>
                )}
              </Link>

              {/* Notifications */}
              <button className="hidden sm:block p-2 text-gray-400 hover:text-[#00E3FF] transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#00E3FF] rounded-full"></span>
              </button>
            </div>

            {/* Auth section - Desktop */}
            {!authState.isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-3 ml-4">
                <Link
                  to="/signin"
                  className="text-gray-300 hover:text-[#00E3FF] px-3 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#00E3FF] text-[#0B1222] px-4 py-2 rounded-lg font-medium hover:bg-[#00E3FF]/90 transition-colors text-sm"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex items-center ml-4 relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsProfileDropdownOpen(!isProfileDropdownOpen);
                  }}
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#00E3FF] transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-[#0B1222]" />
                  </div>
                  <span className="text-sm font-medium">{authState.user?.firstName}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div 
                    className="absolute right-0 top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="py-1">
                      <Link
                        to="/profile"
                        onClick={() => setIsProfileDropdownOpen(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-[#00E3FF] transition-colors"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        onClick={() => setIsProfileDropdownOpen(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-[#00E3FF] transition-colors"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Link>
                      <hr className="border-gray-700 my-1" />
                      <button
                        onClick={() => {
                          logout();
                          setIsProfileDropdownOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-red-400 transition-colors"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* User icon for mobile */}
            {!authState.isAuthenticated ? (
              <Link
                to="/signin"
                className="md:hidden p-2 text-gray-400 hover:text-[#00E3FF] transition-colors"
              >
                <User className="w-5 h-5" />
              </Link>
            ) : (
              <Link
                to="/profile"
                className="md:hidden p-2 text-gray-400 hover:text-[#00E3FF] transition-colors"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-[#0B1222]" />
                </div>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-[#00E3FF] ml-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-3">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-[#00E3FF] px-2 py-1 ${
                    isActive(link.path) ? 'text-[#00E3FF]' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Auth Section */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700 mt-4">
                {!authState.isAuthenticated ? (
                  <>
                    <Link
                      to="/signin"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-300 hover:text-[#00E3FF] px-2 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="bg-[#00E3FF] text-[#0B1222] px-4 py-2 rounded-lg font-medium hover:bg-[#00E3FF]/90 transition-colors w-fit text-sm"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-3 px-2 py-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-[#0B1222]" />
                      </div>
                      <span className="text-white font-medium">{authState.user?.firstName} {authState.user?.lastName}</span>
                    </div>
                    <Link
                      to="/profile"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-300 hover:text-[#00E3FF] px-2 py-2 rounded-lg font-medium transition-colors text-sm flex items-center"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-red-400 px-2 py-2 rounded-lg font-medium transition-colors text-sm flex items-center text-left"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;