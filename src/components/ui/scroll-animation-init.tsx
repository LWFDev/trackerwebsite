
import React, { useEffect } from "react";

const ScrollAnimationInit = () => {
  useEffect(() => {
    // Function to check if an element is in view
    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll with throttling
    let isScrolling = false;
    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          const elements = document.querySelectorAll(".reveal-on-scroll:not(.revealed)");
          
          elements.forEach((element) => {
            if (isElementInViewport(element)) {
              element.classList.add("revealed");
              // Add staggered animation for child elements - more performance friendly
              const children = element.querySelectorAll('.stagger-item');
              children.forEach((child, index) => {
                // Limit the number of staggered items that get animated
                if (index < 10) {
                  setTimeout(() => {
                    child.classList.add('stagger-revealed');
                  }, index * 50);
                } else {
                  child.classList.add('stagger-revealed');
                }
              });
            }
          });
          isScrolling = false;
        });
        isScrolling = true;
      }
    };

    // Initial check with delay to improve page load performance
    setTimeout(handleScroll, 200);
    
    // Add throttled scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default ScrollAnimationInit;
