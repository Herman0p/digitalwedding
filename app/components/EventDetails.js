'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EventCard = ({ title, date, time, location, mapLink, delay = 0 }) => {
    const el = useRef(null);

    useEffect(() => {
        gsap.from(el.current, {
            opacity: 0,
            y: 60,
            duration: 1.2, 
            ease: 'power4.out',
            scrollTrigger: {
                trigger: el.current,
                start: 'top 85%',
                once: true,
            }
        });
    }, []);

    return (
        <div ref={el} className="thin-border bg-[#f4f4f0] p-8 md:p-12 text-center">
            <h3 className="font-serif text-4xl md:text-5xl uppercase !leading-tight">{title}</h3>
            <div className="font-sans text-base mt-8 space-y-4">
                <p className="flex items-center justify-center gap-3"><Calendar size={16} /><span>{date}</span></p>
                <p className="flex items-center justify-center gap-3"><Clock size={16} /><span>{time}</span></p>
                <p className="flex items-center justify-center gap-3 mt-6"><MapPin size={16} /><span>{location}</span></p>
            </div>
            <a 
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm uppercase tracking-widest border-b border-[#1a1a1a] pb-1 mt-10 inline-block hover:text-gray-500 hover:border-gray-500 transition-colors duration-300"
            >Lihat Peta</a>
        </div>
    )
}

export default function EventDetails() {
  const titleRef = useRef(null);

  useEffect(() => {
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
    <section className="py-32 md:py-48 bg-[#f4f4f0] text-[#1a1a1a]">
      <div className="container mx-auto px-8 max-w-7xl">
        <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase !leading-tight text-center mb-24">
          Jadwal Acara
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
            <EventCard 
                title="Akad Nikah"
                date="Sabtu, 24 November 2024"
                time="09:00 - 11:00 WIB"
                location="Masjid Istiqlal, Jakarta"
                mapLink="https://maps.app.goo.gl/yourmaplink1"
            />
            <EventCard
                title="Resepsi"
                date="Sabtu, 24 November 2024"
                time="18:00 - 21:00 WIB"
                location="Grand Ballroom Hotel Indonesia Kempinski"
                mapLink="https://maps.app.goo.gl/yourmaplink2"
                delay={0.2}
            />
        </div>
      </div>
    </section>
  );
}
