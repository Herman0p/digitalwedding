"use client";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Person = ({ name, description, image, imageSide = 'left' }) => {
  const component = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Image Parallax
      gsap.to(imageRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: component.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Image Reveal
      gsap.from(imageWrapperRef.current, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: component.current,
          start: 'top 80%',
          once: true,
        }
      });

      // Text Reveal
      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          once: true
        }
      });

    }, component);
    return () => ctx.revert();
  }, [imageSide]);

  const imageOrder = imageSide === 'left' ? 'md:order-1' : 'md:order-2';
  const textOrder = imageSide === 'left' ? 'md:order-2' : 'md:order-1';
  const textAlign = imageSide === 'left' ? 'md:text-left' : 'md:text-right';
  const textMargin = imageSide === 'left' ? 'md:ml-auto' : 'md:mr-auto';

  return (
    <div ref={component} className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 my-32 md:my-56">
      <div ref={imageWrapperRef} className={`relative h-[70vh] md:h-[90vh] ${imageOrder} overflow-hidden`}>
        <div ref={imageRef} style={{ backgroundImage: `url(${image})`}} className="w-full h-[120%] bg-cover bg-center"></div>
      </div>
      <div ref={textRef} className={`py-12 px-6 md:px-0 ${textOrder} ${textAlign}`}>
        <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl !leading-none uppercase">
            {name}
        </h2>
        <p className={`font-sans text-base md:text-lg mt-6 max-w-md ${textMargin} leading-relaxed`}>
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
                description="A musician who finds poetry in the city's hustle. His rhythm aligns with the city's heartbeat, yet he finds his quietest melody in her soft laughter."
                image="https://images.unsplash.com/photo-1596632242337-3c58a62a6e9b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageSide="left"
            />
            <Person 
                name="Elis"
                description="A painter of emotions who sees the world in dreamy hues. Her soul is a serene landscape, a peaceful harbor in his stormy sea, where every stroke is a masterpiece of grace."
                image="https://images.unsplash.com/photo-1618218567841-784f47f22551?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageSide="right"
            />
      </div>
    </section>
  );
}
