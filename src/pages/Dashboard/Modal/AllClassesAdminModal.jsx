import React from 'react';

const AllClassesAdminModal = ({ setIsModalOpen, singleTechRequest }) => {
  const { email, title, image, description } = singleTechRequest;
  return (
    <dialog open className="modal modal-bottom sm:modal-middle">
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
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AllClassesAdminModal;
