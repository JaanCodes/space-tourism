import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { data } from "../../data";
import { Link, useParams } from "react-router-dom";

const Technology = () => {
  const { techId } = useParams();
  const [allTechnologyData] = useState(data.technology);
  const [technologyData, setTechnologyData] = useState();

  useEffect(() => {
    setTechnologyData(allTechnologyData.filter((item) => techId === item?.id)[0]);
  }, [techId]);

  return (
    <div className="technology h-full min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="flex flex-col items-center justify-center lg:max-w-[100rem] text-white w-full mx-auto lg:px-12 pb-24">
        <h3 className="uppercase font-barlowCondensed text-xl md:text-2xl tracking-widest md:self-start md:ml-8 lg:ml-0 mb-8 md:my-12">
          <span className="text-[#979797] font-bold">0{technologyData?.id}&nbsp;&nbsp;&nbsp;</span>
          {technologyData?.name}
        </h3>
        <div className="flex flex-col lg:flex-row-reverse items-center w-full ">
          <figure className="w-full flex justify-end">
            <img className="lg:hidden block w-full" src={technologyData?.images?.landscape} alt="" />
            <img className="hidden lg:block" src={technologyData?.images?.portrait} alt="" />
          </figure>
          <div className="flex flex-col lg:flex-row lg:gap-4 items-center w-full mr-auto">
            <ul className="flex lg:flex-col gap-6 my-12">
              {allTechnologyData?.map((item) => (
                <Link key={item?.id} to={`/technology/${item?.id}`}>
                  <li
                    className={`${
                      item?.id === techId ? "bg-white text-[#0B0D17]" : "bg-transparent"
                    } rounded-full py-3 lg:py-5 px-5 lg:px-7 border text-lg font-bellefair`}
                  >
                    {item?.id}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="text-center px-6 md:max-w-2xl lg:text-left">
              <h3 className="font-barlowCondensed uppercase text-xl md:text-2xl text-[#D0D6F9]">The terminology...</h3>
              <h1 className="font-bellefair uppercase text-3xl md:text-4xl py-3 lg:py-6">{technologyData?.name}</h1>
              <p className="font-barlow md:text-lg md:leading-8 text-[#D0D6F9]">{technologyData?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
