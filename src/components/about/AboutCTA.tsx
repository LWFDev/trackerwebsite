
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <div className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 gold-gradient-text">Join the Tracker community</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Start your free 14-day trial today and see how Tracker can transform your workflow.
        </p>
        <Link to="/get-started">
          <Button variant="gold">Get Started Free</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutCTA;
