import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import Hero from "../Assets/hero3.webp";
import Hero1 from "../Assets/Hero.webp";
import Hero2 from "../Assets/hero2.webp";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const images = [Hero, Hero1, Hero2];

  return (
    <section className="relative w-full overflow-hidden">
      
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/1200x500?text=Image+Not+Found";
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>      
    </section>
  );
};

export default Banner;