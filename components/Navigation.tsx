"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Accueil", icon: "🏠" },
   { id: "heart", label: "Cœur", icon: "❤️" },
   { id: "whyyou", label: "Pourquoi toi", icon: "💌" },
    { id: "timeline", label: "Notre histoire", icon: "📅" },
  { id: "videos", label: "Tes Vidéos", icon: "🎬" },
  { id: "letter", label: "Ma Lettre", icon: "💌" },
  { id: "secret", label: "🔒 Secret", icon: "🎁" },
 
];

interface Props {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ currentSection, onSectionChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Bouton menu */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-all ${
          isOpen ? "bg-romantic-600 rotate-90" : "bg-gradient-to-br from-romantic-600 to-gold"
        }`}
      >
        {isOpen ? "✕" : "☰"}
      </motion.button>

      {/* Menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-romantic-950/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-display font-bold text-gradient text-center mb-10">
                Menu 💝
              </h2>

              <div className="space-y-3">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(section.id)}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all ${
                      currentSection === section.id
                        ? "bg-gradient-to-r from-romantic-600 to-gold text-white shadow-lg"
                        : "glass text-romantic-200 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-3xl">{section.icon}</span>
                    <span className="font-display text-xl font-bold">{section.label}</span>
                    {currentSection === section.id && (
                      <span className="ml-auto text-gold text-sm">●</span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Indicateur section active */}
      <div className="fixed bottom-6 left-6 z-30 glass rounded-full px-4 py-2">
        <span className="text-romantic-200 text-sm">
          {sections.find(s => s.id === currentSection)?.icon} {sections.find(s => s.id === currentSection)?.label}
        </span>
      </div>
    </>
  );
}