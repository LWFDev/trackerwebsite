
import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
  lottieSource?: string;
}

const FeatureCard = ({
  title,
  description,
  delay = 0,
  lottieSource = "https://lottie.host/62b8c56f-d7f9-45a1-9ca8-7b5e45be9cb3/bSOogqbBcQ.lottie"
}: FeatureCardProps) => {
  return (
    <motion.div 
      className="group bg-gray-50 dark:bg-zinc-900/50 light:bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-zinc-800 light:border-gray-200 hover:border-gold-opacity-50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold-opacity-5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 text-center">
        <div className="w-full mb-4">
          <DotLottieReact src={lottieSource} loop autoplay />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white light:text-gray-900 group-hover:text-gold transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 light:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-300 light:group-hover:text-gray-500 transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
