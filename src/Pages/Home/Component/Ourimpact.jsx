import React from "react";
import { TbUserSquare } from "react-icons/tb";
import { PiVideoLight, PiNotebookLight } from "react-icons/pi";

const Ourimpact = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-14">
          Our Impact in Numbers
        </h1>

        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
          Check out our proudest milestones and achievements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 py-5 flex items-center justify-around rounded-xl shadow hover:shadow-lg transition">
            <TbUserSquare className="text-blue-600 text-6xl mb-4" />

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                5000+
              </h2>
              <p className="text-gray-600 mt-2">Students Enrolled</p>
            </div>
          </div>

          <div className="bg-gray-50 py-5 flex items-center justify-around rounded-xl shadow hover:shadow-lg transition">
            <PiVideoLight className="text-blue-600 text-6xl mb-4" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                150,000+
              </h2>
              <p className="text-gray-600 mt-2">Students Reached</p>
            </div>
          </div>

          <div className="bg-gray-50 py-5 flex items-center justify-around rounded-xl shadow hover:shadow-lg transition">
            <PiNotebookLight className="text-blue-600 text-6xl mb-4" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                50,000+
              </h2>
              <p className="text-gray-600 mt-2">Smart Notes Used</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourimpact;
