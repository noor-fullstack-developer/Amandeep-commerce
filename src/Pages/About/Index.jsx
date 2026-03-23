import React from "react";
import Photo from "./Assets/Photo.webp";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">

      {/* ================= HERO ================= */}
      <section className="relative py-10 px-4">
        

        <div className="relative z-10 text-center text-black max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
            About Amandeep Commerce Classes
          </h1>
          <p className="text-sm sm:text-lg opacity-90 italic">
            "Empowering Commerce with Conceptual Clarity & Smart Strategy"
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">

        {/* Mission */}
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 border-l-8 border-purple-500 hover:shadow-xl transition">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            Our <span className="text-purple-600">Mission</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
            At Amandeep Commerce Classes, we focus on delivering an exceptional
            learning experience that helps students achieve their goals with
            clarity and confidence. Our mission is to equip students with
            powerful resources and smart strategies that help them secure the
            exemptions they aim for.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 border-l-8 border-blue-500 hover:shadow-xl transition">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            Our <span className="text-blue-600">Vision</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-lg mb-4">
            Our vision is to become a one-stop Direct Tax solution for students,
            shaping their practical skills and strengthening their subject
            knowledge for a successful Chartered career.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
            We cultivate strong determination and smart study habits while
            ensuring students gain conceptual clarity and confidence to face
            professional challenges.
          </p>
        </div>

        {/* Motto */}
        <div className="bg-linear-to-r from-gray-100 to-gray-200 rounded-3xl shadow-lg p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            Motto - <span className="text-teal-600 italic">"Sab Kar Lenge"</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-lg mb-4">
            This motto was given by CA Deepak Jain. Inspired by life’s
            experiences and challenges, it reflects resilience and action.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-lg mb-4">
            If one never stops trying, one never starts failing.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">
            Taking action is the first step toward success. To achieve big
            goals, one must leave no stone unturned — that is the essence of
            "Sab Kar Lenge".
          </p>
        </div>
      </section>

      {/* ================= MENTOR SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Mentor Image */}
          <div className="flex justify-center">
            <img
              src={Photo}
              alt="CA Deepak Jain"
              className="w-full max-w-sm sm:max-w-md rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>

          {/* Mentor Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Your Mentor <span className="text-orange-500">CA Deepak Jain</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-lg">
              Known for Smart Notes and powerful Last Day Revision techniques,
              CA Deepak Jain simplifies complex subjects like Direct Tax with
              strong conceptual clarity.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-lg">
              He has mentored 15,000+ students through Full Course & FastTrack
              batches and impacted 1,20,000+ students nationwide through
              revision marathons and YouTube sessions.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
              He is recognized for his unwavering student support before,
              during, and even after examinations.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Index;