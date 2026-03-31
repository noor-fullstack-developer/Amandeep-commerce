import React from "react";
import Typewriter from "typewriter-effect";

const BeliefSection = () => {
  return (
    <section className="py-20 bg-linear-to-t from-white to-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Card Container */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center border border-gray-100">
          
          {/* Small Heading */}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Believes In What He Truly Says
          </h3>

          {/* Typewriter Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-6 min-h-17.5">
            <Typewriter
              options={{
                strings: [
                  "Concept Clarity First",
                  "Results Driven Teaching",
                  "Smart & Strategic Learning",
                  "Built for Clear Douts",
                ],
                autoStart: true,
                loop: true,
                delay: 90,
                deleteSpeed: 90,
              }}
            />
          </h1>

          {/* Subtitle */}
          <h4 className="text-lg md:text-xl text-gray-600 font-medium">
            Amandeep Commerce Classes - Trusted by Many
          </h4>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;