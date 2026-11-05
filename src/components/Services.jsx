import React, { useState } from 'react';
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
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import ServiceModal from './ServiceModal';

const ICON_MAP = {
  Code2: Code2,
  TrendingUp: TrendingUp,
  Share2: Share2,
  Target: Target,
  Palette: Palette,
  Video: Video,
};

export default function Services({ onSelectServiceForContact }) {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleSelectService = (serviceTitle) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceTitle);
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#071426] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#087EF5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>FULL-SPECTRUM AGENCY CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            High-Impact Digital Services Engineered for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
              Measurable Revenue.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            From bespoke React web development and local SEO dominance in Guntur to viral social media content and high-ROAS paid advertising, we provide the full firepower your brand needs to lead.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Code2;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-[#087EF5]/10 hover:-translate-y-1.5"
              >
                {/* Top Glowing Edge Accent */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#087EF5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 sm:p-7 space-y-5">
                  {/* Card Header: Icon, Number, Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-[#071426] border border-[#162B48] flex items-center justify-center text-[#087EF5] group-hover:text-white group-hover:bg-[#087EF5] transition-all duration-300 shadow-inner">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <span className="text-2xl font-black font-mono text-slate-600 group-hover:text-[#FF9900] transition-colors">
                        {service.number}
                      </span>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#BAE0FD] block">
                        {service.badge}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#BAE0FD] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed min-h-[64px]">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Sub-Services Pill Grid */}
                  <div className="space-y-2 pt-2 border-t border-[#162B48]/80">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Includes:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.subServices.slice(0, 4).map((sub, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-[#071426] border border-[#162B48] text-[11px] font-medium text-slate-300"
                        >
                          {sub.name}
                        </span>
                      ))}
                      {service.subServices.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-[#071426] text-[11px] font-semibold text-[#087EF5]">
                          +{service.subServices.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Deliverables snippet */}
                  <div className="text-xs text-slate-400 flex items-center gap-2 pt-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{service.metricsHighlight}</span>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-4 sm:px-6 bg-[#071426]/80 border-t border-[#162B48] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(service)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#087EF5]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectService(service.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#FF9900]/15 hover:bg-[#FF9900] text-[#FF9900] hover:text-slate-950 border border-[#FF9900]/30 hover:border-[#FF9900] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Comprehensive Custom Package Strip */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#0B192E] border border-[#1E3A63] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#FF9900]" />
              <span>Need a Custom Full-Stack Growth Package?</span>
            </h4>
            <p className="text-sm text-slate-300">
              Combine Website Development + Local SEO + Google & Meta Ads for maximum market acceleration.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleSelectService("Full-Suite Growth Package")}
            className="px-6 py-3 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-sm shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            Get Custom Growth Proposal
          </button>
        </div>

      </div>

      {/* Deep-Dive Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectServiceForContact={handleSelectService}
      />
    </section>
  );
}
