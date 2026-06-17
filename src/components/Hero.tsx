"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!container.current || !textRef.current) return;

    // Simple parallax effect for the text
    gsap.to(textRef.current, {
      y: 150,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

  }, []);

  return (
    <div ref={container} className="relative w-full h-[100dvh] bg-vantara-bg items-center justify-center overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0 bg-vantara-bg" />
      
      {/* Background Text */}
      <div ref={textRef} className="relative z-10 flex flex-col gap-4 text-vantara-text items-center justify-center mt-140">
        <h1 className="text-3xl md:text-3xl lg:text-[6rem] tracking-tighter leading-[0.85] text-center font-medium whitespace-nowrap drop-shadow-lg">
          REAL MILK. <br /> REAL STORIES.
        </h1>
        <div className="mt-2 font-sans text-sm md:text-base font-medium leading-tight drop-shadow-md text-center">
          <p>ICECREAM SO GOOD,</p>
          <p>YOU MELT INSIDE.</p>
        </div>
      </div>

      {/* Centered Dropping Ice Cream Video */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none overflow-visible">
        <video 
          ref={videoRef}
          src="/full-alpha.webm" 
          className="w-[105%] md:w-[111%] max-w-none h-auto object-contain drop-shadow-2xl scale-125 md:scale-100 origin-center"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
}
