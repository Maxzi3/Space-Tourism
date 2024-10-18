import React, { createContext, useState } from "react";

// Create the context
export const BackgroundContext = createContext();

const BackgroundProvider = ({ children }) => {
  const [background, setBackground] = useState({
    image: "", // Holds the current background image
  });

  // Function to update background based on route and screen size
  const updateBackground = (page, screenSize) => {
    let backgroundImage = "";

    switch (page) {
      case "home":
        backgroundImage =
          screenSize === "mobile"
            ? "/home/background-home-mobile.jpg"
            : "/home/background-home-desktop.jpg";
        break;
      case "destination":
        backgroundImage =
          screenSize === "mobile"
            ? "/destination/background-destination-mobile.jpg"
            : "/destination/background-destination-desktop.jpg";
        break;
      case "crew":
        backgroundImage =
          screenSize === "mobile"
            ? "/crew/background-crew-mobile.jpg"
            : "/crew/background-crew-desktop.jpg";
        break;
      case "technology":
        backgroundImage =
          screenSize === "mobile"
            ? "/technology/background-technology-mobile.jpg"
            : "/technology/background-technology-desktop.jpg";
        break;
      default:
        backgroundImage = "/home/background-home-desktop.jpg";
    }

    setBackground({ image: backgroundImage });
  };

  return (
    <BackgroundContext.Provider value={{ background, updateBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundProvider;
