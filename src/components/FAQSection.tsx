import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Compass } from 'lucide-react';
import { faqsData } from '../data';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-24 bg-brand-beige border-t border-brand-gold/15 relative overflow-hidden">
      <div className="absolute bottom-12 left-1/3 w-80 h-80 rounded-full bg-brand-gold/3 blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand-gold uppercase block font-semibold italic">
            Client Concierge
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-charcoal">
            Frequently Asked Queries
          </h2>
          <p className="font-sans text-brand-brown/85 font-light text-sm">
            Learn more about the cohesive integration of Millard Group’s fine hospitality ecosystem.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-brand-gold/15 rounded-2xl transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-gold/80 group-hover:text-brand-gold transition-colors duration-200 shrink-0" />
                    <span className="font-serif text-base md:text-lg text-brand-charcoal group-hover:text-brand-gold transition-colors duration-200 font-medium">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`p-1.5 rounded-lg bg-brand-beige border border-brand-gold/20 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-brand-gold" />
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-brand-gold/10 opacity-100 p-6 bg-brand-beige/20' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="font-sans text-xs md:text-sm text-brand-brown/85 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
