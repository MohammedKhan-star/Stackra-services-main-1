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

import WhatsAppButton from "./components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main>
 
      <Navbar />
      {/* Main Introduction */}
      <HeroSection />
      <AboutSection />


      {/* Core Business */}
      <ServicesSection />
      <WhyChooseUsSection />
      <TechnologyStackSection />
      <VideosSection />
      <ProjectsSection />


      {/* How We Work */}
      <ProcessSection />

      {/* Questions & Contact */}
      <FaqSection />
      <ContactForm />

      {/* Quick Contact */}
      <WhatsAppButton />

      <Footer />
    </main>
  );
}