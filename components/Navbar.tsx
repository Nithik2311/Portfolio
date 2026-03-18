"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Origin", href: "#hero" },
  { label: "Story", href: "#about" },
  { label: "Powers", href: "#skills" },
  { label: "Missions", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Signal", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "#0D0D0D" : "rgba(13,13,13,0.92)",
          borderBottom: scrolled ? "4px solid #FFD700" : "4px solid transparent",
          boxShadow: scrolled ? "0 4px 0 #FFD700" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" id="navbar-logo" className="flex items-center gap-2 no-underline">
            <div
              className="burst"
              style={{
                width: 44,
                height: 44,
                background: "#FFD700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "Bangers, cursive",
                  fontSize: "1.1rem",
                  color: "#0D0D0D",
                  letterSpacing: "0.04em",
                }}
              >
                N
              </span>
            </div>
            <span
              style={{
                fontFamily: "Bangers, cursive",
                fontSize: "1.6rem",
                color: "#FFD700",
                letterSpacing: "0.08em",
                textShadow: "2px 2px 0 #E52222",
              }}
            >
              NITHIK
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  id={`nav-${id}`}
                  className="relative px-4 py-1 transition-all duration-200"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.08em",
                    color: active === id ? "#FFD700" : "#fff",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0"
                      style={{
                        background: "#E52222",
                        border: "2px solid #FFD700",
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={menuOpen ? { rotate: i === 1 ? 0 : i === 0 ? 45 : -45, y: i === 1 ? 0 : i === 0 ? 9 : -9, opacity: i === 1 ? 0 : 1 } : { rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "block",
                  width: 26,
                  height: 3,
                  background: "#FFD700",
                  borderRadius: 0,
                  transformOrigin: "center",
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-16 right-0 bottom-0 w-72 z-40 flex flex-col pt-8 gap-2 px-6"
            style={{
              background: "#0D0D0D",
              borderLeft: "4px solid #FFD700",
              boxShadow: "-8px 0 0 #FFD700",
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                id={`mobile-nav-${item.label.toLowerCase()}`}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "Bangers, cursive",
                  fontSize: "2rem",
                  color: "#FFD700",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  padding: "8px 0",
                  borderBottom: "2px solid rgba(255,215,0,0.2)",
                  textShadow: "2px 2px 0 #E52222",
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
