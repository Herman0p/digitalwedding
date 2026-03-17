'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const componentRef = useRef(null);

  useEffect(() => {
    const el = componentRef.current;
    gsap.fromTo(
      el.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={componentRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-w-1 aspect-h-1"><img src="/gallery-1.jpg" alt="" className="object-cover w-full h-full" /></div>
        <div className="aspect-w-1 aspect-h-1"><img src="/gallery-2.jpg" alt="" className="object-cover w-full h-full" /></div>
        <div className="aspect-w-1 aspect-h-1"><img src="/gallery-3.jpg" alt="" className="object-cover w-full h-full" /></div>
        <div className="aspect-w-1 aspect-h-1"><img src="/gallery-4.jpg" alt="" className="object-cover w-full h-full" /></div>
        <div className="aspect-w-1 aspect-h-1"><img src="/gallery-5.jpg" alt="" className="object-cover w-full h-full" /></div>
        <div className="aspect-w-1 aspect-h-1"><img src="/gallery-6.jpg" alt="" className="object-cover w-full h-full" /></div>
      </div>
    </section>
  );
}
