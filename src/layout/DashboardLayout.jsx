import React from 'react';
import Sidebar from '../pages/Dashboard/Sidebar/Sidebar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const DashboardLayout = () => {
  return (
    <>
      <div className="relative min-h-screen md:flex bg-teal-50 dark:bg-base-100 min-w-screen">
        {/* Sidebar Component */}
        <Sidebar />
        {/* Dashboard Dynamic Content */}
        <div className="flex-1 md:ml-64">
          <div className="p-5 min-h-[calc(100vh-110px)]">
            <Outlet />
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
