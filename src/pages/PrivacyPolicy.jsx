import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#071426] text-[#F5F8FC] flex flex-col">
      {/* Top Header */}
      <header className="border-b border-[#162B48] bg-[#040C18]/80 py-4 px-4 sm:px-8 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/suneel-logo-tight.png"
              alt="SUNEEL MEDIA TECH"
              className="h-9 w-auto object-contain"
            />
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5] px-4 py-2 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </a>
        </div>
      </header>

      {/* Content Container */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-left space-y-10">
        
        {/* Title */}
        <div className="space-y-4 border-b border-[#162B48] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087EF5]/15 border border-[#087EF5]/30 text-xs font-bold text-[#BAE0FD]">
            <Shield className="w-3.5 h-3.5 text-[#087EF5]" />
            <span>LEGAL & COMPLIANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Privacy Policy
          </h1>

          <p className="text-sm text-slate-400">
            Last Updated: November 2026 • Effective Date: January 2026
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#087EF5]">1.</span> Introduction & Scope
          </h2>
          <p>
            Welcome to <strong>SUNEEL MEDIA TECH</strong> ("we," "our," or "us"). We respect your privacy and are committed to protecting any personally identifiable information ("Personal Data") you share with us through our website (suneelmediatech.com) or in the course of engaging our digital marketing, web development, SEO, advertising, or design services.
          </p>
          <p>
            This Privacy Policy governs the manner in which SUNEEL MEDIA TECH collects, uses, maintains, and discloses information collected from users (each, a "User") of our website and clients of our agency services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#087EF5]">2.</span> Information We Collect
          </h2>
          <p>We may collect personal identification information from Users in a variety of ways, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>Contact Information:</strong> Full name, business email address, phone number, and physical business location submitted via our project proposal forms or WhatsApp inquiries.</li>
            <li><strong>Business & Project Details:</strong> Company name, website URL, project scope, budget ranges, and marketing objectives provided during consultations.</li>
            <li><strong>Technical & Analytical Information:</strong> Browser type, operating system, IP address, referral sources, pages visited, and session duration collected anonymously via Google Analytics 4 to improve user experience.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#087EF5]">3.</span> How We Use Collected Information
          </h2>
          <p>SUNEEL MEDIA TECH collects and uses Users' personal information for the following specific purposes:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>To formulate customized proposals, quotes, and technical project roadmaps.</li>
            <li>To execute agreed-upon digital marketing campaigns, website builds, and SEO strategies.</li>
            <li>To communicate project milestones, deliverables, and performance reports.</li>
            <li>To improve website performance, security, and customer service delivery.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#087EF5]">4.</span> Non-Disclosure & Data Protection
          </h2>
          <p>
            We implement strict physical, electronic, and managerial safeguards to protect your personal information and proprietary business data from unauthorized access, alteration, disclosure, or destruction. We do <strong>not</strong> sell, trade, rent, or monetize User identification information to any outside third parties.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#087EF5]">5.</span> Client Asset & Account Ownership
          </h2>
          <p>
            All advertising accounts (Google Ads, Meta Ads Manager), analytics properties, domain names, and source codes created or managed on behalf of the client remain the sole intellectual property of the client upon final payment settlement.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-[#162B48] pt-8">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#087EF5]">6.</span> Contacting Our Data Officer
          </h2>
          <p>
            If you have any questions regarding this Privacy Policy or wish to modify or delete any information we hold, please contact us directly at:
          </p>
          <div className="p-4 rounded-xl bg-[#0B192E] border border-[#162B48] text-sm space-y-1">
            <div className="font-bold text-white">SUNEEL MEDIA TECH</div>
            <div>Email: <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#087EF5] underline">{COMPANY_INFO.contact.email}</a></div>
            <div>Phone: {COMPANY_INFO.contact.phoneDisplay}</div>
            <div>Address: {COMPANY_INFO.contact.address.full}</div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
