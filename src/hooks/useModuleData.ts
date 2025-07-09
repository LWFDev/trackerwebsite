import { useState, useEffect } from 'react';
import { Module } from '@/types/modules';
import { allModules } from '@/pages/modules/data/moduleCategories';

const CACHE_KEY = 'modules_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

interface CachedData {
  modules: Module[];
  timestamp: number;
}

export const useModuleData = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadModules = async () => {
      try {
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsedCache: CachedData = JSON.parse(cached);
          const isValid = Date.now() - parsedCache.timestamp < CACHE_DURATION;
          
          if (isValid) {
            setModules(parsedCache.modules);
            setIsLoading(false);
            return;
          }
        }

        // Load fresh data
        setModules(allModules);
        
        // Cache the data
        const cacheData: CachedData = {
          modules: allModules,
          timestamp: Date.now()
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
        
      } catch (error) {
        console.error('Error loading modules:', error);
        setModules(allModules); // Fallback to static data
      } finally {
        setIsLoading(false);
      }
    };

    loadModules();
  }, []);

  const searchModules = (query: string): Module[] => {
    if (!query.trim()) return modules;
    
    const lowercaseQuery = query.toLowerCase();
    return modules.filter(module => 
      module.title.toLowerCase().includes(lowercaseQuery) ||
      module.description.toLowerCase().includes(lowercaseQuery) ||
      module.category.toLowerCase().includes(lowercaseQuery)
    );
  };

  const filterByCategory = (category: string): Module[] => {
    if (category === "All") return modules;
    return modules.filter(module => module.category === category);
  };

  return {
    modules,
    isLoading,
    searchModules,
    filterByCategory
  };
};