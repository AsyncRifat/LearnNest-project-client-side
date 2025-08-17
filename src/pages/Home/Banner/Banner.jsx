import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className="  md:h-[550px] h-32 ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div className="md:h-[550px] h-40 overflow-hidden rounded-md">
          <img
            src="https://res.cloudinary.com/dtckwuhxw/image/upload/v1755413228/book-1822474_1920_ietw5t.jpg"
            className="md:h-[550px] h-40 w-full object-cover rounded-md"
            alt="Slide 2"
          />
        </div>
        <div className="md:h-[550px] h-40 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dtckwuhxw/image/upload/v1755413272/learning-3245793_te6maf.jpg"
            className="md:h-[550px] h-40 w-full object-cover rounded-md"
            alt="Slide 3"
          />
        </div>
        <div className="md:h-[550px] h-40 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dtckwuhxw/image/upload/v1755413300/school-5711987_jzikbj.jpg"
            className="md:h-[550px] h-40 w-full object-cover rounded-md"
            alt="Slide 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
