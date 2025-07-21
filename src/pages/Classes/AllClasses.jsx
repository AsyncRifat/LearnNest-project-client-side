import Marquee from 'react-fast-marquee';
import AllApprovedClassesCard from '../../card/AllApprovedClassesCard';
import useDocumentTitle from '../../utils/useDocumentTitle';
import SkeletonLoaderCard from '../shared/SkeletonLoaderCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllClasses = () => {
  useDocumentTitle('LearnNest | All Classes');
  const axiosSecure = useAxiosSecure();

  const { data: approvedClasses = [], isLoading } = useQuery({
    queryKey: ['approvedClasses'],
    queryFn: async () => {
      const res = await axiosSecure.get('/approved-classes');
      return res.data;
    },
  });

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
          from verified instructors today!
        </Marquee>
      </div>

      {isLoading ? (
        <SkeletonLoaderCard />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 ">
          {approvedClasses.map(SingleClass => (
            <AllApprovedClassesCard
              key={SingleClass._id}
              SingleClass={SingleClass}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AllClasses;
