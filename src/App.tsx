import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsGrid from './components/BrandsGrid';
import BrandDetailPage from './components/BrandDetailPage';
import FeaturedGallery from './components/FeaturedGallery';
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <main id="homepage-main">
            {/* Cinematic Background Hero */}
            <Hero
              onExplore={() => {
                const el = document.getElementById('brands-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onContact={() => handleNavigate('contact')}
            />

            {/* Brands Showcase Bento Grid */}
            <BrandsGrid onSelectBrand={(brandId) => handleNavigate(brandId)} />

            {/* High-End Bento Image Gallery */}
            <FeaturedGallery />
          </main>
        );

      case 'locations':
        return (
          <main id="locations-page" className="pt-20">
            {/* Dedicated Luxury Locations Header */}
            <div className="bg-brand-charcoal py-24 md:py-32 px-6 md:px-12 text-center border-b border-brand-gold/15 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200')" }}
              />
              <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                <span className="font-mono text-[10px] tracking-[0.4em] text-brand-gold uppercase block font-bold">
                  Venues of Distinction
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide">
                  Our Locations
                </h1>
                <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto my-4" />
                <p className="font-sans text-neutral-300 text-sm leading-relaxed max-w-xl mx-auto font-light">
                  Explore our premium physical spaces, boutique roasteries, and signature dining destinations designed with silent luxury and comfort in mind.
                </p>
              </div>
            </div>

            {/* Map & Physical Locations Directories */}
            <LocationsSection />

            {/* Client FAQ Section */}
            <div className="bg-brand-beige py-16">
              <FAQSection />
            </div>
          </main>
        );

      case 'news':
        return (
          <main id="news-page" className="pt-20">
            {/* Dedicated Luxury News Header */}
            <div className="bg-brand-charcoal py-24 md:py-32 px-6 md:px-12 text-center border-b border-brand-gold/15 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200')" }}
              />
              <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                <span className="font-mono text-[10px] tracking-[0.4em] text-brand-gold uppercase block font-bold">
                  The Millard Chronicles
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide">
                  Press & Insights
                </h1>
                <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto my-4" />
                <p className="font-sans text-neutral-300 text-sm leading-relaxed max-w-xl mx-auto font-light">
                  Stay informed with curated announcements, roasting breakthroughs from Amber Coffee, culinary milestones from Obika, and corporate reports.
                </p>
              </div>
            </div>

            {/* Curated Group News Chronicles */}
            <LatestNewsSection />

            {/* High-End Bento Image Gallery */}
            <div className="bg-white py-16">
              <FeaturedGallery />
            </div>
          </main>
        );

      case 'contact':
        return (
          <main id="contact-page" className="pt-20">
            {/* Dedicated Luxury Contact Header */}
            <div className="bg-brand-charcoal py-24 md:py-32 px-6 md:px-12 text-center border-b border-brand-gold/15 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200')" }}
              />
              <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                <span className="font-mono text-[10px] tracking-[0.4em] text-brand-gold uppercase block font-bold">
                  Secure Concierge
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide">
                  Inquire & Reserve
                </h1>
                <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto my-4" />
                <p className="font-sans text-neutral-300 text-sm leading-relaxed max-w-xl mx-auto font-light">
                  Reserve exclusive private events, arrange elite catering, request single-origin coffee masterclasses, or establish corporate collaborations.
                </p>
              </div>
            </div>

            {/* Central Luxury Form */}
            <ContactSection />
          </main>
        );

      default:
        return (
          <main id="subbrand-main" className="pt-20">
            {/* Dynamic Custom-Branded Detail Page */}
            <BrandDetailPage
              brand={brandsData[currentView as BrandID]}
              onBack={() => handleNavigate('home')}
              onInquire={() => handleNavigate('contact')}
            />
          </main>
        );
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

            {/* Dynamic Categorized Render */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
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
