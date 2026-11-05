import React, { useState } from 'react';
import { 
  Search, 
  Map, 
  Paintbrush, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Clock
} from 'lucide-react';

export default function Process({ onInquire }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand the business.',
      icon: Search,
      duration: 'Days 1 - 3',
      description: 'We conduct a comprehensive discovery audit of your business, current website, competitors, and target audience in Guntur and key markets.',
      milestones: [
        'Stakeholder Vision & Revenue Goal Alignment',
        'Competitor Keyword & Positioning Audit',
        'Target Audience Persona & Buying Journey Mapping',
        'Technical Architecture Feasibility Review',
      ],
      output: 'Discovery Audit & Project Roadmap',
    },
    {
      number: '02',
      title: 'Strategize',
      tagline: 'Plan the right solution.',
      icon: Map,
      duration: 'Days 4 - 7',
      description: 'We formulate the master execution blueprint. For web, this means wireframes and sitemap; for marketing, this means funnel architecture and ad budget modeling.',
      milestones: [
        'Information Architecture & UX Wireframes',
        'Multi-Channel Marketing Funnel Blueprint',
        'Target ROAS Modeling & Budget Allocation',
        'Content Strategy & Value Proposition Messaging',
      ],
      output: 'Comprehensive Strategy & Wireframe Deck',
    },
    {
      number: '03',
      title: 'Design',
      tagline: 'Create the experience.',
      icon: Paintbrush,
      duration: 'Week 2',
      description: 'Our design team creates bespoke, high-converting visual designs, UI prototypes, logo concepts, and ad creatives that captivate your ideal customers.',
      milestones: [
        'Pixel-Perfect Responsive UI/UX Prototypes',
        'Brand Color Palette & Typography Systems',
        'Scroll-Stopping Social & Paid Ad Creative Kits',
        'Client Review & Interactive Design Sign-off',
      ],
      output: 'Approved High-Fidelity Design System',
    },
    {
      number: '04',
      title: 'Develop',
      tagline: 'Build and launch.',
      icon: Rocket,
      duration: 'Weeks 2 - 3',
      description: 'Our engineers transform designs into clean, lightning-fast code (React.js, Tailwind, modern CMS) integrated with SEO markup, analytics, and CRM tracking.',
      milestones: [
        'Clean Production Code with Sub-Second Speeds',
        'Full Technical On-Page SEO & Schema Injection',
        'Meta Pixel, Google Analytics 4 & CAPI Integration',
        'Cross-Browser & Multi-Device Quality Assurance',
      ],
      output: 'Fully Tested, Production-Ready Live Deployment',
    },
    {
      number: '05',
      title: 'Grow',
      tagline: 'Optimize and improve.',
      icon: TrendingUp,
      duration: 'Ongoing Scaling',
      description: 'Launch is just day one. We continuously analyze heatmaps, A/B test ad creatives, monitor keyword rankings, and optimize for higher conversions and sales.',
      milestones: [
        'Weekly Conversion Rate Optimization (CRO)',
        'Local SEO Ranking Surveillance & Citation Expansion',
        'Paid Ad Creative Rotation & Negative Keyword Mining',
        'Transparent Monthly Executive ROI Reports',
      ],
      output: 'Continuous Market Share & Revenue Growth',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#071426] relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#087EF5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
            <Clock className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>STRUCTURED METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our 5-Step Working Process for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
              Predictable Success.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Every breakthrough project follows a disciplined sequence. We eliminate guesswork with a battle-tested roadmap from day one through continuous market scaling.
          </p>
        </div>

        {/* Step Navigation Cards (Horizontal Desktop & Vertical Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isSelected = activeStep === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B192E] border-[#087EF5] shadow-lg shadow-[#087EF5]/20 scale-102'
                    : 'bg-[#071426] border-[#162B48] hover:border-[#1E3A63] opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xl font-black font-mono ${isSelected ? 'text-[#FF9900]' : 'text-slate-500'}`}>
                    {step.number}
                  </span>
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#087EF5] text-white' : 'bg-[#0C1D36] text-slate-400'}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-base font-bold text-white">{step.title}</div>
                  <div className="text-xs text-slate-400 truncate mt-0.5">{step.tagline}</div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#162B48] text-[11px] font-mono text-slate-400">
                  {step.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Showcase Card */}
        <div className="rounded-2xl bg-[#0B192E] border border-[#1E3A63] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#087EF5]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Step Description & Output */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/15 border border-[#FF9900]/30 text-xs font-bold text-[#FF9900]">
                <span>PHASE {steps[activeStep].number} OF 05</span>
                <span>•</span>
                <span>{steps[activeStep].duration}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {steps[activeStep].number}. {steps[activeStep].title} – {steps[activeStep].tagline}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Milestones Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  What Happens in This Phase:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].milestones.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5 text-xs text-slate-200 p-2.5 rounded-lg bg-[#071426] border border-[#162B48]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Output */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#0C1D36] to-[#071426] border border-[#087EF5]/30 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase text-[#BAE0FD]">Phase Output:</div>
                  <div className="text-sm font-bold text-white">{steps[activeStep].output}</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>

            {/* Right Column: Visual Stage Indicator */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#071426] border border-[#162B48] space-y-4 text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#087EF5] to-[#FF9900] p-0.5 flex items-center justify-center shadow-xl shadow-[#087EF5]/20">
                <div className="w-full h-full rounded-[14px] bg-[#071426] flex items-center justify-center text-[#FF9900]">
                  {React.createElement(steps[activeStep].icon, { className: 'w-10 h-10' })}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400">Current Focus</div>
                <div className="text-xl font-bold text-white mt-1">{steps[activeStep].title}</div>
                <p className="text-xs text-slate-300 mt-2 max-w-xs mx-auto">
                  {steps[activeStep].tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-[#162B48] flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg bg-[#0C1D36] border border-[#162B48] text-xs font-semibold text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white"
                >
                  Previous
                </button>

                <div className="flex gap-1.5">
                  {steps.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`h-1.5 rounded-full transition-all ${
                        dotIdx === activeStep ? 'w-6 bg-[#FF9900]' : 'w-2 bg-[#162B48]'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg bg-[#087EF5] text-xs font-semibold text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#066ad1]"
                >
                  Next
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
