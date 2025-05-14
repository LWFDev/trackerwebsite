
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import DocsSidebar from "@/components/docs/DocsSidebar";
import DocsSearchBar from "@/components/docs/DocsSearchBar";
import DocsContent from "@/components/docs/DocsContent";
import DocsFeedback from "@/components/docs/DocsFeedback";
import DocsCTA from "@/components/docs/DocsCTA";
import { docsCategories } from "@/data/docsData";

const Documentation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("getting-started");
  const [selectedDoc, setSelectedDoc] = useState("introduction");

  // Extract category and doc from URL if present
  React.useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length >= 3 && pathParts[0] === 'documentation') {
      const categoryFromPath = pathParts[1];
      const docFromPath = pathParts[2];
      
      if (docsCategories.some(cat => cat.id === categoryFromPath)) {
        setSelectedCategory(categoryFromPath);
        
        const category = docsCategories.find(cat => cat.id === categoryFromPath);
        if (category && category.docs.some(doc => doc.id === docFromPath)) {
          setSelectedDoc(docFromPath);
        } else {
          setSelectedDoc(category?.docs[0].id || "introduction");
        }
      }
    }
  }, [location.pathname]);

  // Update URL when selection changes
  React.useEffect(() => {
    const newPath = `/documentation/${selectedCategory}/${selectedDoc}`;
    if (location.pathname !== newPath) {
      navigate(newPath, { replace: true });
    }
  }, [selectedCategory, selectedDoc, navigate, location.pathname]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const category = docsCategories.find(cat => cat.id === categoryId);
    setSelectedDoc(category?.docs[0].id || "introduction");
  };

  const handleDocChange = (docId: string) => {
    setSelectedDoc(docId);
  };

  const currentCategory = docsCategories.find(cat => cat.id === selectedCategory);
  const currentDoc = currentCategory?.docs.find(doc => doc.id === selectedDoc);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="py-8 px-4 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/documentation">Documentation</BreadcrumbLink>
            </BreadcrumbItem>
            {currentCategory && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/documentation/${currentCategory.id}`}>
                    {currentCategory.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {currentDoc && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentDoc.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Main documentation layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 xl:w-1/5">
            <DocsSearchBar />
            <DocsSidebar 
              categories={docsCategories}
              selectedCategory={selectedCategory}
              selectedDoc={selectedDoc}
              onCategoryChange={handleCategoryChange}
              onDocChange={handleDocChange}
            />
          </div>
          
          {/* Main content */}
          <div className="w-full lg:w-3/4 xl:w-4/5">
            <motion.div
              key={`${selectedCategory}-${selectedDoc}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Tabs for different content views */}
              <Tabs defaultValue="content" className="mb-8">
                <TabsList className="w-full sm:w-auto">
                  <TabsTrigger value="content">Documentation</TabsTrigger>
                  <TabsTrigger value="api">API Reference</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>
                <TabsContent value="content" className="mt-6">
                  {currentDoc && <DocsContent doc={currentDoc} />}
                </TabsContent>
                <TabsContent value="api" className="mt-6">
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">API Reference</h3>
                    <p className="text-zinc-300">
                      Detailed API documentation for the {currentDoc?.title} feature is 
                      displayed here, including parameters, return values, and examples.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="examples" className="mt-6">
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Usage Examples</h3>
                    <p className="text-zinc-300">
                      Code examples and use cases for the {currentDoc?.title} feature
                      will be shown here.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
              
              {/* Feedback section */}
              {currentDoc && <DocsFeedback docId={currentDoc.id} docTitle={currentDoc.title} />}
            </motion.div>
          </div>
        </div>
        
        {/* Call to Action */}
        <DocsCTA />
      </div>
    </div>
  );
};

export default Documentation;
