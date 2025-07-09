
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ChevronRight } from "lucide-react";
import FlagSelector from "@/components/ui/FlagSelector";
import { scrollToTop } from "@/utils/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  // Close menu on route change
  useEffect(() => {
    return () => {
      if (isOpen) setIsOpen(false);
    };
  }, []);

  // Close menu when clicking outside
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

  // Lock body scroll when menu is open
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-end"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mobile-menu-content w-4/5 max-w-sm bg-zinc-900 h-full flex flex-col overflow-y-auto"
          >
            <div className="p-4 flex justify-between items-center border-b border-zinc-800">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 p-4">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between w-full p-3 rounded-md hover:bg-zinc-800 text-white"
                    onClick={() => { setIsOpen(false); scrollToTop(); }}
                  >
                    <span>Home</span>
                    <ChevronRight size={18} className="text-zinc-500" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/modules"
                    className="flex items-center justify-between w-full p-3 rounded-md hover:bg-zinc-800 text-white"
                    onClick={() => { setIsOpen(false); scrollToTop(); }}
                  >
                    <span>Modules</span>
                    <ChevronRight size={18} className="text-zinc-500" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="flex items-center justify-between w-full p-3 rounded-md hover:bg-zinc-800 text-white"
                    onClick={() => { setIsOpen(false); scrollToTop(); }}
                  >
                    <span>Pricing</span>
                    <ChevronRight size={18} className="text-zinc-500" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/documentation"
                    className="flex items-center justify-between w-full p-3 rounded-md hover:bg-zinc-800 text-white"
                    onClick={() => { setIsOpen(false); scrollToTop(); }}
                  >
                    <span>Documentation</span>
                    <ChevronRight size={18} className="text-zinc-500" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center justify-between w-full p-3 rounded-md hover:bg-zinc-800 text-white"
                    onClick={() => { setIsOpen(false); scrollToTop(); }}
                  >
                    <span>About Us</span>
                    <ChevronRight size={18} className="text-zinc-500" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="flex items-center justify-between w-full p-3 rounded-md hover:bg-zinc-800 text-white"
                    onClick={() => { setIsOpen(false); scrollToTop(); }}
                  >
                    <span>Blog</span>
                    <ChevronRight size={18} className="text-zinc-500" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full p-3 rounded-md hover:bg-zinc-800 text-white"
                    onClick={() => { setIsOpen(false); scrollToTop(); }}
                  >
                    <span>Contact</span>
                    <ChevronRight size={18} className="text-zinc-500" />
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="border-t border-zinc-800 p-4">
              <div className="flex flex-col space-y-3">
                <div className="flex justify-center">
                  <FlagSelector />
                </div>
                <Link to="/get-started" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                  <Button variant="gold" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
