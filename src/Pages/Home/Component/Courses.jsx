import React from "react";
import { useNavigate } from "react-router-dom";
import courses from "../../../Data/Course.json";

const Courses = () => {
  const navigate = useNavigate();

  const filteredCourses = courses.filter(
    (course) => course.isPopular
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Most Popular Courses
        </h2>

        <div className="grid items-stretch grid-cols-1 md:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={course.img}
                alt={course.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-900 font-semibold mb-2">
                  Tutor: {course.tutor}
                </p>
                <p className="text-gray-600 text-sm">
                  {course.description}
                </p>

                <button
                  onClick={() => navigate(`/course/${course.id}`)}
                  className="mt-6 w-full py-2 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;