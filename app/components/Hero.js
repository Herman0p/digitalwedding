'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(imageRef.current, { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', duration: 1.5, ease: 'power4.inOut' })
      .from(textRef.current.children, { y: '100%', opacity: 0, stagger: 0.1, duration: 1, ease: 'power4.out' }, "-=0.8");
  }, []);

  return (
    <section ref={heroRef} className="h-screen w-full relative flex items-center justify-center text-center text-white overflow-hidden">
      <div 
        ref={imageRef} 
        className="absolute inset-0 w-full h-full"
      >
        <div 
          className="w-full h-full bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1597626214015-349035254238?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        ></div>
      </div>
      <div ref={textRef} className="relative z-10 text-white mix-blend-difference">
        <p className="font-sans text-lg md:text-xl tracking-widest uppercase">We Are Getting Married</p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] !leading-none my-4">Herman & Elis</h1>
        <p className="font-sans text-lg md:text-xl tracking-widest uppercase">XXIV . XI . MMXXIV</p>
      </div>
    </section>
  );
}
