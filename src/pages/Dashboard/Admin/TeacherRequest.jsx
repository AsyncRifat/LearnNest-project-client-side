import React from 'react';
import TeacherRequestRows from '../TableRows/TeacherRequestRows';
import useDocumentTitle from '../../../utils/useDocumentTitle';

const TeacherRequest = () => {
  useDocumentTitle('LearnNest | Teacher Request');

  const TeacherRequest = [
    {
      id: 1,
      name: 'Mr. Rifat',
      experience: 'Beginner',
      category: 'Web Development',
      title: 'web course',
      image: 'https://i.ibb.co/XZhXqsjd/Screenshot-2024-01-03-at-07-47-29.jpg',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Mr. Ibrahim',
      experience: 'Beginner',
      category: 'Web Development',
      title: 'web course',
      image: 'https://i.ibb.co/XZhXqsjd/Screenshot-2024-01-03-at-07-47-29.jpg',
      status: 'approved',
    },
    {
      id: 3,
      name: 'Mr. Rifat',
      experience: 'Beginner',
      category: 'Web Development',
      title: 'web course',
      image: 'https://i.ibb.co/XZhXqsjd/Screenshot-2024-01-03-at-07-47-29.jpg',
      status: 'pending',
    },
    {
      id: 4,
      name: 'Mr. Rifat',
      experience: 'Beginner',
      category: 'Web Development',
      title:
        'web course we cvdye euue xuu xuuuu Manage and review teacher registration ',
      image: 'https://i.ibb.co/XZhXqsjd/Screenshot-2024-01-03-at-07-47-29.jpg',
      status: 'rejected',
    },
  ];
  return (
    <div className="pb-5">
      <h2 className="font-quicksand text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
        Manage Teacher Requests
      </h2>
      <p className="mb-7 text-gray-700 dark:text-gray-400 text-sm font-thin">
        Manage and review teacher registration requests with options to approve
        or reject based on status.
      </p>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
            <tbody>
              {TeacherRequest.map(req => (
                <TeacherRequestRows key={req.id} teacherReq={req} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherRequest;
