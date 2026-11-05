import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RegionalStrip from '../components/RegionalStrip';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEOHead from '../components/SEOHead';
import { ArrowRight, Sparkles, FolderGit2, Layers } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F8FC] flex flex-col">
      <SEOHead
        title="Premier Digital Marketing & Web Development Agency in AP & Telangana"
        description="SUNEEL MEDIA TECH is the premier digital marketing agency and web development company serving Andhra Pradesh (Guntur, Vijayawada, Vizag) and Telangana (Hyderabad, Warangal). Custom websites, SEO, and Meta/Google Ads."
        keywords="Digital Marketing Agency in AP and Telangana, Digital Marketing Services in Guntur, Website Development Company in Hyderabad, SEO Services in Andhra Pradesh, Social Media Marketing Agency Hyderabad, Google Ads Management Guntur"
        canonicalPath="/"
      />

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Regional Coverage Strip for AP & Telangana */}
        <RegionalStrip />

        {/* Services Showcase with Link to /services */}
        <section className="relative">
          <Services onSelectServiceForContact={() => {}} />
          <div className="bg-[#071426] pb-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0B192E] border border-[#087EF5]/40 hover:border-[#087EF5] text-white font-bold text-sm shadow-lg hover:shadow-[#087EF5]/20 transition-all group"
            >
              <Layers className="w-4 h-4 text-[#087EF5]" />
              <span>Explore All 6 Services & Full Deliverables</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Selected Works with Link to /works */}
        <section className="relative">
          <Portfolio onSelectServiceForContact={() => {}} />
          <div className="bg-[#040C18] pb-12 text-center">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0B192E] border border-[#FF9900]/40 hover:border-[#FF9900] text-white font-bold text-sm shadow-lg hover:shadow-[#FF9900]/20 transition-all group"
            >
              <FolderGit2 className="w-4 h-4 text-[#FF9900]" />
              <span>View All Project Blueprints & Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* About Overview with Link to /about */}
        <section className="relative">
          <About onInquire={() => {}} />
          <div className="bg-[#040C18] pb-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0B192E] border border-[#087EF5]/40 hover:border-[#087EF5] text-white font-bold text-sm shadow-lg hover:shadow-[#087EF5]/20 transition-all group"
            >
              <Sparkles className="w-4 h-4 text-[#087EF5]" />
              <span>Learn More About Our Team & Regional Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* 5-Step Process Section */}
        <Process onInquire={() => {}} />

        {/* Why Choose Us & Market Comparison Matrix */}
        <WhyChooseUs onInquire={() => {}} />

        {/* Testimonials Framework & Trust Policy */}
        <Testimonials onInquire={() => {}} />

        {/* Searchable FAQ Accordion */}
        <FAQ />

        {/* Lead Generation Contact Section */}
        <Contact preselectedService="Website Development" />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
