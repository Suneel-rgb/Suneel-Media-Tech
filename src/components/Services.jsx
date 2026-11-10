import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import ServiceModal from './ServiceModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const servicesList = [
    {
      number: '01',
      title: 'Web Development',
      description: 'Digital experiences engineered for performance and usability.',
      serviceId: 'web-development',
    },
    {
      number: '02',
      title: 'Digital Marketing',
      description: 'Strategic campaigns designed to reach the right audience.',
      serviceId: 'google-meta-ads',
    },
    {
      number: '03',
      title: 'Search Engine Optimization',
      description: 'Improve visibility and attract meaningful organic traffic.',
      serviceId: 'seo-services',
    },
    {
      number: '04',
      title: 'Social Media Marketing',
      description: 'Build stronger connections between brands and audiences.',
      serviceId: 'social-media-marketing',
    },
    {
      number: '05',
      title: 'Brand Identity & Design',
      description: 'Create distinctive identities that make brands memorable.',
      serviceId: 'graphic-design-branding',
    },
    {
      number: '06',
      title: 'Creative Content & Video',
      description: 'Visual storytelling that brings brands to life.',
      serviceId: 'video-editing-creative-content',
    },
  ];

  const handleOpenDetail = (serviceId) => {
    const fullService = SERVICES_DATA.find((s) => s.id === serviceId);
    if (fullService) {
      setSelectedService(fullService);
      setModalOpen(true);
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#071426] relative border-b border-[#162B48]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#087EF5] font-medium">
              Capabilities & Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-heading">
              Our Expertise
            </h2>
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors duration-150"
          >
            <span>Explore Complete Deliverables</span>
            <ArrowRight className="w-4 h-4 text-[#087EF5] transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Numbered Editorial Index 01 — 06 */}
        <div className="divide-y divide-[#162B48] border-y border-[#162B48]">
          {servicesList.map((service) => (
            <div
              key={service.number}
              onClick={() => handleOpenDetail(service.serviceId)}
              className="group py-6 sm:py-7 px-3 sm:px-6 transition-colors duration-150 hover:bg-[#0B192E] flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-start md:items-center gap-6 sm:gap-10">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#087EF5] shrink-0 pt-0.5 md:pt-0 tabular-nums">
                  {service.number}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-[#BAE0FD] transition-colors duration-150">
                  {service.title}
                </h3>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 pl-12 md:pl-0">
                <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-md text-left md:text-right">
                  {service.description}
                </p>
                <div className="w-7 h-7 rounded-lg border border-[#162B48] group-hover:border-[#087EF5] group-hover:bg-[#087EF5]/10 flex items-center justify-center shrink-0 transition-colors duration-150">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-150" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectForContact={() => {
          setModalOpen(false);
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </section>
  );
}
