import Marquee from 'react-fast-marquee';
import AllApprovedClassesCard from '../../card/AllApprovedClassesCard';
import useDocumentTitle from '../../utils/useDocumentTitle';
import SkeletonLoaderCard from '../shared/SkeletonLoaderCard';
import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useState } from 'react';
import { useEffect } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import useAxios from '../../hooks/useAxios';

const AllClasses = () => {
  useDocumentTitle('LearnNest | All Classes');
  const axiosSecure = useAxios();

  // done: pagination
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);

  const [pagesLine, setPagesLine] = useState([]);
  const [approvedClassesList, setApprovedClassesList] = useState([]);

  const { data: approvedClasses = [], isLoading } = useQuery({
    queryKey: ['pagination', page, limit],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/approved-classes-pagination?page=${page}&limit=${limit}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (approvedClasses) {
      if (approvedClasses?.data) {
        setApprovedClassesList(approvedClasses.data);
      }

      if (approvedClasses?.totalPages) {
        const newPages = [...Array(approvedClasses.totalPages).keys()];
        setPagesLine(newPages);
      }
    }
  }, [approvedClasses]);

  const handleItemPerPage = e => {
    const value = parseInt(e.target.value);
    setLimit(value);
    setPage(0);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleNextPage = () => {
    if (page < pagesLine.length - 1) {
      setPage(page + 1);
    }
  };

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
          {approvedClassesList.map(SingleClass => (
            <AllApprovedClassesCard
              key={SingleClass._id}
              SingleClass={SingleClass}
            />
          ))}
        </div>
      )}

      {/* pagination control */}
      <div className="flex justify-center items-center gap-3 my-5">
        <button
          onClick={handlePrevPage}
          className="hover:bg-violet-500 px-3 py-1 rounded-sm bg-gray-200 dark:bg-gray-700 cursor-pointer"
        >
          <GrFormPreviousLink
            size={22}
            className="hover:text-white text-black"
          />
        </button>
        {pagesLine.map(pageNumber => (
          <button
            className={`font-quicksand py-0.5 px-2 rounded-md font-semibold cursor-pointer ${
              page === pageNumber
                ? 'bg-violet-300 text-white'
                : 'hover:bg-violet-200 dark:hover:text-black text-gray-800 dark:text-white'
            }`}
            key={pageNumber}
            onClick={() => {
              setPage(pageNumber);
            }}
          >
            {pageNumber + 1}
          </button>
        ))}

        <button
          className="flex items-center rounded-sm px-2 py-1 bg-violet-500 text-gray-100 cursor-pointer"
          onClick={handleNextPage}
        >
          <span className="text-sm">Next</span>{' '}
          <GrFormNextLink size={22} className="bg-violet-500" />
        </button>

        <select
          name=""
          id=""
          value={limit}
          onChange={handleItemPerPage}
          className="border px-3 rounded-sm "
        >
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="18">18</option>
          <option value="24">24</option>
        </select>
      </div>
    </>
  );
};

export default AllClasses;
