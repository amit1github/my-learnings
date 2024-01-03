import { register } from "swiper/element/bundle";
import { motion } from "framer-motion";

register();
const videos = [
  {
    src: "/videoOne.mp4",
    poster: "https://example.com/video2-poster.jpg",
  },
  {
    src: "/videoTwo.mp4",
    poster: "https://example.com/video1-poster.jpg",
  },
  {
    src: "/videoThree.mp4",
    poster: "https://example.com/video3-poster.jpg",
  },
];

const SwiperVideoSlider = () => {
  const slideVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <div className="h-2/6 xl:h-2/6 w-full">
      <swiper-container
        className="size-2/5"
        slidesPerView={1}
        navigation
        speed={500}
        loop
        autoplay={{ delay: 2000 }}
        spaceBetween={30}
        cssMode
      >
        {videos.map((video, index) => (
          <swiper-slide key={index}>
            <motion.div
              className="w-screen h-2/6 rounded-lg shadow-lg overflow-hidden"
              variants={slideVariants}
              initial="initial"
              animate="animate"
            >
              <video
                loop
                autoPlay
                muted
                className="w-screen h-2/6 rounded-lg shadow-lg object-cover"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default SwiperVideoSlider;
