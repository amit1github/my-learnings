import "react";
import "flowbite";

const images = [
  {
    src: "https://cdn.thinglink.me/api/image/655498865562091522/1024/10/scaletowidth/0/0/1/1/false/true?wait=true",
    alt: "Slide 1",
  },
  {
    src: "https://www.imagelighteditor.com/img/bg-after.jpg",
    alt: "Slide 2",
  },
  {
    src: "https://th.bing.com/th/id/OIP.eluLjywG2GQ4-gyh0aboHgHaEK?rs=1&pid=ImgDetMain",
    alt: "Slide 3",
  },
];

const buttons = [
  { label: "Previous", direction: "prev" },
  { label: "Next", direction: "next" },
];

const FlowbiteCarousel = () => {
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={image.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === 0 ? "bg-black" : "bg-white"}`}
            aria-current={index === 0}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      {buttons.map((button, index) => (
        <button
          key={index}
          type="button"
          className={`absolute top-0 ${button.direction === "prev" ? "start-0" : "end-0"} z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
          data-carousel={button.direction}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              {button.direction === "prev" ? (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              ) : (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              )}
            </svg>
            <span className="sr-only">{button.label}</span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default FlowbiteCarousel;
