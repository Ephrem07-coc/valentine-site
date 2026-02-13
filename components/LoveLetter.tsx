"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoveLetter() {
  const daysTogether = 89;

  const fullText = `Percy,

Il y a exactement ${daysTogether} jours que ma vie a changé.

Je pensais avancer seul et puis tu es arrivée.
Depuis, chaque journée a une couleur différente.
Ton sourire traverse mes pensées.
Ta voix apaise mes tempêtes.

Je ne savais pas qu'on pouvait aimer avec autant de sincérité.
Avec toi, rien n'est forcé.
 Rien n'est superficiel.
  Tout est vrai.

Je sais que tu ne ressens peut-être pas les choses comme moi.
Je sais que mon cœur va parfois plus vite que le tien.

Mais laisse-moi au moins te dire ceci :

Ton entrée dans ma vie n'était pas un hasard.
Tu es arrivée au moment où tout semblait s'effondrer.
Et sans le savoir, tu m'as redonné une lumière.

Je ne te demande pas de m'aimer comme moi je t'aime.
Je te demande simplement de me laisser t'aimer.
Même doucement.
 Même silencieusement.
  Même imparfaitement.

Parce que mon amour pour toi est sincère.
 Il est calme. 
 Il est profond.
Et il ne cherche rien d'autre que ton bonheur.

Je t'aime.
Aujourd'hui.
 Demain.
  Et encore après. ❤️

Ephrem`;

  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);
      }, 40);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [index, fullText]);

  return (
    <section 
      className="relative w-full min-h-screen py-20 px-4 flex items-center justify-center bg-black"
      style={{ fontFamily: 'Georgia, serif' }}
    >
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl relative z-10"
      >
        <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-white/10">
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
            <span className="text-yellow-600/60 text-xs tracking-widest uppercase">
              💌 Une lettre pour toi
            </span>
            <span className="text-rose-400/50 text-sm">
              {isComplete ? "Lettre terminée" : "Écriture..."}
            </span>
          </div>

          {/* Zone de texte avec GEORGIA forcé */}
          <div>
            <p 
              className="whitespace-pre-wrap text-lg leading-relaxed text-white/90"
              style={{ fontFamily: 'Georgia, serif !important' }}
            >
              {displayedText}
              {!isComplete && <span className="animate-pulse">&nbsp;</span>}
            </p>
            
            {isComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="mt-12 pt-8 border-t border-white/10 text-right"
              >
                <p 
                  className="text-yellow-600 text-2xl"
                  style={{ fontFamily: 'Georgia, serif !important' }}
                >
                  Ton Ephrem
                </p>
                <p className="text-rose-400/50 text-xs mt-2">
                  Pour toujours ❤️
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}