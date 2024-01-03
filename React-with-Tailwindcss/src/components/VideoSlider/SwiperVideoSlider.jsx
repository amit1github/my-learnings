// import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import "swiper/element/css/autoplay"; // Import specific CSS for autoplay
import { Autoplay, Pagination, Navigation } from "swiper/modules";

register();

const videos = [
  {
    src: "/videoTwo.mp4",
    poster: "https://example.com/video1-poster.jpg",
  },
  {
    src: "/videoOne.mp4",
    poster: "https://example.com/video2-poster.jpg",
  },
  {
    src: "/videoThree.mp4",
    poster: "https://example.com/video3-poster.jpg",
  },
];

const SwiperVideoSlider = () => {
  return (
    <div className="h-2/6 xl:h-2/6 w-full">
      <swiper-container
        className="relative overflow-hidden rounded-lg"
        slidesPerView={1}
        speed={500}
        loop
        auto-height="true"
        pagination="true"
        pagination-clickable="true"
        centered-slides="true"
        autoplay-delay="2500"
        autoplay-disable-on-interaction="true"
        autoplay-pause-on-hover="true"
        space-between="30"
      >
        {videos.map((video, index) => (
          <swiper-slide
            key={index}
            className="w-screen h-2/6 rounded-lg shadow-lg overflow-hidden"
          >
            <video
              loop
              autoPlay
              muted
              className="w-screen h-2/6 xl:h-[400px] rounded-lg shadow-lg object-cover"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default SwiperVideoSlider;
