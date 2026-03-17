'use client';

import { useState, useEffect } from 'react';
import Cover from './components/Cover';
import MusicPlayer from './components/MusicPlayer';
import Opening from './components/Opening';
import Couple from './components/Couple';
import EventDetails from './components/EventDetails';
import Countdown from './components/Countdown';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Gift from './components/Gift';
import RsvpWishes from './components/RsvpWishes';
import Footer from './components/Footer';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpened]);

  const handleOpen = () => {
    setIsOpened(true);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="bg-background text-foreground">
      {!isOpened && <Cover onOpen={handleOpen} />}
      {isOpened && (
        <>
          <MusicPlayer isPlaying={isPlaying} onPlayPause={handlePlayPause} />
          <Opening />
          <Couple />
          <EventDetails />
          <Countdown />
          <Story />
          <Gallery />
          <Gift />
          <RsvpWishes />
          <Footer />
        </>
      )}
    </main>
  );
}
