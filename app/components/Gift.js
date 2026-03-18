'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gift as GiftIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Gift() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            once: true
        }
    });
    tl.from(titleRef.current, { y: '50%', opacity: 0, duration: 1.2, ease: 'power4.out' })
      .from(contentRef.current, { y: '30%', opacity: 0, duration: 1.2, ease: 'power4.out' }, "-=0.8");

  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-[#f4f4f0] text-[#1a1a1a]">
      <div className="container mx-auto px-8 max-w-2xl text-center">
        <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase !leading-tight mb-16">
            Kado Pernikahan
        </h2>
        <div ref={contentRef} className="font-sans">
            <p className="text-lg leading-relaxed">Bagi keluarga dan sahabat yang ingin mengirimkan kado, dapat melakukannya melalui tautan berikut. Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami.</p>
            <button className="font-sans text-sm uppercase tracking-widest border-b border-[#1a1a1a] pb-1 mt-12 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300 flex items-center gap-2 mx-auto">
                <GiftIcon size={16} />
                Kirim Hadiah
            </button>
        </div>
      </div>
    </section>
  );
}
