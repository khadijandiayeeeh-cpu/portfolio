import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
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
import GlowBackground from "../components/GlowBackground";
import LookingFor from "../components/LookingFor";

export default function Home() {
  return (
    <>
      <GlowBackground />

      <ChatAssistant />

      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

<LookingFor />
      <SkillsSection />

      <ExpertiseServices />

      

      <Languages />

      <Achievements />

      <Certificates />

      <Projects />


      <DownloadCV />


      <Contact />

      <Footer />

      <ParticleBackground />

      <BackToTop />

      <ThemeToggle />
    </>
  );
}