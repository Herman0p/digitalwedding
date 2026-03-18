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
        const title = titleRef.current;
        const text = textRef.current;
        const image = imageRef.current;

        const tl = gsap.timeline({ 
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 60%',
                once: true
            }
        });

        tl.from(title, { y: '50%', opacity: 0, duration: 1.2, ease: 'power4.out' })
          .from(text.children, { y: '30%', opacity: 0, stagger: 0.15, duration: 1, ease: 'power4.out' }, "-=0.8")
          .from(image, { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', duration: 1.5, ease: 'power4.inOut' }, "-=0.8");
        
        gsap.fromTo(image.querySelector('div'),
            { scale: 1.2 }, 
            {
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );

    }, []);

    return (
        <section ref={containerRef} className="py-32 md:py-48 bg-[#f4f4f0] text-[#1a1a1a]">
            <div className="container mx-auto px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase !leading-tight">Kisah Kami</h2>
                    <div ref={textRef} className="mt-8 font-sans text-base md:text-lg leading-relaxed">
                        <p className="mb-4">Di dunia yang penuh momen sesaat, kisah kami adalah sebuah jangkar. Dimulai dari satu tatapan, pengakuan dalam diam akan sebuah koneksi yang melampaui kata-kata.</p>
                        <p>Sebuah perjalanan dua jiwa, dua melodi berbeda, menemukan harmoni dalam simfoni bersama. Kami telah membangun semesta dalam bisikan percakapan dan gelak tawa, sebuah bukti cinta yang menjadi suaka yang sunyi sekaligus petualangan besar.</p>
                    </div>
                </div>
                <div ref={imageRef} className="mt-24 h-[60vh] md:h-[80vh] overflow-hidden">
                     <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523438885283-e69435c87903?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                     ></div>
                </div>
            </div>
        </section>
    );
}
