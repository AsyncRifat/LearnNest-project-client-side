import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyClassesCards = ({ singleClass }) => {
  const { id, name, email, image, status, price, description, title } =
    singleClass;

  const navigate = useNavigate();

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

  const handleSeeDetails = () => {
    navigate(`/dashboard/my-class/${id}`);
  };

  return (
    <div className="card w-full shadow-2xl rounded-t-sm">
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body bg-white">
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
          <strong>Description:</strong> {description.slice(0, 100)}...
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
              handleUpdate(id);
            }}
          >
            Update
          </button>

          <button
            className="btn btn-outline btn-error btn-sm"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </button>

          <button
            className={`btn btn-success btn-sm ${
              status !== 'approved'
                ? 'hover:cursor-not-allowed opacity-40 pointer-events-none'
                : ''
            }`}
            onClick={() => {
              handleSeeDetails(id);
            }}
            // disabled={status !== 'approved'}
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClassesCards;
