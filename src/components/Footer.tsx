import React, { useState } from 'react';
import { Send, Check, Shield, Compass, Sparkles, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import { BrandID } from '../types';

interface FooterProps {
  onNavigate: (view: 'home' | 'millard' | 'amber' | 'obika' | 'news' | 'locations' | 'contact') => void;
  onInquire: () => void;
}

export default function Footer({ onNavigate, onInquire }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-brand-charcoal border-t border-brand-gold/15 pt-20 pb-12 text-brand-beige/60 font-sans relative overflow-hidden" id="luxury-footer">
      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 relative z-10">
        
        {/* Brand narrative col */}
        <div className="md:col-span-4 space-y-6">
          <div className="space-y-2">
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
              MILLARD
            </span>
            <span className="font-mono text-[9px] tracking-[0.4em] text-brand-gold uppercase block font-bold">
              GROUP
            </span>
          </div>

          <p className="font-sans text-xs leading-relaxed text-brand-beige/50 font-light max-w-sm">
            Unified by the relentless pursuit of perfection, Millard Group coordinates artisanal roasteries, traditional Neapolitan Mozzarella Bars, and ultra-high-end private residential developments.
          </p>

          {/* Socials */}
          <div className="flex space-x-3 pt-2">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-black/25 border border-brand-gold/15 text-brand-beige/60 hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links col */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-mono text-[10px] tracking-widest text-brand-gold uppercase font-semibold">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs text-brand-beige/75">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-brand-gold transition-colors duration-200 cursor-pointer">
                Home Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('locations')} className="hover:text-brand-gold transition-colors duration-200 cursor-pointer">
                Sanctuaries & Maps
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('news')} className="hover:text-brand-gold transition-colors duration-200 cursor-pointer">
                Press & Chronicles
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-brand-gold transition-colors duration-200 cursor-pointer">
                Direct Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Our Brands col */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-mono text-[10px] tracking-widest text-brand-gold uppercase font-semibold">
            Our Brands
          </h4>
          <ul className="space-y-2.5 text-xs text-brand-beige/75">
            <li>
              <button onClick={() => onNavigate('millard')} className="hover:text-brand-gold transition-colors duration-200 cursor-pointer flex items-center space-x-1.5">
                <span className="w-1 h-1 bg-brand-gold rounded-full" />
                <span>Millard Hospitality</span>
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('amber')} className="hover:text-brand-gold transition-colors duration-200 cursor-pointer flex items-center space-x-1.5">
                <span className="w-1 h-1 bg-brand-gold rounded-full" />
                <span>Amber Coffee</span>
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('obika')} className="hover:text-brand-gold transition-colors duration-200 cursor-pointer flex items-center space-x-1.5">
                <span className="w-1 h-1 bg-brand-gold rounded-full" />
                <span>Obika Gastronomy</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription col */}
        <div className="md:col-span-4 space-y-6">
          <div className="space-y-2">
            <h4 className="font-mono text-[10px] tracking-widest text-brand-gold uppercase font-semibold">
              The Private Registry
            </h4>
            <p className="font-sans text-xs leading-relaxed text-brand-beige/50 font-light">
              Subscribe to receive exclusive menu releases, micro-lot coffee auctions, and private concierge invitations.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="relative flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 bg-black/35 border border-brand-gold/15 text-white text-xs rounded-xl focus:border-brand-gold outline-none pr-12 transition-colors duration-300 placeholder-brand-beige/30"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3.5 bg-brand-gold hover:bg-white text-brand-charcoal rounded-r-xl transition-colors duration-200 cursor-pointer"
            >
              {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
            </button>
          </form>

          {subscribed && (
            <span className="text-[11px] text-emerald-400 font-sans block leading-none">
              ✓ Successfully registry entry completed.
            </span>
          )}
        </div>

      </div>

      {/* Sub Footer Fine Print */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-brand-gold/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-brand-beige/40">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          <span className="hover:text-brand-gold cursor-pointer transition-colors duration-250">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-brand-gold cursor-pointer transition-colors duration-250">Terms & Conditions</span>
          <span>•</span>
          <span className="hover:text-brand-gold cursor-pointer transition-colors duration-250">Sitemap</span>
        </div>

        <span className="font-mono text-center sm:text-right">
          Copyright © 2026 Millard Group. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
