import React from "react";
import Fun from "../assets/Fun.webp";
import study from "../assets/study.webp";
import Intensive from "../assets/Intractive.webp";

const WhyUs = () => {
  const whyUs = [
    {
      id: 1,
      title: "Fun and Interactive Learning",
      description:
        "Teaching in a fun and interactive manner keeps students engaged till the last minute.",
      img: Fun,
    },
    {
      id: 2,
      title: "Concise Study Material",
      description:
        "Smart Notes Covers all concepts in 390 Pages with ICAI Study Mat, RTPs & MTPs.",
      img: study,
    },
    {
      id: 3,
      title: "Intensive Coaching",
      description:
        "Concepts covered with practical examples and doubts solved instantly.",
      img: Intensive,
    },
  ];

  return (
    <section className="py-12 md:py-20  bg-linear-to-t from-purple-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Why Amandeep Classes ?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUs.map((reason) => (
            <div
              key={reason.id}
              className="p-6 md:p-8 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={reason.img}
                alt={reason.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h2 className="text-lg md:text-xl font-semibold mb-4">
                {reason.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;