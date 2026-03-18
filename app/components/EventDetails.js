'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EventCard = ({ icon, title, date, time, venue, address, mapLink }) => {
    const cardRef = useRef(null);

    useLayoutEffect(() => {
        const card = cardRef.current;
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                once: true,
            }
        });
    }, []);

    return (
        <div ref={cardRef} className="thin-border bg-[#f4f4f0] p-8 md:p-12 text-center flex flex-col items-center">
            <div className="mb-6">{icon}</div>
            <h3 className="font-serif text-3xl md:text-4xl uppercase">{title}</h3>
            <p className="font-sans text-base mt-4">{date}</p>
            <p className="font-sans text-base">Pukul {time} WIB</p>
            <div className="mt-8 font-sans text-base leading-relaxed">
                <p className="font-semibold">{venue}</p>
                <p>{address}</p>
            </div>
            <a 
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm uppercase tracking-widest border-b border-[#1a1a1a] pb-1 mt-8 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300"
            >
                Lihat Peta
            </a>
        </div>
    );
}

export default function EventDetails() {
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
        <section className="py-32 md:py-48 bg-[#f4f4f0] text-[#1a1a1a]">
            <div className="container mx-auto px-8 max-w-7xl">
                <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase !leading-tight text-center mb-24">
                    Jadwal Acara
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 max-w-5xl mx-auto">
                    <EventCard 
                        icon={<Calendar size={40} />}
                        title="Akad Nikah"
                        date="Sabtu, 24 November 2024"
                        time="09:00 - 10:00"
                        venue="Gedung A"
                        address="Jl. Contoh No. 123, Jakarta"
                        mapLink="https://maps.app.goo.gl/1234567890"
                    />
                    <EventCard 
                        icon={<Clock size={40} />}
                        title="Resepsi Pernikahan"
                        date="Sabtu, 24 November 2024"
                        time="11:00 - 14:00"
                        venue="Gedung B"
                        address="Jl. Contoh No. 123, Jakarta"
                        mapLink="https://maps.app.goo.gl/1234567890"
                    />
                </div>
            </div>
        </section>
    )
}
