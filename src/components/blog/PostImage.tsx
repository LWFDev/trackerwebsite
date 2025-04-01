
import { BlogPost } from "@/data/blogPosts";

interface PostImageProps {
  post: BlogPost;
}

const PostImage = ({ post }: PostImageProps) => {
  return (
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
  );
};

export default PostImage;
