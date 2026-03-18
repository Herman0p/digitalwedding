"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedImage = ({ src, wrapperClassName, y = -50 }) => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal Animation
      gsap.from(wrapperRef.current, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      // Parallax Animation
      gsap.to(imageRef.current, {
        y,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, [y]);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${wrapperClassName}`}>
        <div ref={imageRef} style={{ backgroundImage: `url(${src})` }} className="w-full h-[120%] bg-cover bg-center"></div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="bg-[#f4f4f0] text-[#1a1a1a] py-32 md:py-48">
      <div className="container mx-auto max-w-7xl px-8">
        <h2 className="font-serif text-5xl md:text-7xl uppercase !leading-tight text-center mb-24 md:mb-32">Gallery</h2>
        
        <div className="grid grid-cols-12 gap-y-16 md:gap-8">

          {/* Row 1 */}
          <div className="col-span-12 md:col-span-6 md:col-start-2">
            <AnimatedImage 
              src="https://images.unsplash.com/photo-1597626214015-349035254238?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              wrapperClassName="h-[60vh] md:h-[80vh]" 
            />
          </div>
          <div className="col-span-10 md:col-span-3 md:col-start-9 self-center">
            <AnimatedImage 
              src="https://images.unsplash.com/photo-1522093019184-6e0e055a4435?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              wrapperClassName="h-[40vh] md:h-[45vh]" 
              y={50}
            />
          </div>

          {/* Row 2 */}
          <div className="col-span-10 col-start-2 md:col-span-4 md:col-start-auto mt-12 md:mt-0">
            <AnimatedImage 
              src="https://images.unsplash.com/photo-1541187714594-7395406a336e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              wrapperClassName="h-[50vh]" 
              y={-30}
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-6 self-end">
             <AnimatedImage 
              src="https://images.unsplash.com/photo-1618218567841-784f47f22551?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              wrapperClassName="h-[55vh] md:h-[70vh] -mt-16 md:mt-0" 
              y={20}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
