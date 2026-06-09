import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { AboutSection } from "./components/AboutSection";
import { ResumeSection } from "./components/ResumeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const style = document.createElement("style");
    style.textContent = `
      ::-webkit-scrollbar { width: 0; background: transparent; }
      * { scrollbar-width: none; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "#FEFEF7", fontFamily: "DM Sans, sans-serif" }}
    >
      <Navigation />
      <main>
        <AboutSection />
        <div className="px-6 md:px-12">
          <div
            className="max-w-6xl mx-auto h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(18,16,14,0.1) 30%, rgba(18,16,14,0.1) 70%, transparent)",
            }}
          />
        </div>
        <ProjectsSection />
        <div className="px-6 md:px-12">
          <div
            className="max-w-6xl mx-auto h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(18,16,14,0.1) 30%, rgba(18,16,14,0.1) 70%, transparent)",
            }}
          />
        </div>
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}
