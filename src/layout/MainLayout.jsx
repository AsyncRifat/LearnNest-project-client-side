import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Theme from '../components/theme/Theme';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-5 min-h-[calc(100vh-133px)] w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />

      <div
        className="fixed bottom-5 right-5 bg-gray-200 dark:bg-gray-700 px-1 rounded-full hidden lg:block cursor-pointer"
        title="Theme Controller"
      >
        <Theme />
      </div>
    </div>
  );
};

export default MainLayout;
