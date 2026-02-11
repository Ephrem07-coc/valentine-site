"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = 0;
      audioRef.current.play();
      fadeIn();
      setPlaying(true);
    }
  };

  const fadeIn = () => {
    if (!audioRef.current) return;
    let volume = 0;
    const interval = setInterval(() => {
      if (!audioRef.current) return;
      if (volume < 0.5) {
        volume += 0.02;
        audioRef.current.volume = volume;
      } else {
        clearInterval(interval);
      }
    }, 200);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="public/music/love.mp3"
        loop
        preload="auto"
      />

      <motion.button
        onClick={toggleAudio}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-6 right-6 z-50 glass px-4 py-3 rounded-full text-sm text-gold shadow-lg backdrop-blur-md"
      >
        {playing ? "🔊 Pause" : "🎵 Musique"}
      </motion.button>
    </>
  );
}
