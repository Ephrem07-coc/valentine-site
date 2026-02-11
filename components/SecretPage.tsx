"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CORRECT_CODE = "290107"; // 29 janvier 2007

export default function SecretPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    const startDate = new Date("2025-11-17");
    const today = new Date();
    const diff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    setDaysTogether(diff);
  }, []);

  const handleInput = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError(false);

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const checkCode = () => {
    const enteredCode = code.join("");
    if (enteredCode === CORRECT_CODE) {
      setIsUnlocked(true);
    } else {
      setError(true);
      setCode(["", "", "", "", "", ""]);
      document.getElementById("code-0")?.focus();
    }
  };

  useEffect(() => {
    if (code.every((c) => c !== "")) {
      checkCode();
    }
  }, [code]);

  return (
    <section className="h-screen overflow-hidden bg-gradient-to-b from-romantic-950 via-romantic-900 to-black relative">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="lock"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="h-full flex flex-col items-center justify-center px-6"
          >
            <motion.div
              animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="text-6xl mb-8"
            >
              {error ? "❌" : "🔒"}
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-4 text-center">
              Page Secrète
            </h2>
            
            <p className="text-romantic-300 text-center mb-4 max-w-md">
              Entre le code secret pour découvrir mon message final...
            </p>

            {/* INDICE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-full px-6 py-3 mb-8"
            >
              <p className="text-gold text-sm text-center">
                💡 Indice : Le jour le plus spécial de toute l'année pour toi
                Réfléchis bien grosse tête  😉
                <br />
                <span className="text-romantic-400 text-xs">(JJMMYY)</span>
              </p>
            </motion.div>

            {/* 6 Inputs pour le code */}
            <div className="flex gap-3 mb-8">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="password"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInput(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-12 h-16 sm:w-14 sm:h-20 text-2xl sm:text-3xl text-center bg-romantic-800/50 border-2 rounded-2xl text-white font-bold focus:outline-none focus:border-gold transition-all ${
                    error ? "border-red-500 animate-pulse" : "border-romantic-600"
                  }`}
                />
              ))}
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mb-4 text-center"
              >
                Code incorrect. Réessaie mon amour...
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
          >
            {/* SECTION 1 : Message final */}
            <div className="h-screen snap-start flex flex-col items-center justify-center px-6 relative">
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: "100vh", opacity: 1, rotate: 360 }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                    className="absolute text-2xl"
                    style={{ left: `${Math.random() * 100}%` }}
                  >
                    {["💖", "✨", "🌹", "💕", "🎉"][Math.floor(Math.random() * 5)]}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center z-10"
              >
                <span className="text-6xl mb-6 block">🔓</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gradient mb-6 glow-text">
                  Trouvé <br />gros bébé ! 🎉
                </h2>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="glass rounded-3xl p-8 max-w-2xl mx-auto glow-box"
                >
                  <p className="text-xl sm:text-2xl text-romantic-100 leading-relaxed mb-6">
                    Mon gros bébé,
                    <br /><br />
                    Si tu lis ces lignes, c'est que tu as trouvé le code. 
                    Mais le vrai code, c'est celui que ton cœur a déchiffré depuis le premier jour.
                    Je veux réîtérer à quel point je t'aime, tu es tellement important pour moi, me laisse jamais tomber stp
                    <br /><br />
                    <span className="text-gold font-display text-3xl">
                      Je t'aime. Pour toujours.
                    </span>
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-romantic-300">
                    <span>🎉</span>
                    <span>Bien joué gros bébé</span>
                    <span>🎉</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 text-romantic-400 text-sm animate-bounce"
              >
                ↓ Scroll pour voir la suite ↓
              </motion.div>
            </div>

            {/* SECTION 2 : Compteur */}
            <div className="h-screen snap-start flex flex-col items-center justify-center px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <span className="text-romantic-400 text-sm tracking-widest uppercase mb-4 block">
                  Depuis notre rencontre
                </span>
                
                <div className="glass rounded-[40px] p-12 glow-box mb-8">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className="text-7xl sm:text-8xl md:text-9xl font-display font-bold text-gradient block"
                  >
                    {daysTogether}
                  </motion.span>
                  <span className="text-romantic-300 text-xl uppercase tracking-widest">
                    Jours d'amour
                  </span>
                </div>

                <p className="text-romantic-200 text-lg max-w-md mx-auto">
                  Chaque jour à tes côtés est un cadeau que je chéris plus que tout.
                </p>
              </motion.div>
            </div>

            {/* SECTION 3 : Promesse finale */}
            <div className="h-screen snap-start flex flex-col items-center justify-center px-6 relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                className="text-center max-w-3xl"
              >
                <span className="text-6xl mb-8 block">💍</span>
                
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">
                  Ma promesse
                </h3>

                <div className="space-y-6 text-romantic-100 text-lg sm:text-xl leading-relaxed">
                  <p>Je promets de t'aimer quand tout va bien,</p>
                  <p>Et encore plus quand tout va mal.</p>
                  <p>De te soutenir dans tes rêves,</p>
                  <p>Et d'être ton refuge dans les tempêtes.</p>
                  <p>De rire avec toi,</p>
                  <p>Et de pleurer avec toi si besoin.</p>
                  <p>Je t'aime Percy, je t'aime </p>
                  <p className="text-gold font-display text-2xl mt-8">
                    Aujourd'hui, demain, et pour l'éternité.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 }}
                  className="mt-12"
                >
                  <span className="text-romantic-400 text-sm">
                    Félicitations, tu as atteint la fin de ce voyage.
                    <br />
                    Mais notre histoire ne fait que commencer... 💕
                    J'espère juste que tu as aimé cette petite aventure secrète que j'ai créée pour toi.
                  </span>
                </motion.div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="absolute bottom-10 glass rounded-full px-6 py-3 text-romantic-300 hover:text-white hover:bg-white/10 transition-all"
              >
                ↑ Revoir le message
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}