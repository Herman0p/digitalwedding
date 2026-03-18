'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Copy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BankAccount = ({ bank, name, number, onCopy }) => {
    const el = useRef(null);
    
    const handleCopy = () => {
        navigator.clipboard.writeText(number).then(() => {
            onCopy(); // Notify parent about the copy action
        });
    };

    useLayoutEffect(() => {
        gsap.from(el.current, {
            opacity: 0,
            y: 50,
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
        <div ref={el} className="thin-border bg-[#f4f4f0] p-8 text-center flex flex-col">
            <h4 className="font-serif text-3xl uppercase">{bank}</h4>
            <p className="font-sans text-base mt-3">a/n {name}</p>
            <p className="font-sans text-xl tracking-widest my-4 font-medium">{number}</p>
            <div className="mt-auto">
                <button 
                    onClick={handleCopy} 
                    className="font-sans text-sm uppercase tracking-widest border-b border-[#1a1a1a] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300 flex items-center gap-2 mx-auto"
                >
                    <Copy size={14} />
                    <span>Salin Nomor</span>
                </button>
            </div>
        </div>
    )
}

export default function Gift() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            once: true
        }
    });
    tl.from(titleRef.current, { y: '50%', opacity: 0, duration: 1.2, ease: 'power4.out' })
      .from(textRef.current, { y: '30%', opacity: 0, duration: 1, ease: 'power4.out' }, "-=0.9");
  }, []);

  const showCopyNotification = () => {
    const notification = notificationRef.current;
    gsap.fromTo(notification, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, ease: 'power4.out',
          onComplete: () => {
            gsap.to(notification, { opacity: 0, y: -20, delay: 2, ease: 'power4.in' });
          }
        }
    );
  }

  return (
    <section className="py-32 md:py-48 bg-[#f4f4f0] text-[#1a1a1a]">
      <div className="container mx-auto px-8 max-w-4xl text-center">
        <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl lg:text-8xl uppercase !leading-tight">
          Kado Digital
        </h2>
        <p ref={textRef} className="font-sans text-base md:text-lg leading-relaxed mt-8 max-w-xl mx-auto">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun, jika Anda ingin memberikan tanda kasih, kami telah menyediakan fitur di bawah ini untuk memudahkan Anda.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-4 mt-24 max-w-3xl mx-auto">
            <BankAccount
                bank="Bank BCA"
                name="Herman"
                number="1234567890"
                onCopy={showCopyNotification}
            />
             <BankAccount
                bank="Bank Mandiri"
                name="Elis"
                number="0987654321"
                onCopy={showCopyNotification}
            />
        </div>
      </div>
      <div 
        ref={notificationRef}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-[#f4f4f0] font-sans text-sm py-2 px-5 rounded-full opacity-0"
      >
        Nomor rekening disalin!
      </div>
    </section>
  );
}
