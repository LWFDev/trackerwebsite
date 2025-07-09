
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/data/blogPosts";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="bg-zinc-800 border-zinc-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold-opacity-50">
      <img 
        src={post.coverImage} 
        alt={post.title}
        className="w-full h-48 object-cover" 
      />
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium bg-zinc-700 text-gold px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-xs text-gray-400 ml-3">{post.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.slug}`}
          className="text-gold hover:text-gold-light inline-flex items-center"
        >
          Read More
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
