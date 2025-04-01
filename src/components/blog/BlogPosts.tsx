
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { BlogPost } from "@/data/blogPosts";
import BlogPostCard from "./BlogPostCard";

interface BlogPostsProps {
  posts: BlogPost[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <div className="bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl mb-2">No blog posts found.</h3>
            <p className="text-gray-400">Try adjusting your search or browse all articles.</p>
          </div>
        )}
        
        {posts.length > 0 && (
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
  );
};

export default BlogPosts;
