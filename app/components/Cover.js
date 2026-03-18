'use client';

import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function Cover({ onOpen }) {
  const container = useRef(null);
  const nameRef = useRef(null);
  const dateRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    
    // Animate each character of the name
    const nameChars = nameRef.current.children;
    tl.from(nameChars, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.5
    });

    // Animate each character of the date
    const dateChars = dateRef.current.children;
    tl.from(dateChars, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out'
    }, "-=1.2");

    // Animate the button
    tl.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power4.out'
    }, "-=0.5");

  }, []);

  const handleOpen = () => {
    const tl = gsap.timeline({ onComplete: onOpen });
    tl.to(container.current, {
      y: '-100%',
      duration: 1.5,
      ease: 'power4.inOut',
    });
  };

  const name = "Herman & Elis";
  const date = "XXIV.XI.MMXXIV";

  return (
    <div
      ref={container}
      className="fixed inset-0 bg-[#f4f4f0] text-[#1a1a1a] flex items-center justify-center z-50"
    >
      <div className="text-center p-8">
        <h1 ref={nameRef} className="font-serif text-5xl md:text-8xl lg:text-[9rem] !leading-tight uppercase">
          {name.split("").map((char, index) => (
            <span key={index} className="inline-block" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <h2 ref={dateRef} className="font-sans text-lg md:text-xl tracking-[0.2em] mt-4 uppercase">
            {date.split("").map((char, index) => (
               <span key={index} className="inline-block" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
        </h2>
        <div ref={buttonRef} className="mt-12">
            <button
              onClick={handleOpen}
              className="font-sans text-base uppercase tracking-widest border-b border-[#1a1a1a] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300"
            >
              Buka Undangan
            </button>
        </div>
      </div>
    </div>
  );
}
