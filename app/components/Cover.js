'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cover({ onOpen }) {
  const coverRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
      ease: 'power4.out',
      delay: 0.5
    });
  }, []);

  const handleOpen = () => {
    gsap.to(coverRef.current, {
      y: '-100%',
      duration: 1.5,
      ease: 'power4.inOut',
      onComplete: onOpen
    });
  };

  return (
    <div ref={coverRef} className="fixed top-0 left-0 w-full h-full bg-[#f4f4f0] z-50 flex items-center justify-center">
      <div ref={contentRef} className="text-center text-[#1a1a1a] p-8">
        <p className="font-sans text-lg md:text-xl tracking-widest uppercase">The Wedding Of</p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] !leading-tight my-4">Herman & Elis</h1>
        <p className="font-sans text-base md:text-lg">Kepada Bapak/Ibu/Saudara/i</p>
        <p className="font-sans text-xl md:text-2xl font-semibold mt-2">Tamu Undangan</p>
        <button 
          ref={buttonRef}
          onClick={handleOpen}
          className="font-sans text-sm uppercase tracking-widest border-b border-[#1a1a1a] pb-1 mt-12 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
