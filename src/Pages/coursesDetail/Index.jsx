import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../Data/Course.json";

const CourseDetail = () => {
  const { id } = useParams();

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  if (!course) return <h2>Course not found</h2>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <p><strong>Tutor:</strong> {course.tutor}</p>
        <p><strong>Lectures:</strong> {course.lectures}</p>
        <p><strong>Language:</strong> {course.language}</p>
        <p><strong>Validity:</strong> {course.validity}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Syllabus</h2>
      <ul className="list-disc ml-6 mb-6">
        {course.syllabus.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button className="px-6 py-3 bg-green-600 text-white rounded-lg">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetail;