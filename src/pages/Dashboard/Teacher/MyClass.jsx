import React from 'react';
import MyClassesCards from '../../../card/MyClassesCards';

const MyClass = () => {
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
      <h2 className="text-black">My class</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {classInfo.map(singleClass => (
          <MyClassesCards key={singleClass.id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default MyClass;
