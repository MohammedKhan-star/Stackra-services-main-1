import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Main Sections
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SolutionsSection from "./components/sections/SolutionsSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import ProcessSection from "./components/sections/ProcessSection";
import TechnologyStackSection from "./components/sections/TechnologyStackSection";
import VideosSection from "./components/sections/VideosSection";
import FaqSection from "./components/sections/FaqSection";
import ContactForm from "./components/sections/ContactForm";

// Floating UI Components
import WhatsAppButton from "./components/ui/WhatsAppButton";
import QuotationButton from "./components/ui/QuotationButton";
import Chatbot from "./components/ui/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =========================================
          NAVIGATION
      ========================================= */}
      <Navbar />

      {/* =========================================
          1. HERO
          First impression + primary CTA
      ========================================= */}
      <section
        id="home"
        className="scroll-mt-24"
      >
        <HeroSection />
      </section>

      {/* =========================================
          2. ABOUT
          Who is STACKRA?
      ========================================= */}
      <section
        id="about"
        className="scroll-mt-24"
      >
        <AboutSection />
      </section>

      {/* =========================================
          3. SOLUTIONS
          Problems we solve for businesses
      ========================================= */}
      

      {/* =========================================
          4. SERVICES
          What STACKRA offers
      ========================================= */}
      <section
        id="services"
        className="scroll-mt-24"
      >
        <ServicesSection />
      </section>

      {/* =========================================
          5. PROJECTS
          Portfolio / proof / products
      ========================================= */}
      <section
        id="projects"
        className="scroll-mt-24"
      >
        <ProjectsSection />
      </section>

      {/* =========================================
          6. WHY STACKRA
          Why clients should choose us
      ========================================= */}
      <section
        id="why-stackra"
        className="scroll-mt-24"
      >
        <WhyChooseUsSection />
      </section>

      {/* =========================================
          7. PROCESS
          How we work with clients
      ========================================= */}
      <section
        id="process"
        className="scroll-mt-24"
      >
        <ProcessSection />
      </section>

      {/* =========================================
          8. TECHNOLOGY
          Technology and development capabilities
      ========================================= */}
      <section
        id="technologies"
        className="scroll-mt-24"
      >
        <TechnologyStackSection />
      </section>

      {/* =========================================
          9. VIDEOS
          Company / product videos
      ========================================= */}
      <section
        id="videos"
        className="scroll-mt-24"
      >
        <VideosSection />
      </section>

      {/* =========================================
          10. FAQ
          Frequently asked questions
      ========================================= */}
      <section
        id="faq"
        className="scroll-mt-24"
      >
        <FaqSection />
      </section>

      {/* =========================================
          11. CONTACT
          Lead generation / project enquiry
      ========================================= */}
      <section
        id="contact"
        className="scroll-mt-24"
      >
        <ContactForm />
      </section>

      {/* =========================================
          FLOATING ACTIONS
      ========================================= */}

      {/* Project quotation */}
      <QuotationButton />

      {/* WhatsApp contact */}
      <WhatsAppButton />

      {/* STACKRA AI / Website chatbot */}
      <Chatbot />

      {/* =========================================
          FOOTER
      ========================================= */}
      <Footer />

    </main>
  );
}