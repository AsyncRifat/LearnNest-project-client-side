import React from 'react';

const SkeletonRow = () => {
  return (
    <div className="animate-pulse min-w-5xl">
      {/* Title */}
      <div className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <span className="h-5 bg-gray-200 rounded-md w-32"></span>
      </div>

      {/* Email */}
      <div className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <span className="h-5 bg-gray-200 rounded-md w-44"></span>
      </div>

      {/* Image */}
      <div className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <span className="h-10 w-14 bg-gray-300 rounded-md"></span>
      </div>

      {/* Status */}
      <div className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <span className="h-5 w-20 bg-gray-300 rounded-md"></span>
      </div>

      {/* Description */}
      <div className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <span className="h-5 w-40 bg-gray-200 rounded-md"></span>
      </div>
      <div className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <span className="h-5 w-40 bg-gray-200 rounded-md"></span>
      </div>
      <div className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <span className="h-5 w-40 bg-gray-200 rounded-md"></span>
      </div>
      <div className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <span className="h-5 w-40 bg-gray-200 rounded-md"></span>
      </div>

      {/* Buttons
      <div className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <span className="flex gap-3">
          <span className="h-9 w-20 bg-gray-300 rounded-full"></span>
          <span className="h-9 w-20 bg-gray-300 rounded-full"></span>
          <span className="h-9 w-24 bg-gray-300 rounded-full"></span>
        </span>
      </div> */}
    </div>
  );
};

export default SkeletonRow;
