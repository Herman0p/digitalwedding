'use client';

import { Music } from 'lucide-react';

export default function MusicPlayer({ isPlaying, togglePlay }) {
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
