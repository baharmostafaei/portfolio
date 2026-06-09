import { motion } from "motion/react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { AnimatedLilium } from "./LiliumFlower";

const DribbbleIcon = (_props: Record<string, unknown> = {}) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
);

const BehanceIcon = (_props: Record<string, unknown> = {}) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.5 11.25c.69 0 1.25-.56 1.25-1.25S8.19 8.75 7.5 8.75H4.5v2.5h3zm.5 1.5H4.5V15.5h3.75c.76 0 1.375-.615 1.375-1.375S8.76 12.75 8 12.75zM2 7h6.5c1.657 0 3 1.12 3 2.5 0 .92-.52 1.73-1.3 2.18.98.38 1.68 1.3 1.68 2.37C11.88 15.71 10.48 17 8.75 17H2V7zm13.25 1.25h4.5v-.75h-4.5v.75zM22 13.5h-6.75c0 1.1.9 2 2 2 .75 0 1.4-.41 1.75-1h2.75C21.25 16.1 19.75 17 18 17c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4v.5zm-4-2.75c-.95 0-1.75.65-1.95 1.5h3.9c-.2-.85-1-.5-1.95-1.5z"/>
  </svg>
);

const socials = [
  { icon: Mail, label: "Email", href: "mailto:Baharemostafaei@gmail.com", iconSize: 15 },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/baharehmostafaei", iconSize: 15 },
  { icon: DribbbleIcon, label: "Dribbble", href: "https://dribbble.com/baharmoostafaei", iconSize: undefined },
  { icon: BehanceIcon, label: "Behance", href: "https://www.behance.net/baharemostafaee", iconSize: undefined },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden pt-24 pb-12 px-6 md:px-12"
      style={{
        background: "#12100E",
      }}
    >
      {/* Decorative lilium — faint on dark */}
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <AnimatedLilium size={500} opacity={0.04} rotate={30} floatY={24} floatX={14} duration={14} rotateDrift={7} />
      </div>
      <div className="absolute top-8 left-4 pointer-events-none">
        <AnimatedLilium size={220} opacity={0.04} rotate={-15} floatY={12} floatX={-8} duration={9} rotateDrift={-10} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(254,254,247,0.35)" }}
          >
            04 — Contact
          </p>
          <h2
            className="mb-6 leading-none"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
            }}
          >
            <span style={{ color: "#FEFEF7" }}>Let's make</span>
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(254,254,247,0.35)",
                color: "transparent",
              }}
            >
              something great.
            </span>
          </h2>
          <p
            className="max-w-md mb-8 leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif", fontSize: "1rem", color: "rgba(254,254,247,0.55)", lineHeight: 1.75 }}
          >
            I'm currently open to new full-time roles, freelance projects, and
            creative collaborations. If you have something interesting in mind —
            I'd love to hear it.
          </p>

          <a
            href="mailto:Baharemostafaei@gmail.com"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "DM Sans, sans-serif",
              background: "#F5E94A",
              color: "#12100E",
            }}
          >
            Say hello →
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Divider */}
        <div
          className="w-full h-px mb-10"
          style={{ background: "rgba(254, 254, 247, 0.08)" }}
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p
              className="font-bold mb-0.5"
              style={{ fontFamily: "Urbanist, sans-serif", fontSize: "1.125rem", color: "#FEFEF7", letterSpacing: "-0.02em" }}
            >
              Bahareh Mostafaei
            </p>
            <p
              className="text-xs"
              style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(254,254,247,0.35)" }}
            >
              © 2026 · All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href, iconSize }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(254, 254, 247, 0.07)",
                  border: "1px solid rgba(254, 254, 247, 0.1)",
                  color: "rgba(254, 254, 247, 0.6)",
                }}
              >
                {iconSize ? <Icon size={iconSize} /> : <Icon />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
