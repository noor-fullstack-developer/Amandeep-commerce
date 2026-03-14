import React from "react";
import MainLayout from "./Components/MainLayout";
import Home from "./Pages/Home/Index.jsx";
import About from "./Pages/About/Index.jsx";
import Contact from "./Pages/ContactUs/Index.jsx";
import Courses from "./Pages/Courses/Index.jsx";
import FreeResources from "./Pages/FreeResources/Index.jsx";
import Privacy from "./Pages/Privacy/Index.jsx";
import Terms from "./Pages/terms/Index.jsx";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/free-resources" element={<FreeResources />} />
      </Route>
    </Routes>
  );
};

export default App;
