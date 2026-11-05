import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
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

export default function HomePage() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState('Website Development');

  const handleSelectServiceForContact = (serviceTitle) => {
    setSelectedServiceForContact(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F8FC] flex flex-col">
      <Navbar onOpenContactWithService={handleSelectServiceForContact} />

      <main className="flex-1">
        <Hero onExploreServices={handleExploreServices} />
        <About onInquire={() => handleSelectServiceForContact('General Inquiry')} />
        <Services onSelectServiceForContact={handleSelectServiceForContact} />
        <WhyChooseUs onInquire={() => handleSelectServiceForContact('Growth Strategy')} />
        <Process onInquire={() => handleSelectServiceForContact('Full-Suite Growth Package')} />
        <Portfolio onSelectServiceForContact={handleSelectServiceForContact} />
        <Testimonials onInquire={() => handleSelectServiceForContact('Case Study Inquiries')} />
        <FAQ />
        <Contact preselectedService={selectedServiceForContact} />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
