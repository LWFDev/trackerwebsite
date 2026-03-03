import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Video } from "lucide-react";
import { scrollToTop } from "@/utils/navigation";
import PageSEO from "@/components/seo/PageSEO";
import { videosSEO, videosBreadcrumb, videoGuidesSchema } from "@/data/seoData";

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  loomId: string;
  /** When a native video file is available, set this path and it will be used instead of the Loom embed */
  nativeSrc?: string;
}

const videos: VideoItem[] = [
  { id: "1", title: "Creating a New Customer Record in Tracker", duration: "3 min", loomId: "787d441efae24527b4f3727d96dc1161" },
  { id: "2", title: "Keying a Manual Sales Order (Receipt Goods)", duration: "4 min", loomId: "e81bdeecb79949f6a1a0d5d4f83f33b9" },
  { id: "3", title: "Keying a Sales Order", duration: "6 min", loomId: "d2a5af2615e6447e944f285f6c3ff623" },
  { id: "4", title: "Printing, Starting and Finishing a Production Pick", duration: "5 min", loomId: "2cfc27bacef24dcb9ec97dc12d68186e" },
  { id: "5", title: "Create & Publish a Designed Item With an Existing Logo", duration: "5 min", loomId: "092af1cf88bf4191926e715fee287d08" },
  { id: "6", title: "Receipting a PO Through the Warehouse App", duration: "4 min", loomId: "df75b5da5e514e1d93a4eed9bcea7219" },
  { id: "7", title: "PO Receipts Tracker UI", duration: "5 min", loomId: "8b1f34b30e3a445cae964404e836412a" },
  { id: "8", title: "Keying a Manual Sales Order (Receipt Goods) – Walkthrough", duration: "4 min", loomId: "229d743a96b445d589d7e1cf93763dd5" },
  { id: "9", title: "Combining Purchase Orders", duration: "3 min", loomId: "bfcdc0818f8d448e820958fabd8c9eea" },
  { id: "10", title: "Raising Production Demands", duration: "2 min", loomId: "cf7ca1d9c1db4061b97777ae2cf640fa" },
];

export { videos };
export type { VideoItem };

/** Lazy-loaded Loom embed — only loads iframe when user clicks play */
const VideoEmbed = ({ video }: { video: VideoItem }) => {
  const [loaded, setLoaded] = useState(false);

  if (video.nativeSrc) {
    return (
      <video
        controls
        preload="none"
        className="w-full aspect-video rounded-lg"
        poster={`https://cdn.loom.com/sessions/thumbnails/${video.loomId}-full.jpg`}
      >
        <source src={video.nativeSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-800 group cursor-pointer"
        aria-label={`Play ${video.title}`}
      >
        <img
          src={`https://cdn.loom.com/sessions/thumbnails/${video.loomId}-full.jpg`}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="h-7 w-7 text-black ml-1" fill="currentColor" />
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        src={`https://www.loom.com/embed/${video.loomId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1`}
        frameBorder="0"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

export { VideoEmbed };

const Videos = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageSEO seo={videosSEO} breadcrumbs={videosBreadcrumb} extraSchema={videoGuidesSchema} />

      {/* Hero */}
      <section className="pt-32 md:pt-36 pb-16 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-gold mb-6 transition" onClick={scrollToTop}>
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-gold-opacity-20 border border-gold-opacity-40 flex items-center justify-center">
              <Video className="h-7 w-7 text-gold" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Video Guides</h1>
              <p className="text-white/70 mt-1">See Tracker in action — {videos.length} walkthrough demos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-gold-opacity-50 transition-all duration-300">
                <VideoEmbed video={video} />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                    <span className="text-xs text-gold bg-gold-opacity-10 px-2 py-1 rounded-full flex-shrink-0 ml-3">
                      <Play className="inline h-3 w-3 mr-1" />
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to See It for Yourself?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Schedule a personalized demo and see how Tracker can streamline your garment decoration business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started" onClick={scrollToTop}>
              <Button variant="gold" size="lg">Get Started</Button>
            </Link>
            <Link to="/contact" onClick={scrollToTop}>
              <Button variant="outline" size="lg" className="border-zinc-700 text-white hover:border-gold">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
