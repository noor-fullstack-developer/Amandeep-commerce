import React from "react";
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-black via-gray-950 to-black text-white pt-20 pb-8 relative">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
        {/* ================= Left Section ================= */}
        <div>
          <h2 className="text-3xl font-bold mb-6 tracking-wide">
            Amandeep Commerce Classes
          </h2>

          <ul className="space-y-3 text-sm leading-relaxed text-gray-400">
            <li>✔ 20,000+ students through Full Course & Fastrack Batches</li>
            <li>✔ 1,50,000+ students impacted via YouTube Revision</li>
            <li>✔ Famous for Smart Notes & Last Day Revision</li>
            <li>✔ 50,000+ students use Smart Notes</li>
            <li>✔ First “Khazana Notes” for CA Final DT</li>
            <li>✔ Study CA Final DT in the smartest way</li>
            <li>✔ Cleared CA Final in 2nd Attempt – Attempts don't matter!</li>
          </ul>

          {/* App Buttons */}
        </div>

        {/* ================= Middle Section ================= */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-yellow-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-yellow-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 mt-8">
            <button className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-lg font-medium hover:scale-105 transition-transform shadow-lg">
              <FaGooglePlay className="text-lg" />
              <span>Google Play</span>
            </button>

            <button className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-lg font-medium hover:scale-105 transition-transform shadow-lg">
              <FaApple className="text-lg" />
              <span>App Store</span>
            </button>
          </div>
        </div>

        {/* ================= Right Section ================= */}
        <div>
          <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Contact Us
          </h3>

          <div className="text-sm text-gray-400 space-y-3">
            <p className="text-white font-medium">Amandeep Commerce Classes</p>
            <p>D-493, Dwarka Sector-7, 2nd Floor, New Delhi - 110077</p>
            <p>
              ✉️{" "}
              <span className="text-white font-medium">
                amndeepcommerceclasses@gmail.com
              </span>
            </p>
            <p>
              📞 <span className="text-white font-medium">88009 05010</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <Link
              to="https://api.whatsapp.com/send/?phone=8800905010&text=Hey"
              className="bg-gray-800 p-3 rounded-full cursor-pointer hover:scale-110 hover:bg-green-500 transition-all duration-300"
            >
              <FaWhatsapp className="text-lg" />
            </Link>
            <Link
              to="https://www.youtube.com/@AmandeepCommerceClasses"
              className="bg-gray-800 p-3 rounded-full cursor-pointer hover:scale-110 hover:bg-red-500 transition-all duration-300"
            >
              <FaYoutube className="text-lg" />
            </Link>
            <Link
              to="https://www.instagram.com/amandeepcommerceclasses"
              className="bg-gray-800 p-3 rounded-full cursor-pointer hover:scale-110 hover:bg-linear-to-r from-pink-500 to-red-500 transition-all duration-300"
            >
              <FaInstagram className="text-lg" />
            </Link>
            <Link
              to="https://t.me/amandeepcommerceclasses"
              className="bg-gray-800 p-3 rounded-full cursor-pointer hover:scale-110 hover:bg-blue-500 transition-all duration-300"
            >
              <FaTelegramPlane className="text-lg" />
            </Link>
          </div>
        </div>
      </div>

      {/* ================= Bottom Bar ================= */}
      <div className="border-t border-gray-800 mt-16 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Amandeep Commerce Classes. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed & Developed by{" "}
            <span className="text-red-600 font-medium">Edutech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
