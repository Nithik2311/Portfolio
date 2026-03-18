"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
  category: string;
}

const skills: Skill[] = [
  { name: "React", level: 90, icon: "⚛️", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", level: 85, icon: "🔲", color: "#fff", category: "Frontend" },
  { name: "Angular", level: 75, icon: "🅰️", color: "#DD0031", category: "Frontend" },
  { name: "JavaScript", level: 88, icon: "🟡", color: "#F7DF1E", category: "Language" },
  { name: "Python", level: 80, icon: "🐍", color: "#3776AB", category: "Language" },
  { name: "Node.js", level: 82, icon: "🟢", color: "#339933", category: "Backend" },
  { name: "MySQL", level: 78, icon: "🐬", color: "#4479A1", category: "Database" },
  { name: "Figma", level: 87, icon: "🎨", color: "#F24E1E", category: "Design" },
];

const categories = ["All", "Frontend", "Backend", "Language", "Database", "Design"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 overflow-hidden halftone-bg flex items-center"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <div
              style={{
                background: "#E52222",
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
                ⚡ SUPERPOWERS
              </h2>
            </div>
            <div
              className="action-word"
              style={{ fontSize: "2.5rem", color: "#E52222", textShadow: "2px 2px 0 #0D0D0D" }}
            >
              ZAP!
            </div>
          </div>
        </Reveal>

        {/* Category filter */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                id={`skills-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.08, rotate: -2 }}
                whileTap={{ scale: 0.92 }}
                style={{
                  fontFamily: "Bangers, cursive",
                  fontSize: "1rem",
                  letterSpacing: "0.08em",
                  padding: "6px 18px",
                  border: "3px solid #0D0D0D",
                  boxShadow: activeCategory === cat ? "4px 4px 0 #0D0D0D" : "2px 2px 0 #0D0D0D",
                  background: activeCategory === cat ? "#0D0D0D" : "#FFD700",
                  color: activeCategory === cat ? "#FFD700" : "#0D0D0D",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((skill, i) => (
            <Reveal key={skill.name} direction="scale" delay={i * 0.08}>
              <motion.div
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z]/g, "")}`}
                className="comic-panel comic-panel pop-hover"
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                whileHover={{ rotate: -2 }}
                style={{
                  background: "#FFFDE7",
                  padding: "20px",
                  cursor: "default",
                  height: "100%",
                }}
              >
                {/* Skill icon + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: skill.color,
                      border: "3px solid #0D0D0D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.6rem",
                      flexShrink: 0,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "Bangers, cursive",
                        fontSize: "1.3rem",
                        color: "#0D0D0D",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {skill.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "#666",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {skill.category}
                    </div>
                  </div>
                </div>

                {/* Power bar */}
                <div
                  style={{
                    background: "#ddd",
                    border: "2px solid #0D0D0D",
                    height: 20,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      borderRight: "2px solid #0D0D0D",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.1) 8px, rgba(0,0,0,0.1) 9px)",
                    }}
                  />
                </div>

                {/* Level label */}
                <div className="flex justify-between mt-1">
                  <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#0D0D0D", letterSpacing: "0.06em" }}>
                    POWER LEVEL
                  </span>
                  <motion.span
                    animate={hoveredSkill === skill.name ? { scale: 1.3, color: "#E52222" } : { scale: 1, color: "#0D0D0D" }}
                    style={{ fontFamily: "Bangers, cursive", fontSize: "1rem", letterSpacing: "0.04em" }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom decoration */}
        <Reveal direction="up" delay={0.5}>
          <div className="mt-12 flex justify-center">
            <div
              className="thought-bubble px-8 py-4"
              style={{ maxWidth: 420, textAlign: "center" }}
            >
              <p style={{ fontFamily: "Comic Neue, cursive", fontWeight: 700, fontSize: "1rem", color: "#0D0D0D" }}>
                💭 <em>&ldquo;Every skill is a new superpower to unlock!&rdquo;</em>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
