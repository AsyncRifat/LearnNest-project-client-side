import CountUp from 'react-countup';
import { FaChalkboardTeacher, FaUserGraduate, FaUsers } from 'react-icons/fa';

const CountUpPage = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-24"
    >
      <div className="col-span-1 flex gap-x-5 flex-col">
        <div className="pl-10">
          <h2 className="">
            <span className="font-extrabold text-green-700 text-3xl">|</span>
            <span className="font-medium font-quicksand text-2xl">
              Our member
            </span>
          </h2>
          {/* description */}
          <p className="mt-3 mb-5 text-gray-500 dark:text-gray-400 text-sm font-thin">
            We&apos;re proud to have a growing community of passionate learners,
            dedicated instructors, and thriving alumni. These numbers reflect
            our journey and the trust you've placed in us.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-5 mx-auto my-auto">
          <div className="rounded-xl p-2 md:p-10 bg-gray-200 mb-2">
            <h2 className="text-4xl text-black text-center ">
              <CountUp start={0} end={4} className="text-4xl "></CountUp>+
            </h2>
            <h4 className="text-gray-800 text-center text-lg flex items-center mt-3 gap-x-3">
              <FaUsers size={25} className="text-violet-600" />
              Total Users
            </h4>
          </div>
          <div className="rounded-xl p-2 md:p-10 bg-gray-200 mb-2">
            <h2 className="text-4xl text-black text-center ">
              <CountUp start={0} end={167} className="text-4xl "></CountUp>+
            </h2>
            <h4 className="text-gray-800 text-center text-lg flex items-center mt-3 gap-x-3">
              <FaChalkboardTeacher size={25} className="text-violet-600" />
              Total Classes
            </h4>
          </div>
          <div className="rounded-xl p-2 md:p-10 bg-gray-200 mb-2">
            <h2 className="text-4xl text-black text-center ">
              <CountUp start={0} end={3267} className="text-4xl "></CountUp>+
            </h2>
            <h4 className="text-gray-800 text-center text-lg flex items-center mt-3 gap-x-3">
              <FaUserGraduate size={25} className="text-violet-600" /> Total
              student
            </h4>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <img
          src="https://i.ibb.co/fYn7Dwhg/Screenshot-2025-07-17-at-18-24-55.png"
          alt=""
          className="object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default CountUpPage;
