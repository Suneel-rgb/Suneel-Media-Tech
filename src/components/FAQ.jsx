import React, { useState } from 'react';
import { 
  FAQ_CATEGORIES, 
  FAQ_DATA 
} from '../data/faqData';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  MessageCircle, 
  Phone,
  Sparkles 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqId, setOpenFaqId] = useState('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#040C18] relative overflow-hidden border-t border-[#162B48]/50">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#087EF5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>TRANSPARENCY FIRST</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
              Questions.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Everything you need to know about our web development, SEO strategies, paid ad management, timelines, and ongoing support.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-10">
          {/* Quick Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. timelines, pricing, SEO, React)..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0B192E] border border-[#162B48] focus:border-[#087EF5] focus:outline-none focus:ring-1 focus:ring-[#087EF5] text-sm text-white placeholder-slate-400 transition-colors shadow-inner"
            />
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#087EF5] text-white shadow-md shadow-[#087EF5]/30'
                      : 'bg-[#0B192E] text-slate-300 hover:text-white border border-[#162B48]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 p-6 rounded-2xl bg-[#0B192E] border border-[#162B48] text-slate-400">
              <p>No questions matched your search query "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-3 text-xs font-bold text-[#087EF5] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                    isOpen
                      ? 'bg-[#0B192E] border-[#087EF5]/40 shadow-lg shadow-[#087EF5]/5'
                      : 'bg-[#071426] border-[#162B48] hover:border-[#1E3A63]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-white pr-2">
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#087EF5] text-white' : 'bg-[#0C1D36] text-slate-400'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-[#162B48]/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B192E] border border-[#162B48] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-base font-bold text-white">Have a specific question not listed here?</div>
            <div className="text-xs text-slate-400 mt-0.5">We respond directly on WhatsApp and phone within business hours.</div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent('Hello Suneel Media Tech, I have a quick question about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2 rounded-xl bg-[#0C1D36] border border-[#162B48] hover:border-[#087EF5] text-slate-200 font-bold text-xs flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#FF9900]" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
