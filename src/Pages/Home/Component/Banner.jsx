import "swiper/css";
import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "../assets/Hero.webp";
import { Link } from "react-router-dom";
import Hero1 from "../assets/Hero-1.webp";
import Hero2 from "../assets/Hero-2.webp";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            src={Hero}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Hero1}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Hero2}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/40 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Master CA with Confidence
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Structured learning. Smart notes. Practical examples. Everything you
            need to clear CA Final successfully.
          </p>

          <Link
            to="/courses"
            className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
