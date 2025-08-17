import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegArrowAltCircleRight,
  FaFacebookSquare,
  FaGithub,
} from 'react-icons/fa';
import LogoLN from '../../shared/LogoLN';
import toast from 'react-hot-toast';
import { BiWorld } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router';
import { CiLinkedin } from 'react-icons/ci';
import { FaSquareXTwitter } from 'react-icons/fa6';

const ContactComponent = () => {
  const navigate = useNavigate();
  const handleSubscribe = () => {
    toast.success('Subscribed');
  };
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="bg-violet-50 dark:bg-gray-900 pb-15"
    >
      <div className="w-full text-center">
        <section className="relative h-[400px] md:h-[600px] bg-[url('https://res.cloudinary.com/dtckwuhxw/image/upload/v1755349068/contact_xkdzcw.jpg')] bg-center bg-cover bg-no-repeat ">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

          {/* Content */}
          <div className="relative flex h-full items-center justify-start px-3 md:px-24">
            <div className="text-white flex flex-col items-start space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold font-quicksand">
                Lets Start Online Learning
              </h1>
              <p className="max-w-md text-lg opacity-90 text-left">
                Learn at your own pace with curated courses and bite-size
                lessons.
              </p>
              <button
                onClick={() => navigate('/fee')}
                className="py-2 px-4 bg-green-600 hover:bg-green-500 rounded-sm underline"
              >
                Start free trial
              </button>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 px-4 md:px-2 lg:px-0 mx-16">
          <div className="flex flex-col items-start text-lef space-y-5">
            {/* Logo */}
            <div>
              <LogoLN />
            </div>
            <p className="text-left font-semibold text-lg font-quicksand ">
              A Nest for Learners,
              <br />A Flight for Dreamers
            </p>

            <div className="flex items-center gap-x-3.5">
              <a
                href="www.linkedin.com/in/ibrahim-rifat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLinkedin
                  size={39}
                  className="text-blue-800 hover:opacity-80 transition"
                />
              </a>

              <a
                href="https://www.facebook.com/ibrahimrifatOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare
                  size={32}
                  className="text-blue-600 hover:opacity-80 transition"
                />
              </a>

              <a
                href="https://twitter.com/itsibrahimrifat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter
                  size={32}
                  className="hover:opacity-80 transition"
                />
              </a>

              <a
                href="https://github.com/AsyncRifat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} className="hover:opacity-80 transition" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center text-left space-y-12">
            <div>
              <h1 className="font-quicksand text-2xl font-bold">Service</h1>
              <div className="w-16 h-[2px] bg-green-500 mt-10"></div>
            </div>
            <div className="space-y-3 flex flex-col items-start justify-center text-left">
              <div className="flex items-center justify-center gap-x-2 text-left hover:underline">
                <FaRegArrowAltCircleRight size={20} />
                <Link to={'/all-approved-classes'} className="font-medium">
                  All classes
                </Link>
              </div>
              <div className="flex items-center justify-center gap-x-2 text-left hover:underline">
                <FaRegArrowAltCircleRight size={20} />
                <Link to={'/teacher-request'} className="font-medium">
                  Become Teacher
                </Link>
              </div>
              <div className="flex items-center justify-center gap-x-2 text-left">
                <FaRegArrowAltCircleRight size={20} className="font-medium" />
                <Link to={'/dashboard'}>Dashboard</Link>
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-start justify-center text-left space-y-3">
            <h1 className="font-quicksand text-2xl font-bold">
              Contact Info +
            </h1>
            <div className="w-16 h-[2px] bg-green-500 my-5"></div>

            {/* Phone */}
            <div className="flex items-center justify-center gap-x-2 text-left">
              <FaPhoneAlt size={20} className="text-violet-600" />
              <span className="text-gray-600 dark:text-gray-200 text-md font-medium">
                +880 17371-68011
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center gap-x-2 text-left">
              <FaEnvelope size={20} className="text-violet-600 " />
              <span className="text-gray-600 dark:text-gray-200 text-md font-medium">
                ibrahim3rifat@gmail.com
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-x-2 text-left">
              <FaMapMarkerAlt size={24} className="text-violet-600" />
              <span className="text-gray-600 dark:text-gray-200 text-md font-medium">
                Dhaka, Bangladesh
              </span>
            </div>

            <div className="flex items-center justify-center gap-x-2 text-left">
              <BiWorld size={24} className="text-violet-600" />
              <a
                href="https://ibrahim-rifat-portfolio.web.app/"
                className="text-gray-600 dark:text-gray-200 text-md font-medium"
              >
                ibrahim-rifat-portfolio.web.app
              </a>
            </div>
          </div>

          <div className="border-2 border-green-700 rounded-md text-left p-4">
            <h1 className="font-quicksand text-2xl font-bold">Subscribe Now</h1>
            <div className="w-16 h-[2px] bg-green-500 my-7"></div>
            <input
              type="email"
              className="input py-7 "
              placeholder="Your Email Here"
            />
            <button
              onClick={handleSubscribe}
              className="py-2 px-4 bg-green-600 hover:bg-green-500 font-medium rounded-md mt-5"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
