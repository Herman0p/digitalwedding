'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const text = textRef.current;
        const image = imageRef.current;

        gsap.from(text, {
            opacity: 0.2,
            duration: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        });

        gsap.fromTo(image.querySelector('div'), 
            { yPercent: -5, scale: 1.1 },
            {
                yPercent: 5,
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
        <section ref={containerRef} className="relative py-32 md:py-64 bg-[#0a0a0a] text-[#f4f4f0]">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div ref={textRef} className="lg:col-span-2 text-left">
                    <h2 className="font-serif text-5xl md:text-7xl !leading-tight uppercase">Our Story</h2>
                    <p className="font-sans text-lg mt-8">
                        In a world of fleeting moments, our story is an anchor. It began with a shared glance, a silent acknowledgment of a connection that transcended words. A journey of two souls, two distinct melodies, finding harmony in a shared symphony. We’ve built a universe in whispered conversations and roaring laughter, a testament to a love that is both a quiet sanctuary and a grand adventure.
                    </p>
                </div>
                <div ref={imageRef} className="lg:col-span-3 h-[70vh] md:h-[90vh] overflow-hidden">
                     <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515934751-4173751fe751?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                     ></div>
                </div>
            </div>
        </section>
    );
}