import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowUpRight, Layers, Users, Clock } from "lucide-react";
import { AnimatedLilium } from "./LiliumFlower";
import taskFlowImg from "../../imports/Screen1.png";
import homelyImg from "../../imports/Cover.png";
import digikalaImg from "../../imports/section_1_header.png";

const projects = [
  {
    id: 1,
    title: "TaskFlow - Task Management Platform",
    category: "UI/UX Case Study",
    year: "2026",
    description:
      "A collaborative task management app designed to minimize digital clutter and reduce cognitive overload for cross-functional teams.",
    tags: ["UI/UX Design", "B2B / SaaS", "Task Management"],
    image: taskFlowImg,
    accent: "#F5E94A",
    accentText: "#6B5D0A",
    link: "https://www.behance.net/gallery/244574573/TaskFlow-Project-Management-Platform",
  },
  {
    id: 2,
    title: "Homely - Property finding app",
    category: "Mobile App",
    year: "2026",
    description:
      "A mobile real estate platform that simplifies the end-to-end property journey by transforming complex transactional flows—like tour scheduling and purchase offers—into a seamless, trust-driven user experience.",
    tags: ["Mobile UX"],
    image: homelyImg,
    accent: "#FFD0DC",
    accentText: "#8A3A52",
    link: "https://www.behance.net/gallery/250242521/Homely-Property-finding-app",
  },
  {
    id: 3,
    title: "DigiKala — Improving User trust in E-commers",
    category: "Product design",
    year: "2025",
    description:
      "Clarifying seller performance and support users in making faster and more confident desicions, while avoiding negative impact on seller sales market place dynamics.",
    tags: ["Design Thinking", "Research", "Case Study"],
    metrics: { users: "12 Markets", weeks: "10", screens: "Brand Guide" },
    image: digikalaImg,
    accent: "#F5E94A",
    accentText: "#6B5D0A",
    link: "https://www.behance.net/gallery/241025065/Improving-User-trust-in-E-commers-%28case-study%29",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer block"
      style={{ aspectRatio: "16/11" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Base gradient overlay — always visible */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: "linear-gradient(180deg, transparent 30%, rgba(18, 16, 14, 0.75) 100%)",
          opacity: hovered ? 0.5 : 1,
        }}
      />

      {/* Hover overlay — rich glass panel */}
            <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
            style={{
              background: "rgba(18, 16, 14, 0.72)",
              backdropFilter: "blur(4px)",
            }}
          />
        )}
      </AnimatePresence>


      {/* Content — bottom always, expands on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        {/* Category + year — top on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3"
            >
              <span
                className="px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  background: project.accent,
                  color: project.accentText,
                }}
              >
                {project.category}
              </span>
              <span
                className="text-xs font-medium"
                style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.6)" }}
              >
                {project.year}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Arrow icon — top right on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(8px)" }}
            >
              <ArrowUpRight size={18} color="#FEFEF7" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main bottom content */}
        <div>
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14 }}
                transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="mb-3"
              >
                <p
                  className="text-sm mb-3 leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}
                >
                  {project.description}
                </p>

                {/* Metrics row */}
                

                {/* Outcome callout */}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Title + tags — always visible */}
          <h3
            className="mb-2 leading-tight"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 800,
              color: "#FEFEF7",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-full"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(245, 233, 74, 0.1) 0%, transparent 45%), radial-gradient(ellipse at 80% 80%, rgba(255, 192, 215, 0.12) 0%, transparent 45%)",
        }}
      />

      {/* Decorative liliums */}
      <div className="absolute bottom-0 left-4 pointer-events-none hidden xl:block">
        <AnimatedLilium size={320} opacity={0.07} rotate={-25} floatY={20} floatX={-12} duration={12} rotateDrift={-9} />
      </div>
      <div className="absolute -top-10 right-0 pointer-events-none hidden lg:block">
        <AnimatedLilium size={300} opacity={0.06} rotate={55} floatY={14} floatX={10} duration={10} rotateDrift={7} />
      </div>
      <div className="absolute top-1/2 -left-12 pointer-events-none hidden xl:block">
        <AnimatedLilium size={200} opacity={0.05} rotate={-40} floatY={10} floatX={-8} duration={15} rotateDrift={-8} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ fontFamily: "DM Sans, sans-serif", color: "#7A6B66" }}
          >
            03 — Projects
          </span>
          <div className="h-px w-12" style={{ background: "rgba(18,16,14,0.15)" }} />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#12100E",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Selected
            <br />
            <span style={{ color: "#C07A8A" }}>Works.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xs text-sm leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif", color: "#7A6B66", lineHeight: 1.75 }}
          >
            A curated selection of recent projects — hover each card to explore
            the story behind the work.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
