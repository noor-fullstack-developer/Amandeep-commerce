import React from "react";

const freeCourses = [
  {
    id: 1,
    title: "Income Tax Basics (Free)",
    description:
      "Understand fundamental concepts of Income Tax for CA Foundation & Inter.",
    duration: "6 Hours",
    level: "Beginner",
  },
  {
    id: 2,
    title: "GST Introduction Masterclass",
    description:
      "Complete overview of GST structure, registration & compliance.",
    duration: "4 Hours",
    level: "Beginner",
  },
  {
    id: 3,
    title: "CA Exam Strategy Blueprint",
    description:
      "Learn how to structure your preparation for maximum results.",
    duration: "2 Hours",
    level: "All Levels",
  },
];

const Index = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Start with Our Free Courses
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Begin your CA journey with structured free resources designed
            for concept clarity and smart preparation.
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

              <button className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition">
                Enroll Free
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;