import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Slideshow = ({ images, routes = [], interval = 3000 }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile(); // Проверить при загрузке
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="w-full flex justify-center items-center bg-gray-50 py-4">
        {/* Swiper Container */}
        <div className="w-full max-w-screen-lg mx-auto overflow-hidden rounded-lg shadow-lg">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-[200px] md:h-[300px]"
          >
            {/* Slides */}
            {images.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg h-64">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          type: "custom",
          renderCustom: (swiper, current, total) => {
            let indicators = "";
            for (let i = 1; i <= total; i++) {
              indicators += `<div class="${
                i === current
                  ? "h-2 w-10 bg-blue-500 rounded-md mx-1"
                  : "h-2 w-10 bg-gray-300 rounded-md mx-1"
              } cursor-pointer" data-index="${i}"></div>`;
            }
            return `<div class="flex justify-center items-center">${indicators}</div>`;
          },
        }}
        autoplay={{ delay: interval }}
        loop={true}
        className="w-full h-64"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <a href={routes[index] || "#"} className="w-full h-full block">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full"
                onDragStart={(e) => e.preventDefault()}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-10 bg-transparent pointer-events-none"></div>
    </div>
  );
};

export default Slideshow;
