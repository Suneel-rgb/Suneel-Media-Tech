import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEOHead from '../components/SEOHead';
import ServiceModal from '../components/ServiceModal';
import { SERVICES_DATA } from '../data/servicesData';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Code2, 
  TrendingUp, 
  Share2, 
  Target, 
  Palette, 
  Video, 
  ArrowRight, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  MapPin, 
  Layers, 
  ChevronRight,
  Briefcase
} from 'lucide-react';

const ICON_MAP = {
  Code2: Code2,
  TrendingUp: TrendingUp,
  Share2: Share2,
  Target: Target,
  Palette: Palette,
  Video: Video,
};

const AP_TG_SECTORS = [
  {
    title: "Real Estate & Construction",
    cities: "Hyderabad, Vijayawada, Guntur, Vizag",
    desc: "High-intent lead generation funnels, virtual walkthrough video edits, and geo-targeted Google Search & Meta ad campaigns.",
  },
  {
    title: "Healthcare, Hospitals & Clinics",
    cities: "Guntur, Hyderabad, Tirupati, Kurnool",
    desc: "Google Business Profile 3-pack dominance, local SEO schema, patient appointment booking websites, and doctor brand trust.",
  },
  {
    title: "Retail & D2C E-Commerce",
    cities: "Hyderabad, Vijayawada, Rajahmundry, Warangal",
    desc: "Sub-second React & WooCommerce storefronts, payment gateway integrations, and catalog retargeting ads.",
  },
  {
    title: "Educational Institutions & Colleges",
    cities: "Guntur, Vijayawada, Hyderabad, Warangal",
    desc: "Student admission lead campaigns, social media management, brand awareness video ads, and institutional web portals.",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleInquire = (serviceTitle) => {
    navigate('/contact', { state: { preselectedService: serviceTitle } });
  };

  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F8FC] flex flex-col">
      <SEOHead
        title="Our Services - Digital Marketing & Web Development"
        description="Comprehensive digital marketing, SEO, Google & Meta Ads, React web development, and branding services tailored for businesses across Andhra Pradesh & Telangana."
        keywords="Website Development Services in Guntur, SEO Services in Hyderabad, Digital Marketing Services AP, Meta Ads Management Telangana, Graphic Design Guntur, Video Editing Hyderabad"
        canonicalPath="/services"
      />

      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="pt-12 pb-16 bg-radial-glow border-b border-[#162B48]/60 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              <span>FULL-SUITE AGENCY SERVICES • AP & TELANGANA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Strategic Digital Services Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
                Measurable Business Growth.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We provide enterprise-grade web development, search engine domination, high-ROAS paid ads, and iconic creative branding for businesses in <strong>Guntur, Hyderabad, Vijayawada, Visakhapatnam</strong>, and beyond.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Check className="w-4 h-4" /> 100% Asset Ownership
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-[#087EF5]" /> Sub-Second Web Speed
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#FF9900] font-medium">
                <MapPin className="w-4 h-4" /> Local AP & TG Context
              </span>
            </div>

          </div>
        </section>

        {/* 6 Comprehensive Services Cards Grid */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES_DATA.map((service, index) => {
              const IconComponent = ICON_MAP[service.icon] || Code2;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-3xl bg-[#0B192E] border border-[#162B48] p-6 sm:p-10 lg:p-12 hover:border-[#087EF5]/40 transition-all duration-300 shadow-xl relative overflow-hidden"
                >
                  {/* Glowing background hint */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#087EF5]/5 rounded-full blur-3xl pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Details */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-2xl bg-[#071426] border border-[#162B48] flex items-center justify-center text-[#087EF5] shadow-inner">
                            <IconComponent className="w-7 h-7" />
                          </div>
                          <div>
                            <span className="text-xs font-mono font-bold text-[#FF9900] uppercase tracking-wider">
                              SERVICE #{service.number}
                            </span>
                            <span className="text-slate-500 mx-2">•</span>
                            <span className="text-xs font-semibold text-[#BAE0FD] uppercase">
                              {service.badge}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {service.longDescription}
                      </p>

                      {/* Sub-services pills */}
                      <div className="space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Specialized Sub-Capabilities:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.subServices.map((sub, sIdx) => (
                            <div key={sIdx} className="p-2.5 rounded-lg bg-[#071426] border border-[#162B48]">
                              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#087EF5]" />
                                <span>{sub.name}</span>
                              </div>
                              <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                                {sub.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleInquire(service.title)}
                          className="px-6 py-3 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#FF9900]/25 transition-all cursor-pointer"
                        >
                          <span>Inquire for {service.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleOpenModal(service)}
                          className="px-5 py-3 rounded-xl bg-[#071426] border border-[#162B48] hover:border-[#087EF5] text-slate-200 text-sm font-semibold transition-all cursor-pointer"
                        >
                          View Full Deliverables
                        </button>
                      </div>
                    </div>

                    {/* Right Highlights & Deliverables Box */}
                    <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#071426] border border-[#1E3A63] space-y-5 text-left">
                      <div className="flex items-center justify-between border-b border-[#162B48] pb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#BAE0FD]">
                          Standard Deliverables
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400">Verified Quality</span>
                      </div>

                      <div className="space-y-2.5">
                        {service.deliverables.slice(0, 5).map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-3 border-t border-[#162B48] space-y-2">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Tools & Technology Stack:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((t, tIdx) => (
                            <span key={tIdx} className="px-2 py-0.5 rounded bg-[#0C1D36] border border-[#162B48] text-[11px] font-mono text-slate-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#0C1D36] border border-[#087EF5]/30 text-xs text-[#BAE0FD] flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#FF9900] shrink-0" />
                        <span>{service.metricsHighlight}</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Regional Sector Solutions in AP & Telangana */}
        <section className="py-16 bg-[#040C18] border-t border-[#162B48]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/15 text-[#FF9900] text-xs font-bold">
                <Briefcase className="w-3.5 h-3.5" />
                <span>INDUSTRY SPECIALIZATIONS IN AP & TELANGANA</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Tailored Digital Growth Blueprints for Key Regional Sectors
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Commercial dynamics vary across Guntur, Vijayawada, and Hyderabad. We build custom campaigns aligned with your specific industry buyers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {AP_TG_SECTORS.map((sec, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0B192E] border border-[#162B48] flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white">{sec.title}</h3>
                    <div className="text-[11px] font-medium text-[#FF9900] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{sec.cities}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {sec.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleInquire(`${sec.title} Growth Package`)}
                    className="text-xs font-bold text-[#087EF5] hover:text-[#48A7FF] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Request Industry Blueprint</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0C1D36] via-[#0B192E] to-[#0C1D36] border border-[#1E3A63] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need a Custom Package Combining Web, SEO & Paid Ads?
              </h3>
              <p className="text-sm text-slate-300">
                Let's evaluate your existing digital presence across Andhra Pradesh and Telangana. We'll deliver a comprehensive growth proposal within 2 hours.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-base shadow-xl transition-all whitespace-nowrap"
            >
              Request Custom Proposal
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />

      <ServiceModal
        service={selectedService}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectServiceForContact={handleInquire}
      />
    </div>
  );
}

