
import { Tag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BlogPost } from "@/data/blogPosts";

interface PostContentProps {
  post: BlogPost;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <div key={index} className="flex items-center bg-zinc-800 px-3 py-1 rounded-full text-sm">
                <Tag size={14} className="mr-1 text-gold" />
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
  );
};

export default PostContent;
