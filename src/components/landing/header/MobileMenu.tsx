
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

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

  return (
    <div className="md:hidden bg-zinc-900 py-4 px-6 shadow-lg animate-fade-in">
      <nav className="flex flex-col space-y-4">
        <Link 
          to="/modules" 
          className="py-2 transition text-gray-300 hover:text-gold-DEFAULT"
          onClick={handleLinkClick}
        >
          Modules
        </Link>
        <Link 
          to="/pricing" 
          className="py-2 transition text-gray-300 hover:text-gold-DEFAULT"
          onClick={handleLinkClick}
        >
          Pricing
        </Link>
        <div className="py-2">
          <div 
            className="flex items-center justify-between text-gray-300 hover:text-gold-DEFAULT transition"
            onClick={() => setIsResourcesMenuOpen(!isResourcesMenuOpen)}
          >
            <span>Resources</span>
            <ChevronDown 
              size={16} 
              className={`transition-transform duration-200 ${isResourcesMenuOpen ? 'rotate-180' : ''}`} 
            />
          </div>
          {isResourcesMenuOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <Link 
                to="/about" 
                className="block py-1 text-gray-400 hover:text-gold-DEFAULT transition"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block py-1 text-gray-400 hover:text-gold-DEFAULT transition"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
              <Link 
                to="#" 
                className="block py-1 text-gray-400 hover:text-gold-DEFAULT transition"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
              <Link 
                to="#" 
                className="block py-1 text-gray-400 hover:text-gold-DEFAULT transition"
                onClick={handleLinkClick}
              >
                Documentation
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-3 pt-4">
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
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
