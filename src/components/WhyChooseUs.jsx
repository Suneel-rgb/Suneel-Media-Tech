import React from 'react';
import { Compass, PenTool, Code2, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const principles = [
    {
      number: '01',
      title: 'Strategic Thinking',
      description: 'Every initiative begins with commercial understanding, competitor whitespace, and measurable objectives. We align design and code with actual revenue engines.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Creative Execution',
      description: 'Design that commands attention, sets your brand apart, and builds immediate credibility in competitive regional and national markets.',
      icon: PenTool,
    },
    {
      number: '03',
      title: 'Technology That Performs',
      description: 'Fast, resilient, accessible digital infrastructure built to scale. Sub-second load times, clean React engineering, and zero technical debt.',
      icon: Code2,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#071426] relative border-b border-[#162B48]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-left mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#087EF5] font-medium">
            The Agency Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-heading">
            A Better Way to Grow.
          </h2>
        </div>

        {/* 3 Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.number}
                className="p-6 sm:p-7 rounded-xl bg-[#0B192E] border border-[#162B48] flex flex-col justify-between hover:border-[#087EF5]/40 transition-colors duration-150 space-y-6"
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#087EF5] tabular-nums">
                      {principle.number}
                    </span>
                    <Icon className="w-4 h-4 text-slate-500" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {principle.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#162B48] flex items-center gap-2 text-xs font-mono text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#087EF5]" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
