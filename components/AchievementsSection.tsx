"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const achievements = [
  {
    title: "KILL TO CODE (Coding Contest)",
    venue: "CIT, CBE",
    result: "First Place, Melinia, 2025",
    detail: "Won first place by delivering fast and accurate coding challenge solutions.",
    color: "#E52222",
    burst: "1ST",
  },
  {
    title: "COLIGO AI DESIGN CHALLENGE",
    venue: "CIT, CBE",
    result: "Finalist",
    detail: "Implemented a real-time pedestrian crosswalk detection system.",
    color: "#1A5FB4",
    burst: "FINALIST",
  },
  {
    title: "ANOKHA – BUILD2BREAK",
    venue: "Amrita, CBE",
    result: "Special Mentions",
    detail: "Designed and deployed Focus Quest, a gamified Pomodoro-based EdTech platform.",
    color: "#FF6B00",
    burst: "SPECIAL",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative min-h-screen py-24 overflow-hidden flex items-center" style={{ background: "#E52222" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.18) 1.4px, transparent 1.4px)", backgroundSize: "15px 15px" }} />
      <div className="absolute inset-0 pointer-events-none noise-overlay" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(110deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 8px, transparent 8px, transparent 18px)",
          mixBlendMode: "screen",
        }}
        animate={{ opacity: [0.25, 0.45, 0.3], backgroundPositionX: ["0%", "20%", "0%"] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10 w-full">
        <Reveal direction="up" delay={0}>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <div style={{ background: "#0D0D0D", border: "4px solid #FFD700", boxShadow: "6px 6px 0 #0D0D0D", padding: "8px 24px" }}>
              <h2 className="comic-title" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#FFD700", lineHeight: 1 }}>
                🏆 ACHIEVEMENTS
              </h2>
            </div>
            <motion.div
              className="action-word"
              style={{ fontSize: "2.4rem", color: "#FFD700" }}
              animate={{ x: [0, -2, 2, -1, 0], y: [0, 1, -1, 0] }}
              transition={{ duration: 0.32, repeat: Infinity, repeatDelay: 1.3 }}
            >
              BOOM!
            </motion.div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={0.1 + i * 0.1}>
              <motion.article
                whileHover={{ y: -10, scale: 1.02 }}
                className="comic-panel relative"
                style={{ background: "#FFFDE7", padding: "22px", overflow: "hidden", height: "100%" }}
              >
                <motion.div
                  className="absolute burst"
                  style={{
                    width: 92,
                    height: 92,
                    right: -18,
                    top: -18,
                    background: item.color,
                    border: "3px solid #0D0D0D",
                    fontFamily: "Bangers, cursive",
                    fontSize: "0.9rem",
                    color: "#FFFDE7",
                    textShadow: "1px 1px 0 #0D0D0D",
                  }}
                  animate={{ rotate: [0, 10, -6, 0], scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {item.burst}
                </motion.div>

                <h3 className="comic-title" style={{ fontSize: "1.3rem", color: "#0D0D0D", marginBottom: "10px", lineHeight: 1.15 }}>
                  {item.title}
                </h3>

                <p style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", marginBottom: "8px" }}>
                  {item.venue}
                </p>

                <p style={{ fontFamily: "Bangers, cursive", fontSize: "1.12rem", letterSpacing: "0.05em", color: item.color, textShadow: "1px 1px 0 #0D0D0D", marginBottom: "10px" }}>
                  {item.result}
                </p>

                <p style={{ fontFamily: "Comic Neue, cursive", fontWeight: 700, fontSize: "0.95rem", color: "#111", lineHeight: 1.6 }}>
                  {item.detail}
                </p>

                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    left: -20,
                    bottom: -24,
                    width: 120,
                    height: 54,
                    background: `${item.color}80`,
                    borderRadius: "60% 40% 62% 38% / 48% 42% 58% 52%",
                    filter: "blur(0.2px)",
                  }}
                  animate={{ scaleX: [1, 1.2, 1], scaleY: [1, 1.05, 1], opacity: [0.45, 0.7, 0.45] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
