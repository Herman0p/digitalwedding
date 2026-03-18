'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RsvpWishes() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
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
      .from(formRef.current.children, { y: '30%', opacity: 0, stagger: 0.1, duration: 1, ease: 'power4.out' }, "-=0.8")
      .from(imageRef.current, { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', y: 50, duration: 1.5, ease: 'power4.inOut' }, "-=0.8");

  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-[#f4f4f0] text-[#1a1a1a]">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="md:order-2">
            <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl uppercase !leading-tight">
              Kirim Ucapan
            </h2>
            <form ref={formRef} className="mt-8 font-sans">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">Nama</label>
                <input type="text" id="name" name="name" className="w-full bg-transparent thin-border p-3 focus:outline-none focus:border-[#1a1a1a]" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">Ucapan & Doa</label>
                <textarea id="message" name="message" rows="5" className="w-full bg-transparent thin-border p-3 focus:outline-none focus:border-[#1a1a1a]"></textarea>
              </div>
              <div>
                <button type="submit" className="font-sans text-sm uppercase tracking-widest border-b border-[#1a1a1a] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300">Kirim</button>
              </div>
            </form>
          </div>
          <div ref={imageRef} className="relative h-[60vh] md:h-[80vh] md:order-1 overflow-hidden thin-border">
            <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487222446928-e3c306275735?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
