import React, { useState } from "react";
import Moon from "/destination/image-moon.png";
import Mars from "/destination/image-mars.png";
import Europa from "/destination/image-europa.png";
import Titan from "/destination/image-titan.png";
import { NavLink } from "react-router-dom";

const Destination = () => {
  // Step 1: State to track the selected destination
  const [selectedDestination, setSelectedDestination] = useState("Moon"); // Default to Moon

  // Step 2: Data for each destination
  const destinations = {
    Moon: {
      name: "Moon",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travelTime: "3 days",
      image: Moon,
    },
    Mars: {
      name: "Mars",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travelTime: "9 months",
      image: Mars,
    },
    Europa: {
      name: "Europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for skating, curling, hockey, or simply relaxing in your snug winter cabin.",
      distance: "628 mil. km",
      travelTime: "3 years",
      image: Europa,
    },
    Titan: {
      name: "Titan",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travelTime: "7 years",
      image: Titan,
    },
  };

  // Step 3: Update state when a user clicks on a destination
  const handleDestinationClick = (destinationKey) => {
    setSelectedDestination(destinationKey);
  };

  const selected = destinations[selectedDestination];

  return (
    <div className="text-white md:text-justify text-center ">
      <h1 className="md:text-3xl uppercase md:ml-20 tracking-widest">
        <span>01</span> Pick your destination
      </h1>
      <div className="flex flex-col md:mx-0 mx-auto md:w-full w-10/12  md:flex-row justify-center mt-10 md:pb-10">
        {/* Image */}
        <img
          src={selected.image}
          alt={selected.name}
          className="md:w-5/12 mx-auto md:mx-10 mt-10"
        />

        {/* Destination Info */}
        <div className="flex flex-col items-start mt-8 md:mt-14 md:ml-10">
          {/* Navigation List */}
          <ul className="flex gap-5 md:mx-0 mx-auto mb-10">
            <li>
              <button
                className={`${
                  selectedDestination === "Moon"
                    ? "underline underline-offset-8 decoration-white text-white"
                    : "hover:underline text-white/40 underline-offset-4"
                }`}
                onClick={() => handleDestinationClick("Moon")}
              >
                Moon
              </button>
            </li>
            <li>
              <button
                className={`${
                  selectedDestination === "Mars"
                    ? "underline underline-offset-8 decoration-white text-white"
                    : "hover:underline text-white/40 underline-offset-4"
                }`}
                onClick={() => handleDestinationClick("Mars")}
              >
                Mars
              </button>
            </li>
            <li>
              <button
                className={`${
                  selectedDestination === "Europa"
                    ? "underline underline-offset-8 decoration-white text-white"
                    : "hover:underline text-white/40 underline-offset-4"
                }`}
                onClick={() => handleDestinationClick("Europa")}
              >
                Europa
              </button>
            </li>
            <li>
              <button
                className={`${
                  selectedDestination === "Titan"
                    ? "underline underline-offset-8 decoration-white text-white"
                    : "hover:underline text-white/40 underline-offset-4"
                }`}
                onClick={() => handleDestinationClick("Titan")}
              >
                Titan
              </button>
            </li>
          </ul>

          {/* Destination Content */}
          <div>
            <h1 className="md:text-8xl text-6xl md:text-justify text-center uppercase">
              {selected.name}
            </h1>
            <p className="mt-4 text-white/50 hover:text-white max-w-md border-b-2 border-white/60 pb-10 md:text-justify  text-center">
              {selected.description}
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-8 justify-between mt-8 w-full text-gray-400 pb-10">
            <div className="text-center md:text-justify uppercase">
              <h2 className="text-sm">Avg. distance</h2>
              <p className="text-2xl text-white">{selected.distance}</p>
            </div>
            <div className="md:text-justify text-center uppercase">
              <h2 className="text-sm">Est. travel time</h2>
              <p className="text-2xl text-white ">{selected.travelTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
