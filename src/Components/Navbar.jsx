import React, { useState, useEffect, useRef } from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const menuRef = useRef();

  const toggleNav = () => setMobileNav(!mobileNav);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 hover:text-gray-300">
              <CiMail />
              <span>amndeepcommerceclasses@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-gray-300">
              <IoCallOutline />
              <span>+91 88009 05010</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-lg">
            <Link to="https://api.whatsapp.com/send/?phone=8800905010" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaWhatsapp />
            </Link>
            <Link to="https://www.youtube.com/@AmandeepCommerceClasses" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </Link>
            <Link to="https://www.instagram.com/amandeepcommerceclasses" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </Link>
            <Link to="https://t.me/amandeepcommerceclasses" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaTelegramPlane />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <img src="/Logo.png" alt="Logo" className="h-10" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {["/", "Free Resources", "Courses", "Contact Us", "About"].map((item, i) => (
              <li key={i} className="relative group cursor-pointer">
                <Link to={item === "/" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}>
                  {item === "/" ? "Home" : item}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <div className="md:hidden relative" ref={menuRef}>
            <button onClick={toggleNav} className="text-2xl">
              ☰
            </button>

            {/* Mobile Menu */}
            {mobileNav && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-4 animate-fadeIn">
                {["/", "Free Resources", "Courses", "Contact Us", "About"].map((item, i) => (
                  <Link
                    key={i}
                    to={item === "/" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                    onClick={() => setMobileNav(false)}
                    className="hover:text-blue-600"
                  >
                    {item === "/" ? "Home" : item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
