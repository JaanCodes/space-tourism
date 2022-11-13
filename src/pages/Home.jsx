import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const planets = ["Moon", "Mars", "Europa", "Titan"];
  return (
    <div className="home h-screen">
      <Navbar />
      <section className="lg:h-4/5 md:max-w-2xl lg:max-w-[86rem] lg:px-16 w-full mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-end justify-center md:p-4 lg:pb-24 lg:pt-0">
        <div className="text-center lg:text-left md:mt-12 lg:max-w-xl">
          <h3 className="font-barlowCondensed uppercase text-[28px] tracking-wide text-[#D0D6F9]">
            So, you want to travel to
          </h3>
          <h1 className="text-[100px] md:text-[150px] font-bellefair uppercase text-white">Space</h1>
          <p className="leading-8 md:text-[22px] font-barlow text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <Link
          to={`destination/${planets[Math.floor(Math.random() * planets.length)].toLowerCase()}`}
          className="w-[125px] h-[125px] md:w-[242px] md:h-[242px] grid items-center mt-8 md:mt-24 mx-auto lg:mr-0 bg-white rounded-full  hover:shadow-[0_0_0_20px_#24262F] md:hover:shadow-[0_0_0_56px_#24262F] transition"
        >
          <button className="select-none text-[24px] lg:text-[32px] font-bellefair uppercase tracking-wide text-[#0B0D17]">
            Explore
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
