import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Footer = () => {
  const {
    isDarkMode,
    toggleTheme
  } = useTheme();
  return <footer className="theme-surface theme-text-secondary py-12 theme-border border-t transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="block">
              <img src="https://nubosync.com/wp-content/uploads/2025/04/tracker_logo.png" alt="Tracker Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-sm mt-4">Garment Decorators premier line of business software from proof &amp; logo management, to order tracking, advanced production scheduling, to logistics.</p>
          </div>
          <div>
            <h4 className="theme-text font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/modules" className="hover:text-[#D4AF37] transition-colors">Modules</Link></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="theme-text font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-[#D4AF37] transition-colors">FAQ</Link></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Support</a></li>
              
            </ul>
          </div>
          <div>
            <h4 className="theme-text font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="theme-border border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">© 2025 Tracker US. All rights reserved.</p>
            <div className="flex items-center space-x-3">
              <Sun className="h-4 w-4 text-gray-500" />
              <Switch checked={isDarkMode} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-[#D4AF37] data-[state=unchecked]:bg-gray-300" />
              <Moon className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">
                {isDarkMode ? 'Dark' : 'Light'} Mode
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
