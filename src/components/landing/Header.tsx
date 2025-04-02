import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ModulesMegaMenu from './ModulesMegaMenu';
import { Link, useLocation } from 'react-router-dom';
import Logo from './header/Logo';
import MobileMenu from './header/MobileMenu';
import ModulesButton from './header/ModulesButton';
import ResourcesDropdown from './header/ResourcesDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModulesMenuOpen, setIsModulesMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const modulesMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModulesMenuOpen &&
        modulesMenuRef.current &&
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

  useEffect(() => {
    setIsMenuOpen(false);
    setIsModulesMenuOpen(false);
  }, [location.pathname]);

  const handleMouseLeave = () => {
    setIsModulesMenuOpen(false);
  };

  const handleModulesClick = () => {
    setIsModulesMenuOpen(!isModulesMenuOpen);
  };

  const handleModulesHover = () => {
    setIsModulesMenuOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800"
      ref={headerRef}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo scrollToTop={scrollToTop} />

        <nav className="hidden md:flex items-center space-x-6">
          <ModulesButton 
            isOpen={isModulesMenuOpen} 
            onHover={handleModulesHover} 
            onClick={handleModulesClick} 
          />
          
          <Link 
            to="/pricing" 
            className={`transition ${location.pathname === '/pricing' ? 'text-gold-DEFAULT' : 'text-gray-300 hover:text-gold-DEFAULT'}`}
            onClick={scrollToTop}
          >
            Pricing
          </Link>
          
          <ResourcesDropdown scrollToTop={scrollToTop} />
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="border-zinc-700 text-gray-300 hover:bg-zinc-800">
              Sign In
            </Button>
          </Link>
          <Link to="/get-started">
            <Button variant="gold">
              Get Started
            </Button>
          </Link>
        </div>

        <button 
          className="md:hidden text-gray-300 p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen} 
        closeMenu={() => setIsMenuOpen(false)} 
        scrollToTop={scrollToTop} 
      />

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
