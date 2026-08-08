import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import LookingFor from "../components/LookingFor";
import Stats from "../components/Stats";
import SkillsSection from "../components/SkillsSection";
import Expertise from "../components/Expertise";
import Services from "../components/sections/Services";
import FeaturedProjects from "../components/FeaturedProjects";
import Certificates from "../components/Certificates";
import Timeline from "../components/Timeline";
import Achievements from "../components/Achievements";
import CTA from "../components/CTA";
import WhyHireMe from "../components/WhyHireMe";

import ChatAssistant from "../components/ChatAssistant";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import ThemeToggle from "../components/ThemeToggle";
import GlowBackground from "../components/GlowBackground";
import ParticleBackground from "../components/ParticleBackground";

import DownloadCV from "../components/DownloadCV";

export default function Home() {
  return (
    <>
      {/* Arrière-plan */}
      <GlowBackground />
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Progression du scroll */}
      <ScrollProgress />

      <main>

        {/* 1. Présentation */}
        <Hero />

        {/* 2. Présentation personnelle */}
        <About />

        <LookingFor />
        {/* 3. Chiffres */}
        <Stats />

        {/* 4. Technologies / expertises */}
        <Expertise />

        <SkillsSection />

        {/* 5. Services */}
        <Services />

        {/* 6. Projets principaux */}
        <FeaturedProjects />

        {/* 7. Tous les projets */}
        <Achievements />

        {/* 8. Parcours */}
        <Timeline />

        {/* 9. Certifications */}
        <Certificates />

        {/* 10. Expérience */}
        <Experience />

        {/* 11. CV */}
        <DownloadCV />

        {/* 12. Pourquoi moi */}
        <WhyHireMe />

        {/* 13. Appel à l'action */}
        <CTA />

        {/* 14. Contact */}
        <Contact />

      </main>

      {/* Assistant IA */}
      <ChatAssistant />

      {/* Utilitaires */}
      <BackToTop />
      <ThemeToggle />

      {/* Footer */}
      <Footer />
    </>
  );
}