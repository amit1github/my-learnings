import "flowbite";

const videos = [
  {
    src: "/videoOne.mp4",
    poster: "https://example.com/video2-poster.jpg",
    alt: "slide 1",
  },
  {
    src: "/videoTwo.mp4",
    poster: "https://example.com/video1-poster.jpg",
    alt: "slide 2",
  },
  {
    src: "/videoThree.mp4",
    poster: "https://example.com/video3-poster.jpg",
    alt: "slide 3",
  },
];

const buttons = [
  { label: "Previous", direction: "prev" },
  { label: "Next", direction: "next" },
];

const FlowbiteCarousel = () => {
  return (
    // <Carousel>
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-80 overflow-hidden rounded-lg md:h-96">
        {videos.map((video, index) => (
          <div
            key={index}
            className="hidden top-0 left-0 duration-1000 ease-in-out transition-transform"
            data-carousel-item
          >
            <video
              loop
              autoPlay
              muted
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:paused transition-all"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <image
              src={image.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={image.alt}
            /> */}
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {videos.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === 0 ? "bg-black" : "bg-white"
            }`}
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
          className={`absolute top-0 ${
            button.direction === "prev" ? "start-0" : "end-0"
          } z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
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
    // </Carousel>
  );
};

export default FlowbiteCarousel;
