import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { BackgroundContext } from "../Components/BackgroundContext";

// Helper function to preload images
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

const MainLayouts = () => {
  const { background, updateBackground } = useContext(BackgroundContext);
  const location = useLocation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth <= 768 ? "mobile" : "desktop";
      const currentPath = location.pathname.replace("/", "") || "home";
      updateBackground(currentPath, screenSize);
    };

    // Preload the background image
    const img = new Image();
    img.src = background.image;
    img.onload = () => {
      setIsImageLoaded(true);
    };

    handleResize(); // Initial call to set background on load
    window.addEventListener("resize", handleResize); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location, background.image, updateBackground]);

  return (
    <div
      className="min-h-screen bg-cover bg-center transition-opacity duration-500 ease-in-out"
      style={{
        backgroundColor: "#0a0a0a", // Fallback background color to avoid flash
        opacity: isImageLoaded ? 1 : 0, // Fade in the background image
        backgroundImage: `url(${background.image})`,
        transition:
          "background-image 0.5s ease-in-out, opacity 0.5s ease-in-out",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
