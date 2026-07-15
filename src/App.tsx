import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BrandsGrid from './components/BrandsGrid';
import BrandDetailPage from './components/BrandDetailPage';
import FeaturedGallery from './components/FeaturedGallery';
import TestimonialsSection from './components/TestimonialsSection';
import LocationsSection from './components/LocationsSection';
import LatestNewsSection from './components/LatestNewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { brandsData } from './data';
import { BrandID } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'millard' | 'amber' | 'obika' | 'news' | 'locations' | 'contact'>('home');

  // Unified elegant navigation switcher
  const handleNavigate = (view: 'home' | 'millard' | 'amber' | 'obika' | 'news' | 'locations' | 'contact') => {
    setCurrentView(view);

    // If the view is an anchor point on the homepage, scroll smoothly after a tiny timeout
    if (['locations', 'news', 'contact'].includes(view)) {
      setCurrentView('home');
      setTimeout(() => {
        const id = view === 'locations' ? 'locations-section' : view === 'news' ? 'news-section' : 'contact-section';
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (view === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-beige text-brand-charcoal selection:bg-brand-gold selection:text-white min-h-screen flex flex-col justify-between" id="app-root-container">
      <div>
        {/* Sticky Luxury Navigation */}
        <Navbar currentView={currentView} onNavigate={handleNavigate} />

        {/* View switching logic */}
        {currentView === 'home' ? (
          <main id="homepage-main">
            {/* Cinematic Background Hero */}
            <Hero
              onExplore={() => handleNavigate('home')}
              onContact={() => handleNavigate('contact')}
            />

            {/* About Millard Group */}
            <About onLearnMore={() => handleNavigate('millard')} />

            {/* Brands Showcase Bento Grid */}
            <BrandsGrid onSelectBrand={(brandId) => handleNavigate(brandId)} />

            {/* High-End Bento Image Gallery */}
            <FeaturedGallery />

            {/* Customer Testimonials Carousel */}
            <TestimonialsSection />

            {/* Map & Physical Locations Directories */}
            <LocationsSection />

            {/* Curated Group News Chronicles */}
            <LatestNewsSection />

            {/* Client FAQ Section */}
            <FAQSection />

            {/* Central Luxury Form */}
            <ContactSection />
          </main>
        ) : (
          <main id="subbrand-main">
            {/* Dynamic Custom-Branded Detail Page */}
            <BrandDetailPage
              brand={brandsData[currentView as BrandID]}
              onBack={() => handleNavigate('home')}
              onInquire={() => handleNavigate('contact')}
            />
          </main>
        )}
      </div>

      {/* Multi-column Footer */}
      <Footer onNavigate={handleNavigate} onInquire={() => handleNavigate('contact')} />

      {/* Contact floating actions (WhatsApp & VIP Call tool) */}
      <FloatingActions />
    </div>
  );
}
