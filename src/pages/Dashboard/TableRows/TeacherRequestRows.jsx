import React, { useState } from 'react';

const TeacherRequestRows = ({ teacherReq }) => {
  const { name, experience, category, image, status, title } = teacherReq;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApproved = () => {
    console.log('Approved');
  };
  const handleRejected = () => {
    console.log('Rejected');
  };
  const openModal = () => {
    console.log('view');
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      {!teacherReq || teacherReq.length === 0 ? (
        <p>No user here</p>
      ) : (
        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{name}</p>
          </td>

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <img
              src={image}
              alt={name}
              className="h-7 w-7 rounded-full object-cover"
            />
          </td>

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{experience}</p>
          </td>

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap max-w-[150px]  truncate">
              {title}
            </p>
          </td>

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{category}</p>
          </td>

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm uppercase">
            {status && (
              <p
                className={`${
                  status === 'pending' ? 'text-amber-500' : 'text-green-600'
                }
                ${status === 'rejected' && 'text-red-500'}`}
              >
                {status}
              </p>
            )}
          </td>

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
            <div className="flex md:flex-row gap-2.5">
              <button
                className=" px-2 py-1 text-gray-100 dark:text-gray-200 bg-violet-500 hover:bg-violet-600 hover:cursor-pointer"
                onClick={openModal}
              >
                View
              </button>

              {(status === 'approved' || status === 'pending') && (
                <button
                  className=" px-2 py-1 text-gray-100 dark:text-gray-200 bg-red-500 hover:bg-red-600 hover:cursor-pointer"
                  onClick={handleRejected}
                >
                  Rejected
                </button>
              )}

              {status === 'pending' && (
                <button
                  className=" px-2 py-1 text-gray-100 dark:text-gray-200 bg-green-700 hover:bg-green-800 hover:cursor-pointer"
                  onClick={handleApproved}
                >
                  Approved
                </button>
              )}
            </div>
          </td>
        </tr>
      )}

      {/* view button for  modal */}
      {isModalOpen && (
        <dialog className="modal modal-open ">
          <div className="modal-box max-w-md bg-teal-50 dark:bg-gray-700 dark:text-gray-100 text-gray-700">
            <h3 className="font-bold text-lg mb-2 ">Teacher Details : </h3>
            <div className="flex flex-col gap-3">
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
              <p>
                <strong>Name:</strong> {name}
              </p>
              <p>
                <strong>Title:</strong> {title}
              </p>
              <p>
                <strong>Experience:</strong> {experience}
              </p>
              <p>
                <strong>Category:</strong> {category}
              </p>
              <p>
                <strong>Status:</strong> {status}
              </p>
            </div>
            <div className="modal-action">
              <button
                className="btn btn-sm bg-red-500 text-white"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default TeacherRequestRows;
