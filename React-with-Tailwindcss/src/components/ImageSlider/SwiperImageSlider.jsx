// SwiperImageSlider.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";

const images = [
  "https://cdn.thinglink.me/api/image/655498865562091522/1024/10/scaletowidth/0/0/1/1/false/true?wait=true",
  "https://www.imagelighteditor.com/img/bg-after.jpg",
  "https://th.bing.com/th/id/OIP.eluLjywG2GQ4-gyh0aboHgHaEK?rs=1&pid=ImgDetMain",
];

const SwiperImageSlider = () => {
  const slideVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <motion.img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
            variants={slideVariants}
            initial="initial"
            animate="animate"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImageSlider;
