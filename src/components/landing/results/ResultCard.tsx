
import React, { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

interface ResultCardProps {
  company: string;
  quote: string;
  person: string;
  role: string;
  delay?: number;
  videoUrl?: string;
  thumbnailUrl?: string;
}

const ResultCard = ({
  company,
  quote,
  person,
  role,
  delay = 0,
  videoUrl,
  thumbnailUrl = "/lovable-uploads/a3fe2c25-1ac0-4e99-9f2c-4a0a54841171.png"
}: ResultCardProps) => {
  return (
    <ScrollReveal delay={delay} direction="up" duration={800} className="h-full">
      <div className="bg-gray-800/90 dark:bg-zinc-900/90 light:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-700 dark:border-zinc-800 light:border-gray-700 h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-xl">
        
        {/* Video thumbnail with modal */}
        {videoUrl && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer group">
                  <img 
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="aspect-video">
                  <iframe 
                    title="vimeo-player" 
                    src={videoUrl}
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-700 dark:bg-zinc-800 light:bg-gray-700 rounded-full mr-3 border-2 border-[#D4AF37]/30 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 dark:from-zinc-700 dark:to-zinc-900 light:from-gray-600 light:to-gray-800"></div>
          </div>
          <div>
            <div className="font-medium text-white">{person}</div>
            <div className="text-sm text-[#D4AF37]">{role}</div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ResultCard;
