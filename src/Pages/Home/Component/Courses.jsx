import React from "react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "CA Final DT Full Course",
      description:
        "Comprehensive coverage with concept clarity & exam-focused approach.",
      image: "https://himpub.com/wp-content/uploads/2023/02/BI7839.jpeg",
    },
    {
      id: 2,
      title: "Fast Track Batch",
      description:
        "Complete syllabus revision in limited time with smart strategy.",
      image: "https://himpub.com/wp-content/uploads/2025/06/PAB0400.jpg",
    },
    {
      id: 3,
      title: "Khazana Notes",
      description: "Last day revision notes designed for maximum retention.",
      image: "https://himpub.com/wp-content/uploads/2024/10/PAB0349.jpeg",
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Explore Our Top Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>

                <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
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
