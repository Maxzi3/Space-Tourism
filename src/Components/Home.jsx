import React from "react";

const Home = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-4 gap-10 items-center mx-auto md:w-10/12 md:py-0 py-10 text-white">
      <div className="flex flex-col md:items-baseline items-center gap-2">
        <h3 className="md:text-xl text-lg uppercase md:px-4  text-white/80">
          So, you want to travel to
        </h3>
        <h1 className="md:text-9xl text-8xl py-5 uppercase">Space</h1>
        <p className="md:w-9/12 md:text-left text-center px-4 md:text-lg text-white/50 ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <h1
          className="relative md:w-72 w-56 md:h-72 h-56 bg-white text-black text-4xl uppercase rounded-full flex items-center justify-center
               before:content-[''] before:absolute before:inset-0 before:bg-white/20 before:rounded-full hover:before:scale-150
               before:transition-transform before:duration-300"
        >
          Explore
        </h1>
      </div>
    </div>
  );
};

export default Home;
