import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className="  md:h-[450px] h-32 ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div className="md:h-[450px] h-40 overflow-hidden ">
          <img
            src="https://i.ibb.co/1fskxkWQ/b1.jpg"
            className="md:h-[450px] h-40 w-full object-cover rounded-xl md:rounded-4xl"
            alt="Slide 1"
          />
        </div>
        <div className="md:h-[450px] h-40 overflow-hidden">
          <img
            src="https://i.ibb.co/ns8Yvzbj/49159547-9214707-1.jpg"
            className="md:h-[450px] h-40 w-full object-cover rounded-xl md:rounded-4xl"
            alt="Slide 2"
          />
        </div>
        <div className="md:h-[450px] h-40 overflow-hidden">
          <img
            src="https://i.ibb.co/607dmf9y/12810855-5036654-1.jpg"
            className="md:h-[450px] h-40 w-full object-cover rounded-xl md:rounded-4xl"
            alt="Slide 3"
          />
        </div>
        <div className="md:h-[450px] h-40 overflow-hidden">
          <img
            src="https://i.ibb.co/8Dhywp5k/Screenshot-2025-07-16-at-10-00-01.png"
            className="md:h-[450px] h-40 w-full object-cover rounded-xl md:rounded-4xl"
            alt="Slide 4"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
