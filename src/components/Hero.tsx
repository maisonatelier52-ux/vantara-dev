"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const liquidPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!container.current || !textRef.current || !liquidPathRef.current) return;

    // Parallax on the hero text
    gsap.to(textRef.current, {
      y: 150,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Fade the fixed video out as the hero scrolls away
    // This prevents it from floating over other sections
    if (videoWrapRef.current) {
      gsap.to(videoWrapRef.current, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: '60% top',   // start fading when 60% of hero has scrolled past
          end: 'bottom top',  // fully gone when hero is off screen
          scrub: true,
        },
      });
    }

    // Liquid SVG path morphing upward as user scrolls away from hero
    gsap.fromTo(
      liquidPathRef.current,
      {
        attr: { d: 'M 0 100 Q 50 100 100 100 L 100 100 L 0 100 Z' },
      },
      {
        attr: { d: 'M 0 0 Q 50 40 100 0 L 100 100 L 0 100 Z' },
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      ref={container}
      className="sticky top-0 z-0 w-full h-[100dvh] bg-vantara-bg items-center justify-center overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 z-0 bg-vantara-bg" />

      {/* Hero Text */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col gap-4 text-vantara-text items-center justify-center mt-140"
      >
        <h1 className="text-3xl md:text-3xl lg:text-[6rem] tracking-tighter leading-[0.85] text-center font-medium whitespace-nowrap drop-shadow-lg">
          REAL MILK. <br /> REAL STORIES.
        </h1>
        <div className="mt-2 font-sans text-sm md:text-base font-medium leading-tight drop-shadow-md text-center">
          <p>ICECREAM SO GOOD,</p>
          <p>YOU MELT INSIDE.</p>
        </div>
      </div>

      {/* Ice Cream Video — fixed so it escapes overflow-hidden and sits above navbar */}
      {/* videoWrapRef controls opacity via GSAP so it fades out as hero scrolls away */}
      <div ref={videoWrapRef} className="fixed inset-0 z-60 flex items-center justify-center pointer-events-none">
        <video
          ref={videoRef}
          src="/full-alpha.webm"
          className="w-[105%] md:w-[111%] max-w-none h-auto object-contain drop-shadow-2xl scale-125 md:scale-100 origin-center"
          autoPlay
          muted
          playsInline
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 4.5;
              videoRef.current.play();
            }
          }}
        />
      </div>

      {/* Liquid SVG overlay — rises from bottom as user scrolls */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ fill: '#240605' }}
        >
          <path
            ref={liquidPathRef}
            d="M 0 100 Q 50 100 100 100 L 100 100 L 0 100 Z"
          />
        </svg>
      </div>
    </div>
  );
}
