import React, { useState } from 'react';

const AllClassesAdminRow = ({ teacherReq }) => {
  const { email, title, image, status, description } = teacherReq;

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
            <p className="text-gray-900 whitespace-no-wrap truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px]">
              {title}
            </p>
          </td>

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{email}</p>
          </td>

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <img
              src={image}
              alt={title}
              className="h-9 w-12 rounded-sm object-cover"
            />
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

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px] text-gray-900">
              {description}
            </p>
          </td>

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-2.5">
            <div className="flex md:flex-row gap-2.5">
              {status === 'approved' && (
                <button
                  className=" px-2 py-1 text-violet-600 border hover:scale-105 border-violet-500 hover:border-violet-600 hover:cursor-pointer "
                  onClick={openModal}
                >
                  Progress
                </button>
              )}

              {(status === 'approved' || status === 'pending') && (
                <button
                  className=" px-2 py-1 text-red-500 border hover:scale-105 border-red-500 hover:border-red-600 hover:cursor-pointer"
                  onClick={handleRejected}
                >
                  Rejected
                </button>
              )}

              {status === 'pending' && (
                <button
                  className=" px-2 py-1 border hover:scale-105 text-green-600 border-green-700 hover:border-green-800 hover:cursor-pointer "
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
        <dialog
          open
          className="modal modal-bottom sm:modal-middle"
          onClose={closeModal}
        >
          <div className="modal-box bg-teal-50 dark:bg-gray-700 dark:text-gray-100 text-gray-700">
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Description:</span> {description}
            </p>

            <div className="modal-action">
              <button
                className="btn btn-sm btn-error text-white"
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

export default AllClassesAdminRow;
