import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import PortfolioModal from './PortfolioModal';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Take the primary 4 genuine projects from data
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#071426] relative border-b border-[#162B48]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 text-left">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#087EF5] font-semibold">
              PORTFOLIO & CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Selected Work
            </h2>
          </div>

          <Link
            to="/works"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#087EF5] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Large Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="group rounded-2xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5]/60 overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl hover:-translate-y-1"
            >
              {/* Large Visual Frame */}
              <div className={`h-64 sm:h-72 w-full bg-gradient-to-br ${project.gradient} p-8 flex flex-col justify-between relative overflow-hidden`}>
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#071426]/80 text-[#BAE0FD] border border-[#162B48] backdrop-blur-md">
                    {project.categoryLabel}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#071426]/80 border border-[#162B48] flex items-center justify-center text-white group-hover:bg-[#087EF5] group-hover:border-[#087EF5] transition-all">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="z-10">
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                    {project.clientIndustry}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 group-hover:text-[#BAE0FD] transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Subtle Geometric Overlay */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />
              </div>

              {/* Minimal Description & Tech Tags */}
              <div className="p-7 sm:p-8 space-y-4 text-left">
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {project.summary}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#071426] text-slate-400 border border-[#162B48]"
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

