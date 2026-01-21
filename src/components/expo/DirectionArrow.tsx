import React from 'react';
import { motion } from 'framer-motion';
import { Navigation2, MapPin } from 'lucide-react';

interface DirectionArrowProps {
  bearing: number;
  distanceText: string;
  distanceFeet: number;
  deviceHeading?: number | null;
}

const DirectionArrow = ({ bearing, distanceText, distanceFeet, deviceHeading }: DirectionArrowProps) => {
  // Calculate arrow rotation based on bearing and device heading
  const rotation = deviceHeading !== null && deviceHeading !== undefined 
    ? bearing - deviceHeading 
    : bearing;

  // Determine if user is close (within 50 feet)
  const isClose = distanceFeet < 50;
  
  // Pulse intensity increases as user gets closer
  const pulseIntensity = Math.max(0.3, 1 - (distanceFeet / 500));

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Main direction indicator */}
      <div className="relative">
        {/* Outer pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-500/20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [pulseIntensity, 0, pulseIntensity],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: 200,
            height: 200,
            margin: -40,
          }}
        />
        
        {/* Inner pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-500/30"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [pulseIntensity + 0.2, 0.1, pulseIntensity + 0.2],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          style={{
            width: 160,
            height: 160,
            margin: -20,
          }}
        />

        {/* Arrow container */}
        <motion.div
          className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-2xl flex items-center justify-center"
          animate={{ rotate: rotation }}
          transition={{ 
            type: "spring", 
            stiffness: 60, 
            damping: 15 
          }}
        >
          {isClose ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <MapPin className="w-12 h-12 text-white" />
            </motion.div>
          ) : (
            <Navigation2 className="w-14 h-14 text-white transform -rotate-0" fill="currentColor" />
          )}
        </motion.div>

        {/* Compass points */}
        <div className="absolute inset-0 w-[120px] h-[120px]">
          {['N', 'E', 'S', 'W'].map((dir, i) => (
            <span
              key={dir}
              className="absolute text-xs font-bold text-muted-foreground"
              style={{
                top: i === 0 ? -20 : i === 2 ? 'auto' : '50%',
                bottom: i === 2 ? -20 : 'auto',
                left: i === 3 ? -16 : i === 1 ? 'auto' : '50%',
                right: i === 1 ? -14 : 'auto',
                transform: i === 0 || i === 2 ? 'translateX(-50%)' : 'translateY(-50%)',
              }}
            >
              {dir}
            </span>
          ))}
        </div>
      </div>

      {/* Distance display */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p 
          className={`text-2xl font-bold ${isClose ? 'text-emerald-500' : 'text-foreground'}`}
          animate={isClose ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5, repeat: isClose ? Infinity : 0 }}
        >
          {distanceText}
        </motion.p>
        <p className="text-sm text-muted-foreground mt-1">
          {isClose ? '🎉 You found us!' : 'to Barudan booth'}
        </p>
      </motion.div>

      {/* Bearing info (debug/info) */}
      <div className="text-xs text-muted-foreground/60">
        Heading: {Math.round(bearing)}°
      </div>
    </div>
  );
};

export default DirectionArrow;
