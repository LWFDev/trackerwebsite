
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import blogPosts from "@/data/blogPosts";
import RelatedPosts from "@/components/blog/RelatedPosts";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import BlogCTA from "@/components/blog/BlogCTA";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);
  
  // If post not found, show 404
  if (!post) {
    return <NotFound />;
  }
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-zinc-900 py-16 relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-[150px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-gold-DEFAULT mb-6">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
              
              <div className="flex items-center mb-4 space-x-4">
                <span className="bg-zinc-800 text-gold-DEFAULT text-xs font-medium px-2 py-1 rounded">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <User size={14} className="mr-1" />
                  {post.author}
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
              
              <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>
            </div>
          </div>
        </div>
        
        {/* Cover Image */}
        <div className="bg-zinc-900">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="bg-zinc-900">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <div key={index} className="flex items-center bg-zinc-800 px-3 py-1 rounded-full text-sm">
                    <Tag size={14} className="mr-1 text-gold-DEFAULT" />
                    {tag}
                  </div>
                ))}
              </div>
              
              <Separator className="my-12 bg-zinc-700" />
              
              {/* Author Section */}
              <div className="flex items-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-full overflow-hidden mr-4">
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-gray-400 text-sm">{post.authorTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <RelatedPosts posts={relatedPosts} />
        <NewsletterSignup />
        <BlogCTA />
      </main>
    </div>
  );
};

export default BlogPost;
