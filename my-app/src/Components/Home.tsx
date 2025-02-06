import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <h1>Welcome to Mountain Gallery</h1>
      <Link className="HomeWelcome"  to="/mountain-gallery">Go to Gallery</Link>
    </div>
  );
};

export default Home;
