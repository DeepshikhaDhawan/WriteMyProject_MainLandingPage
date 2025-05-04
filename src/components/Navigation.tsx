
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  // Handle closing on Escape key press
  useEffect(() => {
    setMounted(true);
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Join Us as Writer', href: 'https://forms.gle/T2b9Wr8igfYnqfkM6' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Top Writers', href: '#writers' },
    { name: 'Contact Us-', href: '#' },
    { name: 'writemyproject47@gmail.com', href:'#'},
  ];

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          'fixed inset-0 bg-black/40 z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={cn(
          'fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold font-poppins">Menu</h2>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={25} />
          </button>
        </div>
        
        <nav className="py-6">
          <ul className="flex flex-col space-y-1">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-6 py-3 text-gray-700 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  onClick={onClose}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 w-full p-6 border-t">
          <div className="flex flex-col space-y-3">
            <a 
              href="https://forms.gle/T2b9Wr8igfYnqfkM6" 
              className="btn btn-primary text-center"
              onClick={onClose}
            >
              Join Us as a Writer
            </a>
            <a 
              href="https://forms.gle/584aCwzxi6d1batE7"
              className="btn btn-secondary text-center"
              onClick={onClose}
            >
              Make Project Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
