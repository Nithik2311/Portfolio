"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const certificates = [
  {
    title: "Problem Solving through Programming in C",
    issuer: "NPTEL",
    note: "Received a certificate for successful completion",
    color: "#FFD700",
    stamp: "CERTIFIED",
  },
  {
    title: "MVP to AI-Powered Apps: For Modern Web Builders",
    issuer: "WebApp Development Program",
    note: "Earned a certificate for WebApp development and deployment",
    color: "#00B4D8",
    stamp: "DEPLOYED",
  },
  {
    title: "Smart India Hackathon",
    issuer: "National Innovation Initiative",
    note: "Participation in problem-solving and rapid prototyping tracks",
    color: "#FF6B00",
    stamp: "HACKED",
  },
  {
    title: "Blockchain Blue Carbon",
    issuer: "Innovation Program",
    note: "Participation in sustainability + blockchain solution discussions",
    color: "#6A0DAD",
    stamp: "FUTURE",
  },
  {
    title: "IEEE Presentation",
    issuer: "IEEE Forum",
    note: "Presented AI crosswalk safety monitor project",
    color: "#E52222",
    stamp: "PRESENTED",
  },
];

const splashSpots = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  top: `${8 + ((i * 13) % 80)}%`,
  left: `${6 + ((i * 17) % 86)}%`,
  size: 16 + ((i * 9) % 26),
  delay: (i * 0.08) % 0.8,
}));

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative min-h-screen py-24 overflow-hidden flex items-center" style={{ background: "#0D0D0D" }}>
      <div className="absolute inset-0 pointer-events-none noise-overlay" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,215,0,0.15) 1.2px, transparent 1.2px)",
          backgroundSize: "16px 16px",
        }}
      />

      {splashSpots.map((spot) => (
        <motion.span
          key={spot.id}
          className="absolute pointer-events-none"
          style={{
            top: spot.top,
            left: spot.left,
            width: spot.size,
            height: spot.size,
            background: "rgba(255, 215, 0, 0.26)",
            borderRadius: "50% 40% 55% 45%",
            filter: "blur(0.4px)",
          }}
          animate={{
            scale: [0.9, 1.25, 0.95],
            rotate: [0, 12, -8, 0],
            opacity: [0.25, 0.55, 0.3],
          }}
          transition={{ duration: 2.8, repeat: Infinity, delay: spot.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10 w-full">
        <Reveal direction="up" delay={0}>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <div style={{ background: "#FFD700", border: "4px solid #0D0D0D", boxShadow: "5px 5px 0 #E52222", padding: "8px 24px" }}>
              <h2 className="comic-title relative" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#0D0D0D", lineHeight: 1 }}>
                🧾 CERTIFICATES & PARTICIPATIONS
                <motion.span
                  aria-hidden
                  className="absolute inset-0"
                  style={{ color: "#E52222", opacity: 0.6, mixBlendMode: "multiply" }}
                  animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
                  transition={{ duration: 0.35, repeat: Infinity, repeatType: "mirror" }}
                >
                  🧾 CERTIFICATES & PARTICIPATIONS
                </motion.span>
              </h2>
            </div>
            <div className="action-word" style={{ fontSize: "2.4rem", color: "#FFD700" }}>
              KRRZZT!
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certificates.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={0.08 + i * 0.08}>
              <motion.article
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                className="comic-panel relative overflow-hidden"
                style={{ background: "#FFFDE7", padding: "20px", height: "100%" }}
              >
                <motion.div
                  className="absolute"
                  style={{ top: 10, right: -12, background: item.color, border: "3px solid #0D0D0D", padding: "3px 12px", fontFamily: "Bangers, cursive", letterSpacing: "0.06em", fontSize: "0.8rem" }}
                  animate={{ rotate: [6, 9, 4, 6] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {item.stamp}
                </motion.div>

                <h3 className="comic-title" style={{ color: "#0D0D0D", fontSize: "1.35rem", marginBottom: "8px", lineHeight: 1.15 }}>
                  {item.title}
                </h3>

                <p style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", marginBottom: "10px" }}>
                  {item.issuer}
                </p>

                <p style={{ fontFamily: "Comic Neue, cursive", fontWeight: 700, fontSize: "0.95rem", color: "#111", lineHeight: 1.6 }}>
                  {item.note}
                </p>

                <motion.div
                  className="absolute pointer-events-none"
                  style={{ left: -28, bottom: -30, width: 96, height: 96, background: `${item.color}66`, borderRadius: "49% 51% 65% 35% / 46% 38% 62% 54%" }}
                  animate={{ scale: [1, 1.16, 1], rotate: [0, 8, -5, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
