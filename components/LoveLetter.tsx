"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function LoveLetter() {
  const daysTogether = 89;

  const fullText = `Percy,

Il y a exactement ${daysTogether} jours que ma vie a changé.

Je pensais avancer seul.
Je pensais que certaines choses étaient faites pour rester simples.

Puis tu es arrivée.

Et sans bruit,
sans promesse,
sans mise en scène…

Tu as doucement pris une place que je ne pensais plus offrir à quelqu’un.

Depuis, mes journées ont une lumière différente.
Ton sourire traverse mes pensées sans prévenir.
Ta voix calme des tempêtes que je ne montre à personne.

Je ne savais pas qu’on pouvait aimer avec autant de sincérité.
Pas avec urgence.
Pas avec pression.
Mais avec profondeur.

Je sais que ton cœur ne bat peut-être pas au même rythme que le mien.
Je sais que je ressens parfois plus, plus fort, plus vite.

Mais écoute-moi juste une seconde.

Je ne te demande pas de m’aimer comme moi je t’aime.
Je ne te demande pas de promettre.
Je ne te demande pas de comprendre tout de suite.

Je te demande simplement de me laisser t’aimer.
À ma manière.
Sans bruit.
Sans attente.
Sans condition.

Parce que ce que je ressens pour toi est vrai.
C’est calme.
C’est sincère.
C’est profond.

Et peu importe où la vie nous mènera,
ce que tu as apporté en moi restera.

Je t’aime.
Aujourd’hui.
Demain.
Et encore après.

Ephrem`;

  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const hasCompletedRef = useRef(false);

  const handleTouch = () => {
    if (!isComplete) {
      setDisplayedText(fullText);
      indexRef.current = fullText.length;
      setIsComplete(true);
      hasCompletedRef.current = true;
    }
  };

  useEffect(() => {
    // Si déjà terminé une fois, on recharge directement le texte complet
    if (hasCompletedRef.current) {
      setDisplayedText(fullText);
      setIsComplete(true);
      return;
    }

    if (isComplete) return;

    const timer = setInterval(() => {
      if (indexRef.current < fullText.length) {
        indexRef.current += 1;
        setDisplayedText(fullText.slice(0, indexRef.current));
      } else {
        setIsComplete(true);
        hasCompletedRef.current = true;
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, [fullText, isComplete]);

  return (
    <section className="relative w-full min-h-screen py-20 px-4 flex items-center justify-center bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-romantic-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl relative z-10 cursor-pointer"
        onClick={handleTouch}
        onTouchStart={handleTouch}
      >
        <div className="relative glass rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-white/10">
          <div className="flex justify-between mb-10 pb-6 border-b border-white/10">
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-sans">
              💌 Une lettre pour toi
            </span>
            <span className="text-romantic-300/40 text-xs font-mono italic">
              {isComplete ? "Message gravé" : "Touche pour tout lire..."}
            </span>
          </div>

          <div className="romantic-letter-container">
            <p className="letter-text whitespace-pre-wrap">
              {displayedText}
              {!isComplete && (
                <span className="writing-cursor-georgia">&nbsp;</span>
              )}
            </p>

            {isComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="mt-16 pt-8 border-t border-white/5 text-right"
              >
                <p className="text-gold font-signature text-3xl italic">
                  Ton Ephrem
                </p>
                <p className="text-romantic-400/40 text-xs mt-2 tracking-widest uppercase">
                  Pour l'éternité ❤️
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
