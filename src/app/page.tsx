import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import TechnologyStackSection from "./components/sections/TechnologyStackSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ProcessSection from "./components/sections/ProcessSection";
import FaqSection from "./components/sections/FaqSection";
import ContactForm from "./components/sections/ContactForm";
import VideosSection from "./components/sections/VideosSection";
import SolutionsSection from "./components/sections/SolutionsSection";

import WhatsAppButton from "./components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ================================
          GLOBAL NAVIGATION
      ================================= */}
      <Navbar />

      {/* ================================
          01. HERO
          First impression + positioning
      ================================= */}
      <HeroSection />

      {/* ================================
          02. ABOUT STACKRA
          Who we are + what we do
      ================================= */}
      <AboutSection />
      <SolutionsSection />

      {/* ================================
          03. CORE SERVICES
          What businesses can get from us
      ================================= */}
      <ServicesSection />

      {/* ================================
          04. WHY STACKRA
          Differentiation + trust
      ================================= */}
      <WhyChooseUsSection />

      {/* ================================
          05. TECHNOLOGY
          Technology supporting our solutions
      ================================= */}
      <TechnologyStackSection />

      {/* ================================
          06. PROJECTS / CASE STUDIES
          Proof of what we build
      ================================= */}
      <ProjectsSection />

      {/* ================================
          07. HOW WE WORK
          Discovery → Design → Development → Launch
      ================================= */}
      <ProcessSection />

      {/* ================================
          08. SOCIAL / VIDEO CONTENT
          YouTube + Instagram + company media
      ================================= */}
      <VideosSection />

      {/* ================================
          09. FAQ
          Remove objections and answer questions
      ================================= */}
      <FaqSection />

      {/* ================================
          10. CONTACT / CONVERSION
          Final CTA
      ================================= */}
      <ContactForm />

      {/* ================================
          FLOATING WHATSAPP
      ================================= */}
      <WhatsAppButton />

      {/* ================================
          FOOTER
      ================================= */}
      <Footer />
    </main>
  );
}