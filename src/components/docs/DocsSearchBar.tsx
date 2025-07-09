
import React, { useState } from "react";
import { Search } from "lucide-react";
import { docsCategories } from "@/data/docsData";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DocsSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  
  // Flatten docs for searching
  const allDocs = docsCategories.flatMap(category => 
    category.docs.map(doc => ({
      ...doc,
      categoryId: category.id,
      categoryName: category.name
    }))
  );
  
  // Filter docs based on search query
  const filteredDocs = searchQuery.length > 1
    ? allDocs.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredDocs.length > 0) {
      const firstResult = filteredDocs[0];
      navigate(`/documentation/${firstResult.categoryId}/${firstResult.id}`);
      setSearchQuery("");
      setIsFocused(false);
    }
  };
  
  const handleResultClick = (categoryId: string, docId: string) => {
    navigate(`/documentation/${categoryId}/${docId}`);
    setSearchQuery("");
    setIsFocused(false);
  };

  return (
    <div className="relative mb-6">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-1 
                       focus:ring-gold focus:border-gold text-sm text-white 
                       placeholder:text-zinc-400 transition-all"
          />
        </div>
      </form>
      
      <AnimatePresence>
        {isFocused && filteredDocs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 top-full left-0 right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg 
                      shadow-lg max-h-60 overflow-y-auto"
          >
            <ul className="py-1">
              {filteredDocs.slice(0, 5).map((doc) => (
                <li key={`${doc.categoryId}-${doc.id}`}>
                  <button
                    onClick={() => handleResultClick(doc.categoryId, doc.id)}
                    className="w-full text-left px-4 py-2 hover:bg-zinc-700 focus:bg-zinc-700 
                              outline-none transition-colors"
                  >
                    <div className="font-medium text-gold-light">{doc.title}</div>
                    <div className="text-xs text-zinc-400">{doc.categoryName}</div>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DocsSearchBar;
