
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      className="group bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <Icon className="h-8 w-8 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">An intuitive place to streamline workflow from sales & ordering thru fulfillment.</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
