import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="bg-black text-gray-400 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="block">
              <img 
                src="https://nubosync.com/wp-content/uploads/2025/04/tracker_logo.png" 
                alt="Tracker Logo" 
                className="h-8 w-auto" 
              />
            </Link>
            <p className="text-sm mt-4">
              The complete platform for managing your production workflow from design to delivery.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-gold-DEFAULT transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm">© 2025 Tracker US. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
