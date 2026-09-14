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

      {/* =========================================
          GLOBAL NAVIGATION
      ========================================= */}
      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}
      <section id="home" className="scroll-mt-24">
        <HeroSection />
      </section>

      {/* =========================================
          ABOUT
      ========================================= */}
      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>

      {/* =========================================
          SOLUTIONS
      ========================================= */}
      <SolutionsSection />

      {/* =========================================
          SERVICES
      ========================================= */}
      <section
        id="services"
        className="scroll-mt-24"
      >
        <ServicesSection />
      </section>

      {/* =========================================
          WHY CHOOSE STACKRA
      ========================================= */}
      <WhyChooseUsSection />

      {/* =========================================
          TECHNOLOGY
      ========================================= */}
      <section
        id="technologies"
        className="scroll-mt-24"
      >
        <TechnologyStackSection />
      </section>

      {/* =========================================
          PROJECTS
      ========================================= */}
      <ProjectsSection />

      {/* =========================================
          PROCESS
      ========================================= */}
      <ProcessSection />

      {/* =========================================
          VIDEOS
      ========================================= */}
      <section
        id="videos"
        className="scroll-mt-24"
      >
        <VideosSection />
      </section>

      {/* =========================================
          FAQ
      ========================================= */}
      <section
        id="faq"
        className="scroll-mt-24"
      >
        <FaqSection />
      </section>

      {/* =========================================
          CONTACT
      ========================================= */}
      <section
        id="contact"
        className="scroll-mt-24"
      >
        <ContactForm />
      </section>

      {/* =========================================
          FLOATING WHATSAPP
      ========================================= */}
      <WhatsAppButton />

      {/* =========================================
          FOOTER
      ========================================= */}
      <Footer />

    </main>
  );
}