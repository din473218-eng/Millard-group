import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TrustSection from './components/TrustSection';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-charcoal text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-4 px-6"
          >
            <span className="font-mono text-[9px] md:text-xs tracking-[0.5em] text-brand-gold uppercase block">
              The Art of Exquisite Living
            </span>
            <h1 className="font-serif text-3xl md:text-5xl tracking-[0.25em] font-light">
              MILLARD <span className="text-brand-gold font-normal">GROUP</span>
            </h1>
            <div className="w-24 h-[1px] bg-brand-gold/25 mx-auto mt-6 overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="absolute h-full w-1/2 bg-brand-gold top-0"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-brand-beige text-brand-charcoal selection:bg-brand-gold selection:text-white min-h-screen flex flex-col justify-between"
          id="app-root-container"
        >
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

                {/* Trust and Excellence Standards */}
                <TrustSection />

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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
