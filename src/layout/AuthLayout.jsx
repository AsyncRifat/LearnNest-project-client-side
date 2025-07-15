import React from 'react';
import { Outlet } from 'react-router';
import LogoLN from '../pages/shared/LogoLN';
import authLottie from '../assets/lottie/Online Learning.json';
import Lottie from 'lottie-react';

const AuthLayout = () => {
  return (
    <div className="p-2 md:p-12 mt-7 md:mt-10">
      <div>
        <LogoLN />
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 pl-10 hidden lg:block">
          <Lottie
            className="w-60 sm:w-72 md:w-80 lg:w-96 xl:w-[500px] h-auto hidden lg:block"
            animationData={authLottie}
            loop={true}
          />
        </div>
        <div className="flex-1 md:pl-36 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
