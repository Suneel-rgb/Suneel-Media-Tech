import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  Globe, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICES_DATA } from '../data/servicesData';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030A14] text-slate-400 border-t border-[#162B48] relative overflow-hidden">
      {/* Top Pre-Footer Strip */}
      <div className="bg-[#071426]/70 border-b border-[#162B48]/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <img
              src="/suneel-emblem-transparent.png"
              alt="Suneel Media Tech"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="text-white font-extrabold text-lg">
                Ready to dominate your digital market?
              </div>
              <div className="text-xs text-slate-400">
                {COMPANY_INFO.primaryTagline || COMPANY_INFO.tagline} • Serving Guntur, Andhra Pradesh & International Clients.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-xs shadow-md transition-all whitespace-nowrap"
            >
              Get Free Growth Audit
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#0B192E] border border-[#162B48] hover:border-emerald-500 text-emerald-400 font-bold text-xs transition-all whitespace-nowrap"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <a href="#home" className="inline-block">
              <img
                src="/suneel-logo-tight.png"
                alt="SUNEEL MEDIA TECH"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">SUNEEL MEDIA TECH</strong> is a premier digital marketing agency and technology partner based in Guntur, Andhra Pradesh. We engineer custom high-speed websites, dominate search engine rankings, and scale paid acquisition funnels for ambitious brands.
            </p>

            <div className="space-y-1 text-xs text-slate-400">
              <div className="text-white font-semibold">{COMPANY_INFO.tagline}</div>
              <div className="text-[#FF9900] font-medium">{COMPANY_INFO.secondaryTagline}</div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Connect With Us
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#071426] border border-[#162B48] hover:border-[#087EF5] text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#071426] border border-[#162B48] hover:border-[#087EF5] text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#071426] border border-[#162B48] hover:border-[#087EF5] text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={COMPANY_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#071426] border border-[#162B48] hover:border-emerald-500 text-xs font-medium text-emerald-400 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">All Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio / Work</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#BAE0FD] transition-colors flex items-center justify-between">
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Guntur Office & Inquiries
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#087EF5] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF9900] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#087EF5] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#071426] border border-[#162B48] text-xs space-y-1">
              <div className="text-white font-semibold">Business Hours</div>
              <div>{COMPANY_INFO.contact.workingHours}</div>
            </div>
          </div>

        </div>

        {/* Local SEO Keywords Natural Strip */}
        <div className="mt-12 pt-8 border-t border-[#162B48]/60 text-left">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Regional Focus Areas:
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            {COMPANY_INFO.seoKeywords.map((kw, idx) => (
              <span key={idx} className="bg-[#071426] px-2.5 py-1 rounded border border-[#162B48]/50">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-[#162B48] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <strong>SUNEEL MEDIA TECH</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-700">•</span>
            <a href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
            <span className="text-slate-700">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
