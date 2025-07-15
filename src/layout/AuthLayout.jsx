import React from 'react';
import { Outlet } from 'react-router';
import LogoLN from '../pages/shared/LogoLN';

const AuthLayout = () => {
  return (
    <div>
      <LogoLN />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
