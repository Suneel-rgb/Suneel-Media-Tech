import React from 'react';
import { MapPin, Building2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/companyData';

export default function RegionalStrip() {
  return (
    <section className="py-12 bg-[#040C18] border-y border-[#162B48]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Mission in AP & Telangana */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/15 border border-[#FF9900]/30 text-xs font-bold text-[#FF9900]">
              <MapPin className="w-3.5 h-3.5" />
              <span>REGIONAL REACH: AP & TELANGANA</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Powering Digital Dominance for Businesses Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] to-[#00D2FF]">
                AP & Telangana.
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From our digital strategy hub in <strong>Guntur</strong> to fast-scaling tech & retail brands in <strong>Hyderabad</strong>, <strong>Vijayawada</strong>, and <strong>Visakhapatnam</strong>, we understand the local business culture, consumer intent, and commercial dynamics of the Telugu states.
            </p>

            <div className="pt-1">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087EF5] hover:text-[#48A7FF] transition-colors"
              >
                <span>Learn about our regional footprint & client approach</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: AP & Telangana Cities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Andhra Pradesh Card */}
            <div className="p-5 rounded-2xl bg-[#0B192E] border border-[#162B48] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#087EF5]/20 text-[#087EF5] flex items-center justify-center font-bold text-xs">
                    AP
                  </div>
                  <h4 className="text-sm font-bold text-white">Andhra Pradesh Focus</h4>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">HQ Guntur</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {COMPANY_INFO.regions.apCities.map((city, idx) => (
                  <span key={idx} className="px-2 py-1 rounded bg-[#071426] border border-[#162B48] text-xs font-medium text-slate-300">
                    {city}
                  </span>
                ))}
              </div>

              <p className="text-[11px] text-slate-400">
                Dominating local Google 3-Pack, business websites & targeted lead generation across Coastal Andhra and Rayalaseema.
              </p>
            </div>

            {/* Telangana Card */}
            <div className="p-5 rounded-2xl bg-[#0B192E] border border-[#162B48] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF9900]/20 text-[#FF9900] flex items-center justify-center font-bold text-xs">
                    TG
                  </div>
                  <h4 className="text-sm font-bold text-white">Telangana Growth</h4>
                </div>
                <span className="text-[11px] font-bold text-[#FF9900] bg-[#FF9900]/10 px-2 py-0.5 rounded">Hyderabad Hub</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {COMPANY_INFO.regions.tgCities.map((city, idx) => (
                  <span key={idx} className="px-2 py-1 rounded bg-[#071426] border border-[#162B48] text-xs font-medium text-slate-300">
                    {city}
                  </span>
                ))}
              </div>

              <p className="text-[11px] text-slate-400">
                Scaling enterprise corporate web applications, high-ROAS Meta ads, and pan-Hyderabad tech & real estate marketing.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

