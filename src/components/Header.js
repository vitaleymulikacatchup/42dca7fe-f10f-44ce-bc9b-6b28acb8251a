import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Who We Are', href: '#' },
    { name: 'Property Owners', href: '#' },
    { name: 'MNOs & TowerCos', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Our Sites', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Resource Center', href: '#' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/apwireless-logo.png" 
              alt="APWireless" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              APW Connect
            </button>
            <button className="btn-primary">
              Contact Us
            </button>
            <div className="flex items-center space-x-2">
              <img src="/images/us-flag.png" alt="US" className="w-6 h-4" />
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-2 space-y-2">
                <button className="w-full text-left text-gray-700 hover:text-primary-600">
                  APW Connect
                </button>
                <button className="w-full btn-primary">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;