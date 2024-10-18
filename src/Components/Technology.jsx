import React, { useState } from "react";

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState("One");

  const Technology = {
    One: {
      name: "Launch vehicle",
      id: "1",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: "/technology/image-launch-vehicle-portrait.jpg",
    },
    Two: {
      name: "Spaceport",
      id: "2",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: "/technology/image-spaceport-portrait.jpg",
    },
    Three: {
      name: "Space capsule",
      id: "3",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: "/technology/image-space-capsule-portrait.jpg",
    },
  };

  const handleTechClick = (Technologyname) => {
    setSelectedTech(Technologyname);
  };

  const selected = Technology[selectedTech]; 
  return (
    <div className="text-white ">
      <h1 className="md:text-3xl text-center md:text-left uppercase mb- md:pl-28 md:pt-10 tracking-widest">
        <span>03</span> Space Launch 101
      </h1>
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-20 md:py-20 py-10 md:mx-auto md:w-10/12">
        {/* Technology Image */}
        <img
          src={selected.image}
          alt={selected.name}
          className="md:hidden block w-10/12 md:w-1/3 rounded-xl"
        />
        <div className="flex flex-col items-center mx-auto md:items-start mt-6 md:mt-0 md:ml-10">
          {/* Technology Navigation */}
          <ul className="flex md:flex-col flex-row gap-10 mb-4">
            {Object.keys(Technology).map((name, index) => (
              <li key={name}>
                <button
                  className={`${
                    selectedTech === name
                      ? "bg-white text-black w-10 h-10 rounded-full"
                      : "w-10 h-10 rounded-full bg-gray-500 hover:bg-white hover:text-gray-500 text-white"
                  }`}
                  onClick={() => handleTechClick(name)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:text-left  md:mx-0 mx:auto md:w-auto w-10/12 items-center md:items-baseline md:py-0 py-10">
          {/* Technology Details */}
          <h2 className="uppercase text-gray-400 md:text-lg text-xl tracking-widest">
            The Terminology...
          </h2>
          <h1 className="md:text-4xl text-4xl md:font-bold uppercase mt-2">
            {selected.name}
          </h1>
          <p className="text-gray-300 mt-4  pt-4 md:text-xl text-base text-center md:text-justify">
            {selected.description}
          </p>
        </div>
        {/* Technology Image */}
        <img
          src={selected.image}
          alt={selected.name}
          className=" hidden md:block w-10/12 md:w-1/3 rounded-xl"
        />
      </div>
    </div>
  );
};

export default Technology;
