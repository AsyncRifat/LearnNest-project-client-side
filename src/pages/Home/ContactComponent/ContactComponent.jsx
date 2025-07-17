import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import LogoLN from '../../shared/LogoLN';

const ContactComponent = () => {
  return (
    <section className="bg-violet-50 dark:bg-gray-900 py-10 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <LogoLN />

        {/* Title & Description */}
        <h2 className="font-medium font-quicksand text-2xl text-gray-800 dark:text-gray-200 mb-2">
          Get in Touch
        </h2>
        <p className="mt-3 mb-5 text-gray-500 dark:text-gray-400 text-sm font-thin">
          Have questions or need support? We're here to help. Reach out to us
          using any of the methods below.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt size={24} className="text-violet-600 mb-2" />
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Phone
            </h4>
            <p className="text-gray-600 dark:text-gray-200 text-sm font-thin">
              +880 17371-68011
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope size={24} className="text-violet-600 mb-2" />
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Email
            </h4>
            <p className="text-gray-600 dark:text-gray-200 text-sm font-thin">
              ibrahim3rifat@gmail.com
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt size={24} className="text-violet-600 mb-2" />
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Location
            </h4>
            <p className="text-gray-600 dark:text-gray-200 text-sm font-thin">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
