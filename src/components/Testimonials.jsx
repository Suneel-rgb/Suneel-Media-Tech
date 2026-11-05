import React from 'react';
import { Star, ShieldCheck, Quote, MessageSquareQuote, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Testimonials({ onInquire }) {
  // Testimonial framework layout placeholders ready for genuine feedback upon project completion
  const placeholders = [
    {
      industry: "Retail & E-commerce",
      location: "Andhra Pradesh",
      badge: "Verified Client Partnership",
      quote: "Client testimonial slot reserved for verified project feedback upon milestone completion.",
      highlights: ["React E-commerce Store", "Sub-second Page Speeds", "Payment Gateway Integration"],
      rating: 5,
    },
    {
      industry: "Healthcare & Diagnostics",
      location: "Guntur",
      badge: "Verified Client Partnership",
      quote: "Client testimonial slot reserved for verified local SEO and Google Business Profile case study.",
      highlights: ["Google 3-Pack Maps Rank #1", "Local Schema Setup", "Inbound Call Tracking"],
      rating: 5,
    },
    {
      industry: "Real Estate & Commercial",
      location: "Hyderabad / AP",
      badge: "Verified Client Partnership",
      quote: "Client testimonial slot reserved for verified high-ROAS lead generation campaign reviews.",
      highlights: ["Meta & Google Search Ads", "Dedicated Landing Pages", "Qualified Business Leads"],
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#071426] relative overflow-hidden border-t border-[#162B48]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>CLIENT REPUTATION & INTEGRITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built on Trust, Delivered with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
              Integrity.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            At SUNEEL MEDIA TECH, we strictly adhere to authentic partnerships. We let our engineering precision and measurable client results speak for themselves.
          </p>
        </div>

        {/* Testimonials Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {placeholders.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0B192E] border border-[#162B48] flex flex-col justify-between space-y-6 relative group hover:border-[#087EF5]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Top Row: Stars and Verification */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#FF9900]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Quote Block */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-[#087EF5]/20 absolute -top-2 -left-2 pointer-events-none" />
                  <p className="text-sm text-slate-300 italic pl-4 leading-relaxed relative z-10">
                    "{item.quote}"
                  </p>
                </div>

                {/* Focus Badges */}
                <div className="space-y-1.5 pt-2 border-t border-[#162B48]">
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Delivered Capabilities:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <span key={hIdx} className="text-[11px] font-medium text-slate-300 bg-[#071426] px-2 py-0.5 rounded border border-[#162B48]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Info Placeholder */}
              <div className="pt-4 border-t border-[#162B48] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#071426] border border-[#087EF5]/40 flex items-center justify-center font-bold text-xs text-[#087EF5]">
                  SMT
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{item.industry}</div>
                  <div className="text-xs text-slate-400">{item.location} • Client Review Slot</div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Authentic Reference Policy Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0C1D36] via-[#0B192E] to-[#0C1D36] border border-[#1E3A63] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#087EF5]/20 text-[#087EF5] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Looking for Live Client References in Guntur or Your Sector?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                During our initial discovery call, we are pleased to share specific live URLs, case records, and verified references tailored to your industry.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-sm shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            Request Verified References
          </a>
        </div>

      </div>
    </section>
  );
}
