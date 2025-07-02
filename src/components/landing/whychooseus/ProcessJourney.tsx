
import React from "react";
import { motion } from "framer-motion";

const ProcessJourney = () => {
  const steps = [
    {
      id: 1,
      title: "Ice Breaker",
      description: "Meet with you and talk about your business and your needs and expectations.",
      position: { x: 20, y: 15 }
    },
    {
      id: 2,
      title: "Discussion",
      description: "More in-depth discussions to ensure we understand your needs and build a detailed scope of work.",
      position: { x: 50, y: 8 }
    },
    {
      id: 3,
      title: "Proposal & Acceptance",
      description: "Based on the information and scope of work we will propose an implementation and customization cost, licensing costs, and timelines.",
      position: { x: 80, y: 15 }
    },
    {
      id: 4,
      title: "Planning",
      description: "We will begin to plan major milestones and resources needed for those milestones so your business is ready for us to implement Tracker.",
      position: { x: 92, y: 40 }
    },
    {
      id: 5,
      title: "Implementation",
      description: "We will build out a test environment, load the data, and ensure that it all works.",
      position: { x: 85, y: 70 }
    },
    {
      id: 6,
      title: "Integrations & EDIs",
      description: "We will integrate all agreed upon software packages and build out any automation for EDIs that need to be facilitated.",
      position: { x: 60, y: 85 }
    },
    {
      id: 7,
      title: "Training",
      description: "We will train your team!",
      position: { x: 40, y: 85 }
    },
    {
      id: 8,
      title: "GO-LIVE",
      description: "Let's bring it online and lets go!",
      position: { x: 15, y: 70 }
    },
    {
      id: 9,
      title: "Post GO-LIVE Support",
      description: "For 30 days post-GO-LIVE we will continue to overcome challenges that weren't caught prior to GO-LIVE. We will continue to train where needed. Then we should be smooth sailing.",
      position: { x: 8, y: 40 }
    }
  ];

  // Create path points for connecting line
  const pathPoints = steps.map(step => `${step.position.x},${step.position.y}`).join(' ');

  return (
    <div className="relative w-full h-full min-h-[600px]">
      {/* Connecting Path */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.polyline
          points={pathPoints}
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="0.3"
          strokeDasharray="1,1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#F2D675" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
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
            delay: index * 0.15, 
            duration: 0.5,
            type: "spring",
            stiffness: 120
          }}
          whileHover={{ scale: 1.1 }}
        >
          {/* Step Circle */}
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F2D675] shadow-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm md:text-lg">{step.id}</span>
            
            {/* Pulsing Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/40"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Step Title */}
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center min-w-max max-w-[120px]">
            <p className="text-xs md:text-sm font-medium text-white/90 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
              {step.title}
            </p>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl p-3 w-48 md:w-56 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              {/* Tooltip Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95 dark:border-t-gray-800/95"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessJourney;
