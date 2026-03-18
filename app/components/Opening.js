'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Opening() {
  const container = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const q = gsap.utils.selector(quoteRef);
    const lines = q('.line');

    const ctx = gsap.context(() => {
      gsap.set(lines, { y: '100%', opacity: 0 });

      ScrollTrigger.create({
        trigger: container.current,
        start: 'top 60%',
        onEnter: () => {
          gsap.to(lines, {
            y: '0%',
            opacity: 1,
            stagger: 0.1,
            duration: 1.5,
            ease: 'power4.out',
          });
        },
        once: true
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const quote = "L'amore è la poesia dei sensi.";

  return (
    <section ref={container} className="bg-[#111] text-white py-32 md:py-48 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div ref={quoteRef} className="md:w-2/3">
           <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl !leading-tight">
            {quote.split(" ").map((word, index) => (
                <span key={index} className="overflow-hidden inline-block">
                    <span className="line inline-block">{word}&nbsp;</span>
                </span>
            ))}
          </h2>
          <p className="font-sans text-lg mt-12 md:ml-4">
             <span className="overflow-hidden inline-block">
                <span className="line inline-block">- Honoré de Balzac</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}