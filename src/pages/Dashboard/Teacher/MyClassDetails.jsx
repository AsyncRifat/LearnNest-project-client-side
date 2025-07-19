import React, { useState } from 'react';
import { FaUserGraduate, FaTasks, FaFileAlt } from 'react-icons/fa';
import { MdAddCircleOutline } from 'react-icons/md';

import AssignmentModal from '../Modal/AssignmentModal';
import useDocumentTitle from '../../../utils/useDocumentTitle';

const MyClassDetails = () => {
  useDocumentTitle('My Class Details');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="font-quicksand text-2xl font-bold mb-7 text-gray-800 dark:text-gray-200">
        Class Progress
      </h2>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaUserGraduate className="text-4xl text-blue-500" />
          <div>
            <p className="text-gray-600 text-sm">Total Enrolled</p>
            <p className="text-xl font-bold text-gray-800">233</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaTasks className="text-4xl text-emerald-500" />
          <div>
            <p className="text-gray-600 text-sm">Total Assignments</p>
            <p className="text-xl font-bold text-gray-800">22</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaFileAlt className="text-4xl text-purple-500" />
          <div>
            <p className="text-gray-600 text-sm">Total Submissions</p>
            <p className="text-xl font-bold text-gray-800">444</p>
          </div>
        </div>
      </div>

      {/* Assignment Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-y-5 sm:gap-y-0">
        <h2 className="font-quicksand text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
          Assignments
        </h2>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm transition"
        >
          <MdAddCircleOutline className="text-xl" /> Create Assignment
        </button>
      </div>

      {/* Assignment Modal */}
      <AssignmentModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MyClassDetails;
