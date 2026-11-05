import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ onOpenContactWithService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track sections
      const sections = ['home', 'about', 'services', 'why-us', 'process', 'portfolio', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar for agency announcement & contact info */}
      <div className="bg-[#040C18] border-b border-[#162B48]/60 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Available for New Projects</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Digital Marketing & Web Agency • Guntur, AP & Global</span>
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

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071426]/95 backdrop-blur-md border-b border-[#162B48] shadow-lg shadow-black/30 py-3'
            : 'bg-[#071426]/80 backdrop-blur-sm border-b border-[#162B48]/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Official Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EF5] rounded-lg"
              aria-label="SUNEEL MEDIA TECH Home"
            >
              <img
                src="/suneel-logo-tight.png"
                alt="SUNEEL MEDIA TECH"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-white bg-[#087EF5]/15 border border-[#087EF5]/40 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#087EF5] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
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

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-sm tracking-wide shadow-md shadow-[#FF9900]/25 transition-all duration-200 hover:shadow-lg hover:shadow-[#FF9900]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let's Grow</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
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
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#071426]/98 backdrop-blur-xl border-b border-[#162B48] shadow-2xl px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-2 pb-6 border-b border-[#162B48]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'text-white bg-[#087EF5]/20 border border-[#087EF5]/40 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#087EF5]' : 'text-slate-500'}`} />
                  </a>
                );
              })}
            </div>

            <div className="pt-6 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-base shadow-lg shadow-[#FF9900]/30 transition-all text-center"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Grow Your Business</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#0C1D36] border border-[#162B48] text-slate-200 font-medium text-sm text-center hover:bg-[#162B48] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF9900]" />
                <span>Call Us: {COMPANY_INFO.contact.phoneDisplay}</span>
              </a>

              <div className="pt-2 text-center text-xs text-slate-400">
                <span>{COMPANY_INFO.tagline}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
