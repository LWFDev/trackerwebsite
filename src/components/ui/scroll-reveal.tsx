
import React, { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number; // Value between 0 and 1
  delay?: number; // Delay in ms
  distance?: string; // CSS value like "20px"
  once?: boolean; // Only animate once
  direction?: "up" | "down" | "left" | "right"; // Animation direction
  duration?: number; // Animation duration in ms
  stagger?: boolean; // Enable staggered animation for children
}

export const ScrollReveal = ({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  distance = "20px",
  once = true,
  direction = "up",
  duration = 700,
  stagger = false,
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use setTimeout conditionally to reduce number of timers
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
              }, delay);
            } else {
              setIsVisible(true);
            }
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { 
        threshold, 
        rootMargin: "10px" 
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, once, threshold]);

  // Calculate transform based on direction
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up": return `translateY(${distance})`;
        case "down": return `translateY(-${distance})`;
        case "left": return `translateX(${distance})`;
        case "right": return `translateX(-${distance})`;
        default: return `translateY(${distance})`;
      }
    }
    return 'translate(0, 0)';
  };

  // Use more performant CSS properties for animations
  return (
    <div
      ref={ref}
      className={`${className} ${stagger ? 'stagger-parent' : ''} transition-all ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        // Use will-change only when transitioning
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {stagger ? React.Children.map(children, (child, index) => (
        // Limit staggered animations to first 10 items
        <div className="stagger-item" style={{
          transitionDelay: index < 10 ? `${index * 50}ms` : '0ms'
        }}>{child}</div>
      )) : children}
    </div>
  );
};

export default ScrollReveal;
