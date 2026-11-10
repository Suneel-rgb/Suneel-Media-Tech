import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040C18] text-slate-400 border-t border-[#162B48] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Main Grid: 4 Clean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#162B48]/60">
          
          {/* Col 1: Brand & Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <Link to="/" className="inline-block" aria-label="SUNEEL MEDIA TECH Home">
              <img
                src="/suneel-logo-tight.png"
                alt="SUNEEL MEDIA TECH"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              A modern digital growth and technology partner helping businesses build, strengthen, and scale their digital presence.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Guntur HQ • Hyderabad Consulting • AP & Telangana</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#087EF5] font-semibold block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/works" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#087EF5] font-semibold block">
              CONTACT
            </span>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors text-white font-medium"
              >
                <Phone className="w-4 h-4 text-[#FF9900]" />
                <span>{COMPANY_INFO.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#087EF5]" />
                <span>{COMPANY_INFO.contact.email}</span>
              </a>

              <div className="flex items-start gap-2 text-xs text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.address.full}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Socials & Back to Top (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#087EF5] font-semibold block">
              CONNECT
            </span>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:text-white transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:text-white transition-colors"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:text-white transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span>© {currentYear} SUNEEL MEDIA TECH. All rights reserved.</span>
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
