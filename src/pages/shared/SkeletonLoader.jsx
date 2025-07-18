const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4 w-full max-w-4xl dark:bg-gray-700">
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
      </div>
      <div className="h-24 bg-gray-300 dark:bg-gray-600 rounded w-full mt-6"></div>
      <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mt-6"></div>
    </div>
  );
};

export default SkeletonLoader;
