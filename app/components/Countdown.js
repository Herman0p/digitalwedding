'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Countdown() {
  const componentRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

    const calculateTimeLeft = () => {
      const difference = +new Date('2024-06-15T16:00:00') - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={componentRef} className="py-20 px-4 text-center bg-gray-50">
      <h2 className="font-serif text-4xl mb-8">Mancano solo...</h2>
      <div className="flex justify-center space-x-8 font-sans text-2xl">
        <div>
          <p className="text-5xl font-bold">{timeLeft.days}</p>
          <p className="text-lg">Giorni</p>
        </div>
        <div>
          <p className="text-5xl font-bold">{timeLeft.hours}</p>
          <p className="text-lg">Ore</p>
        </div>
        <div>
          <p className="text-5xl font-bold">{timeLeft.minutes}</p>
          <p className="text-lg">Minuti</p>
        </div>
        <div>
          <p className="text-5xl font-bold">{timeLeft.seconds}</p>
          <p className="text-lg">Secondi</p>
        </div>
      </div>
    </section>
  );
}
