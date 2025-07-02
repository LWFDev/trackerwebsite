
import React from "react";
import { motion } from "framer-motion";

const ProcessJourney = () => {
  const steps = [
    {
      id: 1,
      title: "Ice Breaker",
      description: "Meet with you and talk about your business and your needs and expectations.",
      color: "from-blue-400 to-blue-600",
      position: { x: 10, y: 5 }
    },
    {
      id: 2,
      title: "Discussion",
      description: "More in-depth discussions to ensure we understand your needs and build a detailed scope of work.",
      color: "from-purple-400 to-purple-600",
      position: { x: 85, y: 15 }
    },
    {
      id: 3,
      title: "Proposal & Acceptance",
      description: "Based on the information and scope of work we will propose an implementation and customization cost, licensing costs, and timelines.",
      color: "from-orange-400 to-orange-600",
      position: { x: 15, y: 35 }
    },
    {
      id: 4,
      title: "Planning",
      description: "We will begin to plan major milestones and resources needed for those milestones so your business is ready for us to implement Tracker.",
      color: "from-green-400 to-green-600",
      position: { x: 80, y: 45 }
    },
    {
      id: 5,
      title: "Implementation",
      description: "We will build out a test environment, load the data, and ensure that it all works.",
      color: "from-red-400 to-red-600",
      position: { x: 5, y: 65 }
    },
    {
      id: 6,
      title: "Integrations & EDIs",
      description: "We will integrate all agreed upon software packages and build out any automation for EDIs that need to be facilitated.",
      color: "from-yellow-400 to-yellow-600",
      position: { x: 75, y: 75 }
    },
    {
      id: 7,
      title: "Training",
      description: "We will train your team!",
      color: "from-indigo-400 to-indigo-600",
      position: { x: 25, y: 85 }
    },
    {
      id: 8,
      title: "GO-LIVE",
      description: "Let's bring it online and lets go!",
      color: "from-emerald-400 to-emerald-600",
      position: { x: 60, y: 90 }
    },
    {
      id: 9,
      title: "Post GO-LIVE Support",
      description: "For 30 days post-GO-LIVE we will continue to overcome challenges that weren't caught prior to GO-LIVE. We will continue to train where needed. Then we should be smooth sailing.",
      color: "from-[#D4AF37] to-[#F2D675]",
      position: { x: 40, y: 95 }
    }
  ];

  const pathData = "M50,50 Q150,20 250,80 T450,60 Q550,40 650,100 T850,80 Q950,60 1050,120";

  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/40 dark:from-slate-900/50 dark:via-blue-900/20 dark:to-purple-900/30 animate-pulse-light"></div>
      
      {/* Flowing path SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#F2D675" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.path
          d={pathData}
          stroke="url(#pathGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        />
      </svg>

      {/* Process steps */}
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left: `${step.position.x}%`, 
            top: `${step.position.y}%` 
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: index * 0.3, 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
        >
          {/* Step circle with gradient */}
          <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform duration-300`}>
            <span className="text-white font-bold text-sm">{step.id}</span>
            
            {/* Pulsing ring */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-30 animate-ping`}></div>
            
            {/* Tooltip card */}
            <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 w-64 border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-sm mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
              </div>
            </div>
          </div>

          {/* Step title below circle */}
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded backdrop-blur-sm">
              {step.title}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#D4AF37]/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Central title */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">
          Here is our process
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] mx-auto rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default ProcessJourney;
