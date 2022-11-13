import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { data } from "../../data";

const Destination = () => {
  const navigate = useNavigate();
  const { planet } = useParams();
  const [planets] = useState(data.destinations);
  const [planetData, setPlanetData] = useState();

  function getPlanet() {
    setPlanetData(planets.filter((item) => planet.toLowerCase() === item?.name?.toLowerCase())[0]);
  }

  useEffect(() => {
    getPlanet();
  }, [planet]);

  return (
    <div className="destination h-full min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center text-white lg:h-4/5 md:max-w-2xl lg:max-w-[86rem] lg:px-16 w-full mx-auto px-4 md:p-4 lg:pb-24 lg:pt-0">
        <div className="w-full flex flex-col items-center lg:items-start">
          <h3 className="uppercase font-barlowCondensed text-xl md:text-2xl tracking-widest md:self-start">
            <span className="text-[#979797] font-bold">{planetData?.id}&nbsp;&nbsp;&nbsp;</span>Pick your destination
          </h3>
          <figure className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px] my-8 lg:mt-24">
            <img src={planetData?.images?.webp} alt="" />
          </figure>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:mt-[15%]">
          <ul className="flex gap-6 mb-12">
            {planets.map((item) => (
              <Link to={`/destination/${item?.name?.toLowerCase()}`} key={item?.id}>
                <li
                  onClick={() => navigate(`destination/${item?.name?.toLowerCase()}`)}
                  className={`uppercase font-barlowCondensed tracking-wider pb-2 md:text-2xl hover:text-white ${
                    planet.toLowerCase() === item?.name?.toLowerCase() ? "text-white border-b-2" : "text-[#D0D6F9]"
                  }`}
                >
                  {item?.name}
                </li>
              </Link>
            ))}
          </ul>

          <div className="text-center lg:text-left">
            <h2 className="font-bellefair text-6xl md:text-8xl font-normal uppercase">{planetData?.name}</h2>
            <p className="leading-6 md:leading-8 text-[#D0D6F9] text-[15px] md:text-[16px] mt-4">
              {planetData?.description}
            </p>
          </div>
          <hr className="border-t-[#383B4B] w-full my-8 md:my-16" />
          <div className="flex flex-col md:flex-row gap-4 md:gap-24 text-center uppercase">
            <div>
              <h5 className="font-barlowCondensed text-[16px] tracking-widest text-[#D0D6F9]">Avg. Distance</h5>
              <h4 className="font-bellefair text-[28px] mt-2">{planetData?.distance}</h4>
            </div>
            <div className="mb-5">
              <h5 className="font-barlowCondensed text-[16px] tracking-widest text-[#D0D6F9]">Est. travel time</h5>
              <h4 className="font-bellefair text-[28px] mt-2">{planetData?.travel}</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
