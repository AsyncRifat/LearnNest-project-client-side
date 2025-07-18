import React from 'react';
import MyEnrollClassCard from '../../../card/MyEnrollClassCard';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import useSkeleton from '../../../hooks/useSkeleton';
import SkeletonLoaderCard from '../../shared/SkeletonLoaderCard';

const MyEnrollClass = () => {
  useDocumentTitle('LearnNest | My Enrolled Classes');
  const loading = useSkeleton();
  const enrolledClassesData = [
    {
      id: '1',
      title: 'React Basics',
      name: 'John Doe',
      image: 'https://i.ibb.co/Zp6x2DVF/Screenshot-2025-07-17-at-18-13-38.png',
    },
    {
      id: '2',
      title: 'Advanced JavaScript',
      name: 'Jane Smith',
      image: 'https://i.ibb.co/Zp6x2DVF/Screenshot-2025-07-17-at-18-13-38.png',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen py-10 px-4 flex items-center justify-center  dark:bg-base-100">
        <SkeletonLoaderCard />
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
        {enrolledClassesData.map(enrolledClass => (
          <MyEnrollClassCard
            key={enrolledClass.id}
            enrolledClass={enrolledClass}
          />
        ))}
      </div>
    </div>
  );
};

export default MyEnrollClass;
