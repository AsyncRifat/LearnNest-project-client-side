import React from 'react';
import TeacherRequestRows from '../TableRows/TeacherRequestRows';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SkeletonLoader from '../../shared/SkeletonLoader';
import { useState } from 'react';
import TeacherRequestModal from '../Modal/TeacherRequestModal';

const TeacherRequest = () => {
  useDocumentTitle('LearnNest | Teacher Request');
  const axiosSecure = useAxiosSecure();
  const [skeletonCount, setSkeletonCount] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleTechRequest, setSingleTechRequest] = useState([]);

  const { data: teacherRequest = [], isLoading } = useQuery({
    queryKey: ['teacherRequest'],
    queryFn: async () => {
      const res = await axiosSecure('/all-request');
      const data = res.data;
      setSkeletonCount(data.length);
      return data;
    },
  });

  const handleApproved = () => {
    console.log('Approved');
  };
  const handleRejected = () => {
    console.log('Rejected');
  };

  return (
    <div className="pb-5">
      <h2 className="font-quicksand text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
        Manage Teacher Requests
      </h2>
      <p className="mb-7 text-gray-700 dark:text-gray-400 text-sm font-thin">
        Manage and review teacher registration requests with options to approve
        or reject based on status.
      </p>

      <div className="px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Experience
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Title
                </th>

                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Action
                </th>
              </tr>
            </thead>
            {isLoading ? (
              <tbody>
                {[...Array(skeletonCount)].map((_, i) => (
                  <SkeletonLoader key={i} />
                ))}
              </tbody>
            ) : (
              <tbody>
                {teacherRequest.map(req => (
                  <tr key={req._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {req?.name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <img
                        src={req?.image}
                        alt={req?.name}
                        className="h-7 w-7 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {req?.experience}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap max-w-[150px]  truncate">
                        {req?.title}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {req?.category}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm uppercase">
                      {req?.status && (
                        <p
                          className={`${
                            req?.status === 'pending'
                              ? 'text-amber-500'
                              : 'text-green-600'
                          } ${req?.status === 'rejected' && 'text-red-500'}`}
                        >
                          {req?.status}
                        </p>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                      <div className="flex md:flex-row gap-2.5">
                        <button
                          className=" px-2 py-1 text-gray-100 dark:text-gray-200 bg-violet-500 hover:bg-violet-600 hover:cursor-pointer"
                          onClick={() => {
                            setIsModalOpen(true);
                            setSingleTechRequest(req);
                          }}
                        >
                          View
                        </button>

                        {(req?.status === 'approved' ||
                          req?.status === 'pending') && (
                          <button
                            className=" px-2 py-1 text-gray-100 dark:text-gray-200 bg-red-500 hover:bg-red-600 hover:cursor-pointer"
                            onClick={handleRejected}
                          >
                            Rejected
                          </button>
                        )}

                        {req?.status === 'pending' && (
                          <button
                            className=" px-2 py-1 text-gray-100 dark:text-gray-200 bg-green-700 hover:bg-green-800 hover:cursor-pointer"
                            onClick={handleApproved}
                          >
                            Approved
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>

          {/* view button for  modal */}
          {isModalOpen && (
            <TeacherRequestModal
              setIsModalOpen={setIsModalOpen}
              singleTechRequest={singleTechRequest}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherRequest;
