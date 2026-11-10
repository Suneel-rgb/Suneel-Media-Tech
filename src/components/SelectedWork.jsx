import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import PortfolioModal from './PortfolioModal';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#071426] relative border-b border-[#162B48]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16 text-left">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#087EF5] font-medium">
              Portfolio & Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-heading">
              Selected Work
            </h2>
          </div>

          <Link
            to="/works"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors duration-150"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#087EF5] transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Project Showcase Grid - Disciplined & Architectural */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="group rounded-xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5]/50 overflow-hidden transition-colors duration-150 flex flex-col justify-between cursor-pointer"
            >
              {/* Frame Header */}
              <div className="p-6 sm:p-7 bg-[#071426]/70 border-b border-[#162B48] flex flex-col justify-between min-h-[180px] text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#0B192E] text-slate-300 border border-[#162B48]">
                    {project.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#0B192E] border border-[#162B48] flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-[#087EF5] transition-colors duration-150">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="pt-6">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    {project.clientIndustry}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1 group-hover:text-[#BAE0FD] transition-colors duration-150">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description & Tech Tags */}
              <div className="p-6 sm:p-7 space-y-4 text-left">
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {project.summary}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[#071426] text-slate-400 border border-[#162B48]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <PortfolioModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onStartSimilar={() => {
          setModalOpen(false);
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </section>
  );
}
