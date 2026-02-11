"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    id: 1,
    icon: "✨",
    title: "Ton authenticité",
    desc: "Depuis le tout début qu'on s'est connus, on a basé notre relation sur la sincérité. J'aimerais qu'il en soit toujours ainsi.",
  },
  {
    id: 2,
    icon: "🦁",
    title: "Ta force silencieuse",
    desc: "Dans les moments difficiles, tu tiens bon. Tu m'inspires à être meilleur chaque jour.",
  },
  {
    id: 3,
    icon: "❤️",
    title: "Ta façon d'aimer",
    desc: "Sans condition, sans jugement. Un amour pour lequel je continuerai toujours à me battre.",
  },
  {
    id: 4,
    icon: "✨",
    title: "Tes rêves",
    desc: "Tu as des ambitions immenses. Je veux être là le jour où chacun d'eux deviendra réalité.",
  },
  {
    id: 5,
    icon: "🎵",
    title: "Ton rire",
    desc: "Contagieux, sincère, unique. C'est ma musique préférée.",
  },
  {
    id: 6,
    icon: "🕊️",
    title: "Ta douceur",
    desc: "Dans tes gestes, tes mots, ton regard. Tu apportes la paix dans ma vie.",
  },
  {
    id: 7,
    icon: "🔥",
    title: "Ta détermination",
    desc: "Quand tu veux quelque chose, rien ne peut t'arrêter. Cette force m'impressionne.",
  },
  {
    id: 8,
    icon: "🌙",
    title: "Ta patience",
    desc: "Même quand je suis compliqué, tu restes là. Et ça, ça vaut tout l'or du monde.",
  },
  {
    id: 9,
    icon: "🌟",
    title: "Ta lumière",
    desc: "Tu illumines mes journées sans même t'en rendre compte.",
  },
  {
    id: 10,
    icon: "♾️",
    title: "Toi, simplement",
    desc: "Au-delà de tout… c'est toi. Et ça suffit largement.",
  },
];

export default function WhyYou() {
  return (
    <section className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      {reasons.map((reason, index) => (
        <div
          key={reason.id}
          className="relative h-screen snap-start flex flex-col items-center justify-center px-6"
        >
          {/* Background flou dynamique avec l'icône */}
          <div className="absolute inset-0 -z-10 overflow-hidden flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.15, scale: 1.5 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: false }}
              className="text-[50vh] blur-3xl"
            >
              {reason.icon}
            </motion.div>
          </div>

          {/* Carte principale avec l'icône */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full max-w-xl"
          >
            <div className="rounded-[40px] overflow-hidden glass glow-box shadow-2xl p-12 flex flex-col items-center justify-center min-h-[50vh]">
              {/* Icône géante */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                viewport={{ once: false }}
                className="text-8xl mb-8"
              >
                {reason.icon}
              </motion.div>
              
              {/* Numéro */}
              <span className="text-gold/50 text-sm font-mono tracking-widest mb-4">
                RAISON {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          {/* Description sous la carte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: false }}
            className="mt-10 text-center max-w-lg"
          >
            <h3 className="text-4xl font-display font-bold text-gradient mb-4 glow-text">
              {reason.title}
            </h3>
            <p className="text-romantic-200 leading-relaxed text-lg">
              {reason.desc}
            </p>
          </motion.div>

          {/* Indicateur discret */}
          <div className="absolute bottom-6 text-romantic-400 text-sm tracking-widest">
            {String(index + 1).padStart(2, "0")} / {String(reasons.length).padStart(2, "0")}
          </div>
        </div>
      ))}
    </section>
  );
}