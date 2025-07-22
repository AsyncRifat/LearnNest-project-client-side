import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import { PulseLoader } from 'react-spinners';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const CheckoutForm = ({ totalPrice, courseData, closeModal, refetch }) => {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState();
  const elements = useElements();
  const stripe = useStripe();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async event => {
    setProcessing(true);
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // step 1: validate card
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('error:', error);
      setError(error.message);
    } else {
      setError();
      console.log('payment Method :', paymentMethod);

      // step 2: create payment intent
      const res = await axiosSecure.post('/create-payment-intent', {
        courseId: courseData?.courseId,
      });
      const clientSecret = res.data.clientSecret;
      // console.log(clientSecret);

      // step 3 confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
      if (result.error) {
        setError(result.error.message);
      } else {
        setError();
        if (result.paymentIntent.status === 'succeeded') {
          // console.log(result);
          const transactionId = result.paymentIntent.id;

          try {
            // enroll data save in database
            courseData.transactionId = transactionId;
            courseData.studentEmail = user?.email;
            const { data } = await axiosSecure.post('/enroll-info', courseData);
            if (data.insertedId) {
              toast.success('Payment Info Saved');
            }

            // update enrolled times
            await axiosSecure.patch(`/enrolled-update/${courseData?.courseId}`);
          } catch (error) {
            setError(error.message);
          } finally {
            refetch();
            setProcessing(false);
            closeModal();
            navigate('/dashboard/my-enroll-class');
          }
        }
      }
    }
  };

  return (
    <div>
      <h3 className="text-sm mt-5 text-gray-500">Payment Method :</h3>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto text-gray-700 mt-1 "
      >
        <CardElement className="px-3 py-2.5 border  border-gray-300 rounded-xl" />
        <button
          type="submit"
          disabled={!stripe || processing}
          className="px-4 py-1.5 bg-violet-300 w-full rounded-xl"
        >
          {processing ? (
            <PulseLoader className="pt-0.5" size={10} />
          ) : (
            <p>
              Pay <strong>${totalPrice}</strong>
            </p>
          )}
        </button>
        {error && <p className="text-red-600 text-xs">NB: {error}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
