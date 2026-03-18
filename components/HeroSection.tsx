"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const TAGLINES = ["Full Stack Dev", "UI/UX Designer", "Problem Solver", "Software Student"];
const COMIC_PIXELS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: 8 + ((i * 17) % 82),
  top: 6 + ((i * 23) % 84),
  size: 10 + (i % 3) * 4,
  delay: (i % 9) * 0.11,
  color: i % 4 === 0 ? "rgba(229,34,34,0.35)" : i % 4 === 1 ? "rgba(255,215,0,0.3)" : i % 4 === 2 ? "rgba(26,95,180,0.28)" : "rgba(13,13,13,0.2)",
}));

export default function HeroSection() {
  const navigateToSection = (sectionId: string) => {
    window.dispatchEvent(
      new CustomEvent("comic:navigate", {
        detail: { sectionId },
      }),
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden halftone-bg"
      style={{ paddingTop: "80px" }}
    >
      {/* Animated speed lines background */}
      <div className="speed-lines absolute inset-0 opacity-30 pointer-events-none" />

      {/* Floating decorative burst shapes */}
      <motion.div
        className="absolute top-24 right-8 md:right-24 float-slow opacity-80"
        style={{ zIndex: 1 }}
      >
        <div
          className="burst"
          style={{
            width: 100,
            height: 100,
            background: "#E52222",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Bangers, cursive",
              fontSize: "0.8rem",
              color: "#FFD700",
              textAlign: "center",
              letterSpacing: "0.04em",
              lineHeight: 1.2,
            }}
          >
            HIRE<br />ME!
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-4 md:left-20 float-anim opacity-70"
        style={{ zIndex: 1 }}
      >
        <div
          className="burst"
          style={{
            width: 80,
            height: 80,
            background: "#1A5FB4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Bangers, cursive",
              fontSize: "0.75rem",
              color: "#fff",
              textAlign: "center",
              letterSpacing: "0.04em",
            }}
          >
            WOW!
          </span>
        </div>
      </motion.div>

      {/* Spinning ring */}
      <div
        className="spin-slow absolute opacity-10 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          border: "3px solid #0D0D0D",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="spin-slow absolute opacity-10 pointer-events-none"
        style={{
          width: 400,
          height: 400,
          border: "5px dashed #0D0D0D",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animationDirection: "reverse",
        }}
      />

      {/* Main hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Text Panel */}
        <div className="flex flex-col gap-6">
          {/* Panel tag */}
          <Reveal direction="left" delay={0}>
            <div
              className="inline-block"
              style={{
                background: "#E52222",
                border: "3px solid #0D0D0D",
                boxShadow: "4px 4px 0 #0D0D0D",
                padding: "4px 16px",
                fontFamily: "Oswald, sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#FFD700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              🦸 Issue #001 — Origin Story
            </div>
          </Reveal>

          {/* Main title */}
          <Reveal direction="up" delay={0.15}>
            <h1
              className="comic-title"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
                color: "#0D0D0D",
                lineHeight: 0.9,
                letterSpacing: "0.03em",
              }}
            >
              NITHIK
              <br />
              <span style={{ color: "#E52222" }}>
                THE STUDENT
              </span>
              <br />
            </h1>
          </Reveal>

          {/* Tagline rotating */}
          <Reveal direction="up" delay={0.3}>
            <div
              className="flex flex-wrap gap-2"
            >
              {TAGLINES.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    background: i % 2 === 0 ? "#0D0D0D" : "#1A5FB4",
                    color: "#FFD700",
                    padding: "3px 12px",
                    border: "2px solid #0D0D0D",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Speech bubble */}
          <Reveal direction="up" delay={0.45}>
            <div className="speech-bubble p-4 max-w-sm">
              <p style={{ fontFamily: "Comic Neue, cursive", fontWeight: 700, fontSize: "1rem", color: "#0D0D0D", lineHeight: 1.5 }}>
                &ldquo;Motivated student with a strong interest in Full Stack Development, UI/UX Designing and problem-solving. Eager to learn, grow, and contribute to real-world projects!&rdquo;
              </p>
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal direction="up" delay={0.6}>
            <div className="flex flex-wrap gap-4 mt-2">
              <motion.button
                type="button"
                id="hero-missions-btn"
                onClick={() => navigateToSection("projects")}
                whileHover={{ scale: 1.08, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontFamily: "Bangers, cursive",
                  fontSize: "1.4rem",
                  background: "#E52222",
                  color: "#FFD700",
                  border: "3px solid #0D0D0D",
                  boxShadow: "5px 5px 0 #0D0D0D",
                  padding: "10px 28px",
                  letterSpacing: "0.08em",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                🚀 MY MISSIONS
              </motion.button>
              <motion.button
                type="button"
                id="hero-signal-btn"
                onClick={() => navigateToSection("contact")}
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontFamily: "Bangers, cursive",
                  fontSize: "1.4rem",
                  background: "#FFD700",
                  color: "#0D0D0D",
                  border: "3px solid #0D0D0D",
                  boxShadow: "5px 5px 0 #0D0D0D",
                  padding: "10px 28px",
                  letterSpacing: "0.08em",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                📡 SEND SIGNAL
              </motion.button>
            </div>
          </Reveal>
        </div>

        {/* Right: Avatar Panel */}
        <Reveal direction="right" delay={0.2}>
          <div className="flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="comic-panel relative"
              style={{
                background: "#1A5FB4",
                padding: "16px",
                maxWidth: 340,
                width: "100%",
              }}
            >
              <span className="panel-number">PANEL 01</span>
              {/* Avatar art */}
              <div
                style={{
                  aspectRatio: "1",
                  background: "linear-gradient(135deg, #FFD700 0%, #FF6B00 100%)",
                  border: "4px solid #0D0D0D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Halftone inside avatar */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }}
                />
                {/* Hero letter */}
                <div className="relative z-10 h-full w-full">
                  <img
                    src="https://i.ibb.co/99mMfKrR/me.jpg"
                    alt="Nithik portrait"
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.src = "https://i.ibb.co/HDLJMwHm/me.jpg";
                    }}
                  />

                  <div className="absolute inset-0 pointer-events-none">
                    {COMIC_PIXELS.map((pixel) => (
                      <motion.span
                        key={pixel.id}
                        initial={{ opacity: 0.12, rotateY: 0, scale: 0.8 }}
                        animate={{
                          opacity: [0.12, 0.5, 0.16],
                          rotateY: [0, 180, 360],
                          scale: [0.8, 1.08, 0.86],
                        }}
                        transition={{
                          duration: 2,
                          delay: pixel.delay,
                          repeat: Infinity,
                          repeatType: "mirror",
                          ease: "easeInOut",
                        }}
                        style={{
                          position: "absolute",
                          left: `${pixel.left}%`,
                          top: `${pixel.top}%`,
                          width: `${pixel.size}px`,
                          height: `${pixel.size}px`,
                          background: pixel.color,
                          borderRadius: "9999px",
                          border: "1px solid rgba(13,13,13,0.35)",
                          boxShadow: "0 0 0 1px rgba(255,255,255,0.15) inset",
                          backdropFilter: "blur(0.4px)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    ))}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      left: "12px",
                      bottom: "12px",
                      fontFamily: "Bangers, cursive",
                      fontSize: "1rem",
                      color: "#FFD700",
                      background: "#E52222",
                      border: "2px solid #0D0D0D",
                      boxShadow: "2px 2px 0 #0D0D0D",
                      padding: "2px 10px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    SOFTWARE STUDENT
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div
                className="float-anim"
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  background: "#FFD700",
                  border: "3px solid #0D0D0D",
                  boxShadow: "3px 3px 0 #0D0D0D",
                  borderRadius: "50%",
                  width: 64,
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <span style={{ fontFamily: "Bangers, cursive", fontSize: "0.7rem", color: "#0D0D0D", lineHeight: 1.2, letterSpacing: "0.04em" }}>
                  MSc<br />2023
                </span>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span style={{ fontFamily: "Bangers, cursive", fontSize: "0.9rem", color: "#0D0D0D", letterSpacing: "0.08em" }}>
          SCROLL DOWN
        </span>
        <div style={{ width: 3, height: 32, background: "#0D0D0D" }} />
        <div
          style={{
            width: 12,
            height: 12,
            background: "#E52222",
            border: "2px solid #0D0D0D",
            transform: "rotate(45deg)",
          }}
        />
      </motion.div>
    </section>
  );
}
