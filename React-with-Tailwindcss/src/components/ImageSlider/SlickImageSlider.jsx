// Slider.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="relative">
      <div className="w-full">
        {/* Your first slide content */}
        <img
          src="https://www.imagelighteditor.com/img/bg-after.jpg"
          alt="Slide 1"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full">
        {/* Your second slide content */}
        <img
          src="https://th.bing.com/th/id/OIP.eluLjywG2GQ4-gyh0aboHgHaEK?rs=1&pid=ImgDetMain"
          alt="Slide 2"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default SliderComponent;
