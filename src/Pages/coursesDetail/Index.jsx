import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { myAxios } from "../../config/AxiosClient.js";

const CourseDetail = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await myAxios.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(true);
      }
    };
    if (id) fetchCourse();
  }, [id]);

  const handlePayment = async (price) => {
      try {
        const res = await myAxios.post("/payments/create-order",
          {
            amount: price,
          },
        );
  
        // DEBUG: Add this line to see what the backend actually sent
        console.log("Order created:", res.data);
  
        const options = {
          key: "rzp_test_SgUshnRM5XoZ9A",
          amount: res.data.amount, // Make sure this is res.data.amount
          currency: "INR",
          name: "Amandeep Commerce Classes",
          order_id: res.data.id, // CRITICAL: This must be res.data.id
          handler: async function (response) {
            try {
              // This calls the verify route we just updated above
              const result = await myAxios.post("/payments/verify",
                {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  email: "student@gmail.com", 
                  courseName: "11th Accounts", 
                },
              );
              alert(result.data.message);
            } catch (err) {
              console.error("Verification failed", err);
            }
          },
          theme: { color: "#4F46E5" },
        };
  
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (err) {
        console.error("Payment Error:", err);
      }
    };

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Oops! Course Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-indigo-600 font-medium"
          >
            Return to Home
          </button>
        </div>
      </div>
    );

  if (!course)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* MAIN CONTENT AREA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Hero Section */}
          <div className="bg-white p-8 sm:p-10 rounded-4xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                {course.category}
              </span>
              <span className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                ⭐ 4.9{" "}
                <span className="text-gray-400 font-normal">
                  (1.2k reviews)
                </span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
              {course.title}
            </h1>

            <p className="text-gray-500 mt-6 text-lg leading-relaxed max-w-2xl">
              {course.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-50">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                  Instructor
                </p>
                <p className="font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>{" "}
                  {course.tutor}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                  Duration
                </p>
                <p className="font-bold text-gray-800">⏱️ {course.duration}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                  Validity
                </p>
                <p className="font-bold text-gray-800">📅 {course.validity}</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-white p-8 sm:p-10 rounded-4xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              What's included in this course?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
              {course.Include?.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-green-50 text-green-600 rounded-lg p-1.5 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SIDEBAR - PRICING */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 sticky top-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-black text-gray-900">
                  ₹{course.price}
                </span>
                <span className="text-xl line-through text-gray-300 font-medium">
                  ₹{course.oldPrice}
                </span>
              </div>

              <div className="inline-block bg-emerald-50 text-emerald-600 font-bold text-xs px-3 py-1 rounded-lg mb-8">
                Save{" "}
                {Math.round(
                  ((course.oldPrice - course.price) / course.oldPrice) * 100,
                )}
                % Today
              </div>

              <button
                onClick={() => handlePayment(course.price)}
                disabled={isProcessing}
                className={`group relative w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 overflow-hidden ${
                  isProcessing
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-200 active:scale-[0.98]"
                }`}
              >
                <span className="relative z-10">
                  {isProcessing ? "Processing..." : "ENROLL NOW"}
                </span>
                {!isProcessing && (
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                )}
              </button>

              <div className="mt-8 space-y-4">
                <p className="text-center text-xs text-gray-400 font-medium uppercase tracking-widest mb-4">
                  Course Protocol
                </p>
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <span className="text-xl">🛡️</span>
                  <p className="text-sm font-semibold text-gray-700 leading-none">
                    100% Secure Checkout
                  </p>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <span className="text-xl">📱</span>
                  <p className="text-sm font-semibold text-gray-700 leading-none">
                    Mobile & Desktop Access
                  </p>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <span className="text-xl">♾️</span>
                  <p className="text-sm font-semibold text-gray-700 leading-none">
                    Life-time Technical Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetail;
