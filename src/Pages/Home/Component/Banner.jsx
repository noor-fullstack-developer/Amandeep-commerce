import "swiper/css";
import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero1 from "../Assets/Hero.webp";
import Hero2 from "../Assets/hero2.webp";
import Hero from "../Assets/hero3.webp";
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
            className="w-full h-full object-fit-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Hero1}
            alt="Slide 2"
            className="w-full h-full object-fit-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Hero2}
            alt="Slide 3"
            className="w-full h-full object-fit-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-r from-black/30 via-black/40 to-black/50 z-10"></div>

      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Empowering Students for a Brighter Future
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Interactive learning, expert teachers, and structured courses designed to help you succeed.
          </p>

          <Link
            to="/courses"
            className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            Explore Courses
          </Link>
        </div>
      </div> */}
    </section>
  );
};

export default Banner;
