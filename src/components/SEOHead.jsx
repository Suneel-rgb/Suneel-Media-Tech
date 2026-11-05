import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonicalPath = '',
  ogType = 'website',
  structuredData = null 
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    const fullTitle = title 
      ? `${title} | SUNEEL MEDIA TECH - AP & Telangana`
      : 'SUNEEL MEDIA TECH | Premier Digital Marketing Agency in AP & Telangana';
    document.title = fullTitle;

    // 2. Helper to set or create meta tag
    const setMeta = (nameAttr, nameVal, content) => {
      let meta = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameAttr, nameVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 3. Update Description
    const metaDesc = description || 
      'SUNEEL MEDIA TECH is the premier digital marketing agency and web development company serving businesses across Andhra Pradesh (Guntur, Vijayawada, Vizag) and Telangana (Hyderabad, Warangal). High-ROI Google & Meta Ads, SEO, and custom React websites.';
    setMeta('name', 'description', metaDesc);
    setMeta('property', 'og:description', metaDesc);
    setMeta('property', 'twitter:description', metaDesc);

    // 4. Update Keywords
    const metaKeywords = keywords || 
      'Digital Marketing Agency in AP and Telangana, Digital Marketing Services in Guntur, Website Development Company in Hyderabad, SEO Services in Andhra Pradesh, Social Media Marketing Agency Hyderabad, Google Ads Management Guntur';
    setMeta('name', 'keywords', metaKeywords);

    // 5. Update OG / Twitter Title & URL
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'twitter:title', fullTitle);
    setMeta('property', 'og:type', ogType);

    const fullUrl = `https://suneelmediatech.com${canonicalPath || location.pathname}`;
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'twitter:url', fullUrl);

    // 6. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 7. Inject Page-Level Structured Data if provided
    let scriptTag = document.getElementById('page-structured-data');
    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'page-structured-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

  }, [title, description, keywords, canonicalPath, ogType, structuredData, location.pathname]);

  return null;
}
