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
        duration: 1,
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
    <footer ref={componentRef} className="py-8 px-4 text-center font-sans text-sm text-gray-500">
      <p>&copy; 2024 Herman & Elis. Tutti i diritti riservati.</p>
      <p>Con amore, da Verona.</p>
    </footer>
  );
}
