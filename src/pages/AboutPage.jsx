import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEOHead from '../components/SEOHead';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import RegionalStrip from '../components/RegionalStrip';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Check, 
  Users, 
  HeartHandshake, 
  ArrowRight, 
  Sparkles,
  Award,
  Cpu
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F8FC] flex flex-col">
      <SEOHead
        title="About Us - Digital Growth Partner in AP & Telangana"
        description="Learn about SUNEEL MEDIA TECH, the premier digital marketing and web technology agency headquartered in Guntur, Andhra Pradesh, serving businesses across Hyderabad and Telangana."
        keywords="About Suneel Media Tech, Digital Marketing Agency Guntur, Web Development Agency Hyderabad, Best SEO Agency Andhra Pradesh, IT Agency Guntur"
        canonicalPath="/about"
      />

      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="pt-12 pb-16 bg-radial-glow border-b border-[#162B48]/60 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
              <span>THE SUNEEL MEDIA TECH STORY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Building Brands.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
                Growing Businesses.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We are an engineering-driven digital marketing and technology agency founded to give businesses in <strong>Andhra Pradesh and Telangana</strong> international-grade digital firepower without agency bloated costs.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Check className="w-4 h-4" /> Est. {COMPANY_INFO.establishedYear}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-white font-medium">
                <MapPin className="w-4 h-4 text-[#FF9900]" /> Guntur Strategy HQ
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#087EF5] font-medium">
                <Building2 className="w-4 h-4" /> Pan-Telangana Operations
              </span>
            </div>

          </div>
        </section>

        {/* Agency Mission, Vision & DNA */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF9900]">
                <span>Our Founding Conviction</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Why We Built SUNEEL MEDIA TECH
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Too many growing businesses in Guntur, Vijayawada, and Hyderabad were being let down by two extremes: unreliable freelancers who disappeared mid-project, or overpriced metro agencies that treated them like an afterthought.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                <strong>SUNEEL MEDIA TECH was established to be the antidote.</strong> We treat every client's business as if it were our own. We combine the technical discipline of senior software engineers with the creative agility of a high-growth marketing studio.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-[#087EF5]/20 text-[#087EF5] mt-1 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Modern Engineering, Not Template Copy-Pasting</h4>
                    <p className="text-xs text-slate-400">We construct custom, lightweight React and modern CMS platforms tailored to your conversion metrics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-[#FF9900]/20 text-[#FF9900] mt-1 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Regional AP & Telangana Authority</h4>
                    <p className="text-xs text-slate-400">We know what triggers a buyer in Guntur versus a corporate decision-maker in Hyderabad.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 mt-1 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">100% Asset & Account Ownership</h4>
                    <p className="text-xs text-slate-400">You retain total ownership of your source code, domain, ad accounts, and creative assets.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Agency Blueprint */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0B192E] border border-[#1E3A63] space-y-6 text-left relative overflow-hidden">
              <div className="flex items-center gap-4 border-b border-[#162B48] pb-6">
                <img
                  src="/suneel-emblem-transparent.png"
                  alt="Suneel Media Tech"
                  className="w-16 h-16 object-contain p-2 bg-[#071426] rounded-2xl border border-[#087EF5]/30"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">SUNEEL MEDIA TECH</h3>
                  <p className="text-xs text-[#FF9900] font-semibold">{COMPANY_INFO.brandPositioning}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#071426] border border-[#162B48]">
                  <div className="text-2xl font-black text-white">150+</div>
                  <div className="text-xs text-slate-400 mt-1">Delivered Projects</div>
                </div>

                <div className="p-4 rounded-xl bg-[#071426] border border-[#162B48]">
                  <div className="text-2xl font-black text-[#FF9900]">96%</div>
                  <div className="text-xs text-slate-400 mt-1">Client Retention</div>
                </div>

                <div className="p-4 rounded-xl bg-[#071426] border border-[#162B48]">
                  <div className="text-2xl font-black text-emerald-400">4.8x</div>
                  <div className="text-xs text-slate-400 mt-1">Average Target ROAS</div>
                </div>

                <div className="p-4 rounded-xl bg-[#071426] border border-[#162B48]">
                  <div className="text-2xl font-black text-[#087EF5]">2 hrs</div>
                  <div className="text-xs text-slate-400 mt-1">Response Commitment</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#0C1D36] to-[#071426] border border-[#087EF5]/30 text-xs text-slate-300">
                <div className="font-bold text-white mb-1">Our Core Promise:</div>
                "Zero vanity metrics. Every website we build and ad we run must contribute directly to customer acquisition and bottom-line profit."
              </div>
            </div>

          </div>
        </section>

        {/* Regional AP & Telangana Footprint Strip */}
        <RegionalStrip />

        {/* 4-Pillar Approach Section */}
        <About onInquire={() => {}} />

        {/* 5-Step Process Section */}
        <Process onInquire={() => {}} />

        {/* Why Choose Us & Comparison Matrix */}
        <WhyChooseUs onInquire={() => {}} />

        {/* Final Conversion Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0C1D36] via-[#0B192E] to-[#0C1D36] border border-[#1E3A63] text-center space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Work with a Genuine Growth Partner?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Schedule a 1-on-1 strategy discovery session with our team in Guntur or connect virtually across AP and Telangana.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-base shadow-xl transition-all"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
