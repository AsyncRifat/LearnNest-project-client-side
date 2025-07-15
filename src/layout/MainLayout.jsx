import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <h1 className="test-xl">Navbar</h1>
      <Outlet />
      <h1 className="test-xl">Navbar</h1>
    </div>
  );
};

export default MainLayout;
