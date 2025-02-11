import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-8 animate-pulse">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs Skeleton */}
        <div className="flex gap-2 mb-8">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-4 w-4 bg-gray-200 rounded">/</div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>

        {/* Title Skeleton */}
        <div className="mb-8">
          <div className="h-10 w-3/4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
        </div>

        {/* Key Takeaways Skeleton */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>

        {/* Climate Section Skeleton */}
        <div className="mb-8">
          <div className="h-8 w-56 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Info Boxes Skeleton */}
        <div className="grid gap-4 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="h-6 w-32 bg-gray-200 rounded mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="h-6 w-40 bg-gray-200 rounded mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Content Sections Skeleton */}
        {[1, 2].map((section) => (
          <div key={section} className="mb-8">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}

        {/* CTA Skeleton */}
        <div className="mt-8 space-y-4">
          <div className="h-12 w-full bg-blue-200 rounded"></div>
          <div className="h-12 w-full bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
