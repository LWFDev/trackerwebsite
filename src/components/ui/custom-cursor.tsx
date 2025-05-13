
import React, { useEffect, useRef } from 'react';
import '@/styles/CustomCursor.css';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;
    
    if (!cursorDot || !cursorOutline) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      // Move the dot immediately to follow the cursor exactly
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      // Move the outline with a slight delay for a trailing effect
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, {
        duration: 500,
        fill: 'forwards',
        easing: 'ease-out'
      });
    };
    
    // Handle hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.classList.contains('interactive') ||
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.interactive')
      ) {
        cursorOutline.classList.add('cursor-hover');
      }
    };
    
    const handleMouseOut = () => {
      cursorOutline.classList.remove('cursor-hover');
    };
    
    // Handle click effect
    const handleMouseDown = () => {
      cursorOutline.classList.add('cursor-click');
    };
    
    const handleMouseUp = () => {
      cursorOutline.classList.remove('cursor-click');
    };
    
    // Add the active class to body
    document.body.classList.add('custom-cursor-active');
    
    // Only enable custom cursor on desktop devices
    if (window.matchMedia('(min-width: 769px)').matches) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.body.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  return (
    <>
      <div ref={cursorDotRef} className="custom-cursor cursor-dot"></div>
      <div ref={cursorOutlineRef} className="custom-cursor cursor-outline"></div>
    </>
  );
};

export default CustomCursor;
