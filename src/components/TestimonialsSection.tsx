import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    quote: "Millard Group represents the pinnacle of luxury, curation, and absolute safety. Their attention to detail in their hospitality chambers is unmatched.",
    author: "Alexander Sterling",
    role: "Managing Director at Sterling Estates",
    brand: "Millard Elite",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256"
  },
  {
    quote: "The specialty single-origins at Amber Coffee are a work of art. The pour-over bar has become an essential morning sanctuary for me.",
    author: "Charlotte Vane",
    role: "Design Lead & Coffee Enthusiast",
    brand: "Amber Coffee",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256"
  },
  {
    quote: "Obika brings authentic Italian simplicity to the table with elite DOP ingredients. The Truffle Pinsa is simply extraordinary.",
    author: "Chef Roberto Rossi",
    role: "Gastronomy Critic",
    brand: "Obika Gastronomy",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256"
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials-section" className="py-24 bg-white border-t border-b border-brand-gold/15 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/10 w-80 h-80 rounded-full bg-brand-gold/3 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <span className="font-mono text-[10px] tracking-[0.4em] text-brand-gold uppercase block mb-3 font-semibold italic">
          Endorsements
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-charcoal mb-16">
          Voices of Distinction
        </h2>

        {/* Testimonials Slider */}
        <div className="relative min-h-[350px] flex flex-col justify-center items-center max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-brand-gold/15 mb-6 shrink-0" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex items-center space-x-1 justify-center">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>

              <p className="font-serif text-lg md:text-2xl font-light italic text-brand-brown leading-relaxed max-w-2xl">
                "{testimonials[index].quote}"
              </p>

              {/* Client Profile Details */}
              <div className="flex items-center space-x-4 text-left">
                <img 
                  src={testimonials[index].photo} 
                  alt={testimonials[index].author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold/30 shadow-md"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <span className="font-sans text-sm md:text-base font-semibold text-brand-charcoal block">
                    {testimonials[index].author}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-brand-gold uppercase block mt-0.5 font-semibold">
                    {testimonials[index].role} • {testimonials[index].brand}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 pt-10 mt-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-none border border-brand-gold/25 hover:border-brand-gold text-brand-brown hover:text-brand-gold transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex space-x-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-none ${
                    idx === index ? 'w-6 bg-brand-gold' : 'w-1.5 bg-brand-gold/25'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-none border border-brand-gold/25 hover:border-brand-gold text-brand-brown hover:text-brand-gold transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
