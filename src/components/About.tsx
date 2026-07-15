import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Compass, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';

function AnimatedCounter({ value, duration = 1800 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = numericValue;
    if (start === end) return;

    const totalMilliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMilliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMilliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [numericValue, isVisible, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

interface AboutProps {
  onLearnMore: () => void;
}

export default function About({ onLearnMore }: AboutProps) {
  const stats = [
    { value: '15+', label: 'Years of Refinement', desc: 'Crafting elite experiences.' },
    { value: '3', label: 'Bespoke Brands', desc: 'Unified by high-end design.' },
    { value: '25k+', label: 'Discerning Clients', desc: 'Satisfied globally.' },
    { value: '100%', label: 'Ingredient Purity', desc: 'Ethical, certified sourcing.' }
  ];

  const corePillars = [
    {
      icon: ShieldCheck,
      title: 'Uncompromised Integrity',
      desc: 'Whether it is sourcing rare Geisha coffee beans or certified Campania Mozzarella DOP, we prioritize pristine quality above all.'
    },
    {
      icon: Compass,
      title: 'Curation & Craft',
      desc: 'Every space we build and culinary dish we plate is treated as a masterwork of design, lighting, flavor, and touch.'
    },
    {
      icon: Award,
      title: 'Elite Hospitality',
      desc: 'Our staff are trained concierge hosts, delivering white-glove attentiveness that anticipates client needs flawlessly.'
    }
  ];

  return (
    <section id="about-section" className="relative py-24 md:py-32 bg-brand-beige border-t border-brand-gold/15 overflow-hidden">
      {/* Subtle organic elegant shapes */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-gold/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Rich Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand-gold uppercase block font-semibold italic">
                The Millard Group Story
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-charcoal leading-tight">
                Pioneering the Art of <br />
                <span className="italic font-normal text-brand-gold">Exquisite Living</span>
              </h2>
            </div>

            <p className="font-sans text-brand-brown font-light text-base leading-relaxed">
              Established in 2011, Millard Group has stood as a silent beacon of premium lifestyle, elite gastronomy, and bespoke hospitality. Our philosophy is humble yet uncompromising: we believe that true luxury is not loud, but rather lives in the meticulous details—the flawless roast profile of a single-origin bean, the perfect rise of slow-fermented dough, and the pristine quietude of a private coastal sanctuary.
            </p>

            <p className="font-sans text-brand-brown/80 font-light text-sm leading-relaxed">
              By uniting three distinguished flagships under one family, Millard Group offers a complete sensory journey. We curate environments that encourage you to slow down, disconnect from noise, and engage with genuine culinary and lifestyle heritage.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {corePillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="space-y-3 p-4 rounded-sm bg-white border border-brand-gold/15 hover:border-brand-gold/45 transition-all duration-300 shadow-sm">
                    <div className="w-8 h-8 rounded-sm bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                      <Icon className="w-4 h-4 text-brand-gold" />
                    </div>
                    <h3 className="font-serif text-sm font-medium text-brand-charcoal">{pillar.title}</h3>
                    <p className="font-sans text-xs text-brand-brown/80 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Premium Interactive Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-[450px] mx-auto">
              {/* Outer Golden Framed Box */}
              <div className="absolute inset-0 border border-brand-gold/20 rounded-2xl transform translate-x-4 translate-y-4 pointer-events-none" />
              
              {/* Main Image */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-xl bg-white border border-brand-gold/15">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800"
                  alt="Millard Group Hospitality"
                  className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700 ease-in-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-beige/85 via-transparent to-transparent" />
              </div>

              {/* Smaller overlapping floating image card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 w-1/2 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-brand-gold/15 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=600"
                  alt="Amber Coffee Brewing"
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-beige/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="font-mono text-[8px] tracking-widest text-brand-gold uppercase font-bold">AMBER COFFEE</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Counter Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-20 mt-16 border-t border-brand-gold/15">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left space-y-1">
              <span className="font-serif text-3xl md:text-5xl font-light text-brand-gold block">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="font-sans text-xs md:text-sm font-semibold text-brand-charcoal tracking-wider block uppercase">
                {stat.label}
              </span>
              <span className="font-sans text-[11px] md:text-xs text-brand-brown/70 leading-normal block">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
