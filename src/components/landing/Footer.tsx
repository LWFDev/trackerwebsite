
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="gradient-text">Flick</span>
            </div>
            <p className="text-gray-600 mb-4">
              Beautiful, accessible UI components for modern React applications
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-flick-purple transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-flick-purple transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-flick-purple transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-flick-purple transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Components</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Templates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-flick-purple transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2023 Flick UI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-500 hover:text-flick-purple text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-flick-purple text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-500 hover:text-flick-purple text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
