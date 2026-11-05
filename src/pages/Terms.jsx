import React from 'react';
import { ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import Footer from '../components/Footer';

export default function Terms() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/15 border border-[#FF9900]/30 text-xs font-bold text-[#FF9900]">
            <FileText className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>TERMS OF ENGAGEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Terms & Conditions
          </h1>

          <p className="text-sm text-slate-400">
            Last Updated: November 2026 • Effective Date: January 2026
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#FF9900]">1.</span> Engagement of Services
          </h2>
          <p>
            By commissioning <strong>SUNEEL MEDIA TECH</strong> ("Agency") for website development, search engine optimization (SEO), social media marketing, paid advertising, branding, or video editing services, you ("Client") agree to the terms and standards described herein.
          </p>
          <p>
            All specific deliverables, timelines, and payment milestones are finalized through formal Statement of Work (SOW) documents or approved project quotes prior to kickoff.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#FF9900]">2.</span> Project Delivery & Milestones
          </h2>
          <p>
            We adhere to a 5-step structured process (Discover, Strategize, Design, Develop, Grow). Delivery timelines are contingent upon the prompt provision of required client assets (brand assets, product images, logins, and approval feedback). We provide regular status updates via WhatsApp and email.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#FF9900]">3.</span> Intellectual Property & Source Code Ownership
          </h2>
          <p>
            Upon receipt of full and final payment, <strong>100% of all custom deliverables</strong>—including website code, vector logo files, graphic assets, and copywriting—become the exclusive intellectual property of the Client. SUNEEL MEDIA TECH retains the right to display non-confidential project visuals within its agency portfolio and case study archives.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#FF9900]">4.</span> Paid Advertising & Third-Party Platforms
          </h2>
          <p>
            For Google Ads and Meta Ads campaigns, ad spend budgets are paid directly by the Client to the respective advertising platforms. While SUNEEL MEDIA TECH employs industry-leading conversion optimization and audience segmentation methodologies, third-party platform algorithms and market conditions are external factors. We maintain full transparency via live dashboards.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#FF9900]">5.</span> Warranty & Post-Launch Support
          </h2>
          <p>
            All custom websites developed by SUNEEL MEDIA TECH include thirty (30) calendar days of complimentary post-launch bug fixing and performance warranty. Extended website maintenance and server administration are available under separate service level agreements.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-[#162B48] pt-8">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#FF9900]">6.</span> Governing Law
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the Republic of India, under the jurisdiction of the courts located in Guntur, Andhra Pradesh.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
