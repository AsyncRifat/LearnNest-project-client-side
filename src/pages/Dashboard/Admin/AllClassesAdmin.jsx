import useSkeleton from '../../../hooks/useSkeleton';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import SkeletonRow from '../../shared/SkeletonRow';
import AllClassesAdminRow from '../TableRows/AllClassesAdminRow';

const AllClassesAdmin = () => {
  useDocumentTitle('LearnNest | Class Request');
  const loading = useSkeleton(600);

  const TeacherRequest = [
    {
      id: 1,
      email: 'ibrahim3rifat@gmail.com',
      title: 'web course',
      description: 'I am Ibrahim Rifat, i am a MERN stack developer',
      image: 'https://i.ibb.co/Zp6x2DVF/Screenshot-2025-07-17-at-18-13-38.png',
      status: 'pending',
    },
    {
      id: 2,
      email: 'ibrahim3rifat@gmail.com',
      title: 'web course',
      description: 'I am Ibrahim Rifat, i am a MERN stack developer',
      image: 'https://i.ibb.co/Zp6x2DVF/Screenshot-2025-07-17-at-18-13-38.png',
      status: 'approved',
    },
    {
      id: 3,
      email: 'ibrahim3rifat@gmail.com',
      title: 'web course',
      description: 'I am Ibrahim Rifat, i am a MERN stack developer',
      image: 'https://i.ibb.co/Zp6x2DVF/Screenshot-2025-07-17-at-18-13-38.png',
      status: 'pending',
    },
    {
      id: 4,
      email: 'ibrahim3rifat@gmail.com',
      title: 'web course',
      description: 'I am Ibrahim Rifat, i am a MERN stack developer',
      image: 'https://i.ibb.co/Zp6x2DVF/Screenshot-2025-07-17-at-18-13-38.png',
      status: 'rejected',
    },
  ];

  if (loading) {
    return (
      <div className=" py-10 px-4 flex items-center justify-center  dark:bg-base-100">
        <SkeletonRow />
      </div>
    );
  }

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
            <tbody>
              {TeacherRequest.map(req => (
                <AllClassesAdminRow key={req.id} teacherReq={req} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllClassesAdmin;
