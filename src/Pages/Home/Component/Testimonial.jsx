import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Leo Vance",
      role: "IGCSE Student",
      text: "I spent months watching random YouTube videos. This site gave me a roadmap that actually made sense.",
      avatar: "https://i.pravatar.cc/150?u=leo",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "AS Level Student",
      text: "Finally, a tutorial site that explains the 'why' behind the 'how.' My go-to reference now.",
      avatar: "https://i.pravatar.cc/150?u=priya",
    },
    {
      id: 3,
      name: "David Miller",
      role: "A Level Student",
      text: "I went from zero to building my first app in just two weeks!",
      avatar: "https://i.pravatar.cc/150?u=david",
    },
  ];

  const TestimonialCard = ({ name, role, text, avatar }) => (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold text-(--navy-blue)">{name}</h4>
          <p className="text-sm text-(--muted-green) font-medium">{role}</p>
        </div>
      </div>

      <p className="text-(--navy-blue) italic">"{text}"</p>
    </div>
  );

  return (
    <section className="py-16 bg-(--off-white)">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-(--navy-blue) sm:text-4xl">
            Real Stories from Real Students
          </h2>
          <p className="mt-4 text-lg text-(--muted-green)">
            Join 5,000+ learners who have leveled up their skills with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
