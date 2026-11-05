import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEOHead from '../components/SEOHead';
import Contact from '../components/Contact';
import RegionalStrip from '../components/RegionalStrip';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  MessageCircle,
  Building2
} from 'lucide-react';

export default function ContactPage() {
  const location = useLocation();
  const preselectedService = location.state?.preselectedService || 'Website Development';

  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F8FC] flex flex-col">
      <SEOHead
        title="Contact Us - Free Digital Growth Proposal"
        description="Connect with SUNEEL MEDIA TECH for web development, SEO, and digital marketing inquiries in Guntur, Hyderabad, Vijayawada, Visakhapatnam, and across AP & Telangana."
        keywords="Contact Suneel Media Tech, Digital Marketing Guntur Contact, Web Development Hyderabad Office, SEO Consultation AP, Digital Agency Phone Number"
        canonicalPath="/contact"
      />

      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="pt-12 pb-14 bg-radial-glow border-b border-[#162B48]/60 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              <span>LET'S TALK BUSINESS GROWTH • AP & TELANGANA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Get in Touch with Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
                Strategy Team.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Whether you need a high-converting website, organic Google rankings in Guntur/Hyderabad, or high-ROAS ads, our senior strategists are ready to assist.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-[#0B192E] px-3 py-1 rounded-full border border-[#162B48]">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0B192E] px-3 py-1 rounded-full border border-[#162B48]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Confidential Discovery</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0B192E] px-3 py-1 rounded-full border border-[#162B48]">
                <MapPin className="w-3.5 h-3.5 text-[#087EF5]" />
                <span>Serving AP & Telangana</span>
              </div>
            </div>

          </div>
        </section>

        {/* Lead Form & Direct Channels Component */}
        <Contact preselectedService={preselectedService} />

        {/* Regional Coverage Strip */}
        <RegionalStrip />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

