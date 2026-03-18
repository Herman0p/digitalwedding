'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Countdown() {
  const countdownRef = useRef(null);
  const targetDate = new Date('2024-11-24T09:00:00');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Menit: Math.floor((difference / 1000 / 60) % 60),
        Detik: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    gsap.from(countdownRef.current.children, {
        opacity: 0, 
        y: 50, 
        stagger: 0.2,
        duration: 1.2, 
        ease: 'power4.out', 
        scrollTrigger: {
            trigger: countdownRef.current,
            start: 'top 85%',
            once: true
        }
    });
  }, []);

  return (
    <section className="py-24 bg-[#f4f4f0]">
        <div ref={countdownRef} className="container mx-auto px-8 max-w-3xl grid grid-cols-4 gap-4 text-center text-[#1a1a1a]">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="thin-border p-6">
                    <p className="font-serif text-5xl md:text-7xl">{value}</p>
                    <p className="font-sans text-sm uppercase tracking-widest mt-2">{unit}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
