import React from "react";
import { NavBar } from "../components/navigation/NavBar";
import { HeroSection } from "../components/Hero";
import { PresentationSection } from "../components/Presentation";
import { ServicesSection } from "../components/Services";
import { DaasSection } from "../components/Daas";
import { TestimonialsSection } from "../components/Testimonials";
import { WhyChooseUsSection } from "../components/WhyChooseUs";
import { ContactSection } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <NavBar />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <div id="presentation">
          <PresentationSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="daas">
          <DaasSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="why-choose-us">
          <WhyChooseUsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
