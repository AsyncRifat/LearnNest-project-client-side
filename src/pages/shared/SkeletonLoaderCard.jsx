import React from 'react';

const SkeletonLoaderCard = () => {
  return (
    <div className="-mt-48 max-w-xl w-full mx-auto card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden animate-pulse">
      {/* Image placeholder */}
      <div className="h-48 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />

      <div className="p-6 space-y-4">
        {/* Title placeholder */}
        <div className="h-6 w-3/4 rounded-md bg-gray-300 dark:bg-gray-600" />

        {/* Instructor name */}
        <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-500" />

        {/* Spacer */}
        <div className="pt-4" />

        {/* Button placeholder */}
        <div className="h-10 w-28 rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600" />
      </div>
    </div>
  );
};

export default SkeletonLoaderCard;
