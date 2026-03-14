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
      <section className="relative bg-[url('https://storage.googleapis.com/stepfly-partners-v1-prod.appspot.com/yashKhandelwalClasses/adminUploads/yash-khandelwal-web-bg.webp')] bg-cover bg-center py-20 px-4 text-center">        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Have questions about our courses or preparation strategy?
            We’re here to help you.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        
        {/* ================= CONTACT INFO ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-10">
              Get in Touch
            </h2>

            <div className="space-y-8">
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600 leading-relaxed">
                    d 493, dwarka sector-7, 2nd floor new delhi-110077
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a
                    href="mailto:Amandeep@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    amndeepcommerceclasses@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <a
                    href="tel:+919769890327"
                    className="text-gray-600 hover:text-black"
                  >
                    +91 88009 05010
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= MAP ================= */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-md h-72">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28027.284405907492!2d77.03994153845979!3d28.587457994088137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sd%20493%2C%20dwarka%20sector-7%2C%202nd%20floor%20new%20delhi-110077%20iframe%20for%20html!5e0!3m2!1sen!2sin!4v1771583304127!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              required
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg transition hover:scale-[1.02] shadow-lg"
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