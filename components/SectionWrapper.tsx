"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.3 }}
      className="relative"
    >
      {children}
    </motion.section>
  );
}
