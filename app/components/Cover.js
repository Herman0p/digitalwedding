'use client';

import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function Cover({ onOpen }) {
  const coverRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      coverRef.current.querySelectorAll('.reveal'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.5, ease: 'power3.out' }
    );
  }, []);

  const handleOpen = () => {
    gsap.to(coverRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power4.inOut',
      onComplete: () => {
        if (onOpen) {
          onOpen();
        }
      },
    });
  };

  return (
    <div
      ref={coverRef}
      className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center z-50 text-center p-4"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1523438885209-e585350fd3a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="font-serif text-2xl mb-2 reveal">The Wedding Of</h2>
        <h1 className="font-serif text-6xl md:text-8xl mb-4 reveal">Adovasio & Psiche</h1>
        <p className="font-sans text-lg mb-8 reveal">24.11.2024</p>
        <button
          onClick={handleOpen}
          className="reveal bg-white text-gray-900 font-sans py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
}