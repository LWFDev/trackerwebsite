
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const BlogSearch = ({ searchQuery, setSearchQuery }: BlogSearchProps) => {
  return (
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
  );
};

export default BlogSearch;
