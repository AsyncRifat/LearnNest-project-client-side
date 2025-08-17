import React from 'react';
import Marquee from 'react-fast-marquee';
import logo1 from '../../../assets/partners/ph.png';
import logo2 from '../../../assets/partners/code.png';
import logo3 from '../../../assets/partners/coursera.png';
import logo4 from '../../../assets/partners/10m.png';
import logo7 from '../../../assets/partners/ph-jk.png';
import logo5 from '../../../assets/partners/shikho.png';
import logo6 from '../../../assets/partners/udemy.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const Partners = () => {
  return (
    <section className=" px-2 md:mx-20">
      <div className="max-w-6xl mx-auto mb-6 text-center">
        <h1 className="mb-5 md:mb-10">
          <span className="font-extrabold text-green-700 text-3xl">| </span>
          <span className="font-medium font-quicksand text-2xl">
            Our Partners
          </span>
        </h1>
        <h2 className="text-4xl font-bold">We've helped thousands of teams</h2>

        <p className="mt-3 mb-10 text-gray-500 dark:text-gray-400 text-sm font-thin">
          We proudly collaborate with global and local organizations dedicated
          to empowering learners through <br /> technology, innovation, and
          accessible education.
        </p>
      </div>
      <Marquee speed={30} gradient={false} pauseOnHover={true}>
        {logos.map((src, index) => (
          <div key={index} className="mx-16">
            <img
              src={src}
              alt={`Client Logo ${index + 1}`}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Partners;
