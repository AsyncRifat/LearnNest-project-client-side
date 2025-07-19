import React from 'react';

const ReviewSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="border p-4 rounded bg-gray-50 shadow-sm space-y-2"
        >
          <div className="flex justify-between items-center">
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
            <div className="h-3 w-20 bg-gray-300 rounded"></div>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-4 bg-gray-300 rounded-full"></div>
            ))}
          </div>
          <div className="h-3 w-full bg-gray-300 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSkeleton;
