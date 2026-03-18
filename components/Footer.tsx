"use client";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0D0D",
        borderTop: "4px solid #FFD700",
        padding: "32px 16px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,215,0,0.06) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-3">
        <Reveal direction="up" delay={0}>
          <div
            style={{
              fontFamily: "Bangers, cursive",
              fontSize: "2.5rem",
              color: "#FFD700",
              letterSpacing: "0.08em",
              textShadow: "3px 3px 0 #E52222",
            }}
          >
            NITHIK — SOFTWARE STUDENT
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <div
            style={{
              fontFamily: "Comic Neue, cursive",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            M.Sc Software Systems · Coimbatore Institute of Technology · 2023–2028
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <div
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              color: "rgba(255,215,0,0.5)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginTop: "8px",
            }}
          >
            ⚡ Built with Next.js · Framer Motion · Swiper · Tailwind · Comic Soul ⚡
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.3}>
          <div
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.1em",
              marginTop: "4px",
            }}
          >
            © {new Date().getFullYear()} Nithik. All Rights Reserved. Issue #001 — The Origin.
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
