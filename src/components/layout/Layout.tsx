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
}

const BannerContext = createContext<BannerContextType>({
  bannerVisible: true,
  setBannerVisible: () => {},
});

export const useBanner = () => useContext(BannerContext);

const Layout = ({ children, showBanner = true }: LayoutProps) => {
  const [bannerVisible, setBannerVisible] = useState(showBanner);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('expo-banner-dismissed-2025');
    setBannerDismissed(!!dismissed);
  }, []);

  const isBannerShowing = showBanner && bannerVisible && !bannerDismissed;

  return (
    <BannerContext.Provider value={{ bannerVisible: isBannerShowing, setBannerVisible }}>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {isBannerShowing && <ExpoBanner />}
        <Header hasBanner={isBannerShowing} />
      </div>
      {children}
      <Footer />
    </BannerContext.Provider>
  );
};

export default Layout;
