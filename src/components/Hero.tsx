import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

const backgroundImages = [
  {
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1920',
    title: 'Bespoke Hospitality',
    brand: 'MILLARD'
  },
  {
    url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1920',
    title: 'Artisanal Chemistry',
    brand: 'AMBER COFFEE'
  },
  {
    url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=1920',
    title: 'Authentic Gastronomy',
    brand: 'OBIKA'
  }
];

export default function Hero({ onExplore, onContact }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero-section" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Cinematic Slideshow Background with Dark Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.55, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 2.0, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[currentIndex].url})` }}
          />
        </AnimatePresence>
        {/* Cinematic dark overlays to make text stand out perfectly */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-neutral-950/70 z-10" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10" />

        {/* Elegant structural vector outline pattern matching user Design HTML */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none select-none z-15">
          <div className="w-full h-full border-l border-b border-brand-gold translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        </div>
      </div>

      {/* Decorative Brand Tag Line in Background */}
      <div className="absolute top-1/4 right-12 z-20 hidden xl:flex flex-col items-end opacity-60 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.5em] text-brand-gold uppercase mb-2">Featured Exhibit</span>
        <span className="font-serif text-2xl font-light tracking-widest text-white italic">{backgroundImages[currentIndex].brand}</span>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center pt-24 pb-12">
        {/* Subtle Luxury Pre-header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center space-x-3 mb-6"
        >
          <span className="h-[1px] w-6 bg-brand-gold" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand-gold uppercase font-semibold">
            ESTABLISHED 1984
          </span>
          <span className="h-[1px] w-6 bg-brand-gold" />
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.15] mb-6 max-w-4xl"
        >
          Three Premium Brands.<br />
          <span className="italic font-normal text-brand-gold">One Exceptional Experience.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="font-sans text-neutral-300 text-sm sm:text-base md:text-lg tracking-wide font-light max-w-2xl leading-relaxed mb-10"
        >
          A master family of fine-dining, small-batch roasting, and bespoke estate hospitality curated to define modern luxury living.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none"
        >
          {/* Explore Our Brands button */}
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-10 py-4 bg-brand-gold hover:bg-white text-brand-charcoal hover:text-brand-charcoal font-mono text-xs tracking-[0.2em] uppercase font-bold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer group"
          >
            <span>Explore Our Brands</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Contact Us button */}
          <button
            onClick={onContact}
            className="w-full sm:w-auto px-10 py-4 border border-white hover:border-brand-gold text-white hover:text-brand-gold font-mono text-xs tracking-[0.2em] uppercase rounded-xl bg-transparent hover:bg-white/5 transition-all duration-300 flex items-center justify-center cursor-pointer font-bold"
          >
            <span>Contact Us</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        onClick={onExplore}
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-400 uppercase mb-2">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-brand-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
