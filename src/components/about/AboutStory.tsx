
import React from "react";

const AboutStory = () => {
  return (
    <div className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h3 className="text-lg text-gold-DEFAULT mb-4">Our Story</h3>
            <h2 className="text-3xl font-bold mb-6 gold-gradient-text">From frustration to innovation</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Tracker was born out of frustration. Our founders, who had spent years in the apparel decoration industry, were tired of the inefficient processes and manual work that dominated the space.
              </p>
              <p>
                They saw firsthand how businesses were wasting countless hours searching for files, manually tracking approvals, and chasing clients for approvals. They knew there had to be a better way.
              </p>
              <p>
                In 2020, they set out to build the solution they wished they had, a platform that would streamline the entire workflow from design to delivery. Today, Tracker is used by thousands of businesses worldwide, saving them time and helping them grow.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/04fa63cc-8ed1-41b7-9db2-2a72195d5617.png" 
                alt="Tracker employee packing merchandise in warehouse with embroidery machines" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
