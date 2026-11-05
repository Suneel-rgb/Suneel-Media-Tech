import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import SEOHead from '../components/SEOHead';
import PortfolioModal from '../components/PortfolioModal';
import WorksSlider from '../components/WorksSlider';
import { 
  PORTFOLIO_CATEGORIES, 
  PORTFOLIO_PROJECTS 
} from '../data/portfolioData';
import { 
  FolderGit2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ChevronRight, 
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sliders
} from 'lucide-react';

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleStartSimilarProject = (categoryLabel) => {
    navigate('/contact', { state: { preselectedService: categoryLabel } });
  };

  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F8FC] flex flex-col">
      <SEOHead
        title="Our Works & Portfolio - Websites, SEO & Ad Campaigns"
        description="Explore project blueprints, case study architectures, and deliverable showcases engineered by Suneel Media Tech for businesses across Andhra Pradesh & Telangana."
        keywords="Web Development Portfolio Guntur, SEO Case Studies Hyderabad, Digital Marketing Results AP, React Web App Showcase, Brand Identity Portfolio Vijayawada"
        canonicalPath="/works"
      />

      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="pt-12 pb-16 bg-radial-glow border-b border-[#162B48]/60 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
              <FolderGit2 className="w-3.5 h-3.5 text-[#FF9900]" />
              <span>PROJECT BLUEPRINTS & DELIVERABLE ARCHITECTURE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected Works &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
                Client Case Studies.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Explore how we solve tough business challenges through bespoke website engineering, high-intent local SEO across <strong>AP & Telangana</strong>, and performance advertising funnels.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" /> 150+ Projects Delivered
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-[#087EF5]" /> 96% Client Retention
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#FF9900] font-medium">
                <MapPin className="w-4 h-4" /> AP & Telangana Focus
              </span>
            </div>

          </div>
        </section>

        {/* Swiper Interactive Slider Section */}
        <WorksSlider />

        {/* Filterable Catalog Section */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#162B48]/60">
          
          <div className="text-left mb-8 space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#087EF5]" />
              <span>Complete Deliverable Catalog by Category</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Filter by specific capability to explore full challenge, solution, and technology breakdowns.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-start gap-2 mb-10">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-[#087EF5]/15 hover:-translate-y-1.5"
              >
                {/* Visual Header */}
                <div className={`h-52 w-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
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

                  <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-3">
                    <div className="text-xs text-[#FF9900] font-semibold">
                      {project.tagline}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-[#162B48]">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Technologies & Tools:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-[#071426] border border-[#162B48] text-[11px] text-slate-300 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#162B48] flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">
                      Case Study Blueprint
                    </span>

                    <button
                      type="button"
                      onClick={() => handleOpenProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF9900] group-hover:text-[#FFAE33] transition-colors cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Client NDA & Verification Policy Banner */}
          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#0B192E] border border-[#162B48] text-center max-w-3xl mx-auto space-y-3">
            <h4 className="text-base font-bold text-white flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Strict Non-Disclosure & Authentic Client Verification Policy</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To safeguard competitive advantages for our clients in Guntur, Hyderabad, and Vijayawada, certain proprietary metrics and live production codes are demonstrated exclusively during private strategy consultations.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#087EF5] hover:text-[#48A7FF]"
              >
                <span>Request a live portfolio walkthrough tailored to your industry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-[#040C18] border-t border-[#162B48]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Turn Your Business Into Our Next Success Story?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Partner with SUNEEL MEDIA TECH to architect an authoritative website, rank #1 on Google, and accelerate your inbound sales across AP & Telangana.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-base shadow-xl transition-all"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />

      <PortfolioModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStartSimilarProject={handleStartSimilarProject}
      />
    </div>
  );
}
