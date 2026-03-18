'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Person = ({ name, description, image, imageSide = 'left' }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image Parallax
      gsap.fromTo(imageRef.current.querySelector('div'), 
        { yPercent: -15 }, 
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
          }
        }
      );
      
      // Text Reveal
      const lines = gsap.utils.selector(textRef.current)('.line');
      gsap.set(lines, { y: '100%', opacity: 0 });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.to(lines, {
            y: '0%',
            opacity: 1,
            stagger: 0.1,
            duration: 1.5,
            ease: 'power4.out'
          });
        },
        once: true,
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const imageClass = "absolute inset-0 w-full h-full bg-cover bg-center";

  return (
    <div ref={containerRef} className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 my-24 md:my-48">
      <div ref={imageRef} className={`relative h-[60vh] md:h-[90vh] ${imageSide === 'left' ? 'md:order-1' : 'md:order-2'} overflow-hidden`}>
        <div style={{ backgroundImage: `url(${image})`}} className={imageClass}></div>
      </div>
      <div ref={textRef} className={`py-12 px-6 ${imageSide === 'left' ? 'md:order-2 text-left' : 'md:order-1 text-right'}`}>
        <h2 className="font-serif text-7xl md:text-9xl lg:text-[10rem] !leading-none">
           <span className="overflow-hidden inline-block"><span className="line inline-block">{name}</span></span>
        </h2>
        <p className="font-sans text-lg mt-6">
          <span className="overflow-hidden inline-block"><span className="line inline-block">{description}</span></span>
        </p>
      </div>
    </div>
  );
}

export default function Couple() {
  return (
    <section className="bg-[#111] text-white overflow-hidden">
       <div className="container mx-auto max-w-none px-0">
            <Person 
                name="Adovasio"
                description="Son of Mr. First & Mrs. Second"
                image="https://images.unsplash.com/photo-1574271943906-8733293845b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageSide="right"
            />
            <Person 
                name="Psiche"
                description="Daughter of Mr. Third & Mrs. Fourth"
                image="https://images.unsplash.com/photo-1599834562135-b8b5182a32af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageSide="left"
            />
      </div>
    </section>
  );
}