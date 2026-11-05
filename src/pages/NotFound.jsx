import React from 'react';
import { Home, ArrowLeft, Search, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F8FC] flex flex-col justify-between">
      {/* Mini Header */}
      <header className="p-6 border-b border-[#162B48] flex items-center justify-between max-w-7xl mx-auto w-full">
        <a href="/">
          <img
            src="/suneel-logo-tight.png"
            alt="SUNEEL MEDIA TECH"
            className="h-9 w-auto object-contain"
          />
        </a>

        <a
          href="/"
          className="text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-[#0B192E] border border-[#162B48]"
        >
          Return Home
        </a>
      </header>

      {/* Hero 404 */}
      <main className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold font-mono">
          <span>ERROR 404 • PAGE NOT FOUND</span>
        </div>

        <div className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#087EF5] via-[#48A7FF] to-transparent tracking-tighter">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          This Page Has Moved or Does Not Exist.
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
          The link you followed may be broken or the page may have been restructured. Let's get you back to growing your business.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#087EF5] hover:bg-[#066ad1] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#087EF5]/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0B192E] border border-[#162B48] hover:border-emerald-500 text-emerald-400 font-bold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="p-6 border-t border-[#162B48] text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SUNEEL MEDIA TECH • {COMPANY_INFO.tagline}
      </footer>
    </div>
  );
}
