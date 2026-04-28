import React, { useState, useMemo, useEffect } from "react";
import { myAxios } from "../../config/AxiosClient.js";
import { useNavigate } from "react-router-dom";
import {
  ChevronsLeft,
  ChevronsRight,
  BookOpen,
  User,
  ArrowRight,
  Search,
} from "lucide-react";

const caSubCategories = ["All", "Foundation", "Intermediate", "Final"];
const categories = ["All", "11th", "12th", "CA", "B.Com", "ACCA"];
const ITEMS_PER_PAGE = 6;

const Index = () => {
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isProcessing, setIsProcessing] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  // Modal & User States
  const [userEmail, setUserEmail] = useState("");
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await myAxios.get("/courses");
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeSubCategory]);

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const categoryMatch =
        activeCategory === "All" || c.category === activeCategory;
      const subCategoryMatch =
        activeCategory !== "CA" ||
        activeSubCategory === "All" ||
        c.subCategory === activeSubCategory;
      return categoryMatch && subCategoryMatch;
    });
  }, [activeCategory, activeSubCategory, courses]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  // --- MODAL & PAYMENT LOGIC ---

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setShowEmailModal(true);
  };

  const confirmAndPay = async (e) => {
    e.preventDefault();
    if (!userEmail || !selectedCourse) return;

    setShowEmailModal(false);
    setIsProcessing(selectedCourse._id);

    try {
      const res = await myAxios.post("/payments/create-order", {
        amount: selectedCourse.price,
      });

      const options = {
        key: "rzp_test_SgUshnRM5XoZ9A", // Replace with your live key in production
        amount: res.data.amount,
        currency: "INR",
        name: "Amandeep Commerce Classes",
        order_id: res.data.id,
        prefill: { email: userEmail },
        handler: async function (response) {
          try {
            await myAxios.post("/payments/verify", {
              ...response,
              email: userEmail,
              courseId: selectedCourse._id,
              courseName: selectedCourse.title,
              amount: selectedCourse.price,
            });
            alert("Payment Successful! Check your email.");
          } catch (err) {
            alert("Verification failed. Please contact support.");
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(null);
          },
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment Error:", err);
      setIsProcessing(null);
    }
  };

  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl p-6 border animate-pulse">
      <div className="h-4 w-20 bg-gray-200 rounded mb-4"></div>
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded mb-6"></div>
      <div className="space-y-2 mb-6">
        <div className="h-3 w-full bg-gray-100 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
      </div>
      <div className="flex gap-2">
        <div className="h-10 flex-1 bg-gray-200 rounded-lg"></div>
        <div className="h-10 flex-1 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans text-slate-900">
      <header className="bg-white border-b pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Master Commerce with{" "}
            <span className="text-indigo-600">Amandeep Classes</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveSubCategory("All");
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white border text-slate-600 hover:border-indigo-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {activeCategory === "CA" && (
            <div className="flex justify-center gap-2 mt-6">
              {caSubCategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubCategory(sub)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    activeSubCategory === sub
                      ? "bg-slate-800 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedCourses.map((course) => (
                <div
                  key={course._id}
                  className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${course.isPopular ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}
                      >
                        {course.isPopular ? "Best Seller" : "New Release"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <User size={14} />
                      <span>{course.tutor}</span>
                    </div>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-3xl font-black text-slate-900">
                        ₹{course.price}
                      </span>
                      <span className="text-sm line-through text-slate-400">
                        ₹{course.oldPrice}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => handleEnrollClick(course)}
                      disabled={isProcessing === course._id}
                      className="flex-2 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all flex justify-center items-center gap-2 disabled:opacity-70"
                    >
                      {isProcessing === course._id ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Enroll Now"
                      )}
                    </button>
                    <button
                      onClick={() => navigate(`/course/${course._id}`)}
                      className="flex-1 border border-slate-200 text-slate-600 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 gap-3">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-white border text-slate-600 disabled:opacity-50 hover:bg-indigo-50"
                >
                  <ChevronsLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-lg font-bold transition-all ${currentPage === i + 1 ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" : "bg-white border text-slate-500"}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-white border text-slate-600 disabled:opacity-50 hover:bg-indigo-50"
                >
                  <ChevronsRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <Search className="mx-auto text-slate-300 mb-4" size={48} />
            <h3 className="text-xl font-bold text-slate-800">
              No courses found
            </h3>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveSubCategory("All");
              }}
              className="mt-6 text-indigo-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      {/* --- INTEGRATED MODAL --- */}
      {showEmailModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all animate-in zoom-in-95 duration-200">
            <div className="text-center mb-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Enrollment Details
              </h3>
              <p className="text-slate-500 mt-2">
                Enter your email to receive your course access and receipt.
              </p>
            </div>
            <form onSubmit={confirmAndPay} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="example@gmail.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEmailModal(false)}
                  className="flex-1 py-3 px-4 font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all flex justify-center items-center gap-2"
                >
                  Proceed to Pay <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;