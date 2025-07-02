
import React from "react";
import { motion } from "framer-motion";

const ProcessJourney = () => {
  const steps = [
    {
      id: 1,
      title: "Ice Breaker",
      description: "Meet with you and talk about your business and your needs and expectations.",
      position: { x: 15, y: 20 }
    },
    {
      id: 2,
      title: "Discussion",
      description: "More in-depth discussions to ensure we understand your needs and build a detailed scope of work.",
      position: { x: 40, y: 10 }
    },
    {
      id: 3,
      title: "Proposal & Acceptance",
      description: "Based on the information and scope of work we will propose an implementation and customization cost, licensing costs, and timelines.",
      position: { x: 70, y: 25 }
    },
    {
      id: 4,
      title: "Planning",
      description: "We will begin to plan major milestones and resources needed for those milestones so your business is ready for us to implement Tracker.",
      position: { x: 85, y: 45 }
    },
    {
      id: 5,
      title: "Implementation",
      description: "We will build out a test environment, load the data, and ensure that it all works.",
      position: { x: 75, y: 65 }
    },
    {
      id: 6,
      title: "Integrations & EDIs",
      description: "We will integrate all agreed upon software packages and build out any automation for EDIs that need to be facilitated.",
      position: { x: 45, y: 75 }
    },
    {
      id: 7,
      title: "Training",
      description: "We will train your team!",
      position: { x: 25, y: 80 }
    },
    {
      id: 8,
      title: "GO-LIVE",
      description: "Let's bring it online and lets go!",
      position: { x: 10, y: 60 }
    },
    {
      id: 9,
      title: "Post GO-LIVE Support",
      description: "For 30 days post-GO-LIVE we will continue to overcome challenges that weren't caught prior to GO-LIVE. We will continue to train where needed. Then we should be smooth sailing.",
      position: { x: 5, y: 40 }
    }
  ];

  const pathPoints = steps.map(step => `${step.position.x},${step.position.y}`).join(' ');

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/60 to-black/70 backdrop-blur-sm">
      {/* Connecting Path */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.polyline
          points={pathPoints}
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F2D675" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Process Steps */}
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className="absolute group cursor-pointer"
          style={{ 
            left: `${step.position.x}%`, 
            top: `${step.position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: index * 0.2, 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ scale: 1.1 }}
        >
          {/* Step Circle */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F2D675] shadow-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm md:text-base lg:text-lg">{step.id}</span>
            
            {/* Pulsing Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/50"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Step Title */}
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center min-w-max">
            <p className="text-xs md:text-sm font-medium text-white/90 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
              {step.title}
            </p>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl p-3 w-48 md:w-56 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              {/* Tooltip Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95 dark:border-t-gray-800/95"></div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Central Title */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] drop-shadow-lg">
          Our Process Journey
        </h3>
        <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] mx-auto rounded-full shadow-lg"></div>
      </motion.div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#D4AF37]/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#F2D675]/15 blur-3xl"></div>
      </div>
    </div>
  );
};

export default ProcessJourney;
