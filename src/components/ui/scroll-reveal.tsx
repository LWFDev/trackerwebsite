
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
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin: "10px" }
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

  return (
    <div
      ref={ref}
      className={`${className} ${stagger ? 'stagger-parent' : ''} transition-all ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
      }}
    >
      {stagger ? React.Children.map(children, child => (
        <div className="stagger-item">{child}</div>
      )) : children}
    </div>
  );
};

export default ScrollReveal;
