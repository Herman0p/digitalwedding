'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EventDetails() {
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
      <h2 className="font-serif text-4xl mb-4">Dettagli Evento</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-serif text-2xl mb-2">Cerimonia</h3>
          <p className="font-sans text-lg">15 Giugno 2024, ore 16:00</p>
          <p className="font-sans text-lg">Chiesa di San Giovanni, Verona</p>
        </div>
        <div>
          <h3 className="font-serif text-2xl mb-2">Ricevimento</h3>
          <p className="font-sans text-lg">A seguire</p>
          <p className="font-sans text-lg">Villa Adovasio, Lago di Garda</p>
        </div>
      </div>
    </section>
  );
}
