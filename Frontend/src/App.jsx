import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainHead } from "./components/MainHead";
import FullGallery from "./components/FullGallery";
import {AboutPage} from "./components/AboutPage";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainHead />} />
        <Route path="/gallery-full" element={<FullGallery />} />
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
  );
};
