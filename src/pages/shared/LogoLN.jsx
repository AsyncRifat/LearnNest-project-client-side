import React from 'react';
import { Link } from 'react-router';

const LogoLN = () => {
  return (
    <>
      <Link className=" flex items-end mx-1 md:mx-9" to="/">
        <img
          src="https://i.ibb.co/DXSqWQx/study-64.png"
          alt="logo"
          className="md:w-12 md:h-12 w-9 h-9"
        />
        <h2 className="font-bold md:font-extrabold text-base md:text-2xl text-violet-500 font-quicksand">
          LearnNest
        </h2>
      </Link>
    </>
  );
};

export default LogoLN;
