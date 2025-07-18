import React from 'react';

const SkeletonRow = () => {
  return (
    <tr className="animate-pulse">
      {/* Title */}
      <td className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <div className="h-5 bg-gray-200 rounded-md w-32"></div>
      </td>

      {/* Email */}
      <td className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <div className="h-5 bg-gray-200 rounded-md w-44"></div>
      </td>

      {/* Image */}
      <td className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <div className="h-10 w-14 bg-gray-300 rounded-md"></div>
      </td>

      {/* Status */}
      <td className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <div className="h-5 w-20 bg-gray-300 rounded-md"></div>
      </td>

      {/* Description */}
      <td className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <div className="h-5 w-40 bg-gray-200 rounded-md"></div>
      </td>

      {/* Buttons */}
      <td className="px-5 py-6 border-b border-gray-200 bg-white text-sm">
        <div className="flex gap-3">
          <div className="h-9 w-20 bg-gray-300 rounded-full"></div>
          <div className="h-9 w-20 bg-gray-300 rounded-full"></div>
          <div className="h-9 w-24 bg-gray-300 rounded-full"></div>
        </div>
      </td>
    </tr>
  );
};

export default SkeletonRow;
