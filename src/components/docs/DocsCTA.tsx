
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";

const DocsCTA = () => {
  return (
    <div className="mt-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-lg opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 rounded-lg" />
      
      <motion.div 
        className="relative z-10 p-8 sm:p-12 rounded-lg border border-zinc-700 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to integrate with your workflow?</h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Start building with our API today. Our documentation provides everything you need to get 
            up and running quickly and efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started" onClick={scrollToTop}>
              <Button variant="gold" size="lg">
                Get API Keys
              </Button>
            </Link>
            <Link to="/contact" onClick={scrollToTop}>
              <Button variant="outline" size="lg">
                Join Developer Community
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-zinc-700">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>99.9% API Uptime</span>
              </div>
              <div className="text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>24/7 Developer Support</span>
              </div>
              <div className="text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Enterprise SLAs Available</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 blur-3xl rounded-full bg-gold-opacity-20 z-0" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 blur-3xl rounded-full bg-blue-500/10 z-0" />
      </motion.div>
    </div>
  );
};

export default DocsCTA;
