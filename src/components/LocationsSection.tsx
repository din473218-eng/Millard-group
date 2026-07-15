import React, { useState } from 'react';
import { MapPin, Phone, Clock, Compass, ExternalLink, ShieldAlert } from 'lucide-react';
import { locationsData } from '../data';
import { LocationItem } from '../types';

export default function LocationsSection() {
  const [activeLoc, setActiveLoc] = useState<LocationItem>(locationsData[0]);

  return (
    <section id="locations-section" className="py-24 bg-brand-beige border-t border-brand-gold/15 relative overflow-hidden">
      <div className="absolute top-1/4 left-12 w-64 h-64 rounded-full bg-brand-gold/3 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand-gold uppercase block font-semibold italic">
            Our Sanctuaries
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-charcoal">
            Where to Discover Us
          </h2>
          <p className="font-sans text-brand-brown/85 font-light text-sm md:text-base">
            Visit our physical locations spanning roasteries, fine-dining mozzarella bars, and private corporate executive chambers.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left: Location Selectors */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-wider text-brand-brown/60 uppercase block border-b border-brand-gold/10 pb-2">
                Select Sanctuary
              </span>

              <div className="space-y-3">
                {locationsData.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLoc(loc)}
                    className={`w-full p-6 text-left rounded-none border transition-all duration-300 cursor-pointer focus:outline-none flex flex-col space-y-2 ${
                      activeLoc.id === loc.id
                        ? 'bg-white border-brand-gold shadow-md'
                        : 'bg-white/40 border-brand-gold/10 hover:border-brand-gold/40'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase font-bold">
                        {loc.brand}
                      </span>
                      {activeLoc.id === loc.id && (
                        <span className="h-1.5 w-1.5 rounded-none bg-brand-gold rotate-45" />
                      )}
                    </div>
                    <h3 className="font-serif text-lg text-brand-charcoal">
                      {loc.name}
                    </h3>
                    <p className="font-sans text-xs text-brand-brown/70 font-light leading-relaxed line-clamp-1">
                      {loc.address}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Location Details Card */}
            <div className="bg-white p-6 rounded-none border border-brand-gold/15 space-y-4 shadow-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] text-brand-brown/60 uppercase block font-semibold">Address</span>
                  <p className="font-sans text-xs md:text-sm text-brand-charcoal leading-relaxed font-light">
                    {activeLoc.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] text-brand-brown/60 uppercase block font-semibold">Phone Inquiries</span>
                  <a href={`tel:${activeLoc.phone}`} className="font-serif text-sm text-brand-charcoal hover:text-brand-gold transition-colors duration-200">
                    {activeLoc.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] text-brand-brown/60 uppercase block font-semibold">Business Hours</span>
                  <p className="font-sans text-xs text-brand-charcoal leading-relaxed font-light">
                    {activeLoc.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map Integration Frame */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[400px] relative rounded-none overflow-hidden border border-brand-gold/15 shadow-sm bg-white">
            {/* Live Google Maps Iframe */}
            <iframe
              title={`${activeLoc.name} Map Location`}
              src={activeLoc.mapEmbedUrl}
              className="w-full h-full border-0 filter opacity-90 hover:opacity-100 transition-opacity duration-500"
              allowFullScreen={false}
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
