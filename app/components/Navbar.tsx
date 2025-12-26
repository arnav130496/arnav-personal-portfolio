"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RiNextjsFill, RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] border-b border-gray-800 bg-black/90 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="z-[110] transition duration-300 hover:scale-105 flex items-center">
            <RiNextjsFill className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 z-[110]" // Higher z-index to stay above the overlay
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - moved outside of <nav> to avoid stacking-context issues */}
      <div
        className={`
          fixed inset-0 bg-black flex flex-col items-center justify-center z-[105] md:hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <ul className="flex flex-col items-center gap-10 text-2xl font-bold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition-colors py-2 block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;