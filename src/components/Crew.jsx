import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { data } from "../../data";
import { Link, useNavigate, useParams } from "react-router-dom";

const Crew = () => {
  const { crewId } = useParams();
  const [crewData, setCrewData] = useState();
  const [allCrewData] = useState(data.crew);

  useEffect(() => {
    setCrewData(allCrewData.filter((item) => crewId === item?.id)[0]);
  }, [crewId]);

  return (
    <div className="crew h-full min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="lg:hidden flex flex-col lg:flex-row lg:gap-20 items-center justify-center text-white lg:h-4/5 md:max-w-2xl lg:max-w-[86rem] lg:px-16 w-full mx-auto px-6 md:p-4 lg:pb-24 lg:pt-0">
        <h3 className="uppercase font-barlowCondensed text-xl md:text-2xl tracking-widest md:self-start">
          <span className="text-[#979797] font-bold">{crewData?.id}&nbsp;&nbsp;&nbsp;</span>Meet your crew
        </h3>
        <div className="md:flex md:flex-col-reverse">
          <div className="flex flex-col items-center w-full">
            <figure className="h-[223px] mt-8 md:absolute md:bottom-0 md:h-1/2">
              <img className="h-full" src={crewData?.images?.webp} alt="" />
            </figure>
            <hr className="border-t-[#383B4B] w-full md:hidden" />
          </div>
          <ul className="flex justify-center my-12 gap-4">
            {allCrewData.map((crew) => (
              <Link key={crew?.id} to={`/crew/${crew?.id}`}>
                <li className={`w-4 h-4 rounded-full ${crew === crewData ? "bg-white" : "bg-[#979797]"}`}></li>
              </Link>
            ))}
          </ul>
          <div className="text-center md:mt-16">
            <h3 className="font-bellefair uppercase text-xl md:text-3xl opacity-50">{crewData?.role}</h3>
            <h2 className="font-bellefair uppercase text-3xl md:text-5xl mt-2 md:mt-4 mb-4">{crewData?.name}</h2>
            <p className="font-barlow leading-8 md:leading-9 text-[#D0D6F9] md:text-lg">{crewData?.bio}</p>
          </div>
        </div>
      </section>
      <section className="hidden h-[85vh] lg:flex gap-20 items-end justify-between text-white max-w-[96rem] w-full mx-auto px-12 pt-12">
        <div className="text-left w-1/2 self-start">
          <h3 className="uppercase font-barlowCondensed text-xl md:text-2xl tracking-widest md:self-start mb-[30%]">
            <span className="text-[#979797] font-bold">{crewData?.id}&nbsp;&nbsp;&nbsp;</span>Meet your crew
          </h3>
          <div className="mb-[20%]">
            <h3 className="font-bellefair uppercase text-3xl opacity-50">{crewData?.role}</h3>
            <h2 className="font-bellefair uppercase text-5xl mt-6 mb-8">{crewData?.name}</h2>
            <p className="font-barlow leading-9 text-[#D0D6F9] text-lg">{crewData?.bio}</p>
          </div>
          <ul className="flex justify-start my-12 gap-4">
            {allCrewData.map((crew) => (
              <Link key={crew?.id} to={`/crew/${crew?.id}`}>
                <li className={`w-4 h-4 rounded-full ${crew === crewData ? "bg-white" : "bg-[#979797]"}`}></li>
              </Link>
            ))}
          </ul>
        </div>
        <figure className="h-4/5">
          <img className="h-full" src={crewData?.images?.webp} alt="" />
        </figure>
      </section>
    </div>
  );
};

export default Crew;
