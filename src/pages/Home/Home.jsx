import { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import CountUpPage from '../../components/countUpPage/CountUpPage';
import useDocumentTitle from '../../utils/useDocumentTitle';
import { useLocation, useNavigate } from 'react-router';
import { SquareLoader } from 'react-spinners';
import useAuth from '../../hooks/useAuth';
import Partners from './Patners/Partners';
import Feedback from './Feedback/Feedback';
import BecomeAnInstructor from './BecomeAnInstructor/BecomeAnInstructor';
import FaqSection from './FAQ/FaqSection';
import ContactComponent from './ContactComponent/ContactComponent';
import PopularClasses from './PopularClasses/PopularClasses';

const Home = () => {
  useDocumentTitle('LearnNest | Home');
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.spinnerLoginHome) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        navigate(location.pathname, { replace: true });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  if (loading) {
    return (
      <div className="flex items-center flex-col pt-40">
        <SquareLoader color="#4B0082" size={60} />
        <p className="text-4xl font-bold mt-5 text-violet-600">
          Welcome {user?.displayName}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-52">
      <div className="mx-5">
        <Banner />
      </div>
      <Partners />
      <div className="mx-16">
        <PopularClasses />
      </div>
      <CountUpPage />
      <Feedback />
      <BecomeAnInstructor />
      <FaqSection />
      <div className="mt-44">
        <ContactComponent />
      </div>
    </div>
  );
};

export default Home;
