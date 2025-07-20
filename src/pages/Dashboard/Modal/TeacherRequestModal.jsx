import React from 'react';

const TeacherRequestModal = ({ setIsModalOpen, singleTechRequest }) => {
  const { name, experience, category, image, status, title } =
    singleTechRequest;
  return (
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
            <strong>Category:</strong>
            {category}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
        </div>
        <div className="modal-action">
          <button
            className="btn btn-sm bg-red-500 text-white"
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

export default TeacherRequestModal;
