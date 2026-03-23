import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "Accounts",
    tutor: "CA Deepak Jain",
    price: "₹15,000",
    oldPrice: "₹19,999",
    badge: "Best Seller",
    description:
      "Complete conceptual coverage with Smart Notes & 100% exam-oriented preparation.",
  },
  {
    id: 2,
    title: "Business studies",
    tutor: "CA Deepak Jain",
    price: "₹10,000",
    oldPrice: "₹15,999",
    badge: "Popular",
    description:
      "Quick revision batch designed for last 2-3 months preparation strategy.",
  },
  {
    id: 3,
    title: "Economics",
    tutor: "Rahul kumar",
    price: "₹15,000",
    oldPrice: "₹18,999",
    badge: "New",
    description:
      "Strong foundation building with practical illustrations & case studies.",
  },
  {
    id: 4,
    title: "Maths",
    tutor: "Neha kumari CA finalist",
    price: "₹15,000",
    oldPrice: "₹17,499",
    badge: "Hot",
    description:
      "Power-packed rapid revision session before exams with key tricky concepts.",
  },
];

const categories = ["All", "Final", "Inter", "Revision"];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All"
      ? coursesData
      : coursesData.filter((course) => course.category === activeCategory);

  const navigate = useNavigate();

  return (
    <div className=" min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative py-10 px-4 text-center">
        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
          Explore Our Courses
        </h1>
        <p className="max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base lg:text-lg opacity-90">
          Smart Strategy • Conceptual Clarity • Exam-Oriented Preparation
        </p>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-indigo-700 text-white shadow-md"
                : "bg-white text-gray-700 border hover:bg-indigo-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= COURSES GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border flex flex-col justify-between"
            >
              <div>
                {/* Badge */}
                <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {course.badge}
                </span>

                <h3 className="text-lg sm:text-xl font-bold mb-1">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mb-2">
                  {course.tutor}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mb-6">
                  {course.description}
                </p>
              </div>

              {/* Pricing */}
              <div>
                <div className="mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-indigo-700">
                    {course.price}
                  </span>
                  <span className="text-xs sm:text-sm line-through text-gray-400 ml-3">
                    {course.oldPrice}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="w-full bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800 transition text-sm">
                    book Now
                  </button>
                  <button
                    onClick={() => navigate(`/course/${course.id}`)}
                    className="w-full border border-indigo-700 text-indigo-700 py-2 rounded-lg hover:bg-indigo-50 transition text-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-black text-white py-16 sm:py-20 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Clear studies?
        </h2>
        <p className="max-w-md sm:max-w-xl mx-auto text-gray-400 text-sm sm:text-base mb-6">
          Join thousands of successful students who trusted our Smart Notes &
          Strategy.
        </p>
        <button className="bg-yellow-400 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold hover:scale-105 transition text-sm sm:text-base">
          Start Learning Today
        </button>
      </section>
    </div>
  );
};

export default Index;
