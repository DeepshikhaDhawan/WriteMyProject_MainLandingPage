
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Menu Toggle Button */}
            <button 
              onClick={() => setIsNavOpen(true)}
              className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
            
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-9 h-9 md:w-6 md:h-6 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold mr-1">
              𝒘
              </div>
              <a href="#" className="text-base md:text-xl font-bold font-poppins">WriteMyProject</a>
            </div>
            
            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
              <a 
                href="https://forms.gle/T2b9Wr8igfYnqfkM6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary text-xs md:text-sm px-3 py-2 md:px-6 md:py-3"
              >
                Join Us as Writer
              </a>
              <a 
                href="https://forms.gle/584aCwzxi6d1batE7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary text-xs md:text-sm px-3 py-2 md:px-6 md:py-3"
              >
                Make File Now
              </a>
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="flex sm:hidden items-center gap-2">
              <a 
                href="https://forms.gle/T2b9Wr8igfYnqfkM6"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary text-xs px-2.5 py-1.5 whitespace-nowrap"
              >
                Join Us
              </a>
              <a 
                href="https://forms.gle/584aCwzxi6d1batE7"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary text-xs px-2.5 py-1.5 whitespace-nowrap"
              >
                Make File
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Navigation Sidebar */}
      <Navigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      {/* Spacer for fixed header */}
      <div className="h-14 md:h-20"></div>
    </>
  );
};

export default Header;
