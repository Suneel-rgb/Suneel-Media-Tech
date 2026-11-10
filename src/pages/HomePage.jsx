import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import SelectedWork from '../components/SelectedWork';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEOHead from '../components/SEOHead';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F8FC] flex flex-col font-sans selection:bg-[#087EF5]/30 selection:text-white">
      <SEOHead
        title="We Build Digital Experiences That Move Brands Forward"
        description="SUNEEL MEDIA TECH is a modern digital growth and technology partner helping businesses build, strengthen, and scale their digital presence through strategy, technology, and creative execution."
        keywords="Digital Agency, Digital Growth Partner, Web Development, SEO, Performance Marketing, Brand Identity, Suneel Media Tech, AP, Telangana"
        canonicalPath="/"
      />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        {/* 1. Hero: We Build Digital Experiences That Move Brands Forward */}
        <Hero />

        {/* 2. About: Built for What's Next */}
        <About />

        {/* 3. Services: Our Expertise */}
        <Services />

        {/* 4. Selected Work: Genuine Project Blueprints */}
        <SelectedWork />

        {/* 5. Why Us: A Better Way to Grow */}
        <WhyChooseUs />

        {/* 6. Final CTA: Let's Create What's Next */}
        <Contact />
      </main>

      {/* Global Minimal Premium Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Access */}
      <FloatingWhatsApp />
    </div>
  );
}
