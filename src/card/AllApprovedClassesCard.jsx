import React, { useState } from 'react';
import { FaDollarSign, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router';

const AllApprovedClassesCard = ({ SingleClass }) => {
  const { _id, image, name, price, description, title, teacherImage } =
    SingleClass;

  const [showFullDesc, setShowFullDesc] = useState(false);
  // const description = '';
  return (
    <div className="relative rounded-md shadow-lg bg-white dark:bg-gray-300 dark:text-gray-800 transition-transform duration-700 hover:scale-105">
      <div className="flex items-center space-x-2 p-4 ">
        <img
          src={teacherImage}
          alt="TH"
          className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
        />
        <div className="-space-y-1">
          <h2 className="text-sm font-semibold leading-none">{name}</h2>

          <span className="inline-block text-xs leading-none dark:text-gray-600">
            Teacher
          </span>
        </div>
      </div>

      <img
        src={image}
        alt="Banner"
        className="object-cover object-center w-full h-48 dark:bg-gray-500 "
      />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-gray-700">
            <FaDollarSign className="text-green-600" />
            Price: ${price}
          </p>

          {/* TODO: total enrolled dynamic */}
          <p className="flex items-center gap-2 text-gray-700">
            <FaUserGraduate className="text-violet-600" />
            Total Enroll: 2782+
          </p>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="space-y-3">
          <h2 className="font-semibold">{title}</h2>
          <div className="font-light mt-3 mb-1 h-24">
            {description.length > 100 && !showFullDesc ? (
              <div>
                {description.slice(0, 100)}{' '}
                <span className="font-bold">...</span>
                <span
                  className="font-semibold cursor-pointer"
                  onClick={() => setShowFullDesc(true)}
                >
                  Read more
                </span>
              </div>
            ) : (
              description.slice(0, 105) + '...'
            )}
          </div>

          {showFullDesc && (
            <div className="absolute top-32 left-0 w-full bg-blue-100 border border-blue-300 shadow-xl rounded-xl p-5 z-20">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                <button
                  onClick={() => setShowFullDesc(false)}
                  className="text-red-500 text-xl font-bold"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-800 text-sm">{description}</p>
            </div>
          )}

          <Link
            to={`/classDetails/${_id}`}
            className="px-4 py-1.5 rounded-sm bg-violet-600 font-thin text-sm text-white"
          >
            Enroll
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllApprovedClassesCard;
