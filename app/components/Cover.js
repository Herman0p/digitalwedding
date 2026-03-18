"use client";

import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function Cover({ onOpen }) {
  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.set(container.current, { visibility: 'visible' });
    const tl = gsap.timeline();

    tl.fromTo('.char', 
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.05, duration: 1.5, ease: 'power4.out' }
    );
  }, []);

  const handleOpen = () => {
    gsap.to(container.current, {
      y: '-100%',
      duration: 1.5,
      ease: 'power4.inOut',
      onComplete: onOpen,
    });
  };

  const name = "Adovasio & Psiche";
  const date = "XXIV XI";

  return (
    <div
      ref={container}
      className="fixed inset-0 bg-[#111] text-white flex items-center justify-center z-50 invisible"
    >
      <div className="text-center">
        <h1 className="font-serif text-[18vw] lg:text-[15vw] leading-none tracking-tighter overflow-hidden">
          {name.split("").map((char, index) => (
            <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </h1>
        <h2 className="font-serif text-[10vw] lg:text-[8vw] leading-none tracking-tighter mt-4 overflow-hidden">
            {date.split("").map((char, index) => (
                <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
            ))}
        </h2>
        <div className="mt-12">
            <button
              onClick={handleOpen}
              className="font-sans text-lg border-b border-white pb-2 hover:text-gray-400 hover:border-gray-400 transition-colors duration-300"
            >
              Enter
            </button>
        </div>
      </div>
    </div>
  );
}