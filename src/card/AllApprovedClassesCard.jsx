import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { FaDollarSign, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router';

const AllApprovedClassesCard = ({ SingleClass }) => {
  const { image } = SingleClass;

  const { user } = useAuth();
  const [showFullDesc, setShowFullDesc] = useState(false);
  const description = '';
  return (
    <div className="relative rounded-md shadow-lg sm:w-96 bg-white dark:bg-gray-50 dark:text-gray-800">
      <div className="flex items-center space-x-2 p-4">
        <img
          src={user?.photoURL}
          alt=""
          className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
        />
        <div className="-space-y-1">
          <h2 className="text-sm font-semibold leading-none">
            {user?.displayName}
          </h2>

          {/* TODO: role set */}
          <span className="inline-block text-xs leading-none dark:text-gray-600">
            Teacher
          </span>
        </div>
      </div>

      <img
        src={image}
        alt="Banner"
        className="object-cover object-center w-full h-48 dark:bg-gray-500"
      />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-gray-700">
            <FaDollarSign className="text-green-600" />
            Price: $99
          </p>

          <p className="flex items-center gap-2 text-gray-700">
            <FaUserGraduate className="text-violet-600" />
            Total Enroll: 2782+
          </p>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="space-y-3">
          <p className="text-sm">
            <span className="text-base font-semibold">Description: </span>
            Learn to build responsive websites using HTML, CSS, JavaScript, and
            React.
          </p>

          {/* TODO: see more section */}

          {/* <div className="font-light mt-3 mb-1 h-24">
            {description.length > 105 && !showFullDesc ? (
              <div>
                {description.slice(0, 105)}{' '}
                <span className="font-bold">...</span>
                <span
                  className="font-semibold cursor-pointer"
                  onClick={() => setShowFullDesc(true)}
                >
                  Read more
                </span>
              </div>
            ) : (
              description
            )}
          </div> */}

          {showFullDesc && (
            <div className="absolute top-32 left-0 w-full bg-blue-100 border border-blue-300 shadow-xl rounded-xl p-5 z-20">
              <div className="flex justify-between items-center mb-2">
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
            to={'/classDetails/1'}
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
