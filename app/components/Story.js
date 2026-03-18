"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const component = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const image1WrapperRef = useRef(null);
  const image2WrapperRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate Text
      gsap.from([titleRef.current, textRef.current.children], {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: component.current,
          start: 'top 70%',
          once: true
        }
      });

      // Animate Image 1 Reveal
      gsap.from(image1WrapperRef.current, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: image1WrapperRef.current,
          start: 'top 85%',
          once: true
        }
      });

      // Animate Image 2 Reveal
      gsap.from(image2WrapperRef.current, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: 'power4.inOut',
        delay: 0.2, // slight delay for staggered effect
        scrollTrigger: {
          trigger: image2WrapperRef.current,
          start: 'top 85%',
          once: true
        }
      });

      // Parallax for Image 1
      gsap.to(image1Ref.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: image1WrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
      
      // Parallax for Image 2
      gsap.to(image2Ref.current, {
        y: 50, 
        ease: 'none',
        scrollTrigger: {
          trigger: image2WrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="py-32 md:py-48 bg-[#f4f4f0] overflow-hidden">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          <div className="lg:sticky top-24">
             <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl uppercase !leading-tight text-[#1a1a1a]">
                Our Story
             </h2>
             <div ref={textRef} className="font-sans text-base md:text-lg text-[#1a1a1a] leading-relaxed mt-8 space-y-6 max-w-lg">
                <p>Our story began within the same circle of friends. An unexpected, casual conversation sparked a journey we never anticipated.</p>
                <p>As time went on, we realized something special was blossoming between us. Every shared moment felt profoundly significant, strengthening our belief that we were destined to be together. Now, we are ready to take the next step, a sacred vow to bind our lives forever.</p>
             </div>
          </div>
          
          <div className="grid grid-cols-5 gap-4 lg:mt-24">
              <div ref={image1WrapperRef} className="col-span-4 col-start-2 relative h-[60vh] md:h-[75vh] overflow-hidden">
                <div 
                  ref={image1Ref} 
                  className="w-full h-[120%] bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1597626214015-349035254238?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                ></div>
              </div>
              <div ref={image2WrapperRef} className="col-span-3 col-start-1 row-start-1 self-end -mb-16 -ml-4 z-10 relative h-[35vh] md:h-[40vh] overflow-hidden">
                <div 
                  ref={image2Ref}
                  className="w-full h-[120%] bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522093019184-6e0e055a4435?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                ></div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
