"use client";

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
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1.5,
      ease: 'power4.inOut',
    });
  };

  const name = "Herman & Elis";
  const date = "XXIV XI";

  return (
    <div
      ref={container}
      className="fixed inset-0 bg-[#0a0a0a] text-[#f4f4f0] flex items-center justify-center z-50"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      <div className="text-center">
        <h1 ref={nameRef} className="font-serif text-[15vw] md:text-[12vw] leading-none tracking-tighter uppercase">
          {name.split("").map((char, index) => (
            <span key={index} className="inline-block" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <h2 ref={dateRef} className="font-serif text-[10vw] md:text-[8vw] leading-none tracking-tighter mt-4">
            {date.split("").map((char, index) => (
               <span key={index} className="inline-block" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
        </h2>
        <div ref={buttonRef} className="mt-12">
            <button
              onClick={handleOpen}
              className="font-sans text-lg border-b border-[#f4f4f0] pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors duration-300"
            >
              Enter Site
            </button>
        </div>
      </div>
    </div>
  );
}
