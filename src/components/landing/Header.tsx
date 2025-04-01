
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-bold flex items-center text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <rect width="24" height="24" rx="4" fill="#D4AF37"/>
              <path d="M7 12H17M7 8H17M7 16H13" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            TRACKER
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-gray-300 hover:text-gold-DEFAULT transition">
              Modules <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <a href="#pricing" className="text-gray-300 hover:text-gold-DEFAULT transition">Pricing</a>
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
          <Button className="bg-gold-DEFAULT hover:bg-gold-hover text-black">
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
            <a 
              href="#modules" 
              className="text-gray-300 hover:text-gold-DEFAULT transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Modules
            </a>
            <a 
              href="#pricing" 
              className="text-gray-300 hover:text-gold-DEFAULT transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#resources" 
              className="text-gray-300 hover:text-gold-DEFAULT transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="outline" className="w-full border-zinc-700">
                Sign In
              </Button>
              <Button className="bg-gold-DEFAULT hover:bg-gold-hover text-black w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
