import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { Layers, ChevronRight, ChevronLeft, FolderGit2 } from 'lucide-react';
import PortfolioModal from './PortfolioModal';
import { useNavigate } from 'react-router-dom';

export default function WorksSlider() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleStartSimilarProject = (categoryLabel) => {
    navigate('/contact', { state: { preselectedService: categoryLabel } });
  };

  return (
    <section className="py-16 bg-[#040C18] relative overflow-hidden border-t border-[#162B48]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Custom Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/15 border border-[#FF9900]/30 text-xs font-bold text-[#FF9900]">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>INTERACTIVE WORKS SHOWCASE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Swipe Through Our Selected{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
                Project Blueprints.
              </span>
            </h2>

            <p className="text-sm text-slate-300">
              Drag or use the navigation controls to inspect recent web engineering, SEO, and paid ad campaign architectures across AP & Telangana.
            </p>
          </div>

          {/* Premium Custom Arrow Controls (Placed cleanly in header, not covering slides) */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-11 h-11 rounded-xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5] hover:bg-[#087EF5] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md group cursor-pointer active:scale-95"
              aria-label="Previous Project"
              title="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="w-11 h-11 rounded-xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5] hover:bg-[#087EF5] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md group cursor-pointer active:scale-95"
              aria-label="Next Project"
              title="Next Slide"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Swiper Slider without clumsy overlay arrows */}
        <div className="relative pb-6">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-14"
          >
            {PORTFOLIO_PROJECTS.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="h-full rounded-2xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1">
                  
                  {/* Top Visual Banner */}
                  <div className="h-52 w-full relative overflow-hidden bg-[#071426]">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192E] via-[#0B192E]/40 to-black/30 pointer-events-none" />
                      </>
                    ) : (
                      <div className={`h-full w-full bg-gradient-to-br ${project.gradient}`} />
                    )}

                    <div className="absolute inset-0 p-5 flex flex-col justify-between z-10 text-left pointer-events-none">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#071426]/85 backdrop-blur-sm border border-white/10 text-[11px] font-semibold text-white">
                          {project.categoryLabel}
                        </span>
                        <span className="text-[10px] font-medium text-slate-300 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                          {project.clientIndustry}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-[#BAE0FD] transition-colors leading-snug drop-shadow-md">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-2">
                      <p className="text-xs text-[#FF9900] font-semibold">
                        {project.tagline}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-[#162B48]">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-[#071426] border border-[#162B48] text-[10px] text-slate-300 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenProject(project)}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#071426] hover:bg-[#087EF5] hover:text-white border border-[#162B48] hover:border-[#087EF5] text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Inspect Case Blueprint</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <PortfolioModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onStartSimilarProject={handleStartSimilarProject}
      />
    </section>
  );
}
