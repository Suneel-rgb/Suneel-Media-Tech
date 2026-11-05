import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle, Phone, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Works', path: '/works' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Regional Announcement Bar (AP & Telangana) */}
      <div className="bg-[#040C18] border-b border-[#162B48]/60 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-medium">Digital Growth Partner for AP & Telangana</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#FF9900]" />
              Guntur • Hyderabad • Vijayawada • Vizag
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="hover:text-[#087EF5] transition-colors flex items-center gap-1.5"
            >
              <span>{COMPANY_INFO.contact.email}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="hover:text-[#087EF5] transition-colors flex items-center gap-1.5 font-medium text-slate-300"
            >
              <Phone className="w-3 h-3 text-[#FF9900]" />
              <span>{COMPANY_INFO.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071426]/95 backdrop-blur-md border-b border-[#162B48] shadow-lg shadow-black/30 py-3'
            : 'bg-[#071426]/85 backdrop-blur-sm border-b border-[#162B48]/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo Link */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EF5] rounded-lg"
              aria-label="SUNEEL MEDIA TECH Home"
            >
              <img
                src="/suneel-logo-tight.png"
                alt="SUNEEL MEDIA TECH"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </Link>

            {/* Desktop Multipage Nav Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 relative ${
                      isActive
                        ? 'text-white bg-[#087EF5]/15 border border-[#087EF5]/40 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF9900] rounded-full" />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0C1D36] border border-[#162B48] text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200 group"
                title="Chat on WhatsApp"
                aria-label="Chat with Suneel Media Tech on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              </a>

              <Link
                to="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-sm tracking-wide shadow-md shadow-[#FF9900]/25 transition-all duration-200 hover:shadow-lg hover:shadow-[#FF9900]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get a Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0C1D36] border border-[#162B48] text-emerald-400"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#0C1D36] border border-[#162B48] text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#087EF5]"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-full bg-[#071426]/98 backdrop-blur-xl border-b border-[#162B48] shadow-2xl px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-2 pb-6 border-b border-[#162B48]">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'text-white bg-[#087EF5]/20 border border-[#087EF5]/40'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#FF9900]' : 'text-slate-500'}`} />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-base shadow-lg shadow-[#FF9900]/30 transition-all text-center"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Grow Your Business</span>
              </Link>

              <a
                href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#0C1D36] border border-[#162B48] text-slate-200 font-medium text-sm text-center hover:bg-[#162B48] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF9900]" />
                <span>Call Us: {COMPANY_INFO.contact.phoneDisplay}</span>
              </a>

              <div className="pt-2 text-center text-xs text-slate-400">
                <span>Serving Andhra Pradesh & Telangana</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
