import React, { useState } from 'react';
import { ZoomIn, X, Compass, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const galleryItems = [
  {
    id: 'fg-1',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800',
    title: 'Millard Retreat Lounge',
    category: 'Hospitality',
    span: 'col-span-2 row-span-2'
  },
  {
    id: 'fg-2',
    url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800',
    title: 'Signature Amber Pour',
    category: 'Coffee Chemistry',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'fg-3',
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800',
    title: 'Obika Handcrafted Pinsa',
    category: 'Gastronomy',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'fg-4',
    url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=800',
    title: 'Fresh Tagliolini Preparation',
    category: 'Gastronomy',
    span: 'col-span-1 row-span-2'
  },
  {
    id: 'fg-5',
    url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800',
    title: 'Amber mid-century coffee bar',
    category: 'Coffee Chemistry',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'fg-6',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    title: 'Millard Luxury Suite',
    category: 'Hospitality',
    span: 'col-span-2 row-span-1'
  }
];

export default function FeaturedGallery() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; category: string } | null>(null);

  return (
    <section id="gallery-section" className="py-24 bg-brand-beige border-t border-brand-gold/15 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/10 w-80 h-80 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand-gold uppercase block font-semibold italic">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-charcoal leading-tight">
            Featured Gallery
          </h2>
          <p className="font-sans text-brand-brown/85 font-light text-sm md:text-base">
            Witness the unified aesthetic of Millard Group—where high-end design principles intersect with sensory pleasure.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage({ url: item.url, title: item.title, category: item.category })}
              className={`group relative overflow-hidden rounded-2xl border border-brand-gold/15 bg-white cursor-zoom-in shadow-md hover:shadow-xl transition-all duration-500 ${item.span}`}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Elegant overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Fine Text Info */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-mono text-[9px] text-brand-gold tracking-widest uppercase block mb-1 font-bold">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm md:text-base text-white tracking-wide">
                  {item.title}
                </h3>
              </div>

              {/* Zoom badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white/90 border border-brand-gold/20 rounded-lg">
                <ZoomIn className="w-3.5 h-3.5 text-brand-gold" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-charcoal/95 backdrop-blur-md z-50 flex flex-col justify-center items-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-none bg-brand-beige border border-brand-gold text-brand-charcoal hover:text-brand-gold cursor-pointer focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[70vh] object-contain rounded-none border border-brand-gold/30 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center space-y-1">
                <span className="font-mono text-[10px] text-brand-gold tracking-[0.3em] uppercase block font-bold">
                  {selectedImage.category}
                </span>
                <p className="font-serif text-base text-brand-beige tracking-wide">
                  {selectedImage.title}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
