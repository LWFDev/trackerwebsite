import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

interface ExpoBannerProps {
  className?: string;
}

const ExpoBanner = ({ className }: ExpoBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatedIn, setIsAnimatedIn] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const dismissed = localStorage.getItem('expo-banner-dismissed-2025');
    if (!dismissed) {
      setIsVisible(true);
      // Delay banner animation to start after header animation (0.5s header + 0.3s delay)
      const timer = setTimeout(() => {
        setIsAnimatedIn(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsAnimatedIn(false);
    // Wait for exit animation before hiding
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('expo-banner-dismissed-2025', 'true');
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <div className={`w-full min-h-[44px] bg-black overflow-hidden ${className || ''}`}>
      <AnimatePresence>
        {isAnimatedIn && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="w-full min-h-[44px] bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white py-2 px-10 md:px-4 relative flex items-center justify-center"
          >
            <div className="container mx-auto flex items-center justify-center text-center">
              <span className="text-xs md:text-base leading-tight">
                {isMobile ? (
                  <>
                    🎉 <strong>Impressions Expo</strong> - Long Beach Jan 21-24!{' '}
                    <span className="font-black">Barudan</span> booth
                  </>
                ) : (
                  <>
                    🎉 We're at the <strong>Impressions Expo</strong> in Long Beach, Jan 21-24! Come see us at the{' '}
                    <span className="font-black">Barudan</span> booth
                  </>
                )}
              </span>
              <button 
                onClick={handleDismiss} 
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpoBanner;
