import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import barudanLogo from '@/assets/barudan-white.png';

const ExpoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const dismissed = localStorage.getItem('expo-banner-dismissed-2025');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('expo-banner-dismissed-2025', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white py-2.5 px-3 md:px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-center">
        <span className="text-sm md:text-base pr-6">
          {isMobile ? (
            <>
              🎉 See us at <strong>Impressions Expo</strong>, Long Beach Jan 21-24! Visit the{' '}
              <img 
                src={barudanLogo} 
                alt="Barudan" 
                className="inline h-3.5 mx-1 align-middle" 
              /> 
              booth
            </>
          ) : (
            <>
              🎉 We're at the <strong>Impressions Expo</strong> in Long Beach, Jan 21-24! Come see us at the{' '}
              <img 
                src={barudanLogo} 
                alt="Barudan" 
                className="inline h-4 mx-1 align-middle" 
              /> 
              booth
            </>
          )}
        </span>
        <button 
          onClick={handleDismiss} 
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ExpoBanner;
