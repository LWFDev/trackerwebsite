
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/data/blogPosts";

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (posts.length === 0) return null;
  
  return (
    <section className="py-16 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
