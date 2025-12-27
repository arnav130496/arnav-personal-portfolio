"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

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
          
          {/* Logo / Brand Branding */}
          <Link href="/" className="z-[110] group flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tighter text-white transition-colors group-hover:text-blue-500">
              AS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mb-[-14px]" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
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
            className="md:hidden text-white p-2 z-[110]" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
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