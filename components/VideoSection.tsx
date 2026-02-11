"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    file: "/videos/video1.mp4",
    title: "Ce sourire magique",
    desc: "J'avoue que ton sourire est le plus beau spectacle de ma vie. Il a le pouvoir de faire fondre mon cœur à chaque fois.",
  },
  {
    id: 2,
    file: "/videos/video2.mp4",
    title: "Ses lèvres 😭❤️",
    desc: "Tes lèvres sont ce qu'il y a de plus beaux sur terre. Je pourrais les regarder pendant des heures, les embrasser à l'infini... Elles sont la douceur incarnée, le refuge de mes baisers les plus tendres.",
  },
  {
    id: 3,
    file: "/videos/video3.mp4",
    title: "Ce visage qui m'ensorcelle",
    desc: "Ton visage est le plus magnifique que j'ai jamais vu. Chaque détail de ton visage me fascine, chaque expression me fait fondre.",
  },
  {
    id: 4,
    file: "/videos/video4.mp4",
    title: "Tes cheveux soyeux",
    desc: "Tes cheveux sont si doux, comme du velours. Ils caressent mon visage et mon cœur chaque fois que je les touche.",
  },
  {
    id: 5,
    file: "/videos/video5.mp4",
    title: "Tes yeux, ces étoiles",
    desc: "J'aime ton regard, un regard perçant et convaincant. Il me fait chavirer à chaque fois, comme si je me perdais dans un océan de tendresse et de passion. Tes yeux sont les étoiles qui illuminent ma nuit, le phare qui guide mon cœur vers toi.",
  },
  {
    id: 6,
    file: "/videos/video6.mp4",
    title: "Cette tenue",
    desc: "Ici tu ressembles à la personne que je désire que tu soies dans le futur.Je te souhaite la réussite dans tous les domaines de ta vie ainsi que dans tout ce que tu entreprends. Puisse tes objectifs soient tous atteints.",
  },
  {
    id: 7,
    file: "/videos/video7.mp4",
    title: "Ma personne préférée",
    desc: "Tu es mon univers, mon étoile filante, mon rêve qui devient réalité. Tu es la personne que je chéris le plus au monde.",
  },
  {
    id: 8,
    file: "/videos/video8.mp4",
    title: "Ton teint radieux",
    desc: "Ton teint est si lumineux, comme si ton visage rayonnait d'une lumière intérieure. Chaque fois que je te regarde, je suis ébloui par ta beauté naturelle.",
  },
  {
    id: 9,
    file: "/videos/video9.mp4",
    title: "Mon roi et mon amant",
    desc: "Tu es mon roi, mon amant, mon tout. Tu es l'unique personne qui peut me faire sentir comme un prince dans le royaume de mon cœur.",
  },
  {
    id: 10,
    file: "/videos/video10.mp4",
    title: "La meilleure de toutes",
    desc: "Tu es la meilleure personne que j'ai jamais rencontrée. Tu es mon trésor, mon amour, ma lumière. Mais tellement le traditionnel te va bien.",
  },
  
];

export default function VideoSection() {
  return (
    <section className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="relative h-screen snap-start flex flex-col items-center justify-center px-6"
        >
          {/* Background flou dynamique */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <video
              src={video.file}
              className="w-full h-full object-cover scale-110 blur-3xl opacity-30"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Carte vidéo principale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full max-w-xl"
          >
            <div className="rounded-[40px] overflow-hidden glass glow-box shadow-2xl">
              <video
                src={video.file}
                className="w-full h-[70vh] object-cover"
                controls
                playsInline
              />
            </div>
          </motion.div>

          {/* Description sous la vidéo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 text-center max-w-lg"
          >
            <h3 className="text-4xl font-display font-bold text-gradient mb-4 glow-text">
              {video.title}
            </h3>
            <p className="text-romantic-200 leading-relaxed text-lg">
              {video.desc}
            </p>
          </motion.div>

          {/* Indicateur discret */}
          <div className="absolute bottom-6 text-romantic-400 text-sm tracking-widest">
            {String(index + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}
          </div>
        </div>
      ))}
    </section>
  );
}
