import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  count?: number;
}

export const ModuleCardSkeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="h-full rounded-lg bg-zinc-800 border border-zinc-700">
      <div className="bg-zinc-900 p-4 flex items-center space-x-4">
        <div className="bg-zinc-700 p-3 rounded-lg w-14 h-14"></div>
        <div className="flex-1">
          <div className="h-6 bg-zinc-700 rounded w-3/4 mb-2"></div>
        </div>
      </div>
      <div className="p-6 bg-black/40">
        <div className="space-y-2">
          <div className="h-4 bg-zinc-700 rounded w-full"></div>
          <div className="h-4 bg-zinc-700 rounded w-4/5"></div>
          <div className="h-4 bg-zinc-700 rounded w-3/5"></div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="h-4 bg-zinc-700 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  </div>
);

export const LoadingSkeleton = ({ className, count = 1 }: LoadingSkeletonProps) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`} />
    ))}
  </>
);