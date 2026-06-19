"use client";

import Link from 'next/link';

import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we should show solid background (past 80% of window height)
      setScrolled(currentScrollY > window.innerHeight * 0.8);

      // Determine scroll direction to hide/show navbar
      // Only hide if we've scrolled down a bit (e.g. past 100px) so it doesn't flicker at the very top
      // Don't hide if menu is open
      if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !menuOpen) {
        setHidden(true); // Scrolling down
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-[#240605] ${
          (scrolled || menuOpen) ? 'bg-vantara-bg' : 'bg-transparent'
        } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-4">
          <div className="flex items-center gap-2 z-50 relative">
            <Link href="/" className="hover:opacity-80 transition-opacity" onClick={() => setMenuOpen(false)}>
              <img src="/LOGO-vantara.svg" alt="Vantara" className="h-10 md:h-12 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 font-semibold">
            <Link href="#flavours" className="text-sm tracking-tight px-2 hover:opacity-70 transition-all underline decoration-transparent hover:decoration-current underline-offset-4">FLAVOURS</Link>
            <Link href="#process" className="text-sm tracking-tight px-2 hover:opacity-70 transition-all underline decoration-transparent hover:decoration-current underline-offset-4">PROCESS</Link>
            <a href="https://maps.app.goo.gl/fkfnTHE2rX7a38jU9" target="_blank" rel="noopener noreferrer" className="text-sm tracking-tight px-2 hover:opacity-70 transition-all underline decoration-transparent hover:decoration-current underline-offset-4">FIND US</a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center z-50 relative">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 -mr-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-vantara-bg z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-semibold tracking-widest uppercase">
          <Link href="#flavours" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition-opacity">FLAVOURS</Link>
          <Link href="#process" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition-opacity">PROCESS</Link>
          <a href="https://maps.app.goo.gl/fkfnTHE2rX7a38jU9" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition-opacity">FIND US</a>
        </div>
      </div>
    </>
  );
}
