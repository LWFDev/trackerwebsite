
import React, { useState, useRef, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Extract video ID from Vimeo URL and create clean embed URL
  const getCleanVimeoUrl = (url: string, muted = false) => {
    const videoId = url.match(/video\/(\d+)/)?.[1];
    if (videoId) {
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=1&background=0&muted=${muted ? 1 : 0}`;
    }
    return url;
  };

  // Handle modal open/close sound state
  useEffect(() => {
    if (isModalOpen) {
      // Unmute when modal opens
      setIsMuted(false);
    } else {
      // Mute when modal closes
      setIsMuted(true);
    }
  }, [isModalOpen]);

  // Toggle mute function
  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Force reload iframe with new muted state
    if (iframeRef.current && videoUrl) {
      iframeRef.current.src = getCleanVimeoUrl(videoUrl, !isMuted);
    }
  };

  return (
    <ScrollReveal delay={delay} direction="up" duration={800} className="h-full">
      <div className="bg-gray-800/90 dark:bg-zinc-900/90 light:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-700 dark:border-zinc-800 light:border-gray-700 h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-xl flex flex-col justify-center">
        
        {/* Video thumbnail with modal */}
        {videoUrl && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
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
              <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
                <div className="relative">
                  <div className="aspect-video">
                    {isModalOpen && (
                      <iframe 
                        ref={iframeRef}
                        title="video-player" 
                        src={getCleanVimeoUrl(videoUrl, isMuted)}
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                      />
                    )}
                  </div>
                  
                  {/* Sound control button */}
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={toggleMute}
                      className="bg-black/50 hover:bg-black/70 border-white/20 text-white"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
        
        <div>
          <div className="font-medium text-white">{person}</div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ResultCard;
