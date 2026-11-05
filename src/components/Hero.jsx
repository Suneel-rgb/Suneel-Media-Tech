import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2, ShieldCheck, Zap, Globe, BarChart3, Layers, Code, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ onExploreServices }) {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-20 md:py-24 overflow-hidden bg-radial-glow">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #087EF5 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#087EF5]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs sm:text-sm font-semibold text-[#BAE0FD] shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-[#FF9900] animate-ping" />
              <span className="text-white font-bold tracking-wide">SUNEEL MEDIA TECH</span>
              <span className="text-[#087EF5]">•</span>
              <span className="text-slate-300">Your Digital Growth Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Transform Your Business Into a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
                Powerful Digital Brand.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              We help businesses grow through innovative websites, strategic digital marketing and creative solutions that deliver measurable results.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#FF9900] shrink-0" />
                <span>Custom High-Speed Websites (React & Modern CMS)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#FF9900] shrink-0" />
                <span>Rank #1 with Local & National SEO</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#087EF5] shrink-0" />
                <span>Targeted Google & Meta Lead Ads</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#087EF5] shrink-0" />
                <span>Transparent ROI & Performance Reporting</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => handleScroll('#contact')}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-base tracking-wide shadow-xl shadow-[#FF9900]/30 hover:shadow-2xl hover:shadow-[#FF9900]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>Let's Grow Your Business</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onExploreServices) onExploreServices();
                  else handleScroll('#services');
                }}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#0C1D36] hover:bg-[#162B48] text-white font-semibold text-base border border-[#162B48] hover:border-[#087EF5]/50 transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-[#087EF5]" />
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Local Trust Signal */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Headquartered in Guntur, Andhra Pradesh • Serving Businesses Pan-India & Globally</span>
            </div>

          </div>

          {/* Right Column: Visual Dashboard Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow backing */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#087EF5]/30 to-[#FF9900]/30 rounded-3xl blur-xl opacity-75" />

            {/* Main Interactive Agency Cockpit */}
            <div className="relative rounded-2xl bg-[#0B192E] border border-[#1E3A63] shadow-2xl overflow-hidden p-5 sm:p-6 text-left space-y-5">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-[#162B48] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400">suneelmediatech.com/growth-engine</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE CAMPAIGN</span>
                </div>
              </div>

              {/* Metric Row 1: High Impact Numbers */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#071426] border border-[#162B48]">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Organic Growth</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white mt-1">+340%</div>
                  <div className="text-[11px] text-emerald-400 font-medium mt-0.5">↑ Search Visibility</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#071426] border border-[#162B48]">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Ads Target ROAS</span>
                    <Zap className="w-3.5 h-3.5 text-[#FF9900]" />
                  </div>
                  <div className="text-2xl font-black text-[#FF9900] mt-1">4.8x</div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">Return on Ad Spend</div>
                </div>
              </div>

              {/* Visual Simulated Growth Chart */}
              <div className="p-4 rounded-xl bg-[#071426] border border-[#162B48] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                    <BarChart3 className="w-4 h-4 text-[#087EF5]" />
                    <span>Quarterly Traffic & Conversion Index</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#087EF5]/20 text-[#BAE0FD] font-mono">Q1-Q4</span>
                </div>

                {/* SVG Simulated Chart Wave */}
                <div className="h-24 w-full relative flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#087EF5" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#087EF5" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,70 Q 50,60 80,45 T 160,35 T 230,20 T 300,8 L 300,80 L 0,80 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M0,70 Q 50,60 80,45 T 160,35 T 230,20 T 300,8"
                      fill="none"
                      stroke="#087EF5"
                      strokeWidth="3"
                    />
                    <circle cx="80" cy="45" r="4" fill="#087EF5" />
                    <circle cx="160" cy="35" r="4" fill="#087EF5" />
                    <circle cx="230" cy="20" r="4" fill="#FF9900" />
                    <circle cx="300" cy="8" r="5" fill="#FF9900" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex justify-between text-[10px] text-slate-400 font-mono border-t border-[#162B48]/80 pt-2">
                  <span>Audit</span>
                  <span>Strategy</span>
                  <span>Launch</span>
                  <span>Scale</span>
                  <span className="text-[#FF9900] font-bold">Dominate</span>
                </div>
              </div>

              {/* Technology & Capability Badges */}
              <div className="space-y-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Technology & Multi-Channel Synergy
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#0C1D36] border border-[#162B48] text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <Code className="w-3 h-3 text-[#087EF5]" />
                    React.js & Tailwind
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0C1D36] border border-[#162B48] text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    Local SEO Guntur
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0C1D36] border border-[#162B48] text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-[#FF9900]" />
                    Google & Meta Ads
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0C1D36] border border-[#162B48] text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-cyan-400" />
                    High-End Branding
                  </span>
                </div>
              </div>

              {/* Floating Bottom Card: Performance Guarantee */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#087EF5]/15 to-[#FF9900]/15 border border-[#087EF5]/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#087EF5] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">Full-Stack Digital Execution</div>
                  <div className="text-slate-300">From concept & design to high-converting traffic and sales.</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Verified Stats Highlight Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#162B48] grid grid-cols-2 md:grid-cols-4 gap-6">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#0B192E]/60 border border-[#162B48]/80 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#BAE0FD]">
                  {stat.value}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
