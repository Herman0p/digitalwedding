'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541187714594-7395406a336e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1595782724687-95120272a2a0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1523438885283-e69435c87903?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const GalleryImage = ({ src, index }) => {
    const el = useRef(null);
    
    useLayoutEffect(() => {
        const image = el.current.querySelector('div');
        gsap.fromTo(image, 
            { scale: 1.2 }, 
            {
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: el.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        );
        gsap.from(el.current, {
            opacity: 0,
            y: 80,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: el.current,
                start: 'top 90%',
                once: true
            }
        })
    }, []);

    const rotations = ['-2deg', '3deg', '-1deg', '4deg', '-2.5deg', '1.5deg'];
    const margins = ['0', '0 0 0 20%', '0 25% 0 0', '0', '0 0 0 30%', '0 20% 0 0'];

    return (
        <div 
            ref={el} 
            className="relative h-[70vh] w-full md:w-[45%] my-12 md:my-24 overflow-hidden thin-border"
            style={{ transform: `rotate(${rotations[index % rotations.length]})`, margin: margins[index % margins.length] }}
        >
           <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
            ></div>
        </div>
    )
}

export default function Gallery() {
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(titleRef.current, {
        y: '50%',
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            once: true
        }
    });
  }, []);

  return (
    <section className="py-32 md:py-48 bg-[#f4f4f0] text-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-8 max-w-7xl">
        <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase !leading-tight text-center">
          Galeri
        </h2>
        <div className="mt-24 flex flex-col items-center">
            {images.map((src, index) => (
                <GalleryImage key={src} src={src} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
}
