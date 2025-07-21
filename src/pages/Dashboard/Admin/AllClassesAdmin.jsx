import { useState } from 'react';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import AllClassesAdminModal from '../Modal/AllClassesAdminModal';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { usePatchData } from '../../../utils/utils';
import toast from 'react-hot-toast';
import SkeletonLoader from '../../shared/SkeletonLoader';

const AllClassesAdmin = () => {
  useDocumentTitle('LearnNest | Class Request');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleTechRequest, setSingleTechRequest] = useState([]);
  const [skeletonCount, setSkeletonCount] = useState(3);
  const axiosSecure = useAxiosSecure();

  const {
    data: allClasses,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['all-classes'],
    queryFn: async () => {
      const res = await axiosSecure('/admin-add-class');
      const data = res?.data;
      setSkeletonCount(data.length);
      return data;
    },
  });

  const { mutate: updateUserStatus } = usePatchData({
    endpoint: '/class-request-status',
    queryKey: 'all-classes',
    onSuccess: () => {
      toast.success('User updated successfully!');
      refetch();
    },
    onError: () => toast.error('Failed to update user.'),
  });

  const handleApproved = req => {
    updateUserStatus({
      id: req?._id,
      data: { status: 'approved' },
    });
  };
  const handleRejected = req => {
    updateUserStatus({
      id: req?._id,
      data: { status: 'rejected' },
    });
  };

  return (
    <div className="pb-5">
      <h2 className="font-quicksand text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
        All Request Classes
      </h2>
      <p className="mb-7 text-gray-700 dark:text-gray-400 text-sm font-thin">
        View and manage all submitted classes with details and approval
        controls.
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
                  Title
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  image
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
                  Description
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
                {allClasses.map(req => (
                  <tr key={req._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px]">
                        {req?.title}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {req?.email}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <img
                        src={req?.image}
                        alt={req?.title}
                        className="h-9 w-12 rounded-sm object-cover"
                      />
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

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px] text-gray-900">
                        {req?.description}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-2.5">
                      <div className="flex md:flex-row gap-2.5">
                        {req?.status === 'approved' && (
                          <button
                            className=" px-2 py-1 text-violet-600 border hover:scale-105 border-violet-500 hover:border-violet-600 hover:cursor-pointer "
                            onClick={() => {
                              setIsModalOpen(true);
                              setSingleTechRequest(req);
                            }}
                          >
                            Progress
                          </button>
                        )}

                        {(req?.status === 'approved' ||
                          req?.status === 'pending') && (
                          <button
                            className=" px-2 py-1 text-red-500 border hover:scale-105 border-red-500 hover:border-red-600 hover:cursor-pointer"
                            onClick={() => {
                              handleRejected(req);
                            }}
                          >
                            Rejected
                          </button>
                        )}

                        {req?.status === 'pending' && (
                          <button
                            className=" px-2 py-1 border hover:scale-105 text-green-600 border-green-700 hover:border-green-800 hover:cursor-pointer "
                            onClick={() => {
                              handleApproved(req);
                            }}
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

          {/* Progress button for  modal */}
          {isModalOpen && (
            <AllClassesAdminModal
              setIsModalOpen={setIsModalOpen}
              singleTechRequest={singleTechRequest}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllClassesAdmin;
