"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [hearts, setHearts] = useState<
    { id: number; x: number; delay: number }[]
  >([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-romantic-900 via-romantic-800 to-romantic-900 px-4">
      
      {/* Cœurs flottants */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-romantic-400/30 text-3xl pointer-events-none"
          style={{ left: `${heart.x}%`, top: "100%" }}
          animate={{
            y: [0, -1200],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          💕
        </motion.div>
      ))}

      {/* Contenu centré */}
      <div className="max-w-4xl mx-auto text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-gold text-sm tracking-widest uppercase">
            💝 Saint-Valentin 2026 💝
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight"
        >
          <span className="block text-white mb-2">Pour la plus</span>
          <span className="block text-gradient glow-text">belle personne</span>
          <span className="block text-romantic-200 mt-2">de ma vie</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-romantic-200 max-w-2xl mx-auto mb-10"
        >
          Ce site est une déclaration d'amour numérique, créée rien que pour toi Percy ❤️.
          <br /><br />
          <span className="text-gold">👆 Explore et découvre chaque surprise</span>
        </motion.p>

        {/* Scroll Indicator animé */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex justify-center mt-6"
        >
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
