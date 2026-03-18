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
      gsap.fromTo(imageRef.current.querySelector('div'), 
        { scale: 1.2 }, 
        {
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
      
      gsap.from(textRef.current.children, {
        y: '50%',
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
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

  const imageOrder = imageSide === 'left' ? 'md:order-1' : 'md:order-2';
  const textOrder = imageSide === 'left' ? 'md:order-2' : 'md:order-1';
  const textAlign = imageSide === 'left' ? 'md:text-left' : 'md:text-right';

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 my-24 md:my-48">
      <div ref={imageRef} className={`relative h-[70vh] md:h-[90vh] ${imageOrder} overflow-hidden`}>
        <div style={{ backgroundImage: `url(${image})`}} className="w-full h-full bg-cover bg-center"></div>
      </div>
      <div ref={textRef} className={`py-12 px-6 md:px-0 ${textOrder} ${textAlign}`}>
        <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl !leading-none uppercase">
            {name}
        </h2>
        <p className="font-sans text-base md:text-lg mt-6 max-w-md ${imageSide === 'left' ? 'md:ml-auto' : 'md:mr-auto'} leading-relaxed">
            {description}
        </p>
      </div>
    </div>
  );
}

export default function Couple() {
  return (
    <section className="bg-[#f4f4f0] text-[#1a1a1a] overflow-hidden py-32">
       <div className="container mx-auto max-w-7xl px-8">
            <Person 
                name="Herman"
                description="Seorang musisi yang menemukan puisi dalam hiruk pikuk kota. Iramanya selaras dengan detak jantung kota, namun ketenangan ia temukan dalam tawa lembut sang kekasih."
                image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageSide="left"
            />
            <Person 
                name="Elis"
                description="Pelukis emosi yang melihat dunia dalam rona mimpi. Jiwanya adalah lanskap yang tenang, sebuah pelabuhan damai di tengah lautan badai sang pria, di mana setiap sentuhannya adalah sebuah mahakarya keanggunan."
                image="https://images.unsplash.com/photo-1541187714594-7395406a336e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageSide="right"
            />
      </div>
    </section>
  );
}
