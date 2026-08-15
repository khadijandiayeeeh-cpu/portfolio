import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Stats from "../components/Stats";
import SkillsSection from "../components/SkillsSection";
import ExpertiseServices from "../components/ExpertiseServices";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

import ParticleBackground from "../components/ParticleBackground";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import ThemeToggle from "../components/ThemeToggle";

import Languages from "../components/Languages";
import ChatAssistant from "../components/ChatAssistant";

import DownloadCV from "../components/DownloadCV";
import Achievements from "../components/Achievements";
import Certificates from "../components/Certificates";
import CTA from "../components/CTA";
import GlowBackground from "../components/GlowBackground";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <>
      <GlowBackground />

      <ChatAssistant />

      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Stats />

      <SkillsSection />

      <ExpertiseServices />

      

      <Languages />

      <Achievements />

      <Certificates />

      <Projects />

      <Timeline />

      <DownloadCV />

      <CTA />

      <Contact />

      <Footer />

      <ParticleBackground />

      <BackToTop />

      <ThemeToggle />
    </>
  );
}