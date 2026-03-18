"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const component = useRef(null);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Initial Reveal Animation
      gsap.from(imageRef.current, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: 'power4.inOut',
        delay: 0.2
      });

      gsap.from(textContainerRef.current.children, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power4.out',
        delay: 1 // Delay to start after image reveal
      });

      // 2. Parallax Animation
      gsap.to(imageRef.current, {
        y: '50%',
        ease: 'none',
        scrollTrigger: {
          trigger: component.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="h-screen w-full relative flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* The inner div is scaled and will be moved for parallax */}
        <div
          ref={imageRef}
          className="absolute -inset-x-4 -top-1/4 -bottom-1/4 w-auto h-[150%] bg-cover bg-center" // Height is 150% to allow for y-movement
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523901953332-1a265d1ad104?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        ></div>
      </div>
      <div ref={textContainerRef} className="relative z-10 text-white mix-blend-difference">
        <p className="font-sans text-lg md:text-xl tracking-widest uppercase">We Are Getting Married</p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] !leading-none my-4">Herman & Elis</h1>
        <p className="font-sans text-lg md:text-xl tracking-widest uppercase">XXIV . XI . MMXXIV</p>
      </div>
    </section>
  );
}