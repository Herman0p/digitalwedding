'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gift() {
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
      <h2 className="font-serif text-4xl mb-4">Lista Nozze</h2>
      <p className="font-sans text-lg max-w-2xl mx-auto">
        Il regalo più grande sarà la vostra presenza, ma se desiderate contribuire al nostro futuro insieme, abbiamo preparato una lista nozze online.
      </p>
      <a href="#" className="inline-block bg-foreground text-background font-sans py-3 px-8 rounded mt-8 hover:bg-opacity-80 transition-colors duration-300">
        Scopri la Lista
      </a>
    </section>
  );
}
