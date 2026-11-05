import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, ShieldCheck, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TestimonialsSlider() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      industry: "Retail & E-commerce",
      location: "Vijayawada & Hyderabad",
      badge: "Verified Client Partnership",
      quote: "Client testimonial slot reserved for verified project feedback upon milestone completion.",
      highlights: ["React E-commerce Store", "Sub-second Page Speeds", "Razorpay Payment Gateway"],
      rating: 5,
    },
    {
      industry: "Healthcare & Diagnostics",
      location: "Guntur & AP",
      badge: "Verified Client Partnership",
      quote: "Client testimonial slot reserved for verified local SEO and Google Business Profile case study.",
      highlights: ["Google 3-Pack Maps Rank #1", "Local Schema Setup", "Inbound Patient Calls"],
      rating: 5,
    },
    {
      industry: "Real Estate & Commercial",
      location: "Hyderabad & Amaravati",
      badge: "Verified Client Partnership",
      quote: "Client testimonial slot reserved for verified high-ROAS lead generation campaign reviews.",
      highlights: ["Meta & Google Search Ads", "Dedicated Landing Pages", "Qualified Lead Verification"],
      rating: 5,
    },
    {
      industry: "Educational Institutions",
      location: "Guntur & Warangal",
      badge: "Verified Client Partnership",
      quote: "Client testimonial slot reserved for verified student admissions digital campaign feedback.",
      highlights: ["Instagram Video Reels", "Lead Funnel Optimization", "Brand Identity Collateral"],
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#071426] relative overflow-hidden border-t border-[#162B48]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Custom Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1D36] border border-[#087EF5]/30 text-xs font-semibold text-[#BAE0FD]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>AUTHENTIC PARTNERSHIPS & CLIENT INTEGRITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Built on Trust, Delivered with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087EF5] via-[#48A7FF] to-[#00D2FF]">
                Integrity.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              We value genuine client relationships over fabricated testimonials. Swipe through our feedback and verified deliverable framework for businesses in AP & Telangana.
            </p>
          </div>

          {/* Custom Sleek Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-11 h-11 rounded-xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5] hover:bg-[#087EF5] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md group cursor-pointer active:scale-95"
              aria-label="Previous Review"
              title="Previous Review"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="w-11 h-11 rounded-xl bg-[#0B192E] border border-[#162B48] hover:border-[#087EF5] hover:bg-[#087EF5] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md group cursor-pointer active:scale-95"
              aria-label="Next Review"
              title="Next Review"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Swiper Slider without clumsy side arrows */}
        <div className="relative pb-6">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#0B192E] border border-[#162B48] flex flex-col justify-between space-y-6 relative group hover:border-[#087EF5]/40 transition-all duration-300 text-left">
                  <div className="space-y-4">
                    {/* Stars and Verification */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#FF9900]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>{item.badge}</span>
                      </span>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote className="w-8 h-8 text-[#087EF5]/20 absolute -top-2 -left-2 pointer-events-none" />
                      <p className="text-sm text-slate-300 italic pl-4 leading-relaxed relative z-10">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-[#162B48]">
                      <div className="text-[10px] uppercase font-bold text-slate-400">
                        Delivered Capabilities:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="text-[11px] font-medium text-slate-300 bg-[#071426] px-2 py-0.5 rounded border border-[#162B48]">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Client Info Placeholder */}
                  <div className="pt-4 border-t border-[#162B48] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#071426] border border-[#087EF5]/40 flex items-center justify-center font-bold text-xs text-[#087EF5]">
                      SMT
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{item.industry}</div>
                      <div className="text-xs text-slate-400">{item.location} • Verified Slot</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Live References CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0C1D36] via-[#0B192E] to-[#0C1D36] border border-[#1E3A63] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#087EF5]/20 text-[#087EF5] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Looking for Live Client References in AP or Telangana?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                During our initial strategy call, we share live websites, ranking reports, and verifiable references from your specific industry.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#FF9900] hover:bg-[#E68A00] text-slate-950 font-bold text-sm shadow-md transition-all whitespace-nowrap"
          >
            Request Verified References
          </Link>
        </div>

      </div>
    </section>
  );
}
