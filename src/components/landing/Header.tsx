
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Logo from "@/components/landing/header/Logo";
import MobileMenu from "@/components/landing/header/MobileMenu";
import ModulesButton from "@/components/landing/header/ModulesButton";
import ResourcesDropdown from "@/components/landing/header/ResourcesDropdown";
import ModulesMegaMenu from "@/components/landing/ModulesMegaMenu";
import FlagSelector from "@/components/ui/FlagSelector";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModulesMenuOpen, setIsModulesMenuOpen] = useState(false);
  const location = useLocation();

  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if current route is active
  const isActive = (path: string) => {
    return location.pathname === path ? "text-gold-DEFAULT" : "text-white";
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle opening modules menu
  const handleModulesHover = () => {
    setIsModulesMenuOpen(true);
  };

  const handleModulesClick = () => {
    setIsModulesMenuOpen(!isModulesMenuOpen);
  };

  // Close modules menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isModulesMenuOpen && !(event.target as Element).closest('.modules-menu-container')) {
        setIsModulesMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModulesMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 modules-menu-container ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Logo scrollToTop={scrollToTop} />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <ModulesButton 
            isOpen={isModulesMenuOpen}
            onHover={handleModulesHover}
            onClick={handleModulesClick}
          />
          <Link 
            to="/pricing" 
            className={`font-normal text-base ${isActive("/pricing")} hover:text-gold-DEFAULT transition-colors duration-200`}
            style={{ fontSize: '16px', fontWeight: 400 }}
          >
            Pricing
          </Link>
          <ResourcesDropdown scrollToTop={scrollToTop} />
        </nav>

        {/* Authentication Button Group */}
        <div className="hidden md:flex items-center space-x-3">
          <FlagSelector />
          <Link to="/get-started">
            <Button variant="gold">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Modules Mega Menu */}
      {isModulesMenuOpen && <ModulesMegaMenu />}
    </motion.header>
  );
};

export default Header;
