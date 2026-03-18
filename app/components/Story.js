'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        once: true
      }
    });
    
    tl.from(titleRef.current, { y: '50%', opacity: 0, duration: 1.2, ease: 'power4.out' })
      .from(textRef.current.children, { y: '30%', opacity: 0, stagger: 0.15, duration: 1, ease: 'power4.out' }, "-=0.8")
      .from(imageRef.current, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', duration: 1.5, ease: 'power4.inOut' }, "-=1");

  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-[#f4f4f0]">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
             <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl uppercase !leading-tight text-[#1a1a1a]">
                Kisah Kami
             </h2>
             <div ref={textRef} className="font-sans text-base md:text-lg text-[#1a1a1a] leading-relaxed mt-8 space-y-6">
                <p>Pertemuan kami dimulai dari lingkaran pertemanan yang sama. Tanpa disangka, percakapan santai dan kesamaan minat membawa kami pada sebuah perjalanan yang tidak pernah kami duga sebelumnya. </p>
                <p>Seiring berjalannya waktu, kami menyadari bahwa ada sesuatu yang istimewa di antara kami. Setiap momen yang kami lewati bersama terasa begitu berarti, menguatkan keyakinan bahwa kami ditakdirkan untuk bersama. Kini, kami siap melangkah ke jenjang yang lebih serius, mengikat janji suci untuk selamanya.</p>
             </div>
          </div>
          <div ref={imageRef} className="relative h-[70vh] w-full overflow-hidden thin-border">
             <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543833138-d35272a80523?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
