
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/navigation";
import ScrollReveal from "@/components/ui/scroll-reveal";

const AboutCTA = () => {
  return (
    <div className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal preset="confident" delay={100}>
          <h2 className="text-3xl font-bold mb-6 text-gold-gradient">Join the Tracker community</h2>
        </ScrollReveal>
        
        <ScrollReveal preset="enterprise" delay={300}>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">Book a live demo and see how Tracker puts you in control of every order.</p>
        </ScrollReveal>
        
        <ScrollReveal preset="confident" delay={500}>
          <Link to="/get-started" onClick={scrollToTop}>
            <Button variant="gold">Get Started</Button>
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default AboutCTA;
