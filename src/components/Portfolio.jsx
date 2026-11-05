import React, { useState } from 'react';
import { 
  PORTFOLIO_CATEGORIES, 
  PORTFOLIO_PROJECTS 
} from '../data/portfolioData';
import { 
  FolderGit2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Code
} from 'lucide-react';
import PortfolioModal from './PortfolioModal';

export default function Portfolio({ onSelectServiceForContact }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleStartSimilarProject = (categoryLabel) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(categoryLabel);
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#040C18] relative overflow-hidden border-t border-[#162B48]/50">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#087EF5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
            <FolderGit2 className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>PORTFOLIO & PROJECT ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Curated Case Studies &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
              Deliverable Showcases.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Explore our project frameworks across modern web development, local & national SEO campaigns, brand identities, and high-conversion ad funnels.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#087EF5] text-white shadow-lg shadow-[#087EF5]/25 border border-[#087EF5]'
                    : 'bg-[#0B192E] text-slate-300 hover:text-white hover:bg-[#162B48] border border-[#162B48]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-[#087EF5]/10 hover:-translate-y-1.5"
            >
              {/* Card Banner / Mockup Visual */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-md bg-[#071426]/80 backdrop-blur-sm border border-white/10 text-[11px] font-semibold text-white">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-medium text-slate-300 bg-black/40 px-2 py-0.5 rounded">
                    {project.clientIndustry}
                  </span>
                </div>

                <div className="z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#071426]/90 border border-white/10 flex items-center justify-center text-white mb-2 shadow-lg">
                    <Layers className="w-5 h-5 text-[#087EF5]" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#BAE0FD] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Subtle Geometric Overlay */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#162B48]">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Technologies & Focus:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-[#071426] border border-[#162B48] text-[11px] text-slate-300 font-mono">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-[#071426] text-[11px] text-[#087EF5] font-semibold">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#162B48] flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    Case Study Blueprint
                  </span>

                  <button
                    type="button"
                    onClick={() => handleOpenProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF9900] group-hover:text-[#FFAE33] transition-colors cursor-pointer"
                  >
                    <span>View Breakdown</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Portfolio Assurance Notice */}
        <div className="mt-16 text-center text-xs text-slate-400 max-w-2xl mx-auto p-4 rounded-xl bg-[#0B192E]/60 border border-[#162B48]">
          <span>
            💼 SUNEEL MEDIA TECH respects client non-disclosure agreements (NDAs). Live interactive demos and specific white-label codebases are presented during confidential 1-on-1 strategy sessions.
          </span>
        </div>

      </div>

      {/* Case Study Modal */}
      <PortfolioModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStartSimilarProject={handleStartSimilarProject}
      />
    </section>
  );
}
