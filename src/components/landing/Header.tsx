
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import ModulesMegaMenu from './ModulesMegaMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModulesMenuOpen, setIsModulesMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const modulesButtonRef = useRef<HTMLDivElement>(null);
  const modulesMenuRef = useRef<HTMLDivElement>(null);
  
  // Handle clicks outside of the modules menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModulesMenuOpen &&
        modulesButtonRef.current &&
        modulesMenuRef.current &&
        !modulesButtonRef.current.contains(event.target as Node) &&
        !modulesMenuRef.current.contains(event.target as Node)
      ) {
        setIsModulesMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModulesMenuOpen]);

  // Handle mouse leave for the entire header + menu area
  const handleMouseLeave = () => {
    setIsModulesMenuOpen(false);
  };

  // Toggle the modules menu when clicking the modules button
  const handleModulesClick = () => {
    setIsModulesMenuOpen(!isModulesMenuOpen);
  };

  // Open the modules menu when hovering over the modules button
  const handleModulesHover = () => {
    setIsModulesMenuOpen(true);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800"
      ref={headerRef}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold flex items-center text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <rect width="24" height="24" rx="4" fill="#D4AF37"/>
              <path d="M7 12H17M7 8H17M7 16H13" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            TRACKER
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div 
            className="relative group"
            ref={modulesButtonRef}
            onMouseEnter={handleModulesHover}
            onClick={handleModulesClick}
          >
            <button 
              className={`flex items-center transition ${isModulesMenuOpen ? 'text-gold-DEFAULT' : 'text-gray-300 hover:text-gold-DEFAULT'}`}
            >
              Modules <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${isModulesMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          <Link to="/pricing" className="text-gray-300 hover:text-gold-DEFAULT transition">Pricing</Link>
          
          <div className="relative group">
            <button className="flex items-center text-gray-300 hover:text-gold-DEFAULT transition">
              Resources <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-zinc-700 text-gray-300 hover:bg-zinc-800">
            Sign In
          </Button>
          <Button variant="gold">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-300 p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 py-4 px-6 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/modules" 
              className="text-gray-300 hover:text-gold-DEFAULT transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Modules
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-300 hover:text-gold-DEFAULT transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/resources" 
              className="text-gray-300 hover:text-gold-DEFAULT transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="outline" className="w-full border-zinc-700">
                Sign In
              </Button>
              <Button variant="gold" className="w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Mega menu container */}
      {isModulesMenuOpen && (
        <div 
          ref={modulesMenuRef}
          onMouseLeave={handleMouseLeave}
        >
          <ModulesMegaMenu />
        </div>
      )}
    </header>
  );
};

export default Header;
