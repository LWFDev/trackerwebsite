
import { AnimatedBackground } from "@/components/landing/hero/AnimatedBackground";
import { HeroContent } from "@/components/landing/hero/HeroContent";
import { HeroImage } from "@/components/landing/hero/HeroImage";

const Hero = () => {
  return (
    <section className="relative pt-16 md:pt-24 pb-8 md:pb-16 text-gray-900 dark:text-white light:text-gray-900 overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
