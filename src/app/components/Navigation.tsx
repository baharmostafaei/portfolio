import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setActiveSection(id);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4"
      >
        <div
          className="max-w-6xl mx-auto flex items-center justify-between transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(254, 254, 247, 0.82)"
              : "rgba(254, 254, 247, 0.4)",
            backdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
            WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
            borderRadius: "100px",
            border: scrolled
              ? "1px solid rgba(18, 16, 14, 0.08)"
              : "1px solid transparent",
            padding: scrolled ? "10px 28px" : "12px 28px",
            boxShadow: scrolled
              ? "0 4px 32px rgba(18, 16, 14, 0.06)"
              : "none",
          }}
        >
          <button
            onClick={() => handleNav("#about")}
            className="flex items-center gap-2 group"
            style={{ fontFamily: "Urbanist, sans-serif" }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #F5E94A 0%, #FFD0DC 100%)",
              }}
            >
              <span className="text-xs font-bold" style={{ color: "#12100E" }}>
                BM
              </span>
            </div>
            <span
              className="font-semibold tracking-tight hidden sm:block"
              style={{ color: "#12100E", letterSpacing: "-0.01em" }}
            >
              Bahareh Mostafaei
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="relative px-4 py-1.5 text-sm transition-colors duration-200"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "#12100E"
                      : "#7A6B66",
                  fontWeight:
                    activeSection === link.href.replace("#", "") ? 600 : 400,
                }}
              >
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(245, 233, 74, 0.25)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(212, 255, 215, 0.6)",
                color: "#1A6B2A",
                fontFamily: "DM Sans, sans-serif",
                border: "1px solid rgba(100, 200, 120, 0.3)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded-full"
            style={{ color: "#12100E" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl p-4 shadow-xl"
            style={{
              background: "rgba(254, 254, 247, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(18, 16, 14, 0.08)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors hover:bg-black/5"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color: "#12100E",
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
