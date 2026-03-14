import React from "react";

const Videos = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-360 mx-auto px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          What We Truly Believe In
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <iframe
            className="w-full h-56 md:h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/EERhktPWomI"
            title="Do we need more CAs? Shocking reality of a CA in India | Classroom Podcast with CA Deepak Jain"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-56 md:h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/68g3ikZv9yM"
            title="Law as a Profession | Myths vs Reality | Internships &amp; More | Advocate Raman Sharma | CA Deepak Jain"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-full h-56 md:h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/cWKIo3GfiR4"
            title="How to choose your *Internship* Domain during CA? | CA Deepak Jain"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Videos;
