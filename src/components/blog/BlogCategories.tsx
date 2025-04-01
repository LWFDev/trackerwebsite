
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BlogCategoriesProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BlogCategories = ({ activeTab, setActiveTab }: BlogCategoriesProps) => {
  return (
    <div className="bg-zinc-900 border-b border-zinc-800 pb-0">
      <div className="container mx-auto px-4">
        <Tabs 
          defaultValue="all-posts" 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="bg-transparent flex justify-start overflow-x-auto space-x-2 border-b border-zinc-800 w-full">
            <TabsTrigger value="all-posts" className="data-[state=active]:border-gold-DEFAULT">
              All Posts
            </TabsTrigger>
            <TabsTrigger value="industry-insights" className="data-[state=active]:border-gold-DEFAULT">
              Industry Insights
            </TabsTrigger>
            <TabsTrigger value="product-updates" className="data-[state=active]:border-gold-DEFAULT">
              Product Updates
            </TabsTrigger>
            <TabsTrigger value="case-studies" className="data-[state=active]:border-gold-DEFAULT">
              Case Studies
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="data-[state=active]:border-gold-DEFAULT">
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="company-news" className="data-[state=active]:border-gold-DEFAULT">
              Company News
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default BlogCategories;
