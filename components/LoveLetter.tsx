"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LoveLetter() {
  const containerRef = useRef<HTMLDivElement>(null);

  const daysTogether = 86;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section
      id="letter"
      ref={containerRef}
      className="relative w-full min-h-screen py-20 sm:py-28 px-4 sm:px-6 flex items-center justify-center bg-gradient-to-b from-black to-romantic-900 overflow-hidden"
    >
      <motion.div
        style={{ opacity, y, scale }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className="glass rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">

          {/* Glow décoratif */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-romantic-600/10 blur-3xl rounded-full" />

          <div className="relative z-10">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="text-5xl sm:text-6xl mb-4 block">💌</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-3">
                Ma Lettre d'Amour
              </h2>
              <p className="text-romantic-300 text-sm tracking-widest uppercase">
                86 jours déjà
              </p>
            </motion.div>

            {/* Texte */}
            <div className="space-y-6 text-romantic-100 leading-relaxed text-base sm:text-lg md:text-xl">

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="first-letter:text-4xl first-letter:font-display first-letter:text-gold"
              >
                Percy,
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Cela fait exactement{" "}
                <span className="text-gold font-bold text-xl">
                  {daysTogether} jours
                </span>{" "}
                que ma vie a changé d’une manière que je n’aurais jamais imaginée.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                86 jours que ton sourire traverse mes pensées.  
                86 jours que ton prénom fait battre mon cœur un peu plus fort.  
                86 jours que je réalise à quel point tu es devenue importante pour moi.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                J’essayais au début de ne pas trop m’attacher…  
                mais ton authenticité m’a désarmé.  
                Ta douceur m’a rassuré.  
                Et ta façon d’aimer m’a profondément touché.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                Tu es devenue cette présence qui rend mes journées meilleures.  
                Celle qui m’inspire à grandir.  
                Celle pour qui je veux me dépasser.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
                className="text-center pt-6 text-2xl sm:text-3xl font-display text-gradient"
              >
                Je veux continuer cette histoire avec toi. ❤️
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                viewport={{ once: true }}
                className="text-right text-romantic-300 italic"
              >
                Ephrem
              </motion.p>
            </div>

            {/* Compteur premium */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.6, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center"
            >
              <div className="glass rounded-2xl px-8 py-5 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-romantic-600/20 to-gold/20 blur-xl" />
                <div className="relative z-10">
                  <motion.span
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl sm:text-6xl font-bold text-gradient block"
                  >
                    {daysTogether}
                  </motion.span>
                  <span className="text-romantic-300 text-xs sm:text-sm uppercase tracking-widest">
                    Jours d'amour
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
