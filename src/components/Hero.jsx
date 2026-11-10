import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Code2, Compass, PenTool, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-[#071426] border-b border-[#162B48]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#087EF5] font-medium">
                Digital Growth • Technology • Creative
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] font-heading">
              We Build Digital Experiences That Move Brands Forward.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Strategy, technology, and creativity come together to help businesses grow with confidence.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-semibold text-sm tracking-wide transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/works"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B192E] hover:bg-[#102442] text-white font-medium text-sm tracking-wide border border-[#162B48] hover:border-[#087EF5]/60 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EF5]"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-150" />
              </Link>
            </div>

            {/* Verified Footprint Subtext */}
            <div className="pt-4 flex items-center gap-2.5 text-xs text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>Strategy HQ: Guntur, AP • Client Hub: Hyderabad, Telangana</span>
            </div>

          </div>

          {/* Right Column: Architectural Agency Capability Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-[#0B192E] border border-[#162B48] p-6 sm:p-8 space-y-6">
              
              {/* Header Ticker */}
              <div className="flex items-center justify-between border-b border-[#162B48] pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Agency Architecture
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#071426] text-slate-300 border border-[#162B48]">
                  Suneel Media Tech
                </span>
              </div>

              {/* Three Disciplinary Pillars */}
              <div className="space-y-3.5">
                
                {/* 01 / Strategy */}
                <div className="p-4 rounded-xl bg-[#071426] border border-[#162B48] hover:border-[#087EF5]/40 transition-colors duration-150 group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#087EF5] tabular-nums">01 / STRATEGY</span>
                    <Compass className="w-4 h-4 text-slate-500 group-hover:text-[#087EF5] transition-colors duration-150" />
                  </div>
                  <h3 className="text-base font-semibold text-white mt-2">Commercial & Brand Intelligence</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Audience mapping, search positioning, and targeted acquisition blueprints that drive measurable revenue.
                  </p>
                </div>

                {/* 02 / Technology */}
                <div className="p-4 rounded-xl bg-[#071426] border border-[#162B48] hover:border-[#087EF5]/40 transition-colors duration-150 group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#087EF5] tabular-nums">02 / TECHNOLOGY</span>
                    <Code2 className="w-4 h-4 text-slate-500 group-hover:text-[#087EF5] transition-colors duration-150" />
                  </div>
                  <h3 className="text-base font-semibold text-white mt-2">High-Performance Engineering</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Custom web applications, e-commerce storefronts, and digital systems engineered for sub-second speed.
                  </p>
                </div>

                {/* 03 / Creative */}
                <div className="p-4 rounded-xl bg-[#071426] border border-[#162B48] hover:border-[#087EF5]/40 transition-colors duration-150 group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#087EF5] tabular-nums">03 / CREATIVE</span>
                    <PenTool className="w-4 h-4 text-slate-500 group-hover:text-[#087EF5] transition-colors duration-150" />
                  </div>
                  <h3 className="text-base font-semibold text-white mt-2">Distinctive Visual Identity</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Brand systems, typography, and visual storytelling that command authority in competitive markets.
                  </p>
                </div>

              </div>

              {/* Verified Commitment */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-[#162B48]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#087EF5]" />
                  <span>100% Client Code & IP Ownership</span>
                </span>
                <span className="font-mono text-slate-400 tabular-nums">EST. 2021</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
