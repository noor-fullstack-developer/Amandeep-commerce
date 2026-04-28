import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { myAxios } from "../../../config/AxiosClient.js";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch courses from your database
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await myAxios.get("/courses");
        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching popular courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // 2. Filter for popular courses from the live data
  const filteredCourses = courses.filter((course) => course.isPopular === true);

  if (loading)
    return <div className="text-center py-20">Loading Top Courses...</div>;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
          Most Popular Courses
        </h2>

        {filteredCourses.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            No popular courses featured at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course._id} // FIX: Use _id from MongoDB
                className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="p-6 flex flex-col grow">
                  <span className="inline-block bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded-md mb-4 self-start uppercase">
                    {course.badge || "Popular"}
                  </span>

                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-1">
                    {course.tutor || "CA Deepak Jain"}
                  </p>

                  <p className="text-sm text-yellow-600 mb-4 font-medium">
                    ⭐ {course.rating || "4.8"} | {course.students || "500"}+
                    students
                  </p>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 italic">
                    "{course.description}"
                  </p>

                  {/* Push button to bottom */}
                  <div className="mt-auto">
                    <button
                      // FIX: Navigate using course._id
                      onClick={() => navigate(`/course/${course._id}`)}
                      className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
