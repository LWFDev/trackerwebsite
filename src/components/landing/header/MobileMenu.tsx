import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ChevronRight } from "lucide-react";
import FlagSelector from "@/components/ui/FlagSelector";
import { scrollToTop } from "@/utils/navigation";
import { useLocalization } from "@/contexts/LocalizationContext";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const { t } = useLocalization();
  
  const topOffset = "top-[52px]";

  useEffect(() => {
    return () => {
      if (isOpen) setIsOpen(false);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(".mobile-menu-content")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 ${topOffset} bg-black/60 backdrop-blur-sm z-40`}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 350,
              duration: 0.3 
            }}
            className={`mobile-menu-content fixed left-4 right-4 ${topOffset} z-50 bg-zinc-900/95 backdrop-blur-md rounded-xl border border-zinc-800 shadow-2xl max-h-[70vh] overflow-hidden`}
          >
            <div className="p-4 flex justify-between items-center border-b border-zinc-800/50">
              <h2 className="text-lg font-semibold text-white">{t("Menu")}</h2>
              <button
                onClick={() => setIsOpen(false)}
                aria-label={t("Close menu")}
                className="text-zinc-400 hover:text-white transition-colors p-1 rounded-full hover:bg-zinc-800"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="p-3 overflow-y-auto max-h-[calc(70vh-140px)]">
              <ul className="space-y-0.5">
                {[
                  { to: "/", label: "Home" },
                  { to: "/modules", label: "Modules" },
                  { to: "/industries", label: "Industries" },
                  { to: "/pricing", label: "Pricing" },
                  { to: "/integrations", label: "Integrations" },
                  { to: "/about", label: "About Us" },
                  { to: "/support", label: "Support" },
                  { to: "/contact", label: "Contact" },
                ].map((item, index) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      to={item.to}
                      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-zinc-800/70 text-white transition-colors"
                      onClick={() => { setIsOpen(false); scrollToTop(); }}
                    >
                      <span className="text-sm">{t(item.label)}</span>
                      <ChevronRight size={16} className="text-zinc-500" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-zinc-800/50 p-4">
              <div className="flex items-center justify-between gap-3">
                <FlagSelector />
                <Link to="/get-started" className="flex-1" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                  <Button variant="gold" className="w-full text-sm">
                    {t("Get Started")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
