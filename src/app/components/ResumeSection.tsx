import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GraduationCap, Wrench } from "lucide-react";
import { AnimatedLilium } from "./LiliumFlower";

const skills = [
  {
    category: "Design Tools",
    items: ["Figma", "Jira", "Protopie", "Notion"],
  },
  {
    category: "UX/UI Design",
    items: [
      "User Research",
      "Usability Testing",
      "Persona Creation",
      "User Journey Mapping",
      "Wireframing",
      "High-Fidelity Prototyping",
      "Visual Design",
      "Figma",
      "FigJam",
    ],
  },
  {
    category: "Product Management Foundations",
    items: [
      "Product Strategy",
      "Feature Prioritization",
      "Competitive Analysis",
      "Data-Informed Design",
      "Requirement Synthesis",
    ],
  },
  {
    category: "Technical Foundations",
    items: ["HTML & CSS", "JavaScript", "Information Architecture"],
  },
  {
    category: "Soft Skills",
    items: [
      "Collaborative Problem-Solving",
      "Critical Thinking",
      "Cross-functional Communication",
    ],
  },
];

const education = [
  {
    school: "Diginext Academy",
    degree: "Product Design Apprentice",
    year: "Fall 2025",
  },
  {
    school: "Kharazmi University",
    degree: "Bachelor of Science in Computer Science",
    year: "2022–2026",
  },
];

const chipStyle = (category: string): { background: string; color: string } => {
  if (category === "Design Tools")
    return { background: "rgba(245, 233, 74, 0.3)", color: "#12100E" };
  if (category === "UX/UI Design")
    return { background: "rgba(255, 208, 220, 0.35)", color: "#12100E" };
  if (category === "Product Management Foundations")
    return { background: "rgba(200, 230, 255, 0.35)", color: "#12100E" };
  if (category === "Technical Foundations")
    return { background: "rgba(200, 255, 220, 0.35)", color: "#12100E" };
  return { background: "rgba(18, 16, 14, 0.05)", color: "#12100E" };
};

export function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="resume"
      ref={ref}
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 50%, rgba(255, 208, 220, 0.14) 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(245, 233, 74, 0.1) 0%, transparent 50%)",
        }}
      />

      <div className="absolute top-8 right-8 pointer-events-none hidden xl:block">
        <AnimatedLilium size={280} opacity={0.07} rotate={-10} floatY={16} floatX={8} duration={11} rotateDrift={8} />
      </div>
      <div className="absolute -bottom-10 -left-10 pointer-events-none hidden lg:block">
        <AnimatedLilium size={340} opacity={0.06} rotate={40} floatY={18} floatX={-10} duration={13} rotateDrift={-7} />
      </div>
      <div className="absolute top-1/2 -right-16 pointer-events-none hidden xl:block">
        <AnimatedLilium size={180} opacity={0.05} rotate={-60} floatY={12} floatX={6} duration={9} rotateDrift={10} />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section label */}
        <motion.div variants={item} className="flex items-center gap-3 mb-12">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ fontFamily: "DM Sans, sans-serif", color: "#7A6B66" }}
          >
            03 — Resume
          </span>
          <div className="h-px w-12" style={{ background: "rgba(18,16,14,0.15)" }} />
        </motion.div>

        <motion.h2
          variants={item}
          className="mb-16"
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "clamp(2.25rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "#12100E",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          Skills &
          <br />
          <span style={{ color: "#C07A8A" }}>Education.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* Left — Skills */}
          <div>
            <motion.div variants={item} className="flex items-center gap-2.5 mb-8">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "rgba(245, 233, 74, 0.4)" }}
              >
                <Wrench size={13} style={{ color: "#6B5D0A" }} />
              </div>
              <span
                className="text-sm font-semibold tracking-wide uppercase"
                style={{ fontFamily: "DM Sans, sans-serif", color: "#12100E", letterSpacing: "0.08em" }}
              >
                Skills
              </span>
            </motion.div>

            <div className="space-y-4">
              {skills.map((group) => (
                <motion.div
                  key={group.category}
                  variants={item}
                  className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: "rgba(255, 255, 255, 0.65)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(18, 16, 14, 0.07)",
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-3"
                    style={{ fontFamily: "DM Sans, sans-serif", color: "#7A6B66", letterSpacing: "0.1em" }}
                  >
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full transition-all duration-200 hover:scale-105 cursor-default"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          ...chipStyle(group.category),
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Education */}
          <div>
            <motion.div variants={item} className="flex items-center gap-2.5 mb-8">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255, 208, 220, 0.5)" }}
              >
                <GraduationCap size={13} style={{ color: "#8A3A52" }} />
              </div>
              <span
                className="text-sm font-semibold tracking-wide uppercase"
                style={{ fontFamily: "DM Sans, sans-serif", color: "#12100E", letterSpacing: "0.08em" }}
              >
                Education
              </span>
            </motion.div>

            <div className="space-y-4">
              {education.map((edu) => (
                <motion.div
                  key={edu.school}
                  variants={item}
                  className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: "rgba(255, 255, 255, 0.65)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(18, 16, 14, 0.07)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p
                      className="font-bold"
                      style={{ fontFamily: "Urbanist, sans-serif", fontSize: "1rem", color: "#12100E", letterSpacing: "-0.01em" }}
                    >
                      {edu.school}
                    </p>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        background: "rgba(245, 233, 74, 0.4)",
                        color: "#6B5D0A",
                      }}
                    >
                      {edu.year}
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "DM Sans, sans-serif", color: "#7A6B66" }}
                  >
                    {edu.degree}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
