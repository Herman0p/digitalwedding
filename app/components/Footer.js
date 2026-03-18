'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.from(footerRef.current, {
        opacity: 0, 
        duration: 1.5, 
        ease: 'power4.out', 
        scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
            once: true
        }
    });
  }, []);

  return (
    <footer ref={footerRef} className="py-24 bg-[#f4f4f0] text-center text-[#1a1a1a]">
      <div className="container mx-auto px-8">
        <p className="font-serif text-3xl md:text-5xl !leading-tight">Merupakan suatu kehormatan dan kebahagiaan<br/>bagi kami apabila Bapak/Ibu/Saudara/i<br/>berkenan hadir untuk memberikan doa restu.</p>
        <p className="font-sans text-lg mt-12">Atas kehadiran dan doa restu, kami ucapkan terima kasih.</p>
        <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl !leading-none mt-24">Herman & Elis</h2>
        <p className="font-sans text-sm mt-24">Made with ♡ by Herman</p>

      </div>
    </footer>
  );
}
