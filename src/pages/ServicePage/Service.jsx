import React from 'react';
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaCertificate,
  FaUsers,
  FaClock,
  FaUserTie,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="text-green-600 text-4xl" />,
    title: 'Online Courses',
    description:
      'Access high-quality courses across various subjects with updated content and interactive learning.',
  },
  {
    icon: <FaChalkboardTeacher className="text-green-600 text-4xl" />,
    title: 'Expert Mentorship',
    description:
      'Learn directly from industry experts and get personalized guidance for your growth.',
  },
  {
    icon: <FaCertificate className="text-green-600 text-4xl" />,
    title: 'Skill Certification',
    description:
      'Earn recognized certificates after completing courses to boost your career opportunities.',
  },
  {
    icon: <FaUsers className="text-green-600 text-4xl" />,
    title: 'Community Support',
    description:
      'Join a global learning community and connect with like-minded learners and educators.',
  },
  {
    icon: <FaClock className="text-green-600 text-4xl" />,
    title: 'Flexible Learning',
    description:
      'Learn anytime, anywhere with mobile-friendly and self-paced courses.',
  },
  {
    icon: <FaUserTie className="text-green-600 text-4xl" />,
    title: 'Career Guidance',
    description:
      'Get career advice, job preparation tips, and mentorship to achieve your goals.',
  },
];

const Service = () => {
  return (
    <section>
      <div className=" mb-6 text-center mx-5 md:mx-0">
        <h1 className="mb-5 md:mb-10">
          <span className="font-extrabold text-green-700 text-3xl">| </span>
          <span className="font-medium font-quicksand text-2xl">
            Our Services
          </span>
        </h1>
        <h2 className="text-4xl font-bold">
          A Nest for Learners, A Flight for Dreamers
        </h2>

        <p className="mt-3 mb-10 text-gray-500 dark:text-gray-400 text-sm font-thin">
          We provide high-quality courses, expert mentorship, and interactive
          learning experiences. LearnNest is here to support your skill growth
          and career development every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
