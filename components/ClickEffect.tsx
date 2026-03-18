"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ComicEffect {
  id: number;
  x: number;
  y: number;
  word: string;
  color: string;
}

const EFFECT_WORDS = ["BAM!", "POW!", "ZAP!", "WOW!", "BOOM!", "CRASH!", "KA-POW!"];
const COLORS = ["#FFD700", "#E52222", "#1A5FB4", "#FF6B00", "#6A0DAD"];

export default function ClickEffect() {
  const [effects, setEffects] = useState<ComicEffect[]>([]);
  const counterRef = useRef(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const word = EFFECT_WORDS[Math.floor(Math.random() * EFFECT_WORDS.length)];
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const id = ++counterRef.current;
      setEffects((prev) => [...prev, { id, x: e.clientX, y: e.clientY, word, color }]);
      setTimeout(() => {
        setEffects((prev) => prev.filter((ef) => ef.id !== id));
      }, 900);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      <AnimatePresence>
        {effects.map((ef) => (
          <motion.div
            key={ef.id}
            initial={{ scale: 0, opacity: 1, rotate: -15 }}
            animate={{ scale: 1.4, opacity: 0, rotate: 10, y: -60 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: ef.x - 40,
              top: ef.y - 40,
              fontFamily: "Bangers, cursive",
              fontSize: "2.2rem",
              color: ef.color,
              textShadow: `2px 2px 0 #0D0D0D, -1px -1px 0 #0D0D0D`,
              letterSpacing: "0.05em",
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 9999,
            }}
          >
            {ef.word}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
