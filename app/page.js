'use client';

import { useState, useRef } from 'react';
import Cover from "./components/Cover";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Story from "./components/Story";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import RsvpWishes from "./components/RsvpWishes";
import Gift from "./components/Gift";
import Footer from "./components/Footer";
import MusicPlayer from './components/MusicPlayer';

export default function Home() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpenCover = () => {
    setIsCoverOpen(true);
    if (!audioRef.current) {
        audioRef.current = new Audio('/music.mp3');
        audioRef.current.loop = true;
    }
    audioRef.current.play();
    setIsPlaying(true);
    document.body.style.overflow = 'auto';
  };

  const togglePlay = () => {
      if (isPlaying) {
          audioRef.current.pause();
      } else {
          audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
  };

  return (
    <main className="bg-[#f4f4f0]">
      <Cover onOpen={handleOpenCover} isCoverOpen={isCoverOpen} />
      
      <div style={{ visibility: isCoverOpen ? 'visible' : 'hidden', opacity: isCoverOpen ? 1 : 0, transition: 'visibility 0s, opacity 1.5s ease-in-out' }}>
        <Hero />
        <Quote />
        <Story />
        <EventDetails />
        <Gallery />
        <RsvpWishes />
        <Gift />
        <Footer />
      </div>

      {isCoverOpen && <MusicPlayer isPlaying={isPlaying} togglePlay={togglePlay} />}
    </main>
  );
}
