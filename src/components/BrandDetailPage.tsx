import React, { useState } from 'react';
import { Star, Phone, Mail, MapPin, Clock, ArrowLeft, ZoomIn, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandInfo, ProductOrService } from '../types';

interface BrandDetailPageProps {
  brand: BrandInfo;
  onBack: () => void;
  onInquire: () => void;
}

export default function BrandDetailPage({ brand, onBack, onInquire }: BrandDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [contactSuccess, setContactSuccess] = useState(false);

  // Group or unique categories of products/services
  const categories = ['All', ...Array.from(new Set(brand.products.map(p => p.category || 'General')))];

  const filteredProducts = activeCategory === 'All'
    ? brand.products
    : brand.products.filter(p => p.category === activeCategory);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => setContactSuccess(false), 5000);
  };

  return (
    <div className="pt-20 bg-brand-beige text-brand-charcoal min-h-screen" id={`brand-detail-page-${brand.id}`}>
      
      {/* Interactive Brand Hero */}
      <section className="relative h-[65vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${brand.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-beige via-brand-beige/35 to-brand-beige/70 z-10" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6">
          {/* Back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white hover:bg-brand-charcoal text-brand-charcoal hover:text-white font-mono text-[10px] tracking-widest uppercase transition-all duration-300 cursor-pointer border border-brand-gold/25 focus:outline-none mb-6 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </button>

          <span className="font-mono text-xs tracking-[0.5em] text-brand-gold uppercase block font-semibold italic">
            {brand.id === 'millard' ? 'LIFESTYLE & LOBBY' : brand.id === 'amber' ? 'SPECIALTY ROAST' : 'ITALIAN DINING'}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-brand-charcoal leading-tight">
            {brand.name}
          </h1>
          <p className="font-sans text-brand-brown/90 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {brand.tagline}
          </p>
        </div>
      </section>

      {/* Brand Editorial Story */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-brand-gold uppercase block font-semibold italic">
              The Heritage
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-brand-charcoal">
              {brand.storyTitle}
            </h2>
            <div className="h-[1px] w-16 bg-brand-gold" />
            <p className="font-sans text-brand-brown/85 font-light leading-relaxed text-sm md:text-base">
              {brand.narrative}
            </p>
            
            {/* Quick stats / Features row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-gold/15">
              {brand.features.map((feat, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className="font-serif text-sm font-semibold text-brand-gold">{feat.title}</h3>
                  <p className="font-sans text-xs text-brand-brown/80 leading-normal">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-brand-gold/15">
            <img
              src={brand.storyImage}
              alt={brand.storyTitle}
              className="w-full h-full object-cover grayscale opacity-95 hover:grayscale-0 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent pointer-events-none" />
          </div>

        </div>
      </section>

      {/* Brand Products & Offerings */}
      <section className="py-20 md:py-24 bg-white border-t border-b border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-brand-gold uppercase block mb-2 font-semibold italic">
                Our Offerings
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-medium tracking-tight text-brand-charcoal">
                Bespoke Selections
              </h2>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                    activeCategory === cat
                      ? 'bg-brand-charcoal text-white border-transparent font-semibold shadow-md'
                      : 'bg-brand-beige text-brand-brown/75 border-brand-gold/15 hover:text-brand-gold hover:border-brand-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-gold/15 hover:border-brand-gold/45 overflow-hidden shadow-md hover:shadow-2xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent" />
                  
                  {prod.price && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white border border-brand-gold/15 rounded-lg text-brand-gold font-serif text-sm tracking-wide shadow-md">
                      {prod.price}
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    {prod.category && (
                      <span className="font-mono text-[9px] tracking-widest text-brand-brown/60 uppercase block">
                        {prod.category}
                      </span>
                    )}
                    <h3 className="font-serif text-lg text-brand-charcoal group-hover:text-brand-gold transition-colors duration-300 font-medium">
                      {prod.name}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-brand-brown/85 font-light leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  {prod.features && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-gold/10">
                      {prod.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-white border border-brand-gold/10 rounded-md text-[9px] font-mono text-brand-brown/75 tracking-wider uppercase"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Brand Image Gallery */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand-gold uppercase block font-semibold italic">
            Visual Vignettes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-brand-charcoal">
            The Gallery Experience
          </h2>
          <p className="font-sans text-brand-brown/85 font-light text-sm">
            Step inside our pristine settings and inspect the visual mastery of our signature offerings. Click on any frame to view the detailed capture.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {brand.gallery.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage({ url: img.url, caption: img.caption })}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-brand-gold/15 bg-brand-beige cursor-zoom-in shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 bg-white/95 backdrop-blur-md rounded-xl border border-brand-gold/20 shadow-lg">
                  <ZoomIn className="w-5 h-5 text-brand-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Customer Reviews */}
      <section className="py-20 md:py-24 bg-white border-t border-b border-brand-gold/15">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand-gold uppercase block mb-3 font-semibold italic">
            Guest Chronicles
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-medium tracking-tight text-brand-charcoal mb-16">
            Words From Our Connoisseurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {brand.reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-8 md:p-10 bg-white/40 backdrop-blur-md rounded-2xl border border-brand-gold/15 hover:border-brand-gold/30 shadow-md hover:shadow-xl flex flex-col justify-between text-left space-y-6 transition-all duration-500"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>

                  <p className="font-serif text-sm md:text-base text-brand-brown font-light italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-brand-gold/10 font-sans text-xs">
                  <div>
                    <span className="text-brand-charcoal font-semibold block">{rev.author}</span>
                    {rev.location && <span className="text-brand-brown/70">{rev.location}</span>}
                  </div>
                  <span className="text-brand-brown/50 font-mono">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Specific Contact & Form Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Contact info column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-brand-gold uppercase block font-semibold italic">
              Direct Channels
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-medium tracking-tight text-brand-charcoal">
              Connect With {brand.name}
            </h2>
          </div>

          <p className="font-sans text-brand-brown/85 font-light text-sm md:text-base leading-relaxed">
            Our specialized coordinators are available to answer queries, record bookings, or process requests for customized private shipments and reservations.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-wider text-brand-brown/60 uppercase block">Inquire by Phone</span>
                <a href={`tel:${brand.contact.phone}`} className="font-serif text-lg text-brand-charcoal hover:text-brand-gold transition-colors duration-200">
                  {brand.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-wider text-brand-brown/60 uppercase block">Electronic Mail</span>
                <a href={`mailto:${brand.contact.email}`} className="font-serif text-lg text-brand-charcoal hover:text-brand-gold transition-colors duration-200">
                  {brand.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-wider text-brand-brown/60 uppercase block">Sanctuary Address</span>
                <span className="font-sans text-sm text-brand-brown block leading-relaxed">
                  {brand.contact.address}
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] tracking-wider text-brand-brown/60 uppercase block">Hours of Reception</span>
                {brand.contact.hours.map((line, idx) => (
                  <span key={idx} className="font-sans text-xs text-brand-brown block">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href={brand.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs tracking-widest uppercase font-semibold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp Chat</span>
            </a>
            
            <a
              href={`tel:${brand.contact.phone}`}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white hover:bg-brand-charcoal text-brand-charcoal hover:text-white font-mono text-xs tracking-widest uppercase font-semibold rounded-xl border border-brand-gold/25 transition-all duration-300 cursor-pointer shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>

        {/* Custom inquiry Form Column */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-10 bg-white/45 backdrop-blur-xl rounded-2xl border border-brand-gold/15 shadow-lg space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-xl text-brand-charcoal font-medium">Inquire Electively</h3>
              <p className="font-sans text-xs text-brand-brown/70">
                Please complete the form below. A dedicated hospitality ambassador representing {brand.name} will contact you shortly.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] tracking-wider text-brand-brown/80 uppercase block font-semibold">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/60 border border-brand-gold/20 focus:border-brand-gold text-brand-charcoal text-sm rounded-xl outline-none transition-colors duration-200"
                    placeholder="E.g. Richard Sterling"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] tracking-wider text-brand-brown/80 uppercase block font-semibold">E-mail Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/60 border border-brand-gold/20 focus:border-brand-gold text-brand-charcoal text-sm rounded-xl outline-none transition-colors duration-200"
                    placeholder="E.g. richard@sterling.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] tracking-wider text-brand-brown/80 uppercase block font-semibold">Nature of Inquiry</label>
                <select
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-brand-gold/20 focus:border-brand-gold text-brand-charcoal text-sm rounded-xl outline-none transition-colors duration-200 appearance-none"
                >
                  {brand.id === 'millard' && (
                    <>
                      <option value="estate">Private Residential Advisory</option>
                      <option value="concierge">White-Glove Concierge Services</option>
                      <option value="membership">Invitation-Only Membership Request</option>
                      <option value="general">General Corporate Inquiry</option>
                    </>
                  )}
                  {brand.id === 'amber' && (
                    <>
                      <option value="wholesale">Wholesale Bean Partnership</option>
                      <option value="tasting">Custom Coffee Bar Catering</option>
                      <option value="roastery">Roastery Private Event Booking</option>
                      <option value="general">General Specialty Inquiry</option>
                    </>
                  )}
                  {brand.id === 'obika' && (
                    <>
                      <option value="booking">Exclusive Dining Room Table Booking</option>
                      <option value="catering">Premium Mozzarella Bar Catering</option>
                      <option value="event">Corporate Banquets & Tastings</option>
                      <option value="general">General Gastronomy Inquiry</option>
                    </>
                  )}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] tracking-wider text-brand-brown/80 uppercase block font-semibold">Inquiry Narrative</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-brand-gold/20 focus:border-brand-gold text-brand-charcoal text-sm rounded-xl outline-none transition-colors duration-200 resize-none"
                  placeholder="Detail your requirements, preferred timing, or special menu directives..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-charcoal hover:bg-brand-gold text-white font-mono text-xs tracking-widest uppercase font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Send Secure Transmission
              </button>
            </form>

            <AnimatePresence>
              {contactSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 bg-emerald-500/5 border border-emerald-500/20 text-emerald-700 font-sans text-xs text-center leading-relaxed rounded-xl"
                >
                  ✓ Your elite inquiry has been securely received. A dedicated representative from the {brand.name} team will establish contact within 2 hours.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </section>

      {/* Photo Lightbox Dialog */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-center items-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-brand-charcoal/85 border border-brand-gold/20 text-white hover:text-brand-gold cursor-pointer focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-h-[70vh] object-contain rounded-2xl border border-brand-gold/15 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />
              <p className="mt-4 font-serif text-sm text-brand-beige tracking-wide text-center bg-brand-charcoal border border-brand-gold/25 px-6 py-2.5 rounded-xl shadow-xl max-w-md">
                {selectedImage.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
