import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import useDocumentTitle from '../../utils/useDocumentTitle';
import useSkeleton from '../../hooks/useSkeleton';
import ReviewSkeleton from '../shared/ReviewSkeleton';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../shared/LoadingSpinner';
import EmptyPage from '../../components/emptyPage/EmptyPage';
import PurchaseModal from '../Dashboard/Modal/PurchaseModal';

// TODO: dynamic review section
const reviews = [
  {
    id: 1,
    name: 'Rahim Uddin',
    rating: 5,
    comment: 'Amazing course! Highly recommend.',
    date: 'July 18, 2025',
  },
  {
    id: 2,
    name: 'Fatema Khatun',
    rating: 4,
    comment: 'Instructor was clear and helpful.',
    date: 'July 15, 2025',
  },
  {
    id: 3,
    name: 'Fatema Khatun',
    rating: 4,
    comment: 'Instructor was clear and helpful.',
    date: 'July 15, 2025',
  },
  {
    id: 4,
    name: 'Fatema Khatun',
    rating: 4,
    comment: 'Instructor was clear and helpful.',
    date: 'July 15, 2025',
  },
  {
    id: 5,
    name: 'Fatema Khatun',
    rating: 4,
    comment: 'Instructor was clear and helpful.',
    date: 'July 15, 2025',
  },
  {
    id: 6,
    name: 'Fatema Khatun',
    rating: 4,
    comment: 'Instructor was clear and helpful.',
    date: 'July 15, 2025',
  },
  {
    id: 7,
    name: 'Fatema Khatun',
    rating: 4,
    comment: 'Instructor was clear and helpful.',
    date: 'July 15, 2025',
  },
];

const ClassDetailsWithToggleReview = () => {
  useDocumentTitle('LearnNest | Class Details');
  const loading = useSkeleton(3000);
  const [showReviews, setShowReviews] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: singleApprovedClass,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ['approvedClassDetails', id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/approved-class-details/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  } else if (error) {
    return <EmptyPage />;
  }

  const { image, title, name, email, price, description } = singleApprovedClass;

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`max-w-7xl mx-auto p-4 ${showReviews && 'md:h-screen mb-10'}`}
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Class Info */}
        <div
          className={`w-full ${
            showReviews ? 'lg:w-2/3' : 'md:mx-auto max-w-5xl'
          } bg-white dark:bg-gray-800 shadow rounded-lg p-5 lg:sticky md:top-20  max-h-fit`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />

          <div className="flex justify-between items-center">
            <h1 className="font-quicksand text-2xl font-bold mb-3 text-center text-gray-800 dark:text-gray-200">
              {title}
            </h1>

            <button
              onClick={() => setShowReviews(!showReviews)}
              className="flex text-gray-700 border border-gray-200 px-2 py-0.5 gap-x-2 cursor-pointer"
            >
              <FaStar className="text-yellow-500" size={20} />{' '}
              <span className="text-gray-500 text-sm">
                {showReviews ? 'Hide Reviews' : 'Show Reviews'}
              </span>
            </button>
          </div>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            <strong>Instructor:</strong> {name}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Price:</strong> ${price}
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{description}</p>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-6"
          >
            Pay Now
          </button>

          <PurchaseModal
            closeModal={closeModal}
            isOpen={isOpen}
            singleApprovedClass={singleApprovedClass}
            refetch={refetch}
          />
        </div>

        {/* Right: Reviews */}
        {showReviews && (
          <div className="w-full lg:w-1/3 bg-white shadow rounded-lg p-2 h-fit dark:bg-gray-800">
            <h2 className="font-quicksand text-2xl font-bold mb-3 text-start text-gray-800 dark:text-gray-200">
              Reviews ({reviews.length})
            </h2>
            <div className="space-y-4">
              {loading ? (
                <ReviewSkeleton />
              ) : (
                reviews.map(review => (
                  <div
                    key={review.id}
                    className="border p-3 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-500"
                  >
                    <div className="flex justify-between ">
                      <h3 className="font-medium text-gray-900 dark:text-gray-300">
                        {review.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {review.comment}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassDetailsWithToggleReview;
