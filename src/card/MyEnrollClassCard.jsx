import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import Button from '../pages/shared/Button';

const MyEnrollClassCard = ({ enrolledClass }) => {
  const { title, name, image } = enrolledClass;

  if (!enrolledClass || enrolledClass.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No enrolled classes found.
      </div>
    );
  }

  return (
    <div className=" max-w-6xl card shadow-lg rounded-lg overflow-hidden">
      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body flex flex-col flex-grow">
        {/* Title */}
        <h2 className="card-title text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>

        <div className="flex justify-between items-center">
          {/* Instructor Name */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            By: {name}
          </p>
          <Link
            className="bg-green-600 hover:bg-green-700 rounded-md text-sm text-center py-1.5 px-3 mx-auto justify-end"
            to={'/dashboard/myEnroll-class/1'}
          >
            Continue
          </Link>
        </div>

        {/* Continue Button */}
        {/* <Button label={'Continue'} small={true} /> */}
      </div>
    </div>
  );
};

export default MyEnrollClassCard;
