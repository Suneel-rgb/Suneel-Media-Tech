import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

const SERVICE_OPTIONS = [
  "Website Development",
  "Search Engine Optimization (SEO)",
  "Social Media Marketing",
  "Google & Meta Ads",
  "Graphic Design & Branding",
  "Video Editing & Creative Content",
  "Full-Suite Growth Package",
  "Other / Custom Consultation"
];

const BUDGET_OPTIONS = [
  "Standard Package (₹15,000 - ₹35,000)",
  "Growth Package (₹35,000 - ₹75,000)",
  "Enterprise Scale (₹75,000 - ₹1,50,000+)",
  "Flexible / To Be Discussed"
];

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    requiredService: preselectedService || 'Website Development',
    budgetRange: 'Growth Package (₹35,000 - ₹75,000)',
    projectDescription: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, requiredService: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business or Brand Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please provide a valid phone number';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please provide a brief description of your project';
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please provide at least 15 characters of detail';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Suneel Media Tech! My name is ${formData.fullName || 'a business owner'} from ${formData.businessName || 'my brand'}. I am interested in ${formData.requiredService}. Here are my requirements: ${formData.projectDescription || 'Looking for an initial quote.'}`;
    const url = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#071426] relative overflow-hidden border-b border-[#162B48]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Let's Create What's Next */}
        <div className="max-w-3xl space-y-4 text-left mb-14 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#087EF5] font-medium">
            Start a Conversation
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-heading">
            Let's Create What's Next.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Have a project in mind? Let's make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Agency Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Action */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#0B192E] border border-[#162B48] space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#071426] text-emerald-400 border border-[#162B48] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Direct WhatsApp Consultation</h3>
                  <div className="text-xs text-slate-400">Guaranteed response within business hours</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prefer chatting directly? Skip the form and speak directly with our team on WhatsApp for immediate answers and estimates.
              </p>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-3 px-4 rounded-xl bg-[#071426] hover:bg-[#102442] border border-[#162B48] hover:border-emerald-500/60 text-slate-200 font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat via WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Direct Contact Cards */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#0B192E] border border-[#162B48] space-y-5 text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-medium">
                Official Agency Touchpoints
              </span>

              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#071426] border border-[#162B48] hover:border-[#087EF5]/60 transition-colors duration-150 group"
                >
                  <div className="w-9 h-9 rounded-md bg-[#0B192E] flex items-center justify-center text-[#FF9900] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Phone</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#087EF5] transition-colors duration-150 tabular-nums">
                      {COMPANY_INFO.contact.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#071426] border border-[#162B48] hover:border-[#087EF5]/60 transition-colors duration-150 group"
                >
                  <div className="w-9 h-9 rounded-md bg-[#0B192E] flex items-center justify-center text-[#087EF5] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Official Inquiries</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#087EF5] transition-colors duration-150">
                      {COMPANY_INFO.contact.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#071426] border border-[#162B48]">
                  <div className="w-9 h-9 rounded-md bg-[#0B192E] flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Agency Headquarters</div>
                    <div className="text-sm font-medium text-white">
                      {COMPANY_INFO.contact.address.full}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#071426] border border-[#162B48]">
                  <div className="w-9 h-9 rounded-md bg-[#0B192E] flex items-center justify-center text-slate-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Working Hours</div>
                    <div className="text-sm font-medium text-white tabular-nums">
                      {COMPANY_INFO.contact.workingHours}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center gap-2 border-t border-[#162B48]/60">
                <ShieldCheck className="w-4 h-4 text-[#087EF5] shrink-0" />
                <span>Non-Disclosure & Confidentiality Assured</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0B192E] border border-[#162B48] relative">
              
              {isSubmitted ? (
                /* Success Feedback State */
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Project Inquiry Received
                  </h3>

                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. We have received your inquiry for <span className="text-[#087EF5] font-medium">{formData.requiredService}</span>. A senior strategist from Suneel Media Tech will review your business requirements and connect with you within 2 business hours.
                  </p>

                  <div className="p-4 rounded-lg bg-[#071426] border border-[#162B48] max-w-md mx-auto text-left text-xs text-slate-300 space-y-1">
                    <div><strong>Business:</strong> {formData.businessName}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg bg-[#071426] border border-[#162B48] text-slate-300 hover:text-white text-xs font-medium transition-colors duration-150"
                    >
                      Submit Another Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors duration-150"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* The Actual Form */
                <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
                  <div className="border-b border-[#162B48] pb-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Start a Project
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Tell us about your brand goals and we will tailor the ideal solution.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                        Full Name <span className="text-[#FF9900]">*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#087EF5] transition-colors duration-150 ${
                          errors.fullName ? 'border-rose-500' : 'border-[#162B48]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-businessName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                        Business Name <span className="text-[#FF9900]">*</span>
                      </label>
                      <input
                        id="contact-businessName"
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Sri Balaji Enterprises"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#087EF5] transition-colors duration-150 ${
                          errors.businessName ? 'border-rose-500' : 'border-[#162B48]'
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.businessName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                        Email Address <span className="text-[#FF9900]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@yourbusiness.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#087EF5] transition-colors duration-150 ${
                          errors.email ? 'border-rose-500' : 'border-[#162B48]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                        Phone Number <span className="text-[#FF9900]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 96764 51721"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#087EF5] transition-colors duration-150 ${
                          errors.phone ? 'border-rose-500' : 'border-[#162B48]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Service Selection & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                        Required Service
                      </label>
                      <select
                        id="contact-service"
                        name="requiredService"
                        value={formData.requiredService}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border border-[#162B48] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#087EF5] transition-colors duration-150"
                      >
                        {SERVICE_OPTIONS.map((srv, idx) => (
                          <option key={idx} value={srv} className="bg-[#071426] text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                        Budget Range
                      </label>
                      <select
                        id="contact-budget"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border border-[#162B48] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#087EF5] transition-colors duration-150"
                      >
                        {BUDGET_OPTIONS.map((bg, idx) => (
                          <option key={idx} value={bg} className="bg-[#071426] text-white">
                            {bg}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Description */}
                  <div>
                    <label htmlFor="contact-description" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Project Description <span className="text-[#FF9900]">*</span>
                    </label>
                    <textarea
                      id="contact-description"
                      name="projectDescription"
                      rows={3}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Briefly describe what your business does, your target timeline, and goals..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#071426] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#087EF5] transition-colors duration-150 resize-none ${
                        errors.projectDescription ? 'border-rose-500' : 'border-[#162B48]'
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.projectDescription}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button: Start a Project */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-semibold text-sm tracking-wide transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Start a Project</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center text-[11px] text-slate-500 pt-1">
                    Your information is protected under standard agency confidentiality.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
