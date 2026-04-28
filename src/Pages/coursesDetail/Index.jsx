import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { myAxios } from "../../config/AxiosClient.js";

const Index = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [error, setError] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Modal States
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");

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

  const handleEnrollClick = () => {
    setShowEmailModal(true);
  };

  const confirmAndPay = async (e) => {
    e.preventDefault();
    if (!userEmail) return;

    setShowEmailModal(false);
    setIsProcessing(true);

    try {
      const res = await myAxios.post("/payments/create-order", {
        amount: course.price,
      });

      const options = {
        key: "rzp_test_SgUshnRM5XoZ9A",
        amount: res.data.amount,
        currency: "INR",
        name: "Amandeep Commerce Classes",
        order_id: res.data.id,
        prefill: { email: userEmail },
        handler: async function (response) {
          try {
            const result = await myAxios.post("/payments/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              email: userEmail, // Dynamic email
              courseId: course._id,
              courseName: course.title, // Dynamic course name
              amount: course.price,
            });
            alert(result.data.message);
          } catch (err) {
            alert("Verification failed. Please contact support.");
          } finally {
            setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          },
        },
        theme: { color: "#4F46E5" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment Error:", err);
      setIsProcessing(false);
    }
  };

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Course Not Found</h2>
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
          <div className="bg-white p-8 sm:p-10 rounded-4xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                {course.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
              {course.title}
            </h1>
            <p className="text-gray-500 mt-6 text-lg leading-relaxed">
              {course.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-50">
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                  Instructor
                </p>
                <p className="font-bold text-gray-800">{course.tutor}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                  Duration
                </p>
                <p className="font-bold text-gray-800">⏱️ {course.duration}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                  Validity
                </p>
                <p className="font-bold text-gray-800">📅 {course.validity}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-4xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              What's included?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.Include?.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full">
                    <ArrowRight size={14} />
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
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 sticky top-10">
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
              onClick={handleEnrollClick}
              disabled={isProcessing}
              className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
                isProcessing
                  ? "bg-gray-100 text-gray-400"
                  : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100"
              }`}
            >
              {isProcessing ? "Processing..." : "ENROLL NOW"}
            </button>
          </div>
        </motion.div>
      </div>

      {/* EMAIL MODAL */}
      <AnimatePresence>
        {showEmailModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Enrollment Details
                </h3>
                <p className="text-slate-500 mt-2">
                  Enter your email to receive your course materials.
                </p>
              </div>

              <form onSubmit={confirmAndPay} className="space-y-4">
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="name@gmail.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowEmailModal(false)}
                    className="flex-1 py-3 text-slate-600 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700"
                  >
                    Proceed
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
