import Marquee from 'react-fast-marquee';
import AllApprovedClassesCard from '../../card/AllApprovedClassesCard';
import useDocumentTitle from '../../utils/useDocumentTitle';
import useSkeleton from '../../hooks/useSkeleton';
import SkeletonLoaderCard from '../shared/SkeletonLoaderCard';

const AllClasses = () => {
  useDocumentTitle('LearnNest | All Classes');
  const loading = useSkeleton();

  const allApprovedClasses = [
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
    <>
      <div className="text-center">
        <h2 className="font-quicksand text-2xl font-bold mb-3 text-center text-gray-800 dark:text-gray-200">
          All Classes
        </h2>
        <Marquee
          speed={30}
          gradient={false}
          pauseOnHover={true}
          className="mb-8 text-gray-500 dark:text-gray-400 text-sm font-thin max-w-4xl mx-auto"
        >
          Explore all the classes that have been reviewed and approved by the
          administration. Enroll in your preferred courses and start learning
          from verified instructors today!{' '}
        </Marquee>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {allApprovedClasses.map(SingleClass => (
          <AllApprovedClassesCard
            key={SingleClass.id}
            SingleClass={SingleClass}
          />
        ))}
      </div>
    </>
  );
};

export default AllClasses;
