"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CENTER_IMG = "/telescope-main.webp";
const PERIPHERAL_IMAGES = [
  { src: "/telescope-one.webp", className: "top-[35%] left-[2%] w-[12vw] md:w-[10vw]" },
  { src: "/telescope-two.webp", className: "top-[15%] left-[15%] w-[16vw] md:w-[14vw]" },
  { src: "/telescope-three.webp", className: "top-[25%] left-[33%] w-[15vw] md:w-[12vw]" },
  { src: "/telescope-four.webp", className: "top-[5%] left-[53%] w-[14vw] md:w-[12vw]" },
  { src: "/telescope-five.webp", className: "top-[15%] right-[5%] w-[13vw] md:w-[11vw]" },
  { src: "/telescope-six.webp", className: "top-[35%] right-[18%] w-[12vw] md:w-[10vw]" },
  { src: "/telescope-seven.webp", className: "bottom-[10%] left-[5%] w-[14vw] md:w-[12vw]" },
  { src: "/telescope-eight.webp", className: "bottom-[20%] left-[25%] w-[16vw] md:w-[14vw]" },
  { src: "/telescope-nine.webp", className: "bottom-[15%] left-[50%] w-[12vw] md:w-[10vw]" },
  { src: "/telescope-ten.webp", className: "bottom-[5%] right-[15%] w-[10vw] md:w-[8vw]" },
  { src: "/telescope-eleven.webp", className: "bottom-[5%] right-[2%] w-[8vw] md:w-[6vw]" },
];

export default function Moments() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  
  const pRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%', 
          scrub: true,
          pin: true,
        }
      });

      // Scatter peripheral images outwards
      pRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const winCenterX = window.innerWidth / 2;
        const winCenterY = window.innerHeight / 2;
        
        // Multiplier to ensure they go completely off-screen
        const moveX = (centerX - winCenterX) * 5;
        const moveY = (centerY - winCenterY) * 5;
        
        // Remove opacity: 0 so they actually appear to fly out of the viewport
        // Apply a little zoom (scale: 1.3) and deterministic rotation
        tl.fromTo(el, 
          { x: 0, y: 0, scale: 1, rotation: 0 },
          { x: moveX, y: moveY, scale: 3.5, rotation: (i % 2 === 0 ? 15 : -15) }, 
          0
        );
      });

      // Split text apart strictly
      tl.fromTo(textLeftRef.current, { x: '0vw', opacity: 1 }, { x: '-20vw', opacity: 0 }, 0);
      tl.fromTo(textRightRef.current, { x: '0vw', opacity: 1 }, { x: '20vw', opacity: 0 }, 0);

      // Center image: GSAP owns the whole transform; xPercent/yPercent handle the -50% centering
      gsap.set(centerImageRef.current, { xPercent: -50, yPercent: -50, transformOrigin: 'center center', scale: 0, opacity: 0 });
      tl.fromTo(centerImageRef.current,
        { scale: 0, opacity: 0, xPercent: -50, yPercent: -50 },
        { scale: 1, opacity: 1, xPercent: -50, yPercent: -50, ease: "power2.inOut" },
        0
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section 
        ref={sectionRef} 
        className="relative w-full h-screen bg-vantara-text overflow-hidden flex items-center justify-center"
      >
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
          
          {/* Peripheral Images */}
          {PERIPHERAL_IMAGES.map((img, i) => (
            <img 
              key={i}
              ref={(el) => { pRefs.current[i] = el; }}
              src={img.src}
              alt={`Moment ${i+1}`}
              className={`absolute z-10 object-contain shadow-2xl ${img.className}`}
            />
          ))}

          {/* Main Text & Center Image wrapper */}
          <div className="absolute z-30 flex items-center justify-center w-full">
            
            <div 
              className="flex items-center justify-center gap-2 md:gap-4 w-full text-2xl md:text-5xl lg:text-5xl text-vantara-bg uppercase pointer-events-none drop-shadow-md"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <div ref={textLeftRef} className="whitespace-nowrap">MOMENTS</div>
              
              {/* The invisible space where the cow grows from */}
              <div className="relative flex items-center justify-center w-0 h-0">
                <div 
                  ref={centerImageRef}
                  className="fixed z-20 overflow-hidden drop-shadow-2xl"
                  style={{ 
                    top: '50%',
                    left: '50%',
                    width: '100vw',
                    height: '100vh',
                  }}
                >
                  <img 
                    src={CENTER_IMG}
                    alt="Main Moment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div ref={textRightRef} className="whitespace-nowrap">WORTH SHARING</div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
