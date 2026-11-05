import React from 'react';
import { Target, Compass, Sparkles, TrendingUp, Check, ShieldCheck, HeartHandshake, Eye, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function About({ onInquire }) {
  const approaches = [
    {
      step: '01',
      title: 'Understanding Customer Goals',
      description: 'We dive deep into your business model, customer psychology, revenue streams, and competitive landscape before writing a single line of code or drafting an ad.',
      icon: Eye,
      highlight: 'Deep Business Immersion',
    },
    {
      step: '02',
      title: 'Creating Effective Digital Strategies',
      description: 'No guesswork or generic templates. We architect a custom, data-backed growth roadmap combining high-speed web tech, high-intent SEO, and targeted paid ads.',
      icon: Compass,
      highlight: 'Data-Driven Blueprints',
    },
    {
      step: '03',
      title: 'Building Strong Online Identities',
      description: 'We construct an authoritative, memorable digital presence with world-class UI/UX, compelling brand voice, and responsive visuals that establish immediate trust.',
      icon: Sparkles,
      highlight: 'Premium Brand Authority',
    },
    {
      step: '04',
      title: 'Delivering Measurable Business Growth',
      description: 'We focus on business metrics that actually matter: qualified sales leads, inbound phone inquiries, customer acquisition cost reduction, and positive ROAS.',
      icon: TrendingUp,
      highlight: 'Real Revenue ROI',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#040C18] relative overflow-hidden border-t border-[#162B48]/50">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#087EF5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
            <span>ABOUT SUNEEL MEDIA TECH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your Dedicated Partner in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] to-[#00D2FF]">
              Digital Transformation.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            At <strong className="text-white">SUNEEL MEDIA TECH</strong>, we combine creative artistry with engineering precision. Headquartered in Guntur, Andhra Pradesh, we partner with visionary entrepreneurs, small businesses, and growing enterprises to build authoritative brands and dominate digital channels.
          </p>
        </div>

        {/* Brand Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Left: Brand Identity Showcase */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0B192E] border border-[#162B48] relative space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#071426] border border-[#087EF5]/30 p-2 flex items-center justify-center">
                <img
                  src="/suneel-emblem-transparent.png"
                  alt="Suneel Media Tech Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SUNEEL MEDIA TECH</h3>
                <p className="text-xs text-[#FF9900] font-semibold">{COMPANY_INFO.secondaryTagline}</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              We started with a single conviction: modern businesses don't need another generic marketing agency sending meaningless impressions reports. They need a true technical and strategic partner who treats their growth with the same urgency and ownership as a co-founder.
            </p>

            <div className="space-y-3 pt-2 border-t border-[#162B48]">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-[#087EF5]/20 text-[#087EF5] mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Modern Engineering Standards</h4>
                  <p className="text-xs text-slate-400">Zero bloated templates. We build fast, clean, accessible web software.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-[#FF9900]/20 text-[#FF9900] mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Hyper-Local & Global SEO Expertise</h4>
                  <p className="text-xs text-slate-400">Proven ranking methodologies that secure top spots on Google Maps & Search.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Radical Transparency</h4>
                  <p className="text-xs text-slate-400">Straightforward communication, realistic timelines, and 100% asset ownership.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FF9900] hover:text-[#E68A00] transition-colors"
              >
                <span>Speak directly with our strategy director</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: 4-Pillar Approach Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#087EF5]">Our Proven Approach</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                How We Engineer Sustainable Growth
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {approaches.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#071426] border border-[#162B48] hover:border-[#087EF5]/40 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0C1D36] border border-[#162B48] flex items-center justify-center text-[#087EF5] group-hover:bg-[#087EF5] group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#FF9900]">{item.step}</span>
                    </div>

                    <div className="text-xs font-semibold text-[#BAE0FD] mb-1">{item.highlight}</div>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Agency Philosophy Quote Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0C1D36] via-[#0B192E] to-[#0C1D36] border border-[#1E3A63] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF9900]/20 text-[#FF9900] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white">
                "Building Brands. Growing Businesses."
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                We believe exceptional digital marketing is not an expense—it is the highest-return investment a business can make.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#087EF5] hover:bg-[#066ad1] text-white font-bold text-sm shadow-md transition-all whitespace-nowrap"
          >
            Start Your Partnership
          </a>
        </div>

      </div>
    </section>
  );
}
