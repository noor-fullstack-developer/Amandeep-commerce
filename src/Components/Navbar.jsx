import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full shadow-md">
      
      {/* ================= Upper Navbar ================= */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
          
          {/* Contact Section */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 hover:text-gray-300 transition">
              <CiMail size={18} />
              <span>amndeepcommerceclasses@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 hover:text-gray-300 transition">
              <IoCallOutline size={18} />
              <span>+91 88009 05010</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-lg">
            <Link to="https://api.whatsapp.com/send/?phone=8800905010&text=Hey" className="hover:text-green-400 transition">
              <FaWhatsapp />
            </Link>
            <Link to="https://www.youtube.com/@AmandeepCommerceClasses" className="hover:text-red-500 transition">
              <FaYoutube />
            </Link>
            <Link to="https://www.instagram.com/amandeepcommerceclasses" className="hover:text-pink-500 transition">
              <FaInstagram />
            </Link>
            <Link to="https://t.me/amandeepcommerceclasses" className="hover:text-blue-400 transition">
              <FaTelegramPlane />
            </Link>
          </div>
        </div>
      </div>

      {/* ================= Lower Navbar ================= */}
      <nav className="border-b-2">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div>
            <img
              src="./Logo.png"
              alt="Logo"
              className="h-10 object-contain"
            />
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <Link to="/" className="cursor-pointer hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/free-resources" className="cursor-pointer hover:text-blue-600 transition">
              Free Resources
            </Link>
            <Link to="/courses" className="cursor-pointer hover:text-blue-600 transition">
              Courses
            </Link>
            <Link to="/contact" className="cursor-pointer hover:text-blue-600 transition">
              Contact Us
            </Link>
            <Link to="/about" className="cursor-pointer hover:text-blue-600 transition">
              About
            </Link>
          </ul>

          {/* Mobile Menu Button (Optional future upgrade) */}
          <div className="md:hidden">
            <button className="text-2xl">☰</button>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
