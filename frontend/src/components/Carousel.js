import { useState } from "react";

const Carousel = () => {
  const slides = [
    "https://media.istockphoto.com/id/2061716709/photo/grilled-rib-burger.jpg?s=2048x2048&w=is&k=20&c=GysiZtJ85wDZCAXWA9CgqXamsdmhQzsBTUTZhIaFQ3Q=",
    "https://media.istockphoto.com/id/1468323847/photo/close-up-photo-of-mans-hand-serving-margherita-pizza-on-a-plate.jpg?s=2048x2048&w=is&k=20&c=5gNmrmb8WCTGuY6e5ryoc-9_WxvUGO3QBidPaLB703w=",
    "https://media.istockphoto.com/id/1341504203/photo/fried-momos-dumpling.jpg?s=2048x2048&w=is&k=20&c=x_Vdte2bc4_lOnV90aqYcmKjrasRqbIzsgeDbF-uvdY=",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative w-full   h-[100%] mt-20 md:mt-0
      mx-auto overflow-hidden  shadow-lg  "
    >
      {/* Carousel Wrapper */}
      <div className="relative h-[500px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-full">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>{" "}
              {/* Overlay */}
            </div>
          </div>
        ))}

        {/* Search Form */}
        <div className="absolute top-96 mt-12 left-1/2 transform -translate-x-1/2 z-10 w-full">
          <form className="max-w-md mx-auto flex items-center ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-full flex items-center">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-emerald-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  transition-all duration-300 "
              style={{
                marginRight: "28rem",
                height: "50px",
                top: "3px",
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
      >
        &#8250;
      </button>

      {/* Indicators */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
