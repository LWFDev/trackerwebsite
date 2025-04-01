
import { useParams } from "react-router-dom";
import blogPosts from "@/data/blogPosts";
import PostHeader from "@/components/blog/PostHeader";
import PostImage from "@/components/blog/PostImage";
import PostContent from "@/components/blog/PostContent";
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
        <PostHeader post={post} />
        <PostImage post={post} />
        <PostContent post={post} />
        <RelatedPosts posts={relatedPosts} />
        <NewsletterSignup />
        <BlogCTA />
      </main>
    </div>
  );
};

export default BlogPost;
