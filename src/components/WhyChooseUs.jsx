import React from 'react';
import { 
  Users, 
  Lightbulb, 
  MessageSquare, 
  BadgePercent, 
  LineChart, 
  Handshake, 
  Check, 
  X, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function WhyChooseUs({ onInquire }) {
  const pillars = [
    {
      title: 'Customer-First Approach',
      description: 'Your business goals dictate every tactical decision. We never push services you do not need; we solve your specific revenue bottlenecks.',
      icon: Users,
      badge: 'Dedicated Focus',
    },
    {
      title: 'Creative & Innovative Solutions',
      description: 'We don’t rely on stale formulas. We design eye-catching visual identities, viral video hooks, and modern web software that outclasses competitors.',
      icon: Lightbulb,
      badge: 'Unmatched Creativity',
    },
    {
      title: 'Transparent Communication',
      description: 'No jargon, no evasive answers, and no unexpected invoices. You receive regular milestone updates, live access to ad dashboards, and honest recommendations.',
      icon: MessageSquare,
      badge: 'Radical Honesty',
    },
    {
      title: 'Affordable Business Solutions',
      description: 'Enterprise-grade agency quality tailored to the practical budgets of growing Indian and global businesses, maximizing return on every rupee spent.',
      icon: BadgePercent,
      badge: 'Maximum Value',
    },
    {
      title: 'Results-Focused Strategies',
      description: 'We focus on tangible business outcomes: qualified phone leads, high-intent website inquiries, customer acquisition cost reduction, and solid ROAS.',
      icon: LineChart,
      badge: 'Outcome Driven',
    },
    {
      title: 'Long-Term Partnerships',
      description: 'We view ourselves as your ongoing digital technology department, staying by your side to optimize, troubleshoot, and scale your brand over the years.',
      icon: Handshake,
      badge: 'Enduring Support',
    },
  ];

  const comparisonData = [
    {
      feature: 'Development Technology',
      freelancer: 'Outdated templates & bloated page builders',
      traditional: 'Overpriced legacy systems with slow turnaround',
      suneel: 'Modern React.js, Tailwind CSS & clean custom architecture',
    },
    {
      feature: 'Local & Regional SEO (Guntur/AP)',
      freelancer: 'Surface-level meta tags with zero map strategy',
      traditional: 'Generic non-localized national keywords',
      suneel: 'Hyper-targeted Google Business Profile & local citation dominance',
    },
    {
      feature: 'Ad Strategy & ROAS Tracking',
      freelancer: 'Boosting posts without conversion tracking',
      traditional: 'Vague impressions reports and vanity metrics',
      suneel: 'Laser-targeted funnels with verified ROAS & live reporting',
    },
    {
      feature: 'Code & Asset Ownership',
      freelancer: 'Often hostage to freelancer accounts',
      traditional: 'Agency retains IP or charges recurring licensing fees',
      suneel: '100% complete client ownership of code, accounts & designs',
    },
    {
      feature: 'Communication & Turnaround',
      freelancer: 'Inconsistent availability & ghosting risks',
      traditional: 'Layers of account managers and slow ticketing',
      suneel: 'Direct strategist access with fast turnaround & WhatsApp support',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#040C18] relative overflow-hidden border-t border-[#162B48]/50">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#087EF5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE SUNEEL MEDIA TECH ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Visionary Businesses Choose Us as Their{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
              Growth Partner.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            We bridge the gap between high-level creative storytelling and deep technical engineering. Here is what makes our agency fundamentally different.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#087EF5]/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#071426] border border-[#162B48] flex items-center justify-center text-[#FF9900] group-hover:bg-[#FF9900] group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#BAE0FD] px-2.5 py-1 rounded bg-[#071426] border border-[#162B48]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#BAE0FD] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#162B48]/60 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Verified Agency Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table Section */}
        <div className="rounded-2xl bg-[#0B192E] border border-[#1E3A63] overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-[#162B48] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF9900]">Honest Market Comparison</span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                How We Compare With Traditional Alternatives
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#071426] border border-[#162B48] text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Full Accountability & Transparency</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-[#071426]/90 border-b border-[#162B48] text-xs font-bold uppercase tracking-wider">
                  <th className="p-4 sm:p-5 text-slate-400 w-1/4">Evaluation Factor</th>
                  <th className="p-4 sm:p-5 text-slate-400 w-1/4">Freelancers</th>
                  <th className="p-4 sm:p-5 text-slate-400 w-1/4">Traditional Agencies</th>
                  <th className="p-4 sm:p-5 text-[#FF9900] bg-[#0C1D36] border-l border-r border-[#1E3A63] w-1/4">
                    SUNEEL MEDIA TECH
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#162B48]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400 text-xs leading-relaxed">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.freelancer}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400 text-xs leading-relaxed">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-100 text-xs leading-relaxed bg-[#0C1D36]/60 border-l border-r border-[#1E3A63] font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.suneel}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
