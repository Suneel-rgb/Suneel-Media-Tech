import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WorksPage = lazy(() => import('./pages/WorksPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#071426] flex items-center justify-center p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#0B192E] border border-[#162B48] flex items-center justify-center p-2 shadow-xl shadow-[#087EF5]/10 animate-pulse">
          <img
            src="/suneel-emblem-transparent.png"
            alt="Loading..."
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#BAE0FD]">
          <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-ping" />
          <span>SUNEEL MEDIA TECH</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </SmoothScroll>
    </BrowserRouter>
  );
}
