import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3.5 items-end">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/15557778888"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3.5 rounded-none bg-white border border-brand-gold/25 text-brand-charcoal shadow-md flex items-center justify-center cursor-pointer group relative"
        title="WhatsApp Live Chat"
      >
        <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]/10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1 bg-brand-charcoal border border-brand-gold/30 text-white font-sans text-[10px] tracking-wider uppercase rounded-none shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp Live Chat
        </span>
      </motion.a>

      {/* Click-to-Call Button */}
      <motion.a
        href="tel:+15557778888"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3.5 rounded-none bg-brand-gold border border-transparent text-white shadow-md flex items-center justify-center cursor-pointer group relative"
        title="Direct VIP Inquiry"
      >
        <Phone className="w-5 h-5 fill-white text-brand-gold" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1 bg-brand-charcoal border border-brand-gold/30 text-white font-sans text-[10px] tracking-wider uppercase rounded-none shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Direct VIP Inquiry
        </span>
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="p-3.5 rounded-none bg-brand-charcoal border border-brand-gold/20 text-brand-gold shadow-md flex items-center justify-center cursor-pointer hover:bg-brand-charcoal/90 transition-colors duration-200"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
