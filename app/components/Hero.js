'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const componentRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const text = textRef.current;

    gsap.fromTo(image, 
      { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', scale: 1.2 }, 
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        scale: 1,
        duration: 2,
        ease: 'power4.inOut',
        delay: 0.5,
      }
    );
    
    gsap.from(text.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1.5,
      ease: 'power3.out',
      delay: 1.5
    });
    
  }, []);

  return (
    <section
      ref={componentRef}
      className="relative min-h-screen flex items-end justify-start text-left bg-[#f4f4f0] text-[#1a1a1a]"
    >
        <div ref={imageRef} className="absolute inset-0 opacity-90">
             <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595782724687-95120272a2a0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
             ></div>
        </div>
      <div ref={textRef} className="relative z-10 p-8 md:p-16 lg:p-24 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl !leading-tight uppercase">Herman & Elis</h1>
        <p className="font-sans text-lg md:text-xl mt-4">Kami akan menikah</p>
        <p className="font-sans text-base mt-2 tracking-widest">24.11.2024</p>
      </div>
    </section>
  );
}
