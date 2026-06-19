"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RealStories() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      // The background starts at opacity 0. 
      // As we scroll through the 3 slides (wrapper), it slowly fades to 1.
      gsap.fromTo(bgRef.current, 
        { opacity: 0 },
        { 
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          }
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    // The outer container. Because we have 3 sticky 100vh sections, we don't strictly need a fixed height wrapper.
    // The natural flow of the 3 child divs will create the scrolling track.
    <div ref={wrapperRef} className="relative w-full bg-vantara-text">

      {/* --- SLIDE 1: Background & Text --- */}
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden">
        {/* Background layer */}
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full"
          style={{ backgroundImage: 'url(/postcard-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0 }}
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-start justify-center w-full h-full max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h2
            className="font-normal text-[12vw] md:text-[6rem] lg:text-[7rem] leading-[0.85] tracking-tighter uppercase text-vantara-bg"
            style={{ fontFamily: "'Aktiv Grotesk', sans-serif" }}
          >
            <div className="text-left w-full">REAL MILK.</div>
            <div className="text-left w-full">REAL STORIES.</div>
          </h2>

          <div className="flex justify-between items-start mt-6 md:mt-8 w-full max-w-fit">
            <p className="font-semibold text-[10px] md:text-sm tracking-widest uppercase text-vantara-bg">
              ICECREAM SO GOOD,<br />
              YOU MELT INSIDE.
            </p>

            {/* Circular logo */}
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border-[1px] md:border-2 border-vantara-accent flex items-center justify-center shrink-0 ml-8">
              <svg className="w-6 h-6 md:w-10 md:h-10 text-vantara-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* --- SLIDE 2: Cow Poster Overlay --- */}
      {/* 
        This transparent section sits directly below Slide 1 in the document flow.
        As you scroll down, Slide 1 sticks to the top, and this section slides UP over it.
        When this section hits the top, it ALSO sticks, freezing the Cow Poster in place.
      */}
      <div className="sticky top-0 w-full h-[100vh] pointer-events-none z-20">
        <div className="absolute top-[10%] right-[5%] md:right-[10%] w-[80vw] sm:w-[350px] md:w-[400px] lg:w-[500px] aspect-[3/4] pointer-events-none">
          <img src="/cow-postcard.webp" alt="Cow postcard" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>
      </div>

      {/* --- SLIDE 3: Left Postcard Overlay --- */}
      {/* 
        This transparent section sits below Slide 2.
        As you scroll further, this section slides UP over both Slide 1 and Slide 2.
        When it hits the top, it ALSO sticks. Since there are no more slides, scrolling further
        moves past the entire RealStories wrapper down to the Flavours section.
      */}
      <div className="sticky top-0 w-full h-[100vh] pointer-events-none z-30">
        <div
          className="absolute bottom-[18%] left-[5%] md:left-[10%] w-[88vw] sm:w-[450px] md:w-[700px] lg:w-[900px] aspect-[3/4] md:aspect-[3/2] pointer-events-none"
          style={{ transform: 'rotate(-20deg)' }}
        >
          {/* Mobile */}
          <img src="/postcard-left-mob.webp" alt="Postcard" className="block md:hidden absolute inset-0 w-full h-full object-contain drop-shadow-2xl" />
          {/* Desktop */}
          <img src="/postcard-left.webp" alt="Postcard" className="hidden md:block absolute inset-0 w-full h-full object-contain drop-shadow-2xl" />
        </div>
      </div>

    </div>
  );
}
