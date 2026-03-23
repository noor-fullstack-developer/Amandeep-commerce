import React from "react";
import Hero from "./assets/Amandeep.webp";
import BeliefSection from "./Component/BeliefSection.jsx";
import Testimonial from "./Component/Testimonial.jsx";
import Courses from "./Component/Courses.jsx";
import WhyUs from "./Component/WhyUs.jsx";
import Banner from "./Component/Banner.jsx";
import Ourimpact from "./Component/Ourimpact.jsx";
import Videos from "./Component/Videos.jsx";




const Index = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Banner />

      {/* == Courses Section == */}
      <Courses />

      {/* == Hero Section 2 == */}
      <section>
        <img
          src={Hero}
          alt="Banner"
          className="w-full h-[35vh] md:h-[50vh] object-cover"
        />
      </section>

      {/* == Why Choose Us == */}
      <WhyUs />

      {/* == Youtube Videos == */}
      <Videos />

    
      <BeliefSection />

      {/* == OUR IMPACT == */}
      <Ourimpact />

      {/* == Testimonials Section == */}
      <Testimonial />
    </div>
  );
};

export default Index;
