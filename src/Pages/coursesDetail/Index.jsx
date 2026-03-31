import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import courses from "../../Data/Course.json";
import axios from "axios";

const CourseDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const course = courses.find((c) => c.id === Number(id));

  if (!course) return <h2>Course not found</h2>;

  const handleEnroll = async (course) => {
    try {
      if (!course || !course.price) {
        alert("Invalid course data");
        return;
      }

      const email = prompt("Enter your email:");
      if (!email) return alert("Email is required");

      // Step 1: Create order from backend
      const { data } = await axios.post("http://localhost:5000/create-order", {
        amount: course.price,
      });

      // Step 2: Razorpay options
      const options = {
        key: "rzp_test_SXjpC05e6GYKkB",
        amount: data.amount,
        currency: "INR",
        name: course.title,
        description: "Course Purchase",
        order_id: data.id,

        handler: async function (response) {
          try {
            // Step 3: Verify payment
            await axios.post("http://localhost:5000/verify-payment", {
              ...response,
              email,
              courseId: course.id,
            });

            alert("✅ Payment Successful!");
            navigate("/success"); // optional page
          } catch (err) {
            console.error(err);
            alert("Payment verification failed");
          }
        },

        prefill: {
          email: email,
        },

        theme: {
          color: "#4f46e5",
        },
      };

      // Step 4: Open Razorpay
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong while initiating payment");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 py-30">
      {/* <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      /> */}

      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <p>
          <strong>Tutor:</strong> {course.tutor}
        </p>
        <p>
          <strong>Lectures:</strong> {course.lectures}
        </p>
        <p>
          <strong>Language:</strong> {course.language}
        </p>
        <p>
          <strong>Validity:</strong> {course.validity}
        </p>
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Syllabus</h2>
      <ul className="list-disc ml-6 mb-6">
        {course.syllabus.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button
        onClick={() => handleEnroll(course)}
        className="px-6 py-3 bg-green-600 text-white rounded-lg"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetail;
