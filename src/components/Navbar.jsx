import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/works' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071426]/95 backdrop-blur-md border-b border-[#162B48] shadow-xl py-3.5'
          : 'bg-[#071426]/80 backdrop-blur-sm border-b border-[#162B48]/50 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EF5] rounded-lg"
            aria-label="SUNEEL MEDIA TECH Home"
          >
            <img
              src="/suneel-logo-tight.png"
              alt="SUNEEL MEDIA TECH"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`text-sm tracking-wide font-medium transition-colors duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#087EF5] rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop CTA: Let's Talk */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#FF9900]/20 hover:shadow-lg hover:shadow-[#FF9900]/35 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full bg-[#FF9900] text-slate-950 font-bold text-xs uppercase tracking-wider"
            >
              Let's Talk
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0B192E] border border-[#162B48] text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#087EF5]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#071426]/98 backdrop-blur-xl border-b border-[#162B48] shadow-2xl px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-1 pb-6 border-b border-[#162B48]/60">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'text-white bg-[#087EF5]/15 border border-[#087EF5]/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#087EF5]' : 'text-slate-500'}`} />
                </Link>
              );
            })}
          </nav>

          <div className="pt-6">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#FF9900]/25 transition-all text-center"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
