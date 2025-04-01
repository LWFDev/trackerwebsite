
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import blogPosts from "@/data/blogPosts";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import BlogHero from "@/components/blog/BlogHero";
import BlogCTA from "@/components/blog/BlogCTA";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all-posts");
  
  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-16">
        <BlogHero />
        
        {/* Search Bar */}
        <div className="bg-zinc-900 py-6">
          <div className="container mx-auto px-4">
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                className="bg-zinc-800 border-zinc-700 text-white pl-10 pr-4 py-2 rounded-md w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>
        
        {/* Blog Categories */}
        <div className="bg-zinc-900 border-b border-zinc-800 pb-0">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all-posts" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-transparent flex justify-start overflow-x-auto space-x-2 border-b border-zinc-800 w-full">
                <TabsTrigger value="all-posts" className="data-[state=active]:border-gold-DEFAULT">All Posts</TabsTrigger>
                <TabsTrigger value="industry-insights" className="data-[state=active]:border-gold-DEFAULT">Industry Insights</TabsTrigger>
                <TabsTrigger value="product-updates" className="data-[state=active]:border-gold-DEFAULT">Product Updates</TabsTrigger>
                <TabsTrigger value="case-studies" className="data-[state=active]:border-gold-DEFAULT">Case Studies</TabsTrigger>
                <TabsTrigger value="tutorials" className="data-[state=active]:border-gold-DEFAULT">Tutorials</TabsTrigger>
                <TabsTrigger value="company-news" className="data-[state=active]:border-gold-DEFAULT">Company News</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="bg-zinc-900 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.slug} className="bg-zinc-800 border-zinc-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold-DEFAULT/50">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-48 object-cover" 
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-xs font-medium bg-zinc-700 text-gold-DEFAULT px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400 ml-3">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-gold-DEFAULT hover:text-gold-light inline-flex items-center"
                      >
                        Read More
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl mb-2">No blog posts found.</h3>
                <p className="text-gray-400">Try adjusting your search or browse all articles.</p>
              </div>
            )}
            
            {filteredPosts.length > 0 && (
              <Pagination className="mt-12">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink>1</PaginationLink>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
        
        <NewsletterSignup />
        <BlogCTA />
      </main>
    </div>
  );
};

export default BlogPage;
