import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyClassesCards = ({ singleClass }) => {
  const { _id, name, email, image, status, price, description, title } =
    singleClass;

  console.log(singleClass);

  const handleDelete = classId => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this class!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then(result => {
      if (result.isConfirmed) {
        console.log(`Deleted class with id: ${classId}`);

        // Optional success alert
        Swal.fire('Deleted!', 'The class has been deleted.', 'success');
      }
    });
  };

  const handleUpdate = id => {
    console.log(id);
  };

  return (
    <div className="card w-full shadow-2xl rounded-t-sm group">
      <figure className="h-48 overflow-hidden group-hover:scale-105 transition-transform duration-600">
        <img
          src={image}
          alt={title}
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body bg-white group-hover:scale-105 transition-transform duration-600">
        <h2 className="card-title text-xl font-bold text-gray-800 ">{title}</h2>

        <p className="text-sm text-gray-600">
          <strong>Name:</strong> {name}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Price:</strong> ${price}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Description:</strong>{' '}
          {description ? description.slice(0, 100) + '...' : 'N/A'}
        </p>
        <p
          className={`text-sm font-medium ${
            status === 'pending' ? 'text-amber-500 ' : 'text-green-600'
          } ${status === 'rejected' && 'text-red-500'}`}
        >
          <strong>Status:</strong>{' '}
          <span className="uppercase font-semibold">{status}</span>
        </p>

        <div className="card-actions justify-between mt-4">
          <button
            className="btn btn-outline btn-primary btn-sm"
            onClick={() => {
              handleUpdate(_id);
            }}
          >
            Update
          </button>

          <button
            className="btn btn-outline btn-error btn-sm"
            onClick={() => {
              handleDelete(_id);
            }}
          >
            Delete
          </button>

          {/* done: must be dynamic */}
          <Link
            to={`/dashboard/my-class/${_id}`}
            className={`btn btn-success btn-sm ${
              status !== 'approved'
                ? 'hover:cursor-not-allowed opacity-40 pointer-events-none'
                : ''
            }`}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyClassesCards;
