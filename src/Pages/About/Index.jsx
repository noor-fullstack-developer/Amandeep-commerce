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
            Motto -{" "}
            <span className="text-teal-600 italic">"Sab Kar Lenge"</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-lg mb-4">
            Motto- Transforming the lives Your mentor CA Deepak Jain:
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">
            Taking action is the first step toward success. To achieve big
            goals, one must leave no stone unturned — that is the essence of
            "Sab Kar Lenge".
          </p>
        </div>
      </section>

      {/* ================= MENTOR SECTION ================= */}
      <section className="bg-white py-10 flex justify-center items-center">
        {/* The "Page" Container */}
        <div className="relative w-full max-w-7xl bg-white shadow-2xl overflow-hidden min-h-225 flex flex-col">
          {/* Top Yellow Curve/Header */}
          <div
            className="absolute top-0 left-0 w-full h-12 bg-yellow-400"
            style={{ clipPath: "ellipse(70% 60% at 50% 0%)" }}
          ></div>

          {/* Marble Texture Overlay / Main Content Area */}
          <div className="grow p-10 md:p-16 bg-repeat">
            <h2 className="text-center text-3xl font-bold tracking-widest text-gray-800 mb-12 mt-8">
              ABOUT THE AUTHOR
            </h2>

            <div className="relative">
              {/* The Image: Floated or positioned precisely like the book */}
              <div className="float-right ml-6 mb-4 w-96 shadow-lg border-2 border-white">
                <img
                  src={Photo}
                  alt="CA Deepak Jain"
                  className="w-full grayscale-40"
                />
              </div>

              {/* Body Text */}
              <div className="text-gray-800 text-[17px] leading-relaxed text-justify space-y-4 font-sans">
                <p>
                  <strong>CA Deepak Jain</strong> is a distinguished Chartered
                  Accountant, educator, and mentor, committed to shaping the
                  future of the CA profession in India. He completed his B.Com
                  and successfully cleared the CA examination in November 2022
                  in his first attempt, securing four exemptions—a testament to
                  his academic excellence and dedication.
                </p>

                <p>
                  Professionally, he has worked across diverse sectors including
                  manufacturing, solar energy, services, healthcare, and
                  investment, gaining rich, practical exposure to real-world
                  finance and business environments.
                </p>

                <p>
                  Alongside his corporate experience, he brings over 10 years of
                  teaching experience, during which he has mentored 20–25 CA
                  aspirants, guiding them academically, professionally, and
                  personally.
                </p>

                <p>
                  Driven by a powerful vision, CA Deepak Jain’s mission is to
                  create 5,000 Chartered Accountants in the next 10 years,
                  empowering students with strong conceptual clarity, ethical
                  values, and practical knowledge. His passion for education,
                  discipline, and nation-building reflects in every step of his
                  journey as a teacher and mentor.
                </p>
              </div>
            </div>

            {/* Quote Section */}
          </div>
          <div className="mt-16 text-center italic font-semibold text-gray-700 px-4">
            <p className="text-lg">
              “Education is not just about clearing exams; it’s about building
              character, competence, and confidence.”
            </p>
          </div>

          {/* Bottom Yellow Curve/Footer */}
          <div
            className="relative w-full h-12 bg-yellow-400"
            style={{ clipPath: "ellipse(70% 60% at 50% 100%)" }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Index;
