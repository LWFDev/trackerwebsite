import { useState, useEffect, createContext, useContext } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ExpoBanner from "@/components/landing/ExpoBanner";

interface LayoutProps {
  children: React.ReactNode;
  showBanner?: boolean;
}

interface BannerContextType {
  bannerVisible: boolean;
  setBannerVisible: (visible: boolean) => void;
  bannerHeight: number;
}

const BannerContext = createContext<BannerContextType>({
  bannerVisible: true,
  setBannerVisible: () => {},
  bannerHeight: 44,
});

export const useBanner = () => useContext(BannerContext);

const Layout = ({ children, showBanner = true }: LayoutProps) => {
  const [bannerVisible, setBannerVisible] = useState(showBanner);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const bannerHeight = 44; // Height of the banner in pixels

  useEffect(() => {
    const dismissed = localStorage.getItem('expo-banner-dismissed-2025');
    setBannerDismissed(!!dismissed);
  }, []);

  // Listen for banner dismissal
  useEffect(() => {
    const checkDismissal = () => {
      const dismissed = localStorage.getItem('expo-banner-dismissed-2025');
      setBannerDismissed(!!dismissed);
    };
    
    window.addEventListener('storage', checkDismissal);
    const interval = setInterval(checkDismissal, 100);
    
    return () => {
      window.removeEventListener('storage', checkDismissal);
      clearInterval(interval);
    };
  }, []);

  const isBannerShowing = showBanner && bannerVisible && !bannerDismissed;

  return (
    <BannerContext.Provider value={{ bannerVisible: isBannerShowing, setBannerVisible, bannerHeight }}>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300">
        {isBannerShowing && <ExpoBanner />}
        <Header hasBanner={isBannerShowing} />
      </div>
      {children}
      <Footer />
    </BannerContext.Provider>
  );
};

export default Layout;
