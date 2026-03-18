'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const componentRef = useRef(null);

  useEffect(() => {
    const el = componentRef.current;
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <footer ref={componentRef} className="py-16 px-4 text-center font-sans text-base text-gray-500 bg-[#0a0a0a]">
      <p className="font-serif text-2xl text-[#f4f4f0]">Herman & Elis</p>
      <p className="mt-4">&copy; 2024. All Rights Reserved.</p>
      <p>With love, from Verona.</p>
    </footer>
  );
}
