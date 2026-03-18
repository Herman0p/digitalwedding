'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: 'https://images.unsplash.com/photo-1543849168-a4a3504313b2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Fine art texture',
    position: 'col-span-3 row-span-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1532784988796-55c9e11f7158?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Minimalist wedding detail',
    position: 'col-span-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1541480181995-5a3b37b01b69?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Aesthetic couple pose',
    position: 'col-span-2 row-span-2'
  },
   {
    src: 'https://images.unsplash.com/photo-1528929971832-475263a1f11c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Abstract wedding detail',
    position: 'col-span-3'
  },
];

export default function Gallery() {
  const galleryRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const imageWrappers = galleryRef.current.querySelectorAll('.image-wrapper');
    
    gsap.from(title, {
      y: '100%',
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        once: true
      }
    });

    imageWrappers.forEach((wrapper) => {
        const image = wrapper.querySelector('div');
        gsap.set(wrapper, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'});
        gsap.to(wrapper, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 1.5,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: wrapper,
                start: 'top 80%',
                once: true,
            }
        });

      gsap.fromTo(image, 
        { yPercent: -5, scale: 1.1 },
        {
          yPercent: 5,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    });

  }, []);

  return (
    <section className="py-32 md:py-64 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
          <h2 ref={titleRef} className="font-serif text-7xl md:text-9xl lg:text-[10rem] !leading-none uppercase text-center mb-24">
              <span style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>Gallery</span>
          </h2>
        <div ref={galleryRef} className="grid grid-cols-5 grid-rows-3 gap-4 h-[150vh]">
          {images.map((img, i) => (
            <div key={i} className={`image-wrapper overflow-hidden ${img.position}`}>
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img.src})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
