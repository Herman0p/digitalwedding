'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Story() {
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
        stagger: 0.3,
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
       <h2 className="font-serif text-4xl mb-8">La Nostra Storia</h2>
       <div className="max-w-3xl mx-auto space-y-8 font-sans text-lg">
        <p>Ci siamo incontrati in una calda sera d'estate, sotto un cielo stellato. Da quel momento, ogni giorno è stato un'avventura, un continuo scoprire e riscoprire la bellezza di stare insieme.</p>
        <p>Abbiamo condiviso sogni, superato sfide e costruito un amore solido, basato sulla complicità e sulla fiducia reciproca.</p>
        <p>Ora, siamo pronti a scrivere un nuovo capitolo della nostra vita, insieme a voi, testimoni del nostro amore.</p>
       </div>
    </section>
  );
}
