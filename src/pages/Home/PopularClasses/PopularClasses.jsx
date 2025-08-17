import React from 'react';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PopularClasses = () => {
  const axiosSecure = useAxios();

  const { data: topClasses = [], isLoading } = useQuery({
    queryKey: ['topEnrolledClasses'],
    queryFn: async () => {
      const { data } = await axiosSecure('/top-enrolled-classes');
      return data;
    },
  });

  if (isLoading)
    return <p className="text-center py-6">Loading top classes...</p>;

  return (
    <div data-aos="zoom-in" className=" my-10 md:my-16 md:px-4 mx-auto">
      <div className="  mb-6 text-center">
        <h1 className="mb-5 md:mb-10">
          <span className="font-extrabold text-green-700 text-3xl">| </span>
          <span className="font-medium font-quicksand text-2xl">
            Our Top Enroll Classes
          </span>
        </h1>
        <h2 className="text-4xl font-bold">
          Empowering thousands of learners to achieve their goals
        </h2>

        <p className="mt-3 mb-10 text-gray-500 dark:text-gray-400 text-sm font-thin">
          Discover our top 6 most enrolled classes, loved by students across the
          platform. <br /> These trending courses offer expert instruction,
          real-world skills, and outstanding learning experiences.
        </p>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {topClasses.map(cls => (
          <SwiperSlide key={cls._id}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <img
                src={cls.image}
                alt={cls.title}
                className="h-40 w-full object-cover rounded mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {cls.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Instructor: {cls.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Enrolled: <strong>{cls.enrolled}</strong>
              </p>
              <p className="text-sm text-green-600 font-medium">
                Price: ${cls.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularClasses;
