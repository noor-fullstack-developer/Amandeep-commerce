import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import coursesData from "../../Data/Course.json";

const categories = ["All", "11th", "12th", "CA", "B.Com", "ACCA"];
const caSubCategories = ["All", "Foundation", "Intermediate", "Final"];

const ITEMS_PER_PAGE = 6;

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeSubCategory]);

  // Optimized filtering
  const filteredCourses = useMemo(() => {
    if (activeCategory === "All") return coursesData;

    if (activeCategory === "CA") {
      if (activeSubCategory === "All") {
        return coursesData.filter((c) => c.category === "CA");
      }
      return coursesData.filter(
        (c) =>
          c.category === "CA" && c.subCategory === activeSubCategory
      );
    }

    return coursesData.filter((c) => c.category === activeCategory);
  }, [activeCategory, activeSubCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen">
      {/* CATEGORY FILTER */}
      <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setActiveSubCategory("All");
            }}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CA SUBCATEGORY */}
      {activeCategory === "CA" && (
        <div className="max-w-4xl mx-auto px-4 mt-6 flex justify-center gap-3 flex-wrap">
          {caSubCategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSubCategory(sub)}
              className={`px-4 py-1 rounded-full text-xs font-medium transition ${
                activeSubCategory === sub
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {paginatedCourses.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">
              No courses found.
            </p>
          )}

          {paginatedCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {course.badge}
                  </span>

                  <h3 className="text-lg font-bold mb-1">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-1">
                    {course.tutor}
                  </p>

                  <p className="text-sm text-yellow-600 mb-2">
                    ⭐ {course.rating} | {course.students}+ students
                  </p>

                  <p className="text-gray-500 text-sm mb-2">
                    {course.category}
                    {course.subCategory
                      ? ` - ${course.subCategory}`
                      : ""}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div>
                  <div className="mb-4">
                    <span className="text-xl font-bold text-indigo-700">
                      ₹{course.price.toLocaleString()}
                    </span>
                    <span className="text-sm line-through text-gray-400 ml-2">
                      ₹{course.oldPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800">
                      Enroll
                    </button>
                    <button
                      onClick={() =>
                        navigate(`/course/${course.slug}`)
                      }
                      className="flex-1 border border-indigo-700 text-indigo-700 py-2 rounded-lg hover:bg-indigo-50"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === num
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {num}
                </button>
              )
            )}

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        )}

        <p className="text-center text-gray-500 mt-10 text-sm">
          🔥 5000+ Students | ⭐ 4.8 Rating | 📈 Proven Results
        </p>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Commerce Journey Today 🚀
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 mb-6">
          Join thousands of successful students with smart strategy &
          notes.
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Start Learning Today
        </button>
      </section>
    </div>
  );
};

export default Index;