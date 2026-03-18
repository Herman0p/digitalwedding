'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cover({ onOpen, isCoverOpen }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.set(document.body, { overflow: 'hidden' });
    const tl = gsap.timeline();
    tl.from(titleRef.current, { y: '100%', duration: 1.5, ease: 'power4.out' }, 0.5)
      .from(subtitleRef.current, { y: '100%', duration: 1.5, ease: 'power4.out' }, "-=1.2")
      .from(buttonRef.current, { opacity: 0, duration: 1.5, ease: 'power4.out' }, "-=0.8");
  }, []);

  useEffect(() => {
    if (isCoverOpen) {
      gsap.to(containerRef.current, {
        y: '-100%',
        duration: 1.5,
        ease: 'power4.inOut',
        onComplete: () => {
          gsap.set(containerRef.current, { display: 'none' });
        }
      });
    }
  }, [isCoverOpen]);

  return (
    <section ref={containerRef} className="fixed top-0 left-0 w-full h-full bg-[#f4f4f0] z-50 flex flex-col items-center justify-center text-center text-[#1a1a1a]">
      <div className="overflow-hidden mb-4">
          <h2 ref={subtitleRef} className="font-serif text-3xl md:text-5xl !leading-tight">The Wedding Of</h2>
      </div>
      <div className="overflow-hidden mb-12">
          <h1 ref={titleRef} className="font-serif text-6xl md:text-8xl lg:text-9xl !leading-none">Herman & Elis</h1>
      </div>
      <div ref={buttonRef}>
          <button onClick={onOpen} className="font-sans text-sm uppercase tracking-widest border-b border-[#1a1a1a] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300">
              Buka Undangan
          </button>
      </div>
    </section>
  );
}
