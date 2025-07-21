const SkeletonLoaderAddClass = () => {
  return (
    <div className="mt-5 md:mt-12 px-4 flex items-center justify-center animate-pulse">
      <div className="w-full max-w-4xl rounded-xl space-y-6">
        <div className="text-center">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-3"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
            </div>
          ))}
        </div>

        <div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-24 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-24 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-10 bg-green-300 dark:bg-green-600 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoaderAddClass;
