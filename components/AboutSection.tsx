"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const timeline = [
  { year: "2023", event: "Enrolled in M.Sc Software Systems @ CIT", icon: "🎓", color: "#FFD700" },
  { year: "2024", event: "Built first full-stack project — Bus Scheduler", icon: "🚌", color: "#E52222" },
  { year: "2025", event: "Developed AI-powered safety systems and productivity applications", icon: "🤖", color: "#1A5FB4" },
  { year: "2026", event: "Actively seeking internship and collaborative project opportunities", icon: "🚀", color: "#FF6B00" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 overflow-hidden flex items-center"
      style={{ background: "#1A5FB4" }}
    >
      {/* Halftone dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        <Reveal direction="up" delay={0}>
          <div className="flex items-center gap-4 mb-12">
            <div
              style={{
                background: "#FFD700",
                border: "4px solid #0D0D0D",
                boxShadow: "5px 5px 0 #0D0D0D",
                padding: "8px 24px",
              }}
            >
              <h2
                className="comic-title"
                style={{
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                  color: "#0D0D0D",
                  lineHeight: 1,
                }}
              >
                ORIGIN STORY
              </h2>
            </div>
            <div
              className="action-word"
              style={{ fontSize: "2.5rem", color: "#FFD700", textShadow: "2px 2px 0 #0D0D0D, -2px -2px 0 #0D0D0D" }}
            >
              WOW!
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Story panel */}
          <div className="flex flex-col gap-6">
            <Reveal direction="left" delay={0.1}>
              <div
                className="comic-panel p-6"
                style={{ background: "#FFFDE7" }}
              >
                <span className="panel-number">PANEL 02</span>
                <div className="pt-10">
                  <p
                    style={{
                      fontFamily: "Comic Neue, cursive",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#0D0D0D",
                      lineHeight: 1.7,
                    }}
                  >
                    I am <strong>Nithik</strong>, currently pursuing an M.Sc in Software Systems (2023–2028) at the <strong>Coimbatore Institute of Technology</strong>, Coimbatore. My work focuses on building practical, user-centered software solutions with strong technical foundations.
                  </p>
                  <br />
                  <p
                    style={{
                      fontFamily: "Comic Neue, cursive",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#0D0D0D",
                      lineHeight: 1.7,
                    }}
                  >
                    I am building depth in <strong>Full Stack Development</strong> and <strong>UI/UX Design</strong>, with hands-on experience in web applications, problem-solving workflows, and product-oriented implementation.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal direction="left" delay={0.25}>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Projects", value: "4+", color: "#E52222" },
                  { label: "Skills", value: "8+", color: "#FFD700" },
                  { label: "Services", value: "4", color: "#FF6B00" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    className="comic-panel text-center py-4"
                    style={{ background: stat.color }}
                  >
                    <div
                      style={{
                        fontFamily: "Bangers, cursive",
                        fontSize: "2.5rem",
                        color: "#0D0D0D",
                        lineHeight: 1,
                        textShadow: "2px 2px 0 rgba(255,255,255,0.4)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        color: "#0D0D0D",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-0">
            <Reveal direction="right" delay={0.1}>
              <h3
                className="comic-title mb-6"
                style={{ fontSize: "1.8rem", color: "#FFD700", textShadow: "2px 2px 0 #0D0D0D" }}
              >
                📅 HERO TIMELINE
              </h3>
            </Reveal>
            {timeline.map((item, i) => (
              <Reveal key={i} direction="right" delay={0.15 + i * 0.12}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex gap-4 items-start mb-4"
                >
                  <div
                    style={{
                      minWidth: 56,
                      background: item.color,
                      border: "3px solid #0D0D0D",
                      boxShadow: "3px 3px 0 #0D0D0D",
                      textAlign: "center",
                      padding: "4px 0",
                      fontFamily: "Bangers, cursive",
                      fontSize: "1rem",
                      color: "#0D0D0D",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.year}
                  </div>
                  <div
                    style={{
                      background: "#FFFDE7",
                      border: "3px solid #0D0D0D",
                      boxShadow: "3px 3px 0 #0D0D0D",
                      padding: "8px 14px",
                      flex: 1,
                      fontFamily: "Comic Neue, cursive",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#0D0D0D",
                    }}
                  >
                    {item.icon} {item.event}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
