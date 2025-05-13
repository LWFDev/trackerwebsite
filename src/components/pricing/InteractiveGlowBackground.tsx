
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface InteractiveGlowBackgroundProps {
  intensity?: number;
  color?: string;
  size?: number;
  followSpeed?: number;
  pulseSpeed?: number;
}

const InteractiveGlowBackground: React.FC<InteractiveGlowBackgroundProps> = ({
  intensity = 0.1,
  color = "#D4AF37",
  size = 800,
  followSpeed = 0.1,
  pulseSpeed = 5
}) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const animationControls = useAnimation();
  
  // Throttled mouse move handler for better performance
  useEffect(() => {
    let rafId: number | null = null;
    let lastMousePosition = { x: 0, y: 0 };
    
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosition = {
        x: (e.clientX / window.innerWidth),
        y: (e.clientY / window.innerHeight)
      };
      
      // Only start tracking once mouse has moved
      if (!isActive) setIsActive(true);
      
      // Use requestAnimationFrame for smoother performance
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          setMousePosition(lastMousePosition);
          rafId = null;
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isActive]);
  
  // Apply glow position based on mouse movement with delay for smooth effect
  useEffect(() => {
    if (glowRef.current && isActive) {
      const transformX = (mousePosition.x - 0.5) * 50; // Move 50% of screen width max
      const transformY = (mousePosition.y - 0.5) * 50; // Move 50% of screen height max
      
      glowRef.current.style.transform = `translate(${transformX}%, ${transformY}%)`;
    }
  }, [mousePosition, isActive]);
  
  // Automatic pulsing effect
  useEffect(() => {
    animationControls.start({
      scale: [1, 1.2, 1],
      opacity: [intensity, intensity * 0.6, intensity],
      transition: {
        duration: pulseSpeed,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [animationControls, intensity, pulseSpeed]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        ref={glowRef}
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          filter: `blur(${size/4}px)`,
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
          willChange: "transform, opacity",
          transition: `transform ${followSpeed}s cubic-bezier(0.25, 0.1, 0.25, 1)`
        }}
        animate={animationControls}
      />
    </div>
  );
};

export default InteractiveGlowBackground;
