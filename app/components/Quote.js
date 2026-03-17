'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
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
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={componentRef} className="py-20 px-4">
      <blockquote className="font-serif text-3xl md:text-5xl text-center max-w-4xl mx-auto italic">
        "L'amore non guarda con gli occhi ma con l'anima." 
        <cite className="block text-right text-lg md:text-xl not-italic mt-4">- William Shakespeare</cite>
      </blockquote>
    </section>
  );
}
