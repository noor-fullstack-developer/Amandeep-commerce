import React from "react";
import { Link } from "react-router-dom";
import freeCourses from "../../Data/freeResourses.json";

const Index = () => {
  return (
    <div className="bg-linear-to-t from-blue-100 to-purple-100 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Start with Our Free Courses
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Begin your CA journey with structured free resources designed for
            concept clarity and smart preparation.
          </p>
        </div>

        {/* Free Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {freeCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-100 group"
            >
              {/* Free Badge */}
              <span className="inline-block px-4 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
                FREE
              </span>

              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="flex justify-between text-sm text-gray-500 mb-6">
                <span>⏳ {course.duration}</span>
                <span>📘 {course.level}</span>
              </div>

              <Link
                to={course.link}
                className="block text-center w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
