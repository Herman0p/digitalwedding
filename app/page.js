'use client';

import { useState, useEffect } from 'react';
import Cover from "./components/Cover";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Story from "./components/Story";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import RsvpWishes from "./components/RsvpWishes";
import Gift from "./components/Gift";
import Footer from "./components/Footer";

export default function Home() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);

  const handleOpenCover = () => {
    setIsCoverOpen(true);
    // Optional: play music or trigger other events
  };

  return (
    <main className="bg-[#f4f4f0]">
      <Cover onOpen={handleOpenCover} />
      <div style={{ visibility: isCoverOpen ? 'visible' : 'hidden' }}>
        <Hero />
        <Quote />
        <Story />
        <EventDetails />
        <Gallery />
        <RsvpWishes />
        <Gift />
        <Footer />
      </div>
    </main>
  );
}
