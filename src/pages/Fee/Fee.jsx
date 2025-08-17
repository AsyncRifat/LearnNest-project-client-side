import React from 'react';
import { FaCheckCircle, FaStar, FaCrown } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const plans = [
  {
    name: 'Basic',
    price: '$19',
    period: '/month',
    icon: <FaStar className="text-yellow-500 text-3xl" />,
    features: [
      'Access to 5 courses',
      'Community support',
      'Basic learning materials',
    ],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '$49',
    period: '/month',
    icon: <FaCrown className="text-green-500 text-3xl" />,
    features: [
      'Access to 20 courses',
      '1-on-1 mentorship',
      'Skill certification',
      'Downloadable resources',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$99',
    period: '/month',
    icon: <FaCrown className="text-purple-500 text-3xl" />,
    features: [
      'Unlimited course access',
      'Expert mentorship',
      'Priority support',
      'Career guidance & workshops',
      'Exclusive community access',
    ],
    highlight: false,
  },
];

const Fee = () => {
  const navigate = useNavigate();
  return (
    <section className="py-13">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="mb-5">
          <span className="font-extrabold text-green-600 text-3xl">| </span>
          <span className="font-medium font-quicksand text-2xl">Our Plans</span>
        </h1>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Flexible Pricing for Every Learner
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm font-light">
          Choose a plan that grows with your skills and unlocks your full
          potential.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-t-xl backdrop-blur-xl p-[2px] transition-all duration-300 hover:scale-105 
              ${
                plan.highlight
                  ? 'bg-gradient-to-br from-green-400 via-green-500 to-green-700'
                  : 'bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700'
              }
            `}
            style={{
              clipPath:
                'polygon(0 0, 100% 0, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
            }}
          >
            {/* Inner Card */}
            <div
              className={`relative h-full w-full rounded-t-xl p-8 flex flex-col items-center text-center overflow-hidden
                ${
                  plan.highlight
                    ? 'bg-white/90 text-gray-800'
                    : 'bg-white/60 dark:bg-gray-900/60 text-gray-800 dark:text-gray-100'
                }`}
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
              }}
            >
              {/* Icon */}
              <div className="mb-4">{plan.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

              {/* Price */}
              <p className="text-5xl font-extrabold mb-6">
                {plan.price}
                <span className="text-base font-normal">{plan.period}</span>
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6 text-left w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <FaCheckCircle
                      className={`${
                        plan.highlight ? 'text-green-600' : 'text-green-500'
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => navigate('/all-approved-classes')}
                className={`px-8 py-3 rounded-2xl font-semibold shadow-md transition 
                  ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
              >
                Get Started
              </button>

              {/* Tag */}
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fee;
