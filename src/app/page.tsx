import ScrollProgressBar from "@/components/ScrollProgressBar";
import ParticleCanvas from "@/components/ParticleCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsMatrix from "@/components/SkillsMatrix";
import TerminalConsole from "@/components/TerminalConsole";
import AdSenseAuditor from "@/components/AdSenseAuditor";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Composited native scroll progress bar (Modern Web Guidance) */}
      <ScrollProgressBar />

      {/* Cybernetic interactive particle constellation background */}
      <ParticleCanvas />

      {/* Sticky frosted glass navigation */}
      <Navbar />

      <main className="relative z-10">
        {/* Kinetic Hero */}
        <Hero />

        {/* Narrative / About Aspect Mahbub */}
        <AboutSection />

        {/* Six Pillars of Mastery */}
        <SkillsMatrix />

        {/* Interactive Code Lab & Aspect OS Terminal */}
        <TerminalConsole />

        {/* Interactive Google AdSense Approval Calculator */}
        <AdSenseAuditor />

        {/* Filterable Portfolio Showcase */}
        <ProjectsShowcase />

        {/* 7+ Years Career Timeline */}
        <ExperienceTimeline />

        {/* Client Endorsements */}
        <Testimonials />

        {/* Interactive Contact & Booking */}
        <ContactSection />
      </main>

      {/* Cybernetic Footer */}
      <Footer />
    </div>
  );
}
