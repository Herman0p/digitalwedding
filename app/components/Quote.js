'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const quoteRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      y: '50%',
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: quoteRef.current,
        start: 'top 70%',
        once: true
      }
    });
  }, []);

  return (
    <section ref={quoteRef} className="py-32 md:py-48 bg-[#f4f4f0]">
      <div className="container mx-auto px-8 max-w-4xl">
        <p ref={textRef} className="font-serif text-3xl md:text-5xl !leading-snug text-center text-[#1a1a1a]">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
        </p>
        <p className="font-sans text-lg text-center mt-8">- Q.S. Ar-Rum: 21 -</p>
      </div>
    </section>
  );
}
