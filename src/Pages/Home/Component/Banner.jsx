import "swiper/css";
import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "../Assets/hero3.webp";
import Hero1 from "../Assets/Hero.webp";
import Hero2 from "../Assets/hero2.webp";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <section className="relative w-full lg:h-[60vh] overflow-hidden">
      
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {[Hero, Hero1, Hero2].map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional Overlay for better readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/20 to-transparent z-10"></div>

      {/* Optional Content */}
      {/* <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-8 md:px-16">
        <div className="max-w-xl text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform Your Commerce Career
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
            Learn from experts and achieve success with structured courses.
          </p>

          <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm sm:text-lg font-semibold transition">
            Enroll Now
          </button>
        </div>
      </div> */}
      
    </section>
  );
};

export default Banner;