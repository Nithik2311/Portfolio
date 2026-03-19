"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Reveal from "./Reveal";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tags: string[];
  icon: string;
  color: string;
  accentColor: string;
  links: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    id: "bus-scheduler",
    title: "Automated Bus Scheduler",
    subtitle: "Mission: Smart Transit",
    description:
      "A bus scheduling and route visualization platform with Gemini-powered chatbot, real-time route color coding, and a fully responsive UI. I enhanced the design using Dribbble to create an intuitive, user-friendly interface. Built to make transit smarter!",
    imageUrl: "https://i.ibb.co/Y4JGjzVF/Screenshot-726.png",
    tags: ["React.js", "Next.js", "Leaflet", "Firebase", "Gemini AI", "Dribbble"],
    icon: "🚌",
    color: "#E52222",
    accentColor: "#FFD700",
    links: [{ label: "View Mission", href: "https://github.com/Nithik2311/Automated-Bus-Scheduler" }],
  },
  {
    id: "focus-quest",
    title: "Focus Quest",
    subtitle: "Mission: Gamified Productivity",
    description:
      "A gamified Pomodoro productivity app with RPG mechanics. I enhanced the design using Figma to craft engaging visuals and smooth interactions. Level up your focus, earn XP, defeat procrastination — the ultimate productivity RPG!",
    imageUrl: "https://i.ibb.co/CpCgX0Rj/Screenshot-727.png",
    tags: ["React", "Tailwind", "Framer Motion", "Node.js", "PostgreSQL", "Figma"],
    icon: "🎮",
    color: "#6A0DAD",
    accentColor: "#FFD700",
    links: [{ label: "View Mission", href: "https://github.com/Nithik2311/focus-quest" }],
  },
  {
    id: "ai-crosswalk",
    title: "AI Crosswalk Safety Monitor",
    subtitle: "Mission: Urban Safety",
    description:
      "Real-time pedestrian detection system using Python and ESP32-CAM with Raspberry Pi for automated traffic control and smart alerts. Saving lives with AI!",
    imageUrl: "https://loremflickr.com/1400/900/crosswalk,pedestrian,street",
    tags: ["Python", "ESP32-CAM", "Raspberry Pi", "OpenCV", "IoT"],
    icon: "🚦",
    color: "#FF6B00",
    accentColor: "#0D0D0D",
    links: [{ label: "View Mission", href: "https://github.com/Nithik2311/AI-crosswalk-safety-monitor" }],
  },
  {
    id: "home-automation",
    title: "Home Automation System",
    subtitle: "Mission: Smart Living",
    description:
      "Built using 8086 Assembly and C with VGA interface. Features automated light and temperature-based AC control — old-school hardware, next-level smart!",
    imageUrl: "https://i.ibb.co/0jmDqTLy/home-auto.png",
    tags: ["8086 Assembly", "C", "VGA Interface", "Hardware", "IoT"],
    icon: "🏠",
    color: "#1A5FB4",
    accentColor: "#FFD700",
    links: [{ label: "View Mission", href: "https://github.com/Nithik2311/Home-Automation-System" }],
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [burstProject, setBurstProject] = useState<string | null>(null);
  const [imageNonce, setImageNonce] = useState<number>(0);

  const handleOpenProject = (project: Project) => {
    setBurstProject(project.id);
    setTimeout(() => {
      setBurstProject(null);
      setImageNonce(Date.now());
      setActiveProject(project);
    }, 320);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 overflow-hidden flex items-center"
      style={{ background: "#0D0D0D" }}
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,215,0,0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <div
              style={{
                background: "#FFD700",
                border: "4px solid #FFD700",
                boxShadow: "5px 5px 0 #FFD700",
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
                🦸 HERO MISSIONS
              </h2>
            </div>
            <div
              className="action-word"
              style={{ fontSize: "2.5rem", color: "#FFD700" }}
            >
              BOOM!
            </div>
          </div>
        </Reveal>

        {/* Instruction */}
        <Reveal direction="up" delay={0.1}>
          <div className="speech-bubble-right speech-bubble inline-block px-4 py-2 mb-8">
            <p style={{ fontFamily: "Comic Neue, cursive", fontWeight: 700, fontSize: "0.9rem", color: "#0D0D0D" }}>
              👆 Click a mission card to reveal details!
            </p>
          </div>
        </Reveal>

        {/* Swiper Carousel */}
        <Reveal direction="up" delay={0.2}>
          <Swiper
            id="projects-carousel"
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 18 },
              900: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 2.6, spaceBetween: 24 },
            }}
            navigation
            pagination={{ clickable: true }}
            rewind
            watchOverflow
            style={{ padding: "20px 0 60px" }}
          >
            {projects.map((proj) => (
              <SwiperSlide key={proj.id}>
                <div style={{ position: "relative" }}>
                  {/* BOOM burst on click */}
                  <AnimatePresence>
                    {burstProject === proj.id && (
                      <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          zIndex: 20,
                          pointerEvents: "none",
                          fontFamily: "Bangers, cursive",
                          fontSize: "3rem",
                          color: proj.accentColor,
                          textShadow: `2px 2px 0 #0D0D0D`,
                          letterSpacing: "0.04em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        💥 BOOM!
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    id={`project-card-${proj.id}`}
                    onClick={() => handleOpenProject(proj)}
                    whileHover={{ scale: 1.04, rotate: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="comic-panel"
                    style={{
                      background: proj.color,
                      cursor: "pointer",
                      overflow: "hidden",
                    }}
                  >
                    {/* Card top */}
                    <div className="p-6 pb-4">
                      <div
                        style={{
                          fontFamily: "Oswald, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          color: proj.accentColor,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          marginBottom: "8px",
                        }}
                      >
                        {proj.subtitle}
                      </div>
                      <div className="flex items-start gap-4">
                        <div
                          style={{
                            fontSize: "3rem",
                            lineHeight: 1,
                            flexShrink: 0,
                          }}
                        >
                          {proj.icon}
                        </div>
                        <h3
                          className="comic-title"
                          style={{
                            fontSize: "1.6rem",
                            color: proj.accentColor,
                            lineHeight: 1.1,
                            textShadow: "2px 2px 0 rgba(0,0,0,0.3)",
                          }}
                        >
                          {proj.title}
                        </h3>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="px-6 pb-4 flex flex-wrap gap-1">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "Oswald, sans-serif",
                            fontWeight: 600,
                            fontSize: "0.65rem",
                            background: "rgba(0,0,0,0.3)",
                            color: "#fff",
                            padding: "2px 8px",
                            border: "1px solid rgba(255,255,255,0.3)",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expand indicator */}
                    <div
                      style={{
                        background: "rgba(0,0,0,0.2)",
                        padding: "10px 24px",
                        textAlign: "center",
                        borderTop: "2px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Bangers, cursive",
                          fontSize: "1rem",
                          color: proj.accentColor,
                          letterSpacing: "0.1em",
                        }}
                      >
                        ▼ CLICK ANYWHERE TO EXPAND
                      </span>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[120]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.82 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              style={{ background: "#0D0D0D" }}
              onClick={() => setActiveProject(null)}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0 overflow-hidden"
              style={{ background: "#FFFDE7" }}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-30"
                style={{
                  fontFamily: "Bangers, cursive",
                  fontSize: "1.1rem",
                  background: "#E52222",
                  color: "#FFD700",
                  border: "3px solid #0D0D0D",
                  boxShadow: "3px 3px 0 #0D0D0D",
                  padding: "6px 14px",
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                }}
              >
                ✕ CLOSE
              </button>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(13,13,13,0.08) 1.4px, transparent 1.4px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative h-full grid md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                  exit={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-[42vh] md:h-full border-b-4 md:border-b-0 md:border-r-4 border-[#0D0D0D] overflow-hidden"
                  style={{ background: "#0D0D0D" }}
                >
                  {activeProject.imageUrl ? (
                    <img
                      src={
                        activeProject.id === "ai-crosswalk"
                          ? `${activeProject.imageUrl}?r=${imageNonce}`
                          : activeProject.imageUrl
                      }
                      alt={activeProject.title}
                      className="h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.src = `https://picsum.photos/seed/${activeProject.id}/1400/900`;
                      }}
                    />
                  ) : (
                    <div
                      className="h-full w-full flex flex-col items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(229,34,34,0.85) 0%, rgba(255,107,0,0.85) 45%, rgba(26,95,180,0.85) 100%)",
                      }}
                    >
                      <div style={{ fontSize: "6rem", lineHeight: 1 }}>{activeProject.icon}</div>
                      <div
                        style={{
                          fontFamily: "Bangers, cursive",
                          fontSize: "2.1rem",
                          color: "#FFD700",
                          letterSpacing: "0.08em",
                          textShadow: "3px 3px 0 #0D0D0D",
                        }}
                      >
                        ADD IMAGE URL
                      </div>
                    </div>
                  )}

                  <motion.div
                    initial={{ x: "-120%", opacity: 0.2 }}
                    animate={{ x: "120%", opacity: [0.1, 0.35, 0.1] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-32"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 45%, transparent 100%)",
                      mixBlendMode: "screen",
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.22, duration: 0.25 }}
                    className="absolute top-4 left-4"
                    style={{
                      fontFamily: "Bangers, cursive",
                      fontSize: "1.1rem",
                      background: "#FFD700",
                      color: "#0D0D0D",
                      border: "3px solid #0D0D0D",
                      boxShadow: "3px 3px 0 #0D0D0D",
                      padding: "4px 12px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    SNAPSHOT
                  </motion.div>

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(13,13,13,0.22) 1.8px, transparent 1.8px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 36 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ delay: 0.16, duration: 0.35, ease: "easeOut" }}
                  className="relative h-full overflow-y-auto p-5 md:p-8"
                >
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    style={{
                      height: 8,
                      width: "min(260px, 70%)",
                      background:
                        "repeating-linear-gradient(90deg, #E52222, #E52222 12px, #0D0D0D 12px, #0D0D0D 20px)",
                      border: "2px solid #0D0D0D",
                      boxShadow: "2px 2px 0 #0D0D0D",
                      marginBottom: "14px",
                      transformOrigin: "left",
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.24, duration: 0.25 }}
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#E52222",
                      marginBottom: "10px",
                    }}
                  >
                    {activeProject.subtitle}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.31, duration: 0.3 }}
                    className="comic-title"
                    style={{
                      fontSize: "clamp(1.8rem, 4.2vw, 3.2rem)",
                      color: "#0D0D0D",
                      lineHeight: 1,
                      marginBottom: "12px",
                    }}
                  >
                    {activeProject.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.39, duration: 0.35 }}
                    style={{
                      fontFamily: "Comic Neue, cursive",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#0D0D0D",
                      lineHeight: 1.7,
                      marginBottom: "18px",
                    }}
                  >
                    {activeProject.description}
                  </motion.p>

                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.04,
                          delayChildren: 0.47,
                        },
                      },
                    }}
                    className="flex flex-wrap gap-2 mb-5"
                  >
                    {activeProject.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        variants={{
                          hidden: { opacity: 0, y: 10, scale: 0.9 },
                          show: { opacity: 1, y: 0, scale: 1 },
                        }}
                        style={{
                          fontFamily: "Oswald, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          background: "#0D0D0D",
                          color: "#FFD700",
                          border: "2px solid #0D0D0D",
                          boxShadow: "2px 2px 0 #E52222",
                          padding: "4px 10px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.56, duration: 0.25 }}
                    className="flex flex-wrap gap-3"
                  >
                    {activeProject.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "Bangers, cursive",
                          fontSize: "1.05rem",
                          background: "#E52222",
                          color: "#FFD700",
                          border: "3px solid #0D0D0D",
                          boxShadow: "4px 4px 0 #0D0D0D",
                          padding: "8px 16px",
                          letterSpacing: "0.08em",
                          textDecoration: "none",
                          display: "inline-block",
                        }}
                      >
                        {link.label} →
                      </a>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
