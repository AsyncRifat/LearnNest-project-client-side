import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from '@headlessui/react';
import { Fragment } from 'react';

const assignments = [
  {
    id: 1,
    title: 'Assignment 1',
    description: 'Build a responsive React website.',
    deadline: '2025-08-01',
  },
  {
    id: 2,
    title: 'Assignment 2',
    description: 'Create a REST API using Node.js and Express.',
    deadline: '2025-08-10',
  },
  {
    id: 3,
    title: 'Assignment 2',
    description: 'Create a REST API using Node.js and Express.',
    deadline: '2025-08-10',
  },
  {
    id: 4,
    title: 'Assignment 2',
    description: 'Create a REST API using Node.js and Express.',
    deadline: '2025-08-10',
  },
];

const MyEnrollClassDetails = () => {
  const [isTERModalOpen, setIsTERModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [terDescription, setTerDescription] = useState('');

  const handleSubmitAssignment = id => {
    console.log('Assignment submitted:', id);
    // Make API call here
  };

  const handleTERSubmit = () => {
    console.log('TER submitted:', { rating, terDescription });
    setIsTERModalOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="font-quicksand text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
          My Enrolled Class Assignments
        </h2>
        <button
          onClick={() => setIsTERModalOpen(true)}
          className="btn btn-secondary"
        >
          Teaching Evaluation Report (TER)
        </button>
      </div>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="table w-full bg-gray-50 dark:bg-gray-300 min-w-full leading-normal">
          <thead>
            <tr className=" border-b border-gray-200 text-gray-800 ">
              <th
                scope="col"
                className="px-5 py-3 bg-white text-gray-800 font-semibold  text-left text-sm uppercase"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white text-gray-800  text-left text-sm uppercase font-semibold"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-white text-gray-800 text-left text-sm uppercase font-semibold"
              >
                Deadline
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-center bg-white text-gray-800 text-sm uppercase font-semibold"
              >
                Submit
              </th>
            </tr>
          </thead>
          <tbody>
            {assignments.map(assignment => (
              <tr
                key={assignment.id}
                className="text-gray-800 border-b border-gray-200"
              >
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {assignment.title}
                  </p>
                </td>

                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px]">
                    {assignment.description}
                  </p>
                </td>

                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {assignment.deadline}
                  </p>
                </td>

                <td className="flex justify-center items-center px-5 py-5 bg-white text-sm space-x-2.5">
                  <input
                    type="file"
                    className=" py-1.5 px-3 rounded-sm bg-gray-200 text-gray-800 cursor-pointer"
                  />
                  <button
                    onClick={() => handleSubmitAssignment(assignment.id)}
                    className="py-1.5 px-3 rounded-sm bg-violet-500 text-white cursor-pointer"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* TER Modal */}
      <Transition appear show={isTERModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsTERModalOpen(false)}
        >
          <div className="fixed inset-0 overflow-y-auto bg-black/40">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                  >
                    Teaching Evaluation Report
                  </DialogTitle>
                  <textarea
                    placeholder="Write your feedback..."
                    value={terDescription}
                    onChange={e => setTerDescription(e.target.value)}
                    className="w-full textarea textarea-bordered rounded-lg border focus:ring-2 focus:ring-green-500 bg-gray-300 dark:bg-gray-800 dark:text-white border-gray-300 text-black mb-5"
                    rows={4}
                  />

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label key={i}>
                          <input
                            type="radio"
                            name="rating"
                            className="hidden"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                          />
                          <FaStar
                            className={`cursor-pointer text-2xl ${
                              ratingValue <= (hover || rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                          />
                        </label>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex justify-end items-center gap-3">
                    <button
                      className="bg-red-600 py-1.5 px-2 rounded-md text-sm cursor-pointer text-white"
                      onClick={() => setIsTERModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-green-600 py-1.5 px-4 rounded-md text-sm cursor-pointer text-white"
                      onClick={handleTERSubmit}
                    >
                      Send
                    </button>
                  </div>
                </DialogPanel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MyEnrollClassDetails;
