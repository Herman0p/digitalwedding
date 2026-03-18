'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RsvpWishes() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            once: true
        }
    });
    tl.from(titleRef.current, { y: '50%', opacity: 0, duration: 1.2, ease: 'power4.out' })
      .from(formRef.current.children, { y: '30%', opacity: 0, stagger: 0.15, duration: 1, ease: 'power4.out' }, "-=0.8");
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-[#f4f4f0] text-[#1a1a1a]">
      <div className="container mx-auto px-8 max-w-2xl">
        <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase !leading-tight text-center mb-16 md:mb-24">
            Ucapkan Sesuatu
        </h2>
        <form ref={formRef} className="space-y-8 font-sans">
            <div>
                <label htmlFor="name" className="block text-sm font-medium tracking-widest uppercase mb-2">Nama</label>
                <input type="text" id="name" name="name" placeholder="Tulis namamu di sini" className="w-full p-4 bg-transparent thin-border focus:outline-none focus:border-gray-500 transition-colors duration-300" />
            </div>
            <div>
                <label htmlFor="wishes" className="block text-sm font-medium tracking-widest uppercase mb-2">Ucapan & Doa</label>
                <textarea id="wishes" name="wishes" rows="5" placeholder="Bagikan kebahagiaanmu..." className="w-full p-4 bg-transparent thin-border focus:outline-none focus:border-gray-500 transition-colors duration-300"></textarea>
            </div>
            <div className="text-center pt-4">
                <button type="submit" className="font-sans text-sm uppercase tracking-widest border-b border-[#1a1a1a] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300">Kirim Ucapan</button>
            </div>
        </form>
      </div>
    </section>
  );
}
