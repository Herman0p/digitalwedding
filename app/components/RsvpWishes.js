'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Rsvp() {
  const componentRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={componentRef} className="py-20 px-4 text-center bg-gray-50">
      <h2 className="font-serif text-4xl mb-8">RSVP</h2>
      {submitted ? (
        <p className="font-sans text-lg">Grazie per la tua risposta!</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Il tuo nome" className="w-full p-3 border border-gray-300 rounded bg-white" required />
          </div>
          <div className="mb-6">
            <select className="w-full p-3 border border-gray-300 rounded bg-white" required>
              <option value="">Sarai dei nostri?</option>
              <option value="yes">Sì, con piacere</option>
              <option value="no">No, mi dispiace</option>
            </select>
          </div>
          <button type="submit" className="bg-foreground text-background font-sans py-3 px-8 rounded hover:bg-opacity-80 transition-colors duration-300">
            Invia
          </button>
        </form>
      )}
    </section>
  );
}
