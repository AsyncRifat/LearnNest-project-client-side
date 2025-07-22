import React from 'react';
import MyEnrollClassCard from '../../../card/MyEnrollClassCard';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import useSkeleton from '../../../hooks/useSkeleton';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../shared/LoadingSpinner';

const MyEnrollClass = () => {
  useDocumentTitle('LearnNest | My Enrolled Classes');
  const loading = useSkeleton(700);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: myEnrolledClasses = [], isLoading } = useQuery({
    queryKey: ['myEnrollClass', user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/my-all-classes/${user?.email}`);
      const data = res.data;
      return data;
    },
  });

  if (loading || isLoading) {
    return (
      <div className="min-h-screen py-10 px-4 flex items-center justify-center  dark:bg-base-100">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div className="text-center">
        <h2 className="font-quicksand text-2xl font-bold mb-3 text-center text-gray-800 dark:text-gray-200">
          My Enrolled Classes
        </h2>
        <p className="mb-12 text-gray-500 dark:text-gray-400 text-sm font-thin">
          Here you can find all the classes you&apos;ve enrolled in. <br />
          Browse through the available lessons, check instructor details, and
          continue learning right where you left off. Stay consistent and keep
          growing!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
        {myEnrolledClasses.map(enrolledClass => (
          <MyEnrollClassCard
            key={enrolledClass._id}
            enrolledClass={enrolledClass}
          />
        ))}
      </div>
    </div>
  );
};

export default MyEnrollClass;
