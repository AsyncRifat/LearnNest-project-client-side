import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';

// stripe

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../../services/CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY);

const PurchaseModal = ({
  isOpen,
  closeModal,
  singleApprovedClass,
  refetch,
}) => {
  const { _id, title, name, email, price, status, enrolled, teacherImage } =
    singleApprovedClass;

  const courseData = {
    teacher: name,
    teacherEmail: email,
    coursePrice: price,
    courseId: _id,
    courseTitle: title,
    courseStatus: status,
    courseEnrolled: enrolled,
    teacherImage: teacherImage,
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen bg-black/5 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl"
          >
            <DialogTitle
              as="h3"
              className="text-lg font-medium text-center leading-6 text-gray-900"
            >
              {title}
            </DialogTitle>

            <hr className="my-2 text-gray-300" />
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                <strong>Instructor:</strong> {name}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                <strong>Instructor Email:</strong> {email}
              </p>
            </div>

            <div className="mt-2">
              <p className="text-xs text-gray-500">
                <strong>Course Price:</strong> ${price}
              </p>
            </div>

            {/* Stripe checkout from */}
            <Elements stripe={stripePromise}>
              <CheckoutForm
                totalPrice={price}
                courseData={courseData}
                closeModal={closeModal}
                refetch={refetch}
              />
            </Elements>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PurchaseModal;
