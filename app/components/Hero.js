'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const componentRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = componentRef.current;
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
    
    gsap.from(text, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      delay: 1.5
    });
    
  }, []);

  return (
    <section
      ref={componentRef}
      className="relative min-h-screen flex items-end justify-start text-left bg-[#0a0a0a]"
    >
        <div ref={imageRef} className="absolute inset-0 opacity-40">
             <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529101103520-f6b894151322?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
             ></div>
        </div>
      <div ref={textRef} className="relative z-10 p-8 md:p-16 lg:p-24 max-w-4xl">
        <h1 className="font-serif text-[10vw] md:text-[8vw] lg:text-[6rem] leading-none uppercase">Herman & Elis</h1>
        <p className="font-sans text-xl md:text-2xl mt-4">We are getting married</p>
        <p className="font-sans text-lg mt-2">24.08.2024</p>
      </div>
    </section>
  );
}
