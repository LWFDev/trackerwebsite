
import React, { useEffect } from "react";

const ScrollAnimationInit = () => {
  useEffect(() => {
    // Function to check if an element is in view
    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll:not(.revealed)");
      
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add("revealed");
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimationInit;
