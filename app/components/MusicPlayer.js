'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function MusicPlayer({ isPlaying, onPlayPause }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio ref={audioRef} src="/music.mp3" loop />
      <button
        onClick={onPlayPause}
        className="bg-gray-800 text-white rounded-full p-4 shadow-lg hover:bg-gray-700 transition-colors duration-300"
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
}