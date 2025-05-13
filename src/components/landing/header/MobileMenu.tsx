
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  scrollToTop: () => void;
}

const MobileMenu = ({ isOpen, closeMenu, scrollToTop }: MobileMenuProps) => {
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);

  if (!isOpen) return null;

  const handleLinkClick = () => {
    closeMenu();
    scrollToTop();
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden fixed inset-x-0 top-[60px] bg-zinc-900/95 backdrop-blur-md py-4 px-6 shadow-lg z-40 border-b border-zinc-800"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          <nav className="flex flex-col space-y-4">
            <motion.div variants={itemVariants}>
              <Link 
                to="/modules" 
                className="py-3 block w-full transition text-gray-300 hover:text-gold-DEFAULT"
                onClick={handleLinkClick}
              >
                Modules
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link 
                to="/pricing" 
                className="py-3 block w-full transition text-gray-300 hover:text-gold-DEFAULT"
                onClick={handleLinkClick}
              >
                Pricing
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="py-2">
              <div 
                className="flex items-center justify-between text-gray-300 hover:text-gold-DEFAULT transition py-1"
                onClick={() => setIsResourcesMenuOpen(!isResourcesMenuOpen)}
              >
                <span>Resources</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${isResourcesMenuOpen ? 'rotate-180' : ''}`} 
                />
              </div>

              <AnimatePresence>
                {isResourcesMenuOpen && (
                  <motion.div 
                    className="ml-4 mt-2 space-y-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to="/about" 
                      className="block py-2 text-gray-400 hover:text-gold-DEFAULT transition"
                      onClick={handleLinkClick}
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block py-2 text-gray-400 hover:text-gold-DEFAULT transition"
                      onClick={handleLinkClick}
                    >
                      Contact
                    </Link>
                    <Link 
                      to="#" 
                      className="block py-2 text-gray-400 hover:text-gold-DEFAULT transition"
                      onClick={handleLinkClick}
                    >
                      Blog
                    </Link>
                    <Link 
                      to="#" 
                      className="block py-2 text-gray-400 hover:text-gold-DEFAULT transition"
                      onClick={handleLinkClick}
                    >
                      Documentation
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col space-y-3 pt-4">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full border-zinc-700">
                  Sign In
                </Button>
              </Link>
              <Link to="/get-started" className="w-full">
                <Button variant="gold" className="w-full">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
