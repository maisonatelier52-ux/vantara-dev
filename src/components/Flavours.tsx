"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Real image data provided by the user
const FLAVOURS = [
  {
    id: 1,
    title: "Filter\nCoffee",
    leftImage: "/coffee.webp",
    cupImage: "/coffee-cup.webp"
  },
  {
    id: 2,
    title: "Cookies n'\nCream",
    leftImage: "/cookie-cream.webp",
    cupImage: "/cookie-cream-cup.webp"
  },
  {
    id: 3,
    title: "Guava\nChilli",
    leftImage: "/guava.webp",
    cupImage: "/guava-cup.webp"
  },
  {
    id: 4,
    title: "Kesar\nPeda",
    leftImage: "/peda.webp",
    cupImage: "/peda-cup.webp"
  },
  {
    id: 5,
    title: "Butter\nCaramel",
    leftImage: "/caramel.webp",
    cupImage: "/caramel-cup.webp"
  },
  {
    id: 6,
    title: "Vanilla\nStrawberry",
    leftImage: "/strawberry-vanilla.webp",
    cupImage: "/strawberry-cup.webp"
  }
];

const INTERVAL = 3000; // ms per slide
const TOTAL_DURATION = INTERVAL * FLAVOURS.length; // full loop = 18s

// Circular SVG timer ring — fills over the entire cycle of all flavours
function TimerRing({ totalDuration }: { totalDuration: number }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setProgress(0);
    startRef.current = null;

    const animate = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const pct = Math.min(elapsed / totalDuration, 1);
      setProgress(pct);
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // restart after full loop
        startRef.current = null;
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [totalDuration]);

  const dashoffset = circumference * (1 - progress);

  return (
    <svg
      width="132"
      height="132"
      viewBox="0 0 72 72"
      className="rotate-[-90deg]"
    >
      {/* Track */}
      <circle
        cx="36"
        cy="36"
        r={radius}
        fill="none"
        stroke="rgba(184, 124, 78, 0.42)"
        strokeWidth="2"
      />
      {/* Progress arc */}
      <circle
        cx="36"
        cy="36"
        r={radius}
        fill="none"
        stroke="rgba(252, 200, 156, 0.85)"
        strokeWidth="2"
        strokeDasharray={circumference}
        strokeDashoffset={dashoffset}
        strokeLinecap="round"
        style={{ transition: 'none' }}
      />
    </svg>
  );
}


export default function Flavours() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle every INTERVAL ms
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FLAVOURS.length);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="flavours" className="relative w-full h-screen bg-[#FAF8F1] overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        
        {/* --- LEFT SIDE: Large Background Images --- */}
        <div className="relative w-full h-full overflow-hidden">
          {FLAVOURS.map((flavour, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`left-${flavour.id}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Fallback colored background in case image is missing */}
                <div className="absolute inset-0 bg-vantara-accent/10" />
                <img
                  src={flavour.leftImage}
                  alt={flavour.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* Circular Timer Ring — centered on left image, fills over all 6 slides */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="relative flex items-center justify-center">
              <TimerRing totalDuration={TOTAL_DURATION} />
              {/* Vantara logo icon inside ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="opacity-80">
                  <text
                    x="54%"
                    y="58%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="rgba(252, 200, 156, 0.85)"
                    fontSize="52"
                    fontFamily="'Brush Script MT', cursive"
                    fontStyle="bold"
                  >
                    V
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Cup & Text Animation --- */}
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-vantara-bg px-8">
          
          {FLAVOURS.map((flavour, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`right-${flavour.id}`}
                className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ease-in-out pointer-events-none ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* TEXT: Comes from the top */}
                <h3 
                  className={`text-8xl md:text-8xl font-medium text-vantara-text tracking-tighter text-center uppercase -mb-25 transition-transform duration-1000 ease-in-out whitespace-pre-line leading-[0.85] ${
                    isActive ? 'translate-y-0' : '-translate-y-20'
                  }`}
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {flavour.title}
                </h3>

                {/* CUP ICE CREAM: Comes from the bottom */}
                <div 
                  className={`relative w-64 h-64 md:w-120 md:h-120 transition-transform duration-1000 ease-in-out ${
                    isActive ? 'translate-y-0' : 'translate-y-20'
                  }`}
                >
                  <img
                    src={flavour.cupImage}
                    alt={`${flavour.title} cup`}
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            );
          })}

          

          {/* Explore All Flavours Button */}
          <div className="absolute bottom-20 z-20">
            <Link 
              href="/408"
              className="px-6 py-4 bg-[#42211D] text-[#FAF8F1] text-sm uppercase rounded-lg hover:brightness-[1.2] transition-all font-normal border border-[#42211D]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Explore All Flavours
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
