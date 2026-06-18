"use client";

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we should show solid background (past 80% of window height)
      setScrolled(currentScrollY > window.innerHeight * 0.8);

      // Determine scroll direction to hide/show navbar
      // Only hide if we've scrolled down a bit (e.g. past 100px) so it doesn't flicker at the very top
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
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
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-[#240605] ${
        scrolled ? 'bg-vantara-bg' : 'bg-transparent'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="flex items-center justify-between px-3 md:px-8 py-6 md:py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="hover:opacity-80 transition-opacity font-normal text-5xl capitalize" style={{ fontFamily: "'Brush Script MT', cursive" }}>
            Vantara
          </Link>
        </div>
        <div className="flex items-center gap-0 md:gap-3 lg:gap-5 font-semibold">
          <Link href="#flavours" className="text-sm tracking-tight px-2 hover:opacity-70 transition-all underline decoration-transparent hover:decoration-current underline-offset-4">FLAVOURS</Link>
          <Link href="#process" className="text-sm tracking-tight px-2 hover:opacity-70 transition-all underline decoration-transparent hover:decoration-current underline-offset-4">PROCESS</Link>
          <a href="https://maps.app.goo.gl/fkfnTHE2rX7a38jU9" target="_blank" rel="noopener noreferrer" className="text-sm tracking-tight px-2 hover:opacity-70 transition-all underline decoration-transparent hover:decoration-current underline-offset-4">FIND US</a>
        </div>
      </div>
    </nav>
  );
}
