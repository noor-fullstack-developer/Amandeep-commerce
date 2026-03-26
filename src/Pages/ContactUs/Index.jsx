import React, { useState } from "react";

const Index = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">

      {/* ================= HERO ================= */}
      <section className="py-12 sm:py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Have questions about our courses or preparation strategy?
            We’re here to help you.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* ================= CONTACT INFO ================= */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col justify-between">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6 sm:space-y-8">

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-xl sm:text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    D-493, Dwarka Sector-7, 2nd Floor, New Delhi - 110077
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-xl sm:text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a
                    href="mailto:amndeepcommerceclasses@gmail.com"
                    className="text-blue-600 hover:underline text-sm sm:text-base break-all"
                  >
                    amndeepcommerceclasses@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-xl sm:text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <a
                    href="tel:+918800905010"
                    className="text-gray-600 hover:text-black text-sm sm:text-base"
                  >
                    +91 88009 05010
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= MAP ================= */}
          <div className="mt-8 sm:mt-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-md h-56 sm:h-64 md:h-72">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28027.284405907492!2d77.03994153845979!3d28.587457994088137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sd%20493%2C%20dwarka%20sector-7%2C%202nd%20floor%20new%20delhi-110077%20iframe%20for%20html!5e0!3m2!1sen!2sin!4v1771583304127!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg sm:rounded-xl px-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-sm sm:text-base"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg sm:rounded-xl px-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-sm sm:text-base"
              />
            </div>

            {/* Textarea */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-4 py-2.5 sm:py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-sm sm:text-base"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition hover:scale-[1.02] shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;