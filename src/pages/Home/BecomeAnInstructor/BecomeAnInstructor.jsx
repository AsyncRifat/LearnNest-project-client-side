import { useEffect, useState } from 'react';
import teacher from '../../../assets/partners/teacher.jpg';
import useAuth from '../../../hooks/useAuth';
import Button from '../../shared/Button';

const BecomeAnInstructor = () => {
  const { user } = useAuth();
  const [navigateRoute, setNavigateRoute] = useState('');

  useEffect(() => {
    if (user?.email) {
      setNavigateRoute('/teacher-request');
    } else {
      setNavigateRoute('/login');
    }
  }, [user]);

  // console.log(navigateRoute);

  return (
    <>
      <div
        data-aos="fade-up-right"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 md:pt-24 pb-5 bg-violet-50 dark:bg-gray-900 px-9"
      >
        <div className="col-span-1">
          <img
            src={teacher}
            alt=""
            className="object-cover rounded-3xl h-[437px] w-full"
          />
        </div>

        <div className="col-span-1 pl-10">
          <div>
            <h2>
              <span className="font-extrabold text-green-700 text-3xl">| </span>
              <span className="font-medium font-quicksand text-2xl">
                Be an Instructor
              </span>
            </h2>
            {/* description */}
            <p className="mt-3 mb-5 text-gray-500 dark:text-gray-400 text-sm font-thin">
              Empower the next generation by sharing your knowledge. Join our
              teaching community and reach thousands of eager learners. Teach
              flexibly, from anywhere, and grow your personal brand. We provide
              the tools — you bring the passion. Become a mentor, an
              inspiration, a change-maker.
            </p>
            <p className="mt-3 mb-5 text-gray-500 dark:text-gray-400 text-sm font-thin">
              At LearnNest, we believe education transforms lives. If
              you&apos;re passionate about teaching, join our community of
              educators and inspire thousands of learners worldwide. Share your
              skills, create an impact, and grow your teaching career with a
              platform that values your knowledge and voice.
            </p>
          </div>
          <div className="mt-10">
            <Button
              label={'Be a Teacher'}
              small={true}
              address={navigateRoute}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-5 mx-auto my-auto"></div>
        </div>
      </div>
    </>
  );
};

export default BecomeAnInstructor;
