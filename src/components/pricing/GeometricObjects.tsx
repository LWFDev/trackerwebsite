import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface GeometricObjectProps {
  density?: "low" | "medium" | "high";
  colorScheme?: "gold" | "mixed";
}

type ShapeType = "circle" | "square" | "triangle" | "hexagon" | "line";
type ShapeProps = {
  type: ShapeType;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  animationDelay: number;
  animationDuration: number;
};

const GeometricObjects: React.FC<GeometricObjectProps> = ({ 
  density = "medium", 
  colorScheme = "gold" 
}) => {
  // Reference to track if component is mounted
  const isMounted = useRef(true);
  
  // Convert density to actual object count
  const getObjectCount = () => {
    switch(density) {
      case "low": return 8;
      case "medium": return 15;
      case "high": return 25;
      default: return 15;
    }
  };
  
  // Generate random shape data
  const generateShapes = (): ShapeProps[] => {
    const count = getObjectCount();
    const shapes: ShapeProps[] = [];
    const shapeTypes: ShapeType[] = ["circle", "square", "triangle", "hexagon", "line"];
    
    const getColor = () => {
      if (colorScheme === "gold") {
        const opacities = [0.05, 0.1, 0.2];
        const opacity = opacities[Math.floor(Math.random() * opacities.length)];
        return `hsl(var(--gold) / ${opacity})`;
      } else {
        const colors = ["hsl(var(--gold))", "#FFF", "hsl(var(--gold-dark))"];
        const opacities = [0.05, 0.1, 0.15];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = opacities[Math.floor(Math.random() * opacities.length)];
        return `${color === "#FFF" ? "#FFF" : color} / ${opacity}`;
      }
    };
    
    for (let i = 0; i < count; i++) {
      shapes.push({
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 10 + Math.random() * 40,
        rotation: Math.random() * 360,
        color: getColor(),
        animationDelay: i * 0.2 + Math.random() * 2,
        animationDuration: 10 + Math.random() * 20
      });
    }
    
    return shapes;
  };
  
  // Memoize shapes for performance
  const shapes = React.useMemo(() => generateShapes(), [density, colorScheme]);
  
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Render shape based on type
  const renderShape = (shape: ShapeProps) => {
    switch(shape.type) {
      case "circle":
        return (
          <div 
            className="rounded-full border"
            style={{ 
              width: `${shape.size}px`, 
              height: `${shape.size}px`,
              borderColor: shape.color
            }}
          />
        );
      case "square":
        return (
          <div 
            className="border"
            style={{ 
              width: `${shape.size}px`, 
              height: `${shape.size}px`,
              borderColor: shape.color,
              transform: `rotate(${shape.rotation}deg)`
            }}
          />
        );
      case "triangle":
        return (
          <div 
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              transform: `rotate(${shape.rotation}deg)`
            }}
          />
        );
      case "hexagon":
        return (
          <div
            style={{
              width: `${shape.size}px`,
              height: `${shape.size * 0.866}px`,
              background: shape.color,
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              transform: `rotate(${shape.rotation}deg)`
            }}
          />
        );
      case "line":
        return (
          <div
            style={{
              width: `${shape.size * 2}px`,
              height: `1px`,
              background: shape.color,
              transform: `rotate(${shape.rotation}deg)`
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            willChange: 'transform, opacity',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, shape.rotation, 0], // Changed 'rotation' to 'rotate' which is the correct property in Framer Motion
            y: [0, -20, 0],
          }}
          transition={{
            duration: shape.animationDuration,
            delay: shape.animationDelay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}
    </div>
  );
};

export default GeometricObjects;
