import React from "react";
import { useNavigate } from "react-router-dom";
import courses from "../../../Data/Course.json";

const Courses = () => {
  const navigate = useNavigate();

  const filteredCourses = courses.filter((course) => course.isPopular);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Most Popular Courses
        </h2>

        <div className="grid items-stretch grid-cols-1 md:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {course.badge}
                  </span>

                  <h3 className="text-lg font-bold mb-1">{course.title}</h3>

                  <p className="text-gray-500 text-sm mb-1">{course.tutor}</p>

                  <p className="text-sm text-yellow-600 mb-2">
                    ⭐ {course.rating} | {course.students}+ students
                  </p>

                  <p className="text-gray-500 text-sm mb-2">
                    {course.category}
                    {course.subCategory ? ` - ${course.subCategory}` : ""}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                </div>
                
                <div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/course/${course.id}`)}
                      className="flex-1 border border-indigo-700 text-black py-2 rounded-lg bg-linear-to-r from-blue-400 to-purple-400"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
