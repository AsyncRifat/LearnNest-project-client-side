import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Manuel C. Collinson',
    role: 'IELTS candidate',
    quote:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    name: 'Rifat Mondol',
    role: 'Web designer',
    quote:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    name: 'Ibrahim Rifat',
    role: 'Full stack developer',
    quote:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
];

// Custom Arrows
function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-1/3 lg:left-[42%] -bottom-8 z-10  bg-green-500 p-3 rounded-full shadow-md hover:bg-green-600 text-gray-600"
    >
      <FaArrowLeft />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-1/3 lg:right-[42%] -bottom-8 z-10 bg-green-500 p-3 rounded-full shadow-md hover:bg-green-600 text-gray-600"
    >
      <FaArrowRight />
    </button>
  );
}

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section data-aos="zoom-in" className=" py-16 mt-10">
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h1 className="mb-5 md:mb-10">
          <span className="font-extrabold text-green-700 text-3xl">| </span>
          <span className="font-medium font-quicksand text-2xl">
            Whats Client Say?
          </span>
        </h1>
        <h2 className="text-4xl font-bold">
          What our learners say about LearnNest
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm font-thin">
          Discover how LearnNest has transformed the learning journey for
          thousands of students. Real stories, real impact, real growth —
          straight from our community.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4 my-8">
              <div className="bg-white rounded-2xl p-8 shadow-md min-h-[300px] text-left transition-all duration-300 hover:opacity-100 opacity-90 slick-center:opacity-100 hover:scale-110 ">
                <FaQuoteLeft size={50} className="text-green-700 mb-2" />
                <p className="text-gray-700 mb-6">{item.quote}</p>
                <hr className="border-dashed border-gray-300 mb-4" />
                <div className="flex items-center gap-4">
                  <div className="bg-primary h-10 w-10 rounded-full"></div>
                  <div>
                    <p className="font-bold text-primary">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
