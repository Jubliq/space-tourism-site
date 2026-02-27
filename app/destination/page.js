"use client";

import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const destinations = data.destinations.map((planet) => planet);
  const [planet, setPlanet] = useState(0);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start mx-auto xl:flex-row xl:items-end pb-5 xl:pb-32">
      <picture className="absolute inset-0 -z-10">
        <source
          media="(min-width: 1280px)"
          srcSet="/destination/background-destination-desktop.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/destination/background-destination-tablet.jpg"
        />
        <img
          src="/destination/background-destination-mobile.jpg"
          alt="background-image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      <div className="flex flex-col w-full mt-24 xl:max-w-277.5 xl:mx-auto">
        <div className="mt-6 md:mt-10 xl:mt-12 xl: xl:flex xl:justify-start ">
          <div className="flex gap-4 pb-4 justify-center items-center">
            <span className="bold text-white/25 md:text-[28px] font-barlow-condensed bold">
              01
            </span>
            <h3 className="text-[16px] text-blue-300 font-barlow-condensed md:text-[28px] uppercase">
              Pick your destination
            </h3>
          </div>
        </div>

        <div className="xl:flex xl:mt-6 xl:gap-30">
          <div className="flex items-center justify-center">
            <div className="relative w-37.5 h-37.5 md:w-75 md:h-75 xl:w-120 xl:h-120">
              <Image
                src={destinations[planet].images.png}
                fill
                alt={destinations[planet].name}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col xl:justify-end xl:gap-8">
            <div className="p-6 flex flex-col items-center justify-between gap-2 xl:p-0 xl:items-start">
              <nav>
                <ul className="flex gap-8">
                  {destinations.map((p, index) => (
                    <li key={p.name}>
                      <div
                        className="uppercase h-8 flex flex-col justify-between group cursor-pointer"
                        onClick={() => setPlanet(index)}
                      >
                        <span>{p.name}</span>
                        <div
                          className={`${planet === index ? "bg-white" : "group-hover:bg-white/50"} h-0.5 transition-colors duration-500 ease-in-out `}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>

              <h1 className="text-[56px] md:text-[100px] uppercase">
                {destinations[planet].name}
              </h1>
              <p className="text-[15px] text-blue-300 font-barlow md:text-[16px]">
                {destinations[planet].description}
              </p>
            </div>

            <div className="h-0.5 w-11/12 mx-auto bg-white/25 mt-4 xl:mx-0 xl:w-full" />

            <div className="pt-8 gap-3 flex flex-col w-full md:flex-row md:justify-around md:items-center xl:justify-start xl:gap-20 ">
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-[14px] text-blue-300 font-barlow-condensed uppercase text-center">
                  Avg. Distance
                </h3>
                <p className="text-[28px] text-white uppercase text-center">
                  {destinations[planet].distance}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <h3 className="text-[14px] text-blue-300 font-barlow-condensed uppercase text-center">
                  Est. travel time
                </h3>
                <p className="text-[28px] text-white text-center uppercase">
                  {destinations[planet].travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
