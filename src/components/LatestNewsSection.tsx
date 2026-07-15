import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight, X, Clock, Sparkles } from 'lucide-react';
import { NewsItem } from '../types';
import { newsData } from '../data';

export default function LatestNewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'millard' | 'amber' | 'obika'>('all');

  const filteredNews = activeTab === 'all'
    ? newsData
    : newsData.filter(item => item.brand === activeTab);

  return (
    <section id="news-section" className="py-24 bg-white border-t border-brand-gold/15 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-brand-gold/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-brand-gold uppercase block font-semibold italic">
              Chronicles & Media
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-charcoal">
              Latest from Millard Group
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {(['all', 'millard', 'amber', 'obika'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-none text-[10px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                  activeTab === tab
                    ? 'bg-brand-gold text-white border-brand-gold font-semibold shadow-sm'
                    : 'bg-brand-beige text-brand-brown/80 border-brand-gold/15 hover:text-brand-gold hover:border-brand-gold/45'
                }`}
              >
                {tab === 'all' ? 'All Channels' : tab === 'millard' ? 'Millard Elite' : tab === 'amber' ? 'Amber Coffee' : 'Obika'}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              onClick={() => setSelectedArticle(news)}
              className="group bg-brand-beige rounded-none border border-brand-gold/15 hover:border-brand-gold/45 overflow-hidden shadow-sm flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
            >
              <div className="space-y-4">
                {/* Article Cover */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-beige/20 to-transparent pointer-events-none" />
                  
                  {/* Category Tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-0.5 bg-white/95 border border-brand-gold/20 rounded-none text-[9px] font-mono text-brand-gold tracking-wider uppercase font-semibold">
                    {news.category}
                  </div>
                </div>

                <div className="px-6 space-y-3">
                  <div className="flex items-center space-x-4 font-mono text-[10px] text-brand-brown/60">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{news.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{news.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl text-brand-charcoal group-hover:text-brand-gold transition-colors duration-200 line-clamp-2 leading-snug font-medium">
                    {news.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-brand-brown/80 font-light leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-4 mt-4 border-t border-brand-gold/10 flex items-center justify-between text-brand-gold group-hover:text-brand-charcoal transition-colors duration-200">
                <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">Read Full Narrative</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Modal Overlay */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-charcoal/95 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-brand-beige border border-brand-gold/30 rounded-none max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 md:p-8 space-y-6 scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header block */}
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 bg-white border border-brand-gold/20 rounded-none text-[9px] font-mono text-brand-gold tracking-wider uppercase inline-block font-semibold">
                    {selectedArticle.category}
                  </span>
                  <div className="flex items-center space-x-3 font-mono text-[10px] text-brand-brown/60 mt-2">
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-none bg-white border border-brand-gold/20 text-brand-charcoal hover:text-brand-gold cursor-pointer focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-brand-charcoal leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="aspect-[16/9] w-full overflow-hidden rounded-none border border-brand-gold/15 bg-white">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="font-sans text-sm md:text-base text-brand-charcoal leading-relaxed font-light">
                {selectedArticle.content}
              </p>

              <div className="pt-6 border-t border-brand-gold/15 flex items-center justify-between font-mono text-[10px] text-brand-brown/60">
                <span>© Millard Group Communications</span>
                <span className="text-brand-gold uppercase font-bold">Press Registry</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
