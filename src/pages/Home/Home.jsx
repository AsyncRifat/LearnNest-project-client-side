import React from 'react';
import Banner from './Banner/Banner';
import CountUpPage from '../../components/countUpPage/CountUpPage';
import useDocumentTitle from '../../utils/useDocumentTitle';

const Home = () => {
  useDocumentTitle('LearnNest | Home');
  return (
    <div>
      <Banner />
      <CountUpPage />
    </div>
  );
};

export default Home;
