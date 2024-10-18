import React, { useState } from "react";

const Crew = () => {
  // State to track the selected crew member
  const [selectedCrew, setSelectedCrew] = useState("Commander");

  // Object with data for each crew member
  const crewMembers = {
    Commander: {
      name: "Douglas Hurley",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, retired Marine Corps officer, former NASA astronaut, and the spacecraft commander on SpaceX Crew Dragon's first flight to the International Space Station.",
      image: "/crew/image-douglas-hurley.png",
    },
    Specialist: {
      name: "Mark Shuttleworth",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the development of the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "/crew/image-mark-shuttleworth.png",
    },
    Pilot: {
      name: "Victor Glover",
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: "/crew/image-victor-glover.png",
    },
    Engineer: {
      name: "Anousheh Ansari",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: "/crew/image-anousheh-ansari.png",
    },
  };

  // Update selected crew member when a user clicks a button
  const handleCrewClick = (crewRole) => {
    setSelectedCrew(crewRole);
  };

  const selected = crewMembers[selectedCrew]; // Selected crew member data

  return (
    <div className="text-white ">
      <h1 className="md:text-3xl text-center md:text-left uppercase mb- md:pl-28 md:pt-10 tracking-widest">
        <span>02</span> Meet your crew
      </h1>
      <div className="flex md:flex-row flex-col  justify-center items-center md:gap-20 md:py-10 py-10">
        <div className="flex flex-col md:text-left m md:mx-0 mx:auto md:w-auto w-10/12 items-center md:items-baseline md:py-0 py-10">
          {/* Crew Details */}
          <h2 className="uppercase text-gray-400 md:text-lg text-2xl tracking-widest">
            {selected.role}
          </h2>
          <h1 className="md:text-4xl text-2xl md:font-bold uppercase mt-2">
            {selected.name}
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl pt-4 md:text-xl text-base text-center md:text-justify">
            {selected.bio}
          </p>
          {/* Crew Information */}
          <div className="flex flex-col items-center md:items-start mt-6 md:mt-0 md:ml-10">
            {/* Crew Role Navigation */}
            <ul className="flex gap-10 md:pt-20 mb-4">
              {Object.keys(crewMembers).map((role) => (
                <li key={role}>
                  <button
                    className={`${
                      selectedCrew === role
                        ? "bg-white  w-3 h-3 rounded-full"
                        : "w-3 h-3 rounded-full hover:bg-white bg-gray-500"
                    }`}
                    onClick={() => handleCrewClick(role)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Crew Image */}
        <img
          src={selected.image}
          alt={selected.name}
          className="w-1/2 md:w-1/3"
        />
      </div>
    </div>
  );
};

export default Crew;
