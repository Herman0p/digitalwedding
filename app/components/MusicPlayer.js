'use client';

import { useState, useRef, useEffect } from 'react';
import { Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element only on client side
    audioRef.current = new Audio('/music.mp3'); // Make sure you have a music file in /public/music.mp3
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button 
        onClick={togglePlay}
        className="w-12 h-12 bg-[#1a1a1a] text-[#f4f4f0] rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110"
      >
        <Music size={20} className={isPlaying ? 'animate-pulse' : ''}/>
      </button>
    </div>
  );
}
