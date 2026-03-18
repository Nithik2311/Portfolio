"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const services = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    icon: "🖥️",
    description: "End-to-end web applications — from database design to polished UI. React, Next.js, Node.js, and beyond.",
    color: "#E52222",
    textColor: "#FFD700",
    badge: "FULL POWER!",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: "🎨",
    description: "Beautiful, intuitive interfaces crafted in Figma. User research, wireframes, prototypes, and design systems.",
    color: "#6A0DAD",
    textColor: "#FFD700",
    badge: "DESIGN!",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "⚡",
    description: "Blazing-fast, pixel-perfect frontends with React, Angular, and Next.js. Animations, performance, and accessibility.",
    color: "#1A5FB4",
    textColor: "#FFD700",
    badge: "SPEED!",
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "⚙️",
    description: "Robust APIs, server logic, and databases. Node.js, Python, MySQL — building the engine under the hood.",
    color: "#FF6B00",
    textColor: "#0D0D0D",
    badge: "POWER!",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen py-24 overflow-hidden flex items-center"
      style={{ background: "#FFD700" }}
    >
      {/* Dots overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <div
              style={{
                background: "#0D0D0D",
                border: "4px solid #0D0D0D",
                boxShadow: "5px 5px 0 #0D0D0D",
                padding: "8px 24px",
              }}
            >
              <h2
                className="comic-title"
                style={{
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                  color: "#FFD700",
                  lineHeight: 1,
                }}
              >
                🛡️ HERO SERVICES
              </h2>
            </div>
            <div
              className="action-word"
              style={{ fontSize: "2.5rem", color: "#0D0D0D" }}
            >
              POW!
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <Reveal key={svc.id} direction="up" delay={0.1 + i * 0.1}>
              <motion.div
                id={`service-${svc.id}`}
                whileHover={{ scale: 1.06, rotate: i % 2 === 0 ? -2 : 2 }}
                whileTap={{ scale: 0.96 }}
                className="comic-panel relative flex flex-col"
                style={{
                  background: svc.color,
                  padding: "28px 20px",
                  height: "100%",
                  cursor: "default",
                }}
              >
                {/* Badge */}
                <div
                  className="action-word absolute"
                  style={{
                    top: -16,
                    right: 12,
                    background: "#FFD700",
                    border: "2px solid #0D0D0D",
                    padding: "2px 10px",
                    fontSize: "0.8rem",
                    color: "#0D0D0D",
                    transform: "rotate(5deg)",
                    boxShadow: "2px 2px 0 #0D0D0D",
                  }}
                >
                  {svc.badge}
                </div>

                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "12px",
                    lineHeight: 1,
                  }}
                >
                  {svc.icon}
                </div>

                <h3
                  className="comic-title"
                  style={{
                    fontSize: "1.4rem",
                    color: svc.textColor,
                    marginBottom: "12px",
                    textShadow: "2px 2px 0 rgba(0,0,0,0.3)",
                    lineHeight: 1.1,
                  }}
                >
                  {svc.title}
                </h3>

                <p
                  style={{
                    fontFamily: "Comic Neue, cursive",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.92)",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {svc.description}
                </p>

                {/* Bottom stripe */}
                <div
                  style={{
                    height: 4,
                    background: "rgba(0,0,0,0.2)",
                    margin: "16px -20px -28px",
                  }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
