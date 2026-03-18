'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const componentRef = useRef(null);

  useEffect(() => {
    const el = componentRef.current;
    gsap.fromTo(
      el.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section
      ref={componentRef}
      className="min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/couple-bg.jpg')" }}
    >
      <div className="bg-background bg-opacity-50 p-8 rounded-lg">
        <h1 className="font-serif text-6xl md:text-8xl">Herman & Elis</h1>
        <p className="font-sans text-xl md:text-2xl mt-4">24.08.2024</p>
      </div>
    </section>
  );
}
