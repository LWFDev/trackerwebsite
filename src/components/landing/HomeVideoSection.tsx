import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { scrollToTop } from "@/utils/navigation";
import { videos, VideoEmbed } from "@/pages/Videos";

const HomeVideoSection = () => {
  // Show the first 3 videos on the homepage
  const featuredVideos = videos.slice(0, 3);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gold-opacity-10 border border-gold-opacity-30 rounded-full mb-4">
              <span className="text-gold text-sm font-semibold tracking-wide uppercase flex items-center gap-2">
                <Play className="h-4 w-4" />
                See Tracker in Action
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Watch How It <span className="text-gold">Works</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Short video walkthroughs showing real Tracker workflows — from creating customers and keying orders to production picks and warehouse receipts.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredVideos.map((video) => (
            <ScrollReveal key={video.id}>
              <div className="bg-zinc-900/80 rounded-xl border border-zinc-800 overflow-hidden hover:border-gold-opacity-50 transition-all duration-300 hover:-translate-y-1">
                <VideoEmbed video={video} />
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-white line-clamp-2">{video.title}</h3>
                    <span className="text-xs text-gold bg-gold-opacity-10 px-2 py-1 rounded-full flex-shrink-0">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Link to="/videos" onClick={scrollToTop}>
            <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold-opacity-10 group">
              Watch More Videos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSection;
