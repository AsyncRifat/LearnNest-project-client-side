import { useState } from 'react';
import UserDataRows from '../TableRows/UsersDataRows';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import useSkeleton from '../../../hooks/useSkeleton';
import LoadingSpinner from '../../shared/LoadingSpinner';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '../../shared/SkeletonLoader';

const Users = () => {
  useDocumentTitle('LearnNest | Make Admin');
  const loading = useSkeleton(400);
  const [searchEmail, setSearchEmail] = useState('');
  const [emailQuery, setEmailQuery] = useState('');
  const [skeletonCount, setSkeletonCount] = useState(3);
  const axiosSecure = useAxiosSecure();

  // Query to search users
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['search-users', emailQuery],
    queryFn: async () => {
      const res = await axiosSecure(
        emailQuery ? `/users/search?email=${emailQuery}` : `/users/search`
      );
      const data = res.data;
      setSkeletonCount(data.length);
      return data;
    },
  });

  const handleSearch = () => {
    if (!searchEmail) return;
    setEmailQuery(searchEmail);
  };

  if (loading) {
    return <LoadingSpinner smallHeight={true} />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="flex justify-between gap-2 my-4">
        <h2 className="font-quicksand text-2xl font-bold mb-3 text-center text-gray-800 dark:text-gray-200">
          Make Admin
        </h2>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative w-full sm:max-w-xs">
            <input
              type="text"
              placeholder="Search by email"
              className="input input-bordered w-full pr-10 focus:outline-none border border-gray-400 bg-transparent text-black dark:text-white placeholder:text-gray-500"
              value={searchEmail}
              onChange={e => setSearchEmail(e.target.value)}
            />
            {searchEmail && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
                onClick={() => setSearchEmail('')}
                type="button"
              >
                ✕
              </button>
            )}
          </div>

          <button
            className={`btn text-white  ${
              !searchEmail ? 'hidden' : 'block bg-green-600'
            }`}
            onClick={handleSearch}
            disabled={!searchEmail}
          >
            Search
          </button>
        </div>
      </div>

      <div className="pb-5">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal table-zebra">
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
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Role
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
                  {users.map(user => (
                    <UserDataRows
                      key={user._id}
                      user={user}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
