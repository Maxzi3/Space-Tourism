import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts.jsx";
import Homepage from "./Pages/Homepage.jsx";
import DestinationPage from "./Pages/DestinationPage.jsx";
import CrewPage from "./Pages/CrewPage.jsx";
import TechnologyPage from "./Pages/TechnologyPage.jsx";
import { BrowserRouter } from "react-router-dom";
import BackgroundProvider from "./Components/BackgroundContext.jsx";

const App = () => {
  return (
    <BackgroundProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Homepage />} />
            <Route path="destination" element={<DestinationPage />} />
            <Route path="crew" element={<CrewPage />} />
            <Route path="technology" element={<TechnologyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BackgroundProvider>
  );
};


export default App;
