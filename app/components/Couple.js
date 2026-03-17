'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Couple() {
  const componentRef = useRef(null);

  useEffect(() => {
    const el = componentRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={componentRef} className="py-20 px-4 text-center">
      <h2 className="font-serif text-4xl mb-4">Amore & Psiche</h2>
      <p className="font-sans text-lg max-w-2xl mx-auto">
        Una storia d'amore che attraversa i secoli, un legame che unisce due anime in un'unica, eterna melodia.
      </p>
    </section>
  );
}
