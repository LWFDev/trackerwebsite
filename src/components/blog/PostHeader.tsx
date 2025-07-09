
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface PostHeaderProps {
  post: BlogPost;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <div className="bg-zinc-900 py-16 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gold-opacity-5 blur-[150px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-gold mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center mb-4 space-x-4">
            <span className="bg-zinc-800 text-gold text-xs font-medium px-2 py-1 rounded">
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
  );
};

export default PostHeader;
