import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { LiliumFlower, AnimatedLilium } from "./LiliumFlower";
import MyProfilePicture from "../../imports/MyPicture.jpg";


const tags = ["Figma", "User Experience (UX)", "Prototyping", "Design Systems", "User Research", "User-Centered Design"];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20 px-6 md:px-12"
    >
      {/* Background mesh gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 60%, rgba(245, 233, 74, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 30%, rgba(255, 192, 220, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 50% 90%, rgba(255, 208, 220, 0.12) 0%, transparent 45%)",
        }}
      />

      {/* Decorative lilium — large background */}
      <div className="absolute -bottom-16 -right-16 pointer-events-none hidden lg:block">
        <AnimatedLilium size={600} opacity={0.09} rotate={20} floatY={22} floatX={12} duration={10} rotateDrift={6} />
      </div>
      <div className="absolute top-32 -left-24 pointer-events-none hidden lg:block">
        <AnimatedLilium size={380} opacity={0.07} rotate={-35} floatY={15} floatX={-10} duration={13} rotateDrift={-7} />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-6xl mx-auto w-full"
      >
        {/* Section label */}
        <motion.div variants={item} className="flex items-center gap-3 mb-10">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ fontFamily: "DM Sans, sans-serif", color: "#7A6B66" }}
          >
            01 — About
          </span>
          <div className="h-px w-12" style={{ background: "rgba(18,16,14,0.15)" }} />
        </motion.div>

        {/* Main asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">
          {/* Left — headline */}
          <div>
            <motion.div variants={item} className="mb-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  background: "rgba(245, 233, 74, 0.3)",
                  color: "#6B5D0A",
                  border: "1px solid rgba(245, 233, 74, 0.5)",
                }}
              >
                <MapPin size={11} />
                Tehran
                <span className="w-px h-3 bg-current opacity-30" />
                <Sparkles size={11} />
                Product Designer
              </div>
              <h1
                className="leading-none tracking-tight"
                style={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                  fontWeight: 800,
                  color: "#12100E",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.92,
                }}
              >
                Bahareh
                <br />
                <span
                  style={{
                    WebkitTextStroke: "2px #12100E",
                    color: "transparent",
                  }}
                >
                  Mostafaei.
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              className="max-w-md mb-8 leading-relaxed"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "1.0625rem",
                color: "#5A4E4A",
                lineHeight: 1.75,
              }}
            >
              Product Designer specializing in sleek interfaces, robust design systems, 
              and seamless user journeys. I don't just design how things look, 
              I care deeply about how they function and scale. Let’s build something meaningful together.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    background: "rgba(255, 208, 220, 0.35)",
                    color: "#8A3A52",
                    border: "1px solid rgba(255, 160, 192, 0.35)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  background: "#12100E",
                  color: "#FEFEF7",
                  boxShadow: "0 2px 12px rgba(18, 16, 14, 0.2)",
                }}
              >
                View Projects
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
              
            </motion.div>
          </div>

          {/* Right — portrait + floating cards */}
          <motion.div variants={item} className="relative">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "4/5",
                background: "#F5EFA0",
              }}
            >
              <img
                src={MyProfilePicture}
                alt="Bahareh Mostafaei, Product Designer"
                className="w-full h-full object-cover"
              />
              {/* Pink tint overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(255, 200, 215, 0.25) 100%)",
                }}
              />
            </div>

            {/* Floating glass card — top left */}

            {/* Floating glass card — bottom right */}

            {/* Lilium small decorative — overlapping card edge */}
            <div className="absolute -bottom-8 -left-6 pointer-events-none opacity-30">
              <AnimatedLilium size={120} opacity={1} rotate={15} floatY={8} floatX={5} duration={7} rotateDrift={10} />
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
