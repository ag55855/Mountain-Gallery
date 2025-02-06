

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MountainGallery from "./Components/MountainGallery";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mountain-gallery" element={<MountainGallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

