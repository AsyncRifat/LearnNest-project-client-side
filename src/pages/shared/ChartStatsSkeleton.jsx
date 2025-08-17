import React from 'react';

const ChartStatsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-28 rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
        <div className="h-96 rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
        <div className="h-96 rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
      </div>
    </div>
  );
};

export default ChartStatsSkeleton;
