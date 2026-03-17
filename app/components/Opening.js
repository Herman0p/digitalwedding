'use client';

import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function Opening() {
  const openingRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(openingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: openingRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section ref={openingRef} className="py-20 text-center">
      <div className="container mx-auto px-4">
        <p className="font-serif text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto">
          “And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”
        </p>
        <p className="mt-4 font-sans text-lg">- Q.S. Ar-Rum: 21</p>
      </div>
    </section>
  );
}
