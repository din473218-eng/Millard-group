import React from 'react';
import { Coffee, Utensils, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { BrandID } from '../types';

interface BrandsGridProps {
  onSelectBrand: (brandId: BrandID) => void;
}

const brandCards = [
  {
    id: 'amber' as BrandID,
    name: 'Amber Coffee',
    tagline: 'Artisanal Roastery & Specialty Brewing',
    desc: 'Sourcing rare single-origin reserve beans and engineering precise small-batch roasts. Discover signature warm nitro blends, micro-lot cold drafts, and a cozy mid-century slow bar atmosphere designed for true coffee purists.',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800',
    icon: Coffee,
    color: 'amber-500',
    btnText: 'Experience Amber Coffee',
    highlights: ['Single-Origin Reserve', 'Nitro Cold Brews', 'Cozy Café Slow Bar']
  },
  {
    id: 'obika' as BrandID,
    name: 'Obika',
    tagline: 'Authentic Italian Gastronomy & Mozzarella DOP',
    desc: 'An exquisite slow-dining celebration showcasing Campania Mozzarella di Bufala Campana DOP imported twice weekly, hand-stretched 48-hour ancient grain pinsa, artisanal pastas, and a deep, sommelier-curated Italian wine list.',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=800',
    icon: Utensils,
    color: 'emerald-600',
    btnText: 'Dine At Obika',
    highlights: ['Campania Mozzarella DOP', 'Ancient Grain Pinsa', 'Sommelier Wine List']
  },
  {
    id: 'millard' as BrandID,
    name: 'Millard Elite Hospitality',
    tagline: 'Bespoke Private Estates & Lifestyle Curation',
    desc: 'The pinnacle of private luxury living. Orchestrating tailor-made architectural concepts, 24/7 hyper-personalized elite concierge services, high-net-worth real-estate advisory, and members-only wellness sanctuaries.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800',
    icon: ShieldCheck,
    color: 'gold-400',
    btnText: 'Inquire with Millard',
    highlights: ['Bespoke Architecture', 'White-Glove Concierge', 'Members-Only Clubs']
  }
];

export default function BrandsGrid({ onSelectBrand }: BrandsGridProps) {
  return (
    <section id="brands-section" className="py-24 md:py-32 bg-white border-t border-brand-gold/15 relative overflow-hidden">
      {/* Decorative elegant grid lines */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-brand-gold/10 hidden xl:block animate-pulse" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-brand-gold/10 hidden xl:block animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand-gold uppercase block font-semibold italic">
            Our Elite Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-charcoal leading-tight">
            Three Distinctive Pillars of <br />
            <span className="italic font-normal text-brand-gold">Refined Craft</span>
          </h2>
          <p className="font-sans text-brand-brown/85 font-light text-sm md:text-base leading-relaxed">
            While each of our three flagships operates under its own highly specialized mastery, they remain unified by the same standard of absolute quality, traceability, and bespoke customer care.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12" id="brands-container">
          {brandCards.map((brand, idx) => {
            const Icon = brand.icon;
            const itemNumber = `0${idx + 1}`;
            return (
              <div
                key={brand.id}
                id={`brand-card-${brand.id}`}
                className="group relative flex flex-col bg-white/40 backdrop-blur-xl border border-white/60 hover:border-brand-gold/45 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full rounded-2xl"
              >
                {/* Editorial Header bar inside card matching Design HTML */}
                <div className="px-6 pt-6 pb-2 flex justify-between items-center bg-transparent">
                  <div className="text-brand-gold text-xs font-serif italic font-bold">{itemNumber}</div>
                  <div className="w-12 h-[1px] bg-brand-gold/25"></div>
                </div>

                {/* Image Section */}
                <div className="relative aspect-[16/10] w-full overflow-hidden px-6 bg-transparent">
                  <div className="w-full h-full overflow-hidden border border-brand-gold/10 relative rounded-xl shadow-md">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating Icon Badges */}
                  <div className="absolute top-6 right-10 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-brand-gold/20 shadow-md z-10">
                    <Icon className="w-4 h-4 text-brand-gold" />
                  </div>
                </div>

                {/* Card Info Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase font-bold">
                        {brand.id === 'millard' ? 'LIFESTYLE & LOBBY' : brand.id === 'amber' ? 'SPECIALTY ROAST' : 'ITALIAN DINING'}
                      </span>
                      <h3 className="font-serif text-2xl font-medium tracking-wide text-brand-charcoal group-hover:text-brand-gold transition-colors duration-300">
                        {brand.name}
                      </h3>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-brand-brown/85 font-light leading-relaxed min-h-[96px]">
                      {brand.desc}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-3 border-t border-brand-gold/10">
                      {brand.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2 text-brand-brown">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/75" />
                          <span className="font-sans text-xs font-light tracking-wide">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        onSelectBrand(brand.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-3.5 bg-brand-charcoal hover:bg-brand-gold text-white font-mono text-[10px] tracking-widest uppercase font-bold transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer focus:outline-none rounded-xl border border-transparent shadow-md hover:shadow-lg"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
