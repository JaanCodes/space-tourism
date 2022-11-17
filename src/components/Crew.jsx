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
      <section className="w-full max-w-[96rem] pt-4 lg:h-[40rem] mx-auto px-6 flex flex-col items-center justify-center text-white md:max-w-2xl lg:max-w-[96rem] ">
        <h3 className="uppercase font-barlowCondensed text-xl md:text-2xl tracking-widest md:self-start">
          <span className="text-[#979797] font-bold">{crewData?.id}&nbsp;&nbsp;&nbsp;</span>Meet your crew
        </h3>
        <div className="w-full lg:h-full flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:items-end lg:justify-between items-center justify-center">
          <figure className="flex flex-col items-center h-[300px] lg:w-1/2 mt-8  lg:left-3/4 md:h-1/2">
            <img className="h-full lg:absolute lg:h-[700px] lg:bottom-0" src={crewData?.images?.webp} alt="" />
            <hr className="border-t-[#383B4B] w-full md:hidden" />
          </figure>
          <article className="flex flex-col md:flex-col-reverse lg:w-1/2 lg:justify-between">
            <ul className="flex justify-center lg:justify-start my-12 gap-4">
              {allCrewData.map((crew) => (
                <Link key={crew?.id} to={`/crew/${crew?.id}`}>
                  <li className={`w-4 h-4 rounded-full ${crew === crewData ? "bg-white" : "bg-[#979797]"}`}></li>
                </Link>
              ))}
            </ul>
            <div className="text-center lg:text-left md:mt-16">
              <h3 className="font-bellefair uppercase text-xl md:text-3xl">{crewData?.role}</h3>
              <h2 className="font-bellefair uppercase text-3xl md:text-5xl mt-2 md:mt-4 mb-4">{crewData?.name}</h2>
              <p className="font-barlow leading-8 md:leading-9 text-[#D0D6F9] md:text-lg">{crewData?.bio}</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Crew;
