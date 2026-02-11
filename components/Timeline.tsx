"use client";

import { motion } from "framer-motion";

const moments = [
  {
    id: 1,
    date: "17 Novembre 2025",
    title: "Le début de tout",
    desc: "Ce jour c'était la première fois que je tombais sur une de tes vidéos sur TikTok. Certes tu m'as plu au premier regard mais j'essayais de ne pas trop m'attacher.",
    icon: "✨",
  },
  {
    id: 2,
    date: "29 Décembre 2025",
    title: "Notre première conversation",
    desc: "Ce premier message que je t'ai envoyé. J'étais nerveux mais ton accueil chaleureux m'a tout de suite mis à l'aise.",
    icon: "💬",
  },
  {
    id: 3,
    date: "31 Décembre 2025",
    title: "Notre première rencontre",
    desc: "C'était la première fois que je me tenais devant toi. J'étais tellement nerveux mais ton sourire m'a tout de suite rassuré.",
    icon: "🤝",
  },
  {
    id: 4,
    date: "01 Janvier 2026",
    title: "Nouvelle année, même amour",
    desc: "Même à distance, tu as réussi à me faire sentir spécial. Ce simple Heureuse année Ephrem continue d'embellir mon année jusqu'à présent.",
    icon: "🎆",
  },
  {
    id: 5,
    date: "16 Janvier 2026",
    title: "Notre premier appel ensemble",
    desc: "Le jour là je n'imaginais pas que tu me ferais tant de bien. Ce simple appel m'a fait sentir comme si tu étais là, à mes côtés.",
    icon: "📞",
  },
  {
    id: 6,
    date: "29 Janvier 2026",
    title: "Ton anniversaire",
    desc: "J'avais prévu tellement de choses pour toi. Mais à cause des cours je n'ai pu te faire ce que je voulais. J'espère juste que tu ne m'en veux pas.",
    icon: "🎂",
  },
  {
    id: 7,
    date: "Aujourd'hui",
    title: "Pour toujours",
    desc: "Chaque jour à tes côtés est un cadeau. Je t'aime plus qu'hier, moins que demain.",
    icon: "♾️",
  },
];

export default function Timeline() {
  return (
    <section className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      {moments.map((moment, index) => (
        <div
          key={moment.id}
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
              {moment.icon}
            </motion.div>
          </div>

          {/* Carte principale avec date et icône */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full max-w-xl"
          >
            <div className="rounded-[40px] overflow-hidden glass glow-box shadow-2xl p-12 flex flex-col items-center justify-center min-h-[50vh]">
              {/* Date en haut */}
              <span className="text-gold/70 text-sm font-mono tracking-widest mb-6 uppercase">
                {moment.date}
              </span>
              
              {/* Icône géante */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                viewport={{ once: false }}
                className="text-8xl mb-8"
              >
                {moment.icon}
              </motion.div>
              
              {/* Numéro */}
              <span className="text-romantic-400/50 text-sm font-mono tracking-widest">
                CHAPITRE {String(index + 1).padStart(2, "0")}
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
              {moment.title}
            </h3>
            <p className="text-romantic-200 leading-relaxed text-lg">
              {moment.desc}
            </p>
          </motion.div>

          {/* Indicateur discret */}
          <div className="absolute bottom-6 text-romantic-400 text-sm tracking-widest">
            {String(index + 1).padStart(2, "0")} / {String(moments.length).padStart(2, "0")}
          </div>
        </div>
      ))}
    </section>
  );
}