"use client";

import React, { useState, useEffect } from 'react';

// Real image data provided by the user
const FLAVOURS = [
  {
    id: 1,
    title: "Filter Coffee",
    leftImage: "/coffee.webp",
    cupImage: "/coffee-cup.webp"
  },
  {
    id: 2,
    title: "Cookies n' Cream",
    leftImage: "/cookie-cream.webp",
    cupImage: "/cookie-cream-cup.webp"
  },
  {
    id: 3,
    title: "Guava Chilli",
    leftImage: "/guava.webp",
    cupImage: "/guava-cup.webp"
  },
  {
    id: 4,
    title: "Kesar Peda",
    leftImage: "/peda.webp",
    cupImage: "/peda-cup.webp"
  },
  {
    id: 5,
    title: "Butter Caramel",
    leftImage: "/caramel.webp",
    cupImage: "/caramel-cup.webp"
  },
  {
    id: 6,
    title: "Vanilla Strawberry",
    leftImage: "/strawberry-vanilla.webp",
    cupImage: "/strawberry-cup.webp"
  }
];

export default function Flavours() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FLAVOURS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
                  className={`text-5xl md:text-7xl font-bold text-vantara-text tracking-tighter text-center uppercase mb-12 transition-transform duration-1000 ease-in-out ${
                    isActive ? 'translate-y-0' : '-translate-y-20'
                  }`}
                  style={{ fontFamily: "'Aktiv Grotesk', sans-serif" }}
                >
                  {flavour.title}
                </h3>

                {/* CUP ICE CREAM: Comes from the bottom */}
                <div 
                  className={`relative w-64 h-64 md:w-96 md:h-96 transition-transform duration-1000 ease-in-out ${
                    isActive ? 'translate-y-0' : 'translate-y-20'
                  }`}
                >
                  {/* Fallback circle if image is missing */}
                  <div className="absolute inset-0 bg-vantara-accent/20 rounded-full" />
                  <img
                    src={flavour.cupImage}
                    alt={`${flavour.title} cup`}
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            );
          })}

          {/* Progress Indicators (Optional) */}
          <div className="absolute bottom-12 flex gap-3 z-20">
            {FLAVOURS.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === activeIndex ? 'bg-vantara-text scale-125' : 'bg-vantara-text/20 hover:bg-vantara-text/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
