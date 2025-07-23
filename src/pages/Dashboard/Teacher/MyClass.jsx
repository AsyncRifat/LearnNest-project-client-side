import React from 'react';
import MyClassesCards from '../../../card/MyClassesCards';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../shared/LoadingSpinner';

const MyClass = () => {
  useDocumentTitle('LearnNest | My classes');
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: allClassInfo = [], isLoading } = useQuery({
    queryKey: ['teacherRequest'],
    queryFn: async () => {
      const res = await axiosSecure(`/get-all-classes/${user?.email}`);
      const data = res.data;
      return data;
    },
  });

  console.log(allClassInfo);

  return (
    <div>
      <h2 className="font-quicksand text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
        My Classes - Manage, Update & Track Your Courses
      </h2>
      <p className="mb-10 text-gray-700 dark:text-gray-400 text-sm font-thin">
        Manage all your submitted classes in one place. Update, delete, or view
        details after admin approval.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {allClassInfo.map(singleClass => (
              <MyClassesCards key={singleClass._id} singleClass={singleClass} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyClass;
