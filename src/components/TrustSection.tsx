import React from 'react';
import { Gem, Users, ShieldCheck, Clock, Cpu, Crown } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustSection() {
  const trustItems = [
    {
      icon: Gem,
      title: 'Premium Quality',
      desc: 'Only the rarest single-origin micro-lots, DOP certified ingredients, and premium materials enter our portfolio.'
    },
    {
      icon: Users,
      title: 'Professional Team',
      desc: 'Elite culinary masters, award-winning baristas, and certified estate managers coordinate to deliver effortless execution.'
    },
    {
      icon: ShieldCheck,
      title: 'Customer Satisfaction',
      desc: 'We maintain a flawless record of private care, ensuring absolute confidentiality and individualized experiences for every guest.'
    },
    {
      icon: Clock,
      title: 'Years of Experience',
      desc: 'Over 15 years of industry-defining luxury service, establishing benchmark standards across gastronomy and hospitality.'
    },
    {
      icon: Cpu,
      title: 'Innovation',
      desc: 'Pioneering eco-friendly convection roasting and modern architectural systems that harmonize luxury with sustainability.'
    },
    {
      icon: Crown,
      title: 'Excellence',
      desc: 'Award-winning venues, Michelin-level standards, and a legacy of quiet, unparalleled refinement.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="trust-section" className="relative py-24 md:py-32 bg-white border-t border-brand-gold/15 overflow-hidden">
      {/* Decorative luxury abstract lines */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand-gold uppercase block font-semibold">
            ESTABLISHED STANDARDS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-charcoal">
            Our Elite Pillars of <span className="italic font-normal text-brand-gold">Trust & Excellence</span>
          </h2>
          <p className="font-sans text-brand-brown font-light text-sm md:text-base leading-relaxed">
            Every encounter with a Millard Group brand is underpinned by six core principles of high-end corporate reliability, curated skill, and ethical custody.
          </p>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-6" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 bg-brand-beige/25 hover:bg-white border border-brand-gold/10 hover:border-brand-gold/40 rounded-none shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left"
              >
                {/* Visual border accents */}
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-brand-gold group-hover:h-full transition-all duration-500" />
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold group-hover:w-full transition-all duration-500" />

                <div className="mb-6 p-3 bg-brand-beige border border-brand-gold/20 rounded-none text-brand-gold group-hover:bg-brand-charcoal group-hover:text-white group-hover:border-transparent transition-all duration-500">
                  <Icon className="w-6 h-6 stroke-[1.25]" />
                </div>
                <h3 className="font-serif text-lg font-medium text-brand-charcoal mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-brand-brown/85 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
