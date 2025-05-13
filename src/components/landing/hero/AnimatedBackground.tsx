
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const AnimatedBackground = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Animate the background blob on mount
  useEffect(() => {
    if (!blobRef.current) return;
    
    const animateBlob = () => {
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 10 - 5;
      
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      
      setTimeout(animateBlob, 3000);
    };
    
    animateBlob();
  }, []);

  // Parallax effect for floating elements
  useEffect(() => {
    if (isMobile) return; // Skip parallax on mobile for better performance
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingElementsRef.current) return;
      
      const elements = floatingElementsRef.current.querySelectorAll('.parallax-element');
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center (normalized)
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;
      
      elements.forEach((element, index) => {
        const factor = (index + 1) * 5; // Different factors for different elements
        const x = moveX * factor;
        const y = moveY * factor;
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Animated gradient blob */}
      <div 
        ref={blobRef}
        className="absolute w-full h-full max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-r from-[#D4AF37]/10 via-[#F2D675]/5 to-[#D4AF37]/10 blur-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-3000 ease-in-out"
      ></div>
      
      {/* Floating elements with parallax effect - reduced for mobile */}
      <div ref={floatingElementsRef} className={`absolute inset-0 pointer-events-none ${isMobile ? 'hidden md:block' : ''}`}>
        <div className="absolute top-20 left-[10%] w-16 h-16 border border-[#D4AF37]/20 rounded-full animate-float parallax-element opacity-20"></div>
        <div className="absolute bottom-40 right-[15%] w-24 h-24 border border-[#D4AF37]/20 rounded-full animate-float parallax-element opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] right-[10%] w-32 h-32 border-2 border-[#D4AF37]/10 rounded-xl rotate-45 animate-float parallax-element opacity-20" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Additional floating elements, hidden on mobile */}
        <div className="hidden md:block absolute top-[40%] left-[5%] w-12 h-12 bg-gradient-to-r from-[#D4AF37]/5 to-[#F2D675]/5 rounded-lg animate-float parallax-element opacity-30" style={{ animationDelay: '2.5s' }}></div>
        <div className="hidden md:block absolute top-[15%] right-[20%] w-16 h-16 border border-[#D4AF37]/10 rounded-md rotate-12 animate-float parallax-element opacity-20" style={{ animationDelay: '0.7s' }}></div>
        <div className="hidden md:block absolute bottom-[30%] right-[5%] w-28 h-28 border-2 border-[#D4AF37]/5 rounded-full animate-float parallax-element opacity-15" style={{ animationDelay: '1.3s' }}></div>
      </div>
      
      {/* Grid pattern - lighter on mobile */}
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djLIMzR2LTJoMnptMC0xMHYyaC0ydi0yaDJ6bTEwIDBoMnYyaC0ydi0yek0yMCAyNGgydjJoLTJ2LTJ6bS0xMCAwaDJ2MmgtMnYtMnptMTAgMTBoMnYyaC0ydi0yek0zMCAyNGgydjJoLTJ2LTJ6bTEwIDBo')] ${isMobile ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}></div>
    </div>
  );
};
