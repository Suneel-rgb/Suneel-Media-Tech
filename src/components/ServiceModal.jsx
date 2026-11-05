import React from 'react';
import { X, Check, ArrowRight, Sparkles, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ServiceModal({ service, isOpen, onClose, onSelectServiceForContact }) {
  if (!isOpen || !service) return null;

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
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087EF5]/15 border border-[#087EF5]/30 text-xs font-bold text-[#BAE0FD]">
            <span>SERVICE #{service.number}</span>
            <span>•</span>
            <span>{service.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {service.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {service.longDescription}
          </p>
        </div>

        {/* Sub-Services Breakdown */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF9900] flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Specialized Capabilities Included</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.subServices.map((sub, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#071426] border border-[#162B48]">
                <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087EF5]" />
                  <span>{sub.name}</span>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">{sub.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Guaranteed Deliverables */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#087EF5] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Key Deliverables & Standards</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-[#0C1D36]/60 border border-[#162B48]/60">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>Tools & Tech Stack</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-[#071426] border border-[#162B48] text-xs font-medium text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pt-4 border-t border-[#162B48] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            <span>Guaranteed deliverables with dedicated project manager & weekly status updates.</span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectServiceForContact(service.title);
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-sm shadow-lg shadow-[#FF9900]/25 transition-all"
          >
            <span>Inquire for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
