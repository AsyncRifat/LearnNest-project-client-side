import React from 'react';
import MyClassesCards from '../../../card/MyClassesCards';
import useDocumentTitle from '../../../utils/useDocumentTitle';

const MyClass = () => {
  useDocumentTitle('LearnNest | My classes');
  const classInfo = [
    {
      id: 1,
      title: 'MERN course',
      name: 'Mr. Ibrahim Rifat',
      email: 'ibrahim3rifat@gmail.com',
      price: 209,
      description: 'Its Web development course, mern stack full course ',
      image: 'https://i.ibb.co/Zp6x2DVF/Screenshot-2025-07-17-at-18-13-38.png',
      status: 'rejected',
    },
    {
      id: 2,
      title: 'MERN course',
      name: 'Mr. Ibrahim Rifat',
      email: 'ibrahim3rifat@gmail.com',
      price: 100,
      description: 'Its Web development course, mern stack full course ',
      image: 'https://i.ibb.co/Zp6x2DVF/Screenshot-2025-07-17-at-18-13-38.png',
      status: 'approved',
    },
    {
      id: 3,
      title: 'MERN course',
      name: 'Mr. Ibrahim Rifat',
      email: 'ibrahim3rifat@gmail.com',
      price: 209,
      description: 'Its Web development course, mern stack full course ',
      image: 'https://i.ibb.co/Zp6x2DVF/Screenshot-2025-07-17-at-18-13-38.png',
      status: 'pending',
    },
  ];

  return (
    <div>
      <h2 className="font-quicksand text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
        My Classes - Manage, Update & Track Your Courses
      </h2>
      <p className="mb-10 text-gray-700 dark:text-gray-400 text-sm font-thin">
        Manage all your submitted classes in one place. Update, delete, or view
        details after admin approval.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {classInfo.map(singleClass => (
          <MyClassesCards key={singleClass.id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default MyClass;
