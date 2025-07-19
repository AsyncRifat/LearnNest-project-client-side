import React from 'react';
import Sidebar from '../pages/Dashboard/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex bg-teal-50 dark:bg-base-100 min-w-screen">
      {/* Sidebar Component */}
      <Sidebar />
      {/* Dashboard Dynamic Content */}
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
