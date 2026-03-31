import React from "react";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function MainLayout() {
  return (
    <div className="bg-linear-to-t from-gray-100 to-white min-h-screen flex flex-col">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-linear-to-t from-white to-gray-100">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
