import React,{useContext, useEffect} from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { BackgroundContext } from "../Components/BackgroundContext";


const MainLayouts = () => {
    const { background, updateBackground } = useContext(BackgroundContext);
    const location = useLocation();
      useEffect(() => {
        const handleResize = () => {
          const screenSize = window.innerWidth <= 768 ? "mobile" : "desktop";
          const currentPath = location.pathname.replace("/", "") || "home";
          updateBackground(currentPath, screenSize); // Update the background based on route and screen size
        };

        // Call initially and on window resize
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
      }, [location, updateBackground]);
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background.image})` }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
