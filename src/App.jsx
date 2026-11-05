import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
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
      </SmoothScroll>
    </BrowserRouter>
  );
}
