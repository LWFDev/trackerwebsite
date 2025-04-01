
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="gradient-text">Flick</span>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-flick-purple transition">Features</a>
          <a href="#components" className="text-gray-600 hover:text-flick-purple transition">Components</a>
          <a href="#testimonials" className="text-gray-600 hover:text-flick-purple transition">Testimonials</a>
          <a href="#pricing" className="text-gray-600 hover:text-flick-purple transition">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-flick-purple text-flick-purple hover:bg-flick-purple/10">
            Log in
          </Button>
          <Button className="bg-flick-purple hover:bg-flick-purple/90">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-flick-gray p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-flick-purple transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#components" 
              className="text-gray-600 hover:text-flick-purple transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-flick-purple transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-flick-purple transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="outline" className="border-flick-purple text-flick-purple hover:bg-flick-purple/10 w-full">
                Log in
              </Button>
              <Button className="bg-flick-purple hover:bg-flick-purple/90 w-full">
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
