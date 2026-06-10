import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import AboutPage from "./pages/AboutPage.jsx";
import LamPage from "./pages/LamPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <>
      <div className="bg-[#1d232a] text-white">
        <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Homepage />}
              errorElement={<NotFound />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/lam" element={<LamPage />} />
          </Routes>
        </div>
    </>
  );
};

export default App;
