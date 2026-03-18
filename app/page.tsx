"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ClickEffect from "@/components/ClickEffect";

const sections = [
  { id: "hero", label: "Origin", Component: HeroSection },
  { id: "about", label: "Story", Component: AboutSection },
  { id: "skills", label: "Powers", Component: SkillsSection },
  { id: "projects", label: "Missions", Component: ProjectsSection },
  { id: "services", label: "Services", Component: ServicesSection },
  { id: "contact", label: "Signal", Component: ContactSection },
  { id: "finale", label: "Finale", Component: Footer },
] as const;

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [lowPerformanceMode, setLowPerformanceMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [transitionStyle, setTransitionStyle] = useState<"bubble" | "roundPixel">("bubble");
  const transitionCounterRef = useRef(0);

  useEffect(() => {
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const cores = navigator.hardwareConcurrency ?? 8;
    setLowPerformanceMode(memory <= 4 || cores <= 4);
  }, []);

  const transitionConfig = useMemo(
    () => ({
      switchDelay: shouldReduceMotion ? 90 : lowPerformanceMode ? 120 : 180,
      totalDuration: shouldReduceMotion ? 260 : lowPerformanceMode ? 380 : 560,
      sectionDuration: shouldReduceMotion ? 0.14 : lowPerformanceMode ? 0.2 : 0.28,
      bubbleDuration: shouldReduceMotion ? 0.16 : lowPerformanceMode ? 0.28 : 0.46,
      roundPixelDuration: shouldReduceMotion ? 0.12 : lowPerformanceMode ? 0.2 : 0.3,
    }),
    [lowPerformanceMode, shouldReduceMotion],
  );

  const bubblePops = useMemo(() => {
    const cols = lowPerformanceMode || shouldReduceMotion ? 8 : 12;
    const rows = lowPerformanceMode || shouldReduceMotion ? 5 : 7;
    const items: Array<{ x: number; y: number; size: number; dx: number; dy: number }> = [];

    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        const i = r * cols + c;
        const jitterX = ((i * 7) % 10) - 5;
        const jitterY = ((i * 11) % 10) - 5;
        const x = ((c + 0.5) * (100 / cols)) + jitterX * 0.5;
        const y = ((r + 0.5) * (100 / rows)) + jitterY * 0.5;
        const size = 7 + ((i * 3) % 7);
        const dx = (((i * 5) % 17) - 8) * 2.2;
        const dy = (((i * 9) % 17) - 8) * 2.2;

        items.push({ x, y, size, dx, dy });
      }
    }

    return items;
  }, [lowPerformanceMode, shouldReduceMotion]);

  const activeSection = useMemo(() => sections[activeIndex], [activeIndex]);

  const goToIndex = useCallback(
    (nextIndex: number) => {
      if (
        isTransitioning ||
        nextIndex < 0 ||
        nextIndex >= sections.length ||
        nextIndex === activeIndex
      ) {
        return;
      }

      const nextTransitionStyle =
        transitionCounterRef.current % 2 === 0 ? "bubble" : "roundPixel";
      transitionCounterRef.current += 1;
      setTransitionStyle(nextTransitionStyle);
      setDirection(nextIndex > activeIndex ? "next" : "prev");
      setIsTransitioning(true);

      window.setTimeout(() => {
        setActiveIndex(nextIndex);
      }, transitionConfig.switchDelay);

      window.setTimeout(() => {
        setIsTransitioning(false);
      }, transitionConfig.totalDuration);
    },
    [activeIndex, isTransitioning, transitionConfig],
  );

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) < 24) return;
      goToIndex(activeIndex + (event.deltaY > 0 ? 1 : -1));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        goToIndex(activeIndex + 1);
      }

      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goToIndex(activeIndex - 1);
      }
    };

    let touchStartY = 0;
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const endY = event.changedTouches[0]?.clientY ?? 0;
      const deltaY = touchStartY - endY;
      if (Math.abs(deltaY) < 50) return;
      goToIndex(activeIndex + (deltaY > 0 ? 1 : -1));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    const onNavigate = (event: Event) => {
      const customEvent = event as CustomEvent<{ sectionId?: string }>;
      const sectionId = customEvent.detail?.sectionId;
      if (!sectionId) return;

      const targetIndex = sections.findIndex((section) => section.id === sectionId);
      if (targetIndex >= 0) {
        goToIndex(targetIndex);
      }
    };

    window.addEventListener("comic:navigate", onNavigate as EventListener);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("comic:navigate", onNavigate as EventListener);
    };
  }, [activeIndex, goToIndex]);

  return (
    <>
      <ClickEffect />

      <div className="fixed inset-0 overflow-hidden bg-[#0D0D0D]">
        <div className="pointer-events-auto fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-none border-4 border-[#0D0D0D] bg-[#FFD700] px-2 py-1 shadow-[5px_5px_0_#0D0D0D]">
          <div className="flex items-center gap-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToIndex(index)}
                className="border-2 border-[#0D0D0D] px-3 py-1"
                style={{
                  fontFamily: "Bangers, cursive",
                  fontSize: "0.9rem",
                  letterSpacing: "0.06em",
                  background: index === activeIndex ? "#E52222" : "#FFFDE7",
                  color: index === activeIndex ? "#FFD700" : "#0D0D0D",
                }}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.main
            key={activeSection.id}
            initial={{ opacity: 0, y: direction === "next" ? 40 : -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction === "next" ? -40 : 40 }}
            transition={{ duration: transitionConfig.sectionDuration, ease: "easeOut" }}
            className="h-screen w-screen overflow-hidden"
          >
            <div className="h-full w-full overflow-y-auto">
              <activeSection.Component />
            </div>
          </motion.main>
        </AnimatePresence>

        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              key={`transition-${activeIndex}-${direction}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="pointer-events-none fixed inset-0 z-[70]"
            >
              {transitionStyle === "bubble" ? (
                <>
                  <motion.div
                    initial={{
                      clipPath:
                        direction === "next"
                          ? "circle(0% at 50% 100%)"
                          : "circle(0% at 50% 0%)",
                    }}
                    animate={{
                      clipPath:
                        direction === "next"
                          ? "circle(150% at 50% 100%)"
                          : "circle(150% at 50% 0%)",
                    }}
                    exit={{
                      clipPath:
                        direction === "next"
                          ? "circle(0% at 50% 0%)"
                          : "circle(0% at 50% 100%)",
                    }}
                    transition={{ duration: transitionConfig.bubbleDuration, ease: "easeOut" }}
                    className="absolute inset-0"
                    style={{
                      backgroundColor: "#FFD700",
                      backgroundImage:
                        "radial-gradient(circle, rgba(13,13,13,0.25) 2px, transparent 2px)",
                      backgroundSize: "18px 18px",
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 0.85, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.08 }}
                    transition={{ duration: transitionConfig.bubbleDuration, ease: "easeOut" }}
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 65%, rgba(229,34,34,0.22) 0 16%, transparent 17%), radial-gradient(circle at 72% 38%, rgba(229,34,34,0.22) 0 18%, transparent 19%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0 10%, transparent 11%)",
                      willChange: "transform, opacity",
                    }}
                  />

                  <div className="absolute inset-0 overflow-hidden">
                    {bubblePops.map((bubble, index) => (
                      <motion.span
                        key={`${bubble.x}-${bubble.y}-${bubble.size}`}
                        initial={{
                          opacity: 0,
                          scale: 0.25,
                          x: 0,
                          y: 0,
                        }}
                        animate={{
                          opacity: [0, 0.95, 0],
                          scale: [0.25, 1.05, 0.9],
                          x: bubble.dx,
                          y: bubble.dy,
                        }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{
                          duration: transitionConfig.bubbleDuration,
                          delay: index * (lowPerformanceMode ? 0.004 : 0.006),
                          ease: "easeOut",
                        }}
                        style={{
                          position: "absolute",
                          left: `${bubble.x}%`,
                          top: `${bubble.y}%`,
                          width: bubble.size,
                          height: bubble.size,
                          borderRadius: "9999px",
                          background: index % 3 === 0 ? "#E52222" : "#FFFDE7",
                          border: "2px solid #0D0D0D",
                          boxShadow: "2px 2px 0 #0D0D0D",
                          willChange: "transform, opacity",
                        }}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: transitionConfig.roundPixelDuration }}
                    className="absolute inset-0"
                    style={{ background: "#0D0D0D" }}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, rotate: direction === "next" ? -5 : 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.08, rotate: direction === "next" ? 4 : -4 }}
                    transition={{ duration: transitionConfig.roundPixelDuration, ease: "easeOut" }}
                    className="absolute inset-0"
                    style={{
                      backgroundColor: "#FFD700",
                      backgroundImage:
                        "radial-gradient(circle, #E52222 17%, transparent 19%), radial-gradient(circle, rgba(13,13,13,0.24) 26%, transparent 28%)",
                      backgroundSize: lowPerformanceMode ? "28px 28px, 28px 28px" : "22px 22px, 22px 22px",
                      backgroundPosition: "0 0, 11px 11px",
                      willChange: "transform, opacity",
                    }}
                  />
                </>
              )}

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.02, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: shouldReduceMotion || lowPerformanceMode ? 0.1 : 0.18, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  fontFamily: "Bangers, cursive",
                  fontSize: "clamp(2.2rem, 8vw, 5rem)",
                  color: "#E52222",
                  letterSpacing: "0.08em",
                  textShadow: "2px 2px 0 #0D0D0D",
                }}
              >
                KA-POW!
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
