import React from 'react';
import { X, Check, ArrowRight, Layers, ShieldCheck, Tag, ExternalLink } from 'lucide-react';

export default function PortfolioModal({ project, isOpen, onClose, onStartSimilarProject }) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0B192E] border border-[#1E3A63] shadow-2xl p-6 sm:p-8 text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#071426] border border-[#162B48] text-slate-400 hover:text-white hover:border-[#087EF5] transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#087EF5]/15 border border-[#087EF5]/30 text-xs font-bold text-[#BAE0FD]">
              {project.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#071426] border border-[#162B48] text-xs font-medium text-slate-300">
              {project.clientIndustry}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-[#FF9900] font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Project Visual Banner */}
        <div className="w-full h-52 sm:h-64 rounded-xl border border-[#162B48] relative overflow-hidden bg-[#071426]">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/40 to-black/30" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#BAE0FD] font-semibold bg-[#071426]/90 px-2.5 py-1 rounded border border-[#162B48]">
                  Verified Project Blueprint
                </span>
                <span className="text-[11px] font-mono text-slate-300 bg-[#071426]/90 px-2.5 py-1 rounded border border-[#162B48]">
                  {project.technologies?.slice(0, 3).join(' • ')}
                </span>
              </div>
            </>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center p-6 text-center`}>
              <div className="w-16 h-16 rounded-2xl bg-[#071426]/80 border border-white/10 flex items-center justify-center mb-3 text-white shadow-xl">
                <Layers className="w-8 h-8 text-[#087EF5]" />
              </div>
              <div className="text-base sm:text-lg font-bold text-white max-w-md">
                {project.summary}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-2">
                Project Blueprint & Technical Architecture
              </div>
            </div>
          )}
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#071426] border border-[#162B48] space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
              The Challenge
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#071426] border border-[#162B48] space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Our Solution
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Engineered Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
            {project.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#0C1D36] border border-[#162B48]">
                <Check className="w-4 h-4 text-[#FF9900] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-md bg-[#071426] border border-[#162B48] text-xs font-mono text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#162B48] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Custom deliverables adapted to your exact industry requirements.
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onStartSimilarProject(project.categoryLabel);
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-sm shadow-lg shadow-[#FF9900]/25 transition-all cursor-pointer"
          >
            <span>Start a Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
