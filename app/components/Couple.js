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
        { yPercent: -10, scale: 1.2 }, 
        {
          yPercent: 10,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
      
      // Text Reveal
      gsap.from(textRef.current.children, {
        y: '100%',
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        stagger: 0.1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            once: true
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const imageClass = "absolute inset-0 w-full h-full bg-cover bg-center opacity-80";
  const nameOrder = imageSide === 'left' ? 'md:order-2' : 'md:order-1';
  const textAlign = imageSide === 'left' ? 'text-left' : 'text-right';

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 my-32 md:my-64">
      <div ref={imageRef} className={`relative h-[80vh] md:h-[120vh] ${nameOrder} overflow-hidden`}>
        <div style={{ backgroundImage: `url(${image})`}} className={imageClass}></div>
      </div>
      <div ref={textRef} className={`py-12 px-6 md:px-24 ${textAlign} flex flex-col ${imageSide === 'left' ? 'items-start' : 'items-end'}`}>
        <h2 className="font-serif text-[18vw] md:text-[10rem] lg:text-[14rem] !leading-none uppercase" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
            {name}
        </h2>
        <p className="font-sans text-lg mt-6 max-w-sm" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
            {description}
        </p>
      </div>
    </div>
  );
}

export default function Couple() {
  return (
    <section className="bg-[#0a0a0a] text-[#f4f4f0] overflow-hidden">
       <div className="container mx-auto max-w-none px-0">
            <Person 
                name="Herman"
                description="He is a whirlwind of creative energy, a musician who finds poetry in chaos. His heart beats in sync with the rhythm of the city, yet he finds solace in the quiet moments, in the gentle cadence of her laughter."
                image="https://images.unsplash.com/photo-1542844339-2166a1a1e459?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageSide="right"
            />
            <Person 
                name="Elis"
                description="She is a painter of emotions, a soul who sees the world in hues of vibrant dreams. Her spirit is a serene landscape, a calm harbor in his stormy sea, her touch a masterpiece of gentle grace."
                image="https://images.unsplash.com/photo-1599834562135-b8b5182a32af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageSide="left"
            />
      </div>
    </section>
  );
}