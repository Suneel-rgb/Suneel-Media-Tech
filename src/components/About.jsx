import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      number: '01',
      title: 'Strategic Thinking',
      description: 'Understanding customer goals and competitor whitespace before writing a single line of code or deploying an ad.',
    },
    {
      number: '02',
      title: 'Precision Engineering',
      description: 'Building fast, accessible, secure digital platforms with sub-second speeds that convert casual visitors into clients.',
    },
    {
      number: '03',
      title: 'Creative Distinction',
      description: 'Crafting unmistakable visual identities and brand storytelling that elevate companies above commodity competitors.',
    },
    {
      number: '04',
      title: 'Measurable Growth',
      description: 'Focusing exclusively on business metrics that matter: qualified leads, customer acquisition efficiency, and verified ROAS.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#071426] relative border-b border-[#162B48]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-5 text-left mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#087EF5] font-semibold">
            ABOUT SUNEEL MEDIA TECH
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
            Built for What's Next.
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            We bring strategy, technology, and creative thinking together to help businesses compete and grow in a digital-first world.
          </p>
        </div>

        {/* 4 Architectural Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 rounded-2xl bg-[#0B192E] border border-[#162B48] flex flex-col justify-between hover:border-[#087EF5]/50 transition-colors duration-200"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#087EF5]">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Link */}
        <div className="pt-12 text-left">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#087EF5] transition-colors"
          >
            <span>Learn more about our methodology and regional presence</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#087EF5]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
