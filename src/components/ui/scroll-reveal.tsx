
import React, { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  distance?: string;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  stagger?: boolean;
  preset?: "enterprise" | "subtle" | "confident" | "gentle";
}

export const ScrollReveal = ({
  children,
  className = "",
  threshold = 0.15,
  delay = 0,
  distance = "20px",
  once = true,
  direction = "up",
  duration = 700,
  stagger = false,
  preset = "enterprise",
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Enterprise-grade presets
  const presets = {
    enterprise: {
      duration: 800,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      distance: "24px",
      threshold: 0.15,
    },
    subtle: {
      duration: 600,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      distance: "16px",
      threshold: 0.2,
    },
    confident: {
      duration: 700,
      easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      distance: "20px",
      threshold: 0.1,
    },
    gentle: {
      duration: 900,
      easing: "cubic-bezier(0.23, 1, 0.32, 1)",
      distance: "12px",
      threshold: 0.25,
    },
  };

  const currentPreset = presets[preset];

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
        threshold: currentPreset.threshold,
        rootMargin: "10px" 
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, once, currentPreset.threshold]);

  const getTransform = () => {
    if (!isVisible) {
      const scale = preset === "enterprise" ? "scale(0.95)" : "scale(1)";
      switch (direction) {
        case "up": return `translateY(${currentPreset.distance}) ${scale}`;
        case "down": return `translateY(-${currentPreset.distance}) ${scale}`;
        case "left": return `translateX(${currentPreset.distance}) ${scale}`;
        case "right": return `translateX(-${currentPreset.distance}) ${scale}`;
        default: return `translateY(${currentPreset.distance}) ${scale}`;
      }
    }
    return 'translate(0, 0) scale(1)';
  };

  return (
    <div
      ref={ref}
      className={`${className} ${stagger ? 'stagger-parent' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${currentPreset.duration}ms`,
        transitionTimingFunction: currentPreset.easing,
        transitionProperty: 'opacity, transform',
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {stagger ? React.Children.map(children, (child, index) => (
        <div 
          className="stagger-item" 
          style={{
            transitionDelay: `${index * 150}ms`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : `translateY(12px) scale(0.98)`,
            transitionDuration: `${currentPreset.duration}ms`,
            transitionTimingFunction: currentPreset.easing,
            transitionProperty: 'opacity, transform',
          }}
        >
          {child}
        </div>
      )) : children}
    </div>
  );
};

export default ScrollReveal;
