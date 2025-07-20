const SkeletonLoader = () => {
  return (
    <tr className="animate-pulse">
      {[...Array(6)].map((_, i) => (
        <td
          key={i}
          className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
        >
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto"></div>
        </td>
      ))}

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex gap-2 justify-center">
          <div className="h-6 w-14 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </td>
    </tr>
  );
};

export default SkeletonLoader;
