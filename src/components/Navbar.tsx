"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mark as scrolled once the user has scrolled past the hero (roughly 100vh)
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 text-[#240605] ${
        scrolled ? 'bg-vantara-bg' : 'bg-transparent'
      }`}
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
