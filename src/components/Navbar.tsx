import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Compass, Coffee, Utensils, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: 'home' | 'millard' | 'amber' | 'obika' | 'news' | 'locations' | 'contact') => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', view: 'home' as const },
    { label: 'Locations', view: 'locations' as const },
    { label: 'News', view: 'news' as const },
    { label: 'Contact', view: 'contact' as const },
  ];

  const brands = [
    { id: 'millard' as const, name: 'Millard Elite Hospitality', desc: 'Private Estates & Lifestyle', icon: ShieldCheck, color: 'text-brand-gold' },
    { id: 'amber' as const, name: 'Amber Coffee', desc: 'Specialty Roastery & Craft Brews', icon: Coffee, color: 'text-brand-gold' },
    { id: 'obika' as const, name: 'Obika', desc: 'Authentic Italian Mozzarella Bar', icon: Utensils, color: 'text-brand-gold' },
  ];

  return (
    <>
      <header
        id="luxury-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-brand-gold/15 py-4 shadow-md'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-1.5 cursor-pointer text-left focus:outline-none"
            id="logo-button"
          >
            <span className={`font-serif text-xl md:text-2xl font-bold tracking-[0.2em] transition-colors duration-300 group-hover:text-brand-gold ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`}>
              MILLARD <span className="text-brand-gold">GROUP</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" id="desktop-nav">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`font-sans text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer ${
                currentView === 'home'
                  ? 'text-brand-gold font-bold'
                  : isScrolled
                    ? 'text-brand-charcoal/80 hover:text-brand-gold'
                    : 'text-white/80 hover:text-brand-gold'
              }`}
            >
              Home
            </button>

            {/* Brands Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsBrandsDropdownOpen(true)}
              onMouseLeave={() => setIsBrandsDropdownOpen(false)}
            >
              <button
                className={`flex items-center space-x-1.5 font-sans text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer ${
                  ['millard', 'amber', 'obika'].includes(currentView)
                    ? 'text-brand-gold font-bold'
                    : isScrolled
                      ? 'text-brand-charcoal/80 hover:text-brand-gold'
                      : 'text-white/80 hover:text-brand-gold'
                }`}
              >
                <span>Our Brands</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isBrandsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isBrandsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 mt-3 bg-white border border-brand-gold/20 rounded-sm p-3 shadow-xl z-50"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 rotate-45 bg-white border-t border-l border-brand-gold/20"></div>
                    <div className="relative space-y-1.5 z-10">
                      <div className="px-3 py-1 font-mono text-[9px] tracking-wider text-brand-brown/60 uppercase border-b border-brand-gold/10 pb-2">
                        Premium Portfolio
                      </div>
                      {brands.map((brand) => {
                        const Icon = brand.icon;
                        return (
                          <button
                            key={brand.id}
                            onClick={() => {
                              onNavigate(brand.id);
                              setIsBrandsDropdownOpen(false);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-start space-x-3 p-2.5 rounded-sm hover:bg-brand-beige transition-colors duration-200 text-left w-full cursor-pointer focus:outline-none group"
                          >
                            <div className="p-1.5 rounded-sm bg-brand-beige border border-brand-gold/15 group-hover:border-brand-gold/50">
                              <Icon className={`w-4 h-4 ${brand.color}`} />
                            </div>
                            <div>
                              <div className="font-serif text-sm text-brand-charcoal group-hover:text-brand-gold transition-colors duration-200">
                                {brand.name}
                              </div>
                              <div className="text-xs text-brand-brown/70 font-sans mt-0.5">
                                {brand.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.filter(item => item.view !== 'home').map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  onNavigate(item.view);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-sans text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer ${
                  currentView === item.view
                    ? 'text-brand-gold font-bold'
                    : isScrolled
                      ? 'text-brand-charcoal/80 hover:text-brand-gold'
                      : 'text-white/80 hover:text-brand-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => onNavigate('contact')}
              className={`px-5 py-2 border text-[10px] uppercase tracking-widest transition-all cursor-pointer bg-transparent ${
                isScrolled
                  ? 'border-brand-gold text-brand-charcoal hover:bg-brand-gold hover:text-white font-medium'
                  : 'border-white text-white hover:bg-white hover:text-brand-charcoal font-medium'
              }`}
              id="cta-nav"
            >
              Concierge
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 focus:outline-none cursor-pointer transition-colors duration-300 ${
              isMobileMenuOpen
                ? 'text-brand-charcoal'
                : isScrolled
                  ? 'text-brand-charcoal'
                  : 'text-white'
            }`}
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-brand-beige z-40 lg:hidden flex flex-col justify-center px-8"
            id="mobile-drawer"
          >
            <div className="flex flex-col space-y-6 text-center max-w-md mx-auto w-full">
              <div className="font-mono text-[9px] tracking-[0.4em] text-brand-brown/60 uppercase border-b border-brand-gold/10 pb-4 mb-4">
                Main Navigation
              </div>

              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-serif text-2xl tracking-wider transition-colors duration-300 cursor-pointer ${
                  currentView === 'home' ? 'text-brand-gold font-bold' : 'text-brand-charcoal hover:text-brand-gold'
                }`}
              >
                Home
              </button>

              <div className="border-t border-b border-brand-gold/10 py-4 space-y-4">
                <div className="font-mono text-[9px] tracking-widest text-brand-gold uppercase">
                  Our Brands
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {brands.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => {
                        onNavigate(brand.id);
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center justify-center space-x-2 py-1.5 font-serif text-lg text-brand-charcoal hover:text-brand-gold cursor-pointer"
                    >
                      <span className="text-xs text-brand-gold">●</span>
                      <span>{brand.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {navItems.filter(item => item.view !== 'home').map((item) => (
                <button
                  key={item.view}
                  onClick={() => {
                    onNavigate(item.view);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`font-serif text-2xl tracking-wider transition-colors duration-300 cursor-pointer ${
                    currentView === item.view ? 'text-brand-gold font-bold' : 'text-brand-charcoal hover:text-brand-gold'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-8">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 bg-brand-charcoal text-white font-mono text-xs tracking-widest uppercase hover:bg-brand-gold transition-colors duration-300 rounded-none cursor-pointer"
                >
                  Concierge Inquiry
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
