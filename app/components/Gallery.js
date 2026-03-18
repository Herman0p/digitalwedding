'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
    { src: 'https://images.unsplash.com/photo-1523438909602-f5234d4beeac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Couple walking in Paris' },
    { src: 'https://images.unsplash.com/photo-1522398545874-a21a83933c1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Eiffel tower view' },
    { src: 'https://images.unsplash.com/photo-1541334023349-887363c32104?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Couple holding hands' },
    { src: 'https://images.unsplash.com/photo-1610213198305-a3550b06b5ba?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Wedding detail shot' },
    { src: 'https://images.unsplash.com/photo-1515934751699-e58f543d18c9?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Elegant bride' },
    { src: 'https://images.unsplash.com/photo-1509610918848-3c66869622ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Parisian street' },
];

export default function Gallery() {
  const titleRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
        y: '50%', 
        opacity: 0, 
        duration: 1.2, 
        ease: 'power4.out', 
        scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            once: true
        }
    });

    const imageElements = galleryRef.current.children;
    gsap.from(imageElements, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 80%',
            once: true
        }
    });

  }, []);

  return (
    <section className="py-32 md:py-48 bg-[#f4f4f0] overflow-hidden">
      <div className="container mx-auto px-8">
        <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase !leading-tight text-center mb-24">
            Galeri Cinta
        </h2>
        <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            <div className="col-span-1 row-span-2 thin-border"><img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" /></div>
            <div className="col-span-1 thin-border"><img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover" /></div>
            <div className="col-span-1 thin-border"><img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover" /></div>
            <div className="col-span-1 thin-border"><img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover" /></div>
            <div className="col-span-1 thin-border"><img src={images[4].src} alt={images[4].alt} className="w-full h-full object-cover" /></div>
            <div className="col-span-2 md:col-span-1 thin-border"><img src={images[5].src} alt={images[5].alt} className="w-full h-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
}
