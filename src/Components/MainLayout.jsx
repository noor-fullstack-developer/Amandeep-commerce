import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="bg-linear-to-t from-blue-100 to-purple-100 min-h-screen flex flex-col">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-linear-to-t from-blue-100 to-purple-100">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
