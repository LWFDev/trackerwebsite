
import { useState } from "react";
import blogPosts from "@/data/blogPosts";
import BlogHero from "@/components/blog/BlogHero";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogPosts from "@/components/blog/BlogPosts";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
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
        <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <BlogCategories activeTab={activeTab} setActiveTab={setActiveTab} />
        <BlogPosts posts={filteredPosts} />
        <NewsletterSignup />
        <BlogCTA />
      </main>
    </div>
  );
};

export default BlogPage;
