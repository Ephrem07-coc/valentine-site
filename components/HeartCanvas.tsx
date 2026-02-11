"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  size: number;
  color: string;
  alpha: number;
  velocity: { x: number; y: number };
}

export default function HeartCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // ❤️ Formule mathématique du cœur
  const getHeartPosition = (t: number, scale: number = 1) => {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      -(13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t));
    return {
      x: x * scale * 12,
      y: y * scale * 12,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();

      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset scale
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      initParticles(width, height);
    };

    const initParticles = (width: number, height: number) => {
      const centerX = width / 2;
      const centerY = height / 2;

      // 🔥 Scale dynamique responsive
      const baseScale = Math.min(width, height) / 600;

      const particles: Particle[] = [];

      for (let i = 0; i < 220; i++) {
        const t = (i / 220) * Math.PI * 2;
        const heartPos = getHeartPosition(t, 1 + Math.random() * 0.2);
        const randomOffset = (Math.random() - 0.5) * 20;

        particles.push({
          x: centerX + heartPos.x * baseScale + randomOffset,
          y: centerY + heartPos.y * baseScale + randomOffset,
          originalX: centerX + heartPos.x * baseScale,
          originalY: centerY + heartPos.y * baseScale,
          size: (Math.random() * 3 + 1) * baseScale,
          color: `hsl(${340 + Math.random() * 40}, 100%, ${
            55 + Math.random() * 20
          }%)`,
          alpha: Math.random() * 0.5 + 0.5,
          velocity: { x: 0, y: 0 },
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.001;
      const centerX = width / 2;
      const centerY = height / 2;

      particlesRef.current.forEach((particle, i) => {
        const pulse = Math.sin(time * 2 + i * 0.1) * 0.1 + 1;

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120 && dist !== 0) {
          const force = (120 - dist) / 120;
          particle.velocity.x -= (dx / dist) * force * 2;
          particle.velocity.y -= (dy / dist) * force * 2;
        }

        particle.velocity.x += (particle.originalX - particle.x) * 0.05;
        particle.velocity.y += (particle.originalY - particle.y) * 0.05;

        particle.velocity.x *= 0.95;
        particle.velocity.y *= 0.95;

        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        ctx.save();
        ctx.globalAlpha = particle.alpha * pulse;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * pulse,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    resize();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="heart"
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-romantic-900 to-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center pointer-events-none px-4"
      >
        <motion.h2
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gradient glow-text mb-2 sm:mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          PERCY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-romantic-200 font-light tracking-widest"
        >
          Pour toujours et à jamais
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.6 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-romantic-300 text-center px-4"
      >
        Touche le cœur pour interagir ✨
      </motion.div>
    </section>
  );
}
