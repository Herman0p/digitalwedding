'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.from(textRef.current.children, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 95%',
                once: true
            }
        });
    }, []);

    return (
        <footer className="py-32 bg-[#f4f4f0] text-[#1a1a1a] text-center">
            <div ref={textRef} className="container mx-auto px-8 max-w-4xl">
                <h3 className="font-serif text-4xl md:text-5xl uppercase !leading-tight">Herman & Elis</h3>
                <p className="font-sans text-base mt-4">Terima kasih atas doa restu Anda.</p>
                <p className="font-sans text-sm mt-12 tracking-widest uppercase">XXIV.XI.MMXXIV</p>
            </div>
        </footer>
    )
}
