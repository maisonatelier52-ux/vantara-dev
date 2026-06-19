import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row min-h-screen">
      
      {/* LEFT PANE */}
      <div 
        className="relative w-full md:w-1/2 p-8 md:p-16 lg:p-24 text-[#FAF8F1] flex flex-col justify-between"
        style={{ 
          backgroundImage: 'url(/letter-texture.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl md:text-6xl uppercase leading-none tracking-tight" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                FROM <br/>
                TEAM VANTARA
              </h2>
            </div>
            {/* Stamp placeholder */}
            <div className="w-24 h-24 rounded-full border-2 border-white/40 flex items-center justify-center -rotate-12 opacity-80">
              <div className="text-[10px] text-center uppercase leading-tight font-mono">
                Eldorado<br/>
                ARK<br/>
                Jan 22<br/>
                11:30AM
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6 text-sm md:text-base font-light text-white/90 max-w-lg leading-relaxed">
            <p>
              In the heart of Jamnagar lies Vantara, a sanctuary shaped by care. It stands as a promise to protect the wild and nurture this bond, thoughtfully and responsibly.
            </p>
            <p>
              Vantara Creamery is an ode to that promise.<br/>
              Created by our teams as an extension of the same care, this ice cream is made in state-of-the-art kitchens using pure A2 gir cow milk, clean ingredients, and ethical practices. A small, joyful expression of a much larger story.
            </p>
            <p>
              We believe indulgence can still be intentional, and we hope every scoop serves as a warm reminder of the animals we protect, the people behind the work, and our shared step toward a kinder, more conscious world.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-16 md:mt-0">
          {/* Circular Monkey Icon Placeholder */}
          <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center text-white/80">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
               {/* A generic leaf/nature icon to represent the monkey/sanctuary temporarily */}
               <path d="M17 8C8 10 5.9 16 5.9 16C5.9 16 6.9 10.9 12 8C13.6 7.1 15 6.6 17 6.6V8ZM21 4C21 4 19 3 15 3C9 3 2 9 2 17C2 21 5 22 5 22C5 22 4.5 19.5 7 16C10.5 11.1 16 9.5 21 9V4Z"/>
            </svg>
          </div>
        </div>

      </div>

      {/* RIGHT PANE */}
      <div className="relative w-full md:w-1/2 bg-vantara-bg p-8 md:p-16 lg:p-24 text-[#42211D] flex flex-col justify-between">
        
        {/* Navigation Links */}
        <div className="grid grid-cols-3 gap-4 text-xs md:text-sm font-medium tracking-wide">
          <div>
            <h3 className="mb-4 text-base font-semibold">WEBSITE</h3>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-60 transition-opacity">HOME</a></li>
              <li><a href="#flavours" className="hover:opacity-60 transition-opacity">FLAVOURS</a></li>
              <li><a href="#process" className="hover:opacity-60 transition-opacity">PROCESS</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold">SOCIAL MEDIA</h3>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-60 transition-opacity">INSTAGRAM</a></li>
              <li><a href="#" className="hover:opacity-60 transition-opacity">TWITTER</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold">FIND US</h3>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-60 transition-opacity">LOCATION</a></li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="my-20 flex flex-col items-center justify-center text-center">
          <img src="/LOGO-vantara.svg" alt="Vantara Creamery" className="w-4/5 max-w-[400px] h-auto object-contain" />
        </div>

        {/* Bottom Links */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs font-semibold tracking-wider">
            <span>@VANTARACREAMERY.IN</span>
            <div className="space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-60 transition-opacity">PRIVACY POLICY</a>
              <a href="#" className="hover:opacity-60 transition-opacity">TERMS OF USE</a>
            </div>
          </div>
          
          <div className="w-full border-t border-dashed border-[#42211D]/30 my-6"></div>
          
          <div className="text-right text-[10px] md:text-xs font-medium tracking-wide">
            Design & Web Agency: <a href="#" className="underline underline-offset-2 hover:opacity-60">Imagined Studio</a>
          </div>
        </div>

        {/* Gold Stamp Placeholder */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-24 h-24 md:w-32 md:h-32 bg-[#D4AF37] rounded-full shadow-2xl flex items-center justify-center rotate-12 overflow-hidden border-2 border-[#b5952f]">
           <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
           <div className="text-center font-bold text-[#5c4a16] text-[10px] md:text-xs leading-none">
             PARKED<br/>HERE
           </div>
        </div>

      </div>

    </footer>
  );
}
