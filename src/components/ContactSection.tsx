import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck, Coffee, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: 'general',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: '', email: '', brand: 'general', message: '' });
    setTimeout(() => setSuccess(false), 6000);
  };

  const contactOptions = [
    {
      id: 'general',
      name: 'Millard Corporate Headquarters',
      phone: '+1 (555) 777-8888',
      email: 'concierge@millardgroup.com',
      address: '500 Park Avenue, Penthouse Level, New York',
      icon: ShieldCheck,
      color: 'text-brand-gold'
    },
    {
      id: 'amber',
      name: 'Amber Coffee Roastery Flagship',
      phone: '+1 (555) 123-4567',
      email: 'amber@millardgroup.com',
      address: '14 Golden Leaf Lane, Tribeca, New York',
      icon: Coffee,
      color: 'text-brand-gold'
    },
    {
      id: 'obika',
      name: 'Obika Mozzarella Bar & Dining Hall',
      phone: '+1 (555) 987-6543',
      email: 'obika@millardgroup.com',
      address: '72 Via Roma Boulevard, Soho, New York',
      icon: Utensils,
      color: 'text-brand-gold'
    }
  ];

  return (
    <section id="contact-section" className="py-24 md:py-32 bg-white border-t border-brand-gold/15 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-gold/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-gold/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand-gold uppercase block font-semibold italic">
            The Inquiries Portal
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-charcoal leading-tight">
            Connect Electively
          </h2>
          <p className="font-sans text-brand-brown/85 font-light text-sm md:text-base">
            Establish direct, secure channels with our private hospitality desk, specialty baristas, or executive advisors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contacts Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-[10px] tracking-wider text-brand-brown/60 uppercase block border-b border-brand-gold/10 pb-2 mb-4">
              Direct Desk Directory
            </span>

            <div className="space-y-6">
              {contactOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <div
                    key={opt.id}
                    className="p-6 bg-brand-beige border border-brand-gold/15 rounded-none space-y-3 shadow-sm hover:border-brand-gold/45 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2.5">
                      <Icon className={`w-4 h-4 ${opt.color}`} />
                      <h3 className="font-serif text-base text-brand-charcoal font-medium">{opt.name}</h3>
                    </div>

                    <div className="space-y-1.5 pl-6 font-sans text-xs text-brand-brown/90 font-light">
                      <div className="flex items-center space-x-2 text-brand-brown">
                        <Phone className="w-3.5 h-3.5 text-brand-gold/70 shrink-0" />
                        <a href={`tel:${opt.phone}`} className="hover:text-brand-gold transition-colors duration-200 font-mono">
                          {opt.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2 text-brand-brown">
                        <Mail className="w-3.5 h-3.5 text-brand-gold/70 shrink-0" />
                        <a href={`mailto:${opt.email}`} className="hover:text-brand-gold transition-colors duration-200">
                          {opt.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2 text-brand-brown">
                        <MapPin className="w-3.5 h-3.5 text-brand-gold/70 shrink-0" />
                        <span>{opt.address}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Global Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 bg-brand-beige border border-brand-gold/15 rounded-none shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-brand-charcoal font-medium">Inquire Securely</h3>
                <p className="font-sans text-xs text-brand-brown/70">
                  Fill out your coordination metrics below, selecting your specific brand destination.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] tracking-wider text-brand-brown/80 uppercase font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-brand-gold/20 focus:border-brand-gold text-brand-charcoal text-sm rounded-none outline-none transition-colors duration-200"
                      placeholder="Richard Sterling"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] tracking-wider text-brand-brown/80 uppercase font-semibold">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-brand-gold/20 focus:border-brand-gold text-brand-charcoal text-sm rounded-none outline-none transition-colors duration-200"
                      placeholder="richard@sterling.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] tracking-wider text-brand-brown/80 uppercase font-semibold">Destination Channel</label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-brand-gold/20 focus:border-brand-gold text-brand-charcoal text-sm rounded-none outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="general">Millard Group Corporate</option>
                    <option value="millard">Millard Elite Hospitality & Estates</option>
                    <option value="amber">Amber Coffee Roastery</option>
                    <option value="obika">Obika Mozzarella Bar & Restaurant</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] tracking-wider text-brand-brown/80 uppercase font-semibold">Your Inquiry</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-brand-gold/20 focus:border-brand-gold text-brand-charcoal text-sm rounded-none outline-none transition-colors duration-200 resize-none"
                    placeholder="Describe your requirements, preferred timing, or private corporate scope..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-charcoal hover:bg-brand-gold text-white font-mono text-xs tracking-widest uppercase font-bold rounded-none shadow-sm transition-colors duration-300 cursor-pointer"
                >
                  Transmit Inquiry
                </button>
              </form>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-emerald-500/5 border border-emerald-500/20 text-emerald-700 font-sans text-xs text-center leading-relaxed"
                  >
                    ✓ Transmission accomplished. A specialized ambassador from our elite corporate desk will verify your details and respond within 2 hours.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
