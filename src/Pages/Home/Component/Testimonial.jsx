import React from "react";

import Rishabh from "../Assets/Rishabh.webp";
import Avishi from "../Assets/Avishi.webp";
import Pritam from "../Assets/Pritam.webp";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rishabh Sharma",
      role: "CA Student",
      text: "What motivates me the most is the confidence he has in me—more than I had in myself. He genuinely believes that I can not only clear the exam in the next attempt but even secure a Rank.",
      avatar: Rishabh,
    },
    {
      id: 2,
      name: "Avishi",
      role: "CA Student",
      text: "I feel really lucky to be a student of Amandeep Classes. Even online, the teaching feels personal and effective. The focus on concepts and doubt solving has boosted my confidence a lot.",
      avatar: Avishi,
    },
    {
      id: 3,
      name: "Pritam",
      role: "ACCA Student",
      text: "DJ Sir is not just a teacher but a mentor. His way of teaching is clear and motivating. He helped me believe in myself and aim higher.",
      avatar: Pritam,
    },
  ];

  const TestimonialCard = ({ name, role, text, avatar }) => (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
      
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-[var(--navy-blue)]">
            {name}
          </h4>
          <p className="text-sm text-[var(--muted-green)] font-medium">
            {role}
          </p>
        </div>
      </div>

      {/* Text */}
      <p className="text-[var(--navy-blue)] italic text-sm leading-relaxed line-clamp-4">
        "{text}"
      </p>
    </div>
  );

  return (
    <section className="py-16 bg-[var(--off-white)]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--navy-blue)] sm:text-4xl">
            Real Stories from Real Students
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-green)]">
            Join 5,000+ learners who have leveled up their skills with us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;