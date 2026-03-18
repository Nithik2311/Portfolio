"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    icon: "📧",
    value: "nithik2311@gmail.com",
    href: "mailto:nithik2311@gmail.com",
    color: "#E52222",
    badge: "WRITE!",
  },
  {
    id: "phone",
    label: "Phone",
    icon: "📞",
    value: "+91 8072258243",
    href: "tel:+918072258243",
    color: "#1A5FB4",
    badge: "CALL!",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "💼",
    value: "linkedin.com/in/nithik-k-1727ba31b",
    href: "https://www.linkedin.com/in/nithik-k-1727ba31b/",
    color: "#0077B5",
    badge: "CONNECT!",
  },
  {
    id: "github",
    label: "GitHub",
    icon: "🐙",
    value: "github.com/Nithik2311",
    href: "https://github.com/Nithik2311",
    color: "#333",
    badge: "CODE!",
  },
];

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [hovered, setHovered] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }
      } else {
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
        );
        window.location.href = `mailto:nithik2311@gmail.com?subject=${subject}&body=${body}`;
      }

      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setSubmitError("Could not send right now. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 overflow-hidden halftone-bg-red flex items-center"
    >
      {/* Dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        {/* Header */}
        <Reveal direction="up" delay={0}>
          <div className="flex flex-wrap items-center gap-4 mb-12">
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
                📡 SEND THE SIGNAL!
              </h2>
            </div>
            <div
              className="action-word float-anim"
              style={{ fontSize: "2.5rem", color: "#FFD700", textShadow: "2px 2px 0 #0D0D0D" }}
            >
              KA-POW!
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact form */}
          <Reveal direction="left" delay={0.1}>
            <div
              className="comic-panel"
              style={{ background: "#FFFDE7", padding: "32px" }}
            >
              <span className="panel-number">FINAL PANEL</span>
              <h3
                className="comic-title pt-4 mb-6"
                style={{ fontSize: "1.8rem", color: "#0D0D0D", textShadow: "1px 1px 0 #E52222" }}
              >
                Drop a Message!
              </h3>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 gap-4"
                  >
                    <div
                      className="burst"
                      style={{
                        width: 120,
                        height: 120,
                        background: "#E52222",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontFamily: "Bangers, cursive", fontSize: "1.2rem", color: "#FFD700", textAlign: "center" }}>
                        SENT!
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "Bangers, cursive",
                        fontSize: "1.8rem",
                        color: "#0D0D0D",
                        letterSpacing: "0.06em",
                        textShadow: "2px 2px 0 #E52222",
                      }}
                    >
                      🎉 MESSAGE RECEIVED!
                    </p>
                    <p style={{ fontFamily: "Comic Neue, cursive", fontWeight: 700, fontSize: "1rem", color: "#0D0D0D" }}>
                      I&apos;ll get back to you faster than a speeding bullet!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                    id="contact-form"
                  >
                    {[
                      { label: "Your Name", id: "contact-name", field: "name", type: "text", placeholder: "Your Superhero Name..." },
                      { label: "Your Email", id: "contact-email", field: "email", type: "email", placeholder: "hero@city.com" },
                    ].map((inp) => (
                      <div key={inp.id} className="flex flex-col gap-1">
                        <label
                          htmlFor={inp.id}
                          style={{
                            fontFamily: "Oswald, sans-serif",
                            fontWeight: 700,
                            fontSize: "0.8rem",
                            color: "#0D0D0D",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {inp.label}
                        </label>
                        <input
                          id={inp.id}
                          type={inp.type}
                          required
                          placeholder={inp.placeholder}
                          value={form[inp.field as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [inp.field]: e.target.value })}
                          style={{
                            fontFamily: "Comic Neue, cursive",
                            fontWeight: 700,
                            fontSize: "1rem",
                            padding: "10px 14px",
                            border: "3px solid #0D0D0D",
                            boxShadow: "3px 3px 0 #0D0D0D",
                            background: "#fff",
                            color: "#0D0D0D",
                            outline: "none",
                            width: "100%",
                            transition: "box-shadow 0.2s",
                          }}
                          onFocus={(e) => (e.target.style.boxShadow = "5px 5px 0 #E52222")}
                          onBlur={(e) => (e.target.style.boxShadow = "3px 3px 0 #0D0D0D")}
                        />
                      </div>
                    ))}

                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="contact-message"
                        style={{
                          fontFamily: "Oswald, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          color: "#0D0D0D",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        Your Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Tell me about your mission..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{
                          fontFamily: "Comic Neue, cursive",
                          fontWeight: 700,
                          fontSize: "1rem",
                          padding: "10px 14px",
                          border: "3px solid #0D0D0D",
                          boxShadow: "3px 3px 0 #0D0D0D",
                          background: "#fff",
                          color: "#0D0D0D",
                          outline: "none",
                          resize: "vertical",
                          width: "100%",
                          transition: "box-shadow 0.2s",
                        }}
                        onFocus={(e) => (e.target.style.boxShadow = "5px 5px 0 #E52222")}
                        onBlur={(e) => (e.target.style.boxShadow = "3px 3px 0 #0D0D0D")}
                      />
                    </div>

                    <motion.button
                      id="contact-submit"
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: 1.05, rotate: -1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        fontFamily: "Bangers, cursive",
                        fontSize: "1.6rem",
                        background: "#E52222",
                        color: "#FFD700",
                        border: "3px solid #0D0D0D",
                        boxShadow: "5px 5px 0 #0D0D0D",
                        padding: "12px 0",
                        letterSpacing: "0.1em",
                        cursor: submitting ? "not-allowed" : "pointer",
                        opacity: submitting ? 0.7 : 1,
                        width: "100%",
                      }}
                    >
                      {submitting ? "SENDING..." : "🚀 LAUNCH MESSAGE!"}
                    </motion.button>

                    {submitError ? (
                      <p
                        style={{
                          fontFamily: "Comic Neue, cursive",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          color: "#E52222",
                        }}
                      >
                        {submitError}
                      </p>
                    ) : null}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Contact links */}
          <div className="flex flex-col gap-5">
            <Reveal direction="right" delay={0.1}>
              <div className="speech-bubble p-4">
                <p style={{ fontFamily: "Bangers, cursive", fontSize: "1.4rem", color: "#0D0D0D", letterSpacing: "0.05em" }}>
                  🦸 Ready to team up? Find me here:
                </p>
              </div>
            </Reveal>

            {contactLinks.map((link, i) => (
              <Reveal key={link.id} direction="right" delay={0.2 + i * 0.1}>
                <motion.a
                  href={link.href}
                  id={`contact-${link.id}`}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onHoverStart={() => setHovered(link.id)}
                  onHoverEnd={() => setHovered(null)}
                  whileHover={{ scale: 1.04, rotate: -1, x: 6 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-4 no-underline"
                  style={{
                    background: hovered === link.id ? link.color : "#FFFDE7",
                    border: "3px solid #0D0D0D",
                    boxShadow: "5px 5px 0 #0D0D0D",
                    padding: "14px 20px",
                    textDecoration: "none",
                    transition: "background 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: link.color,
                      border: "3px solid #0D0D0D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.6rem",
                      flexShrink: 0,
                      transition: "transform 0.2s",
                    }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex flex-col">
                    <span
                      style={{
                        fontFamily: "Bangers, cursive",
                        fontSize: "1.1rem",
                        color: hovered === link.id ? "#FFD700" : "#0D0D0D",
                        letterSpacing: "0.06em",
                        transition: "color 0.25s",
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "Comic Neue, cursive",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: hovered === link.id ? "rgba(255,255,255,0.85)" : "#444",
                        transition: "color 0.25s",
                      }}
                    >
                      {link.value}
                    </span>
                  </div>
                  <span
                    className="action-word ml-auto"
                    style={{
                      fontSize: "1rem",
                      color: hovered === link.id ? "#FFD700" : "#999",
                      opacity: hovered === link.id ? 1 : 0,
                      transition: "opacity 0.2s",
                    }}
                  >
                    {link.badge}
                  </span>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
