"use client";

import Image from "next/image";
import data from "@/data/data.json";
import { useState } from "react";

function Page() {
  const technology = data.technology;
  console.log(technology);

  const [curTech, setCurTech] = useState(0);

  return (
    <div className="text-white animate-fadeIn">
      <picture className="absolute inset-0 -z-10">
        <source
          media="(min-width: 1440px)"
          srcSet="/technology/background-technology-desktop.jpg"
        />
        <source
          media="(min-width: 750px)"
          srcSet="/technology/background-technology-tablet.jpg"
        />
        <img
          src="/technology/background-technology-mobile.jpg"
          alt="background-image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      <div className="min-w-xs px-6 mx-auto flex justify-center uppercase font-barlow-condesed gap-6 mt-28 text-md md:justify-start md:px-10 md:text-xl md:mt-34 lg:mt-46 lg:max-w-7xl">
        <p className="font-bold opacity-25">03</p>
        <h2 className="">space launch 101</h2>
      </div>

      <main className="lg:max-w-7xl mx-auto lg:flex lg:flex-row-reverse lg:items-center">
        <div className="w-full h-64 relative mt-16 md:h-100 lg:w-[600px] lg:h-[600px]">
          <Image
            src={`${technology[curTech].images.portrait}`}
            fill
            alt="technology-image"
            className={`object-cover object-[center_85%] md:${curTech === 2 ? "object-center" : ""}`}
          />
        </div>
        <div className="px-6 mx-auto flex items-center mt-8 flex-col lg:flex-row lg:max-w-2xl max-h-80">
          <div className="flex gap-4 text-l lg:flex-col">
            {technology.map((tech, index) => (
              <button
                key={tech.name}
                className={`w-10 h-10 border transition-color duration-200 border-white/40 hover:border-white lg:w-20 lg:h-20 lg:text-3xl cursor-pointer ${curTech === index ? "bg-white text-blue-900" : "bg-transparent text-white"} rounded-full`}
                onClick={() => setCurTech(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="mt-10 text-center px-6 md:max-w-lg lg:text-start lg:flex lg:flex-col lg:justify-between lg:mt-0">
            <p className="uppercase opacity-50 md:text-2xl lg:text-3xl">
              The terminology
            </p>
            <h1 className="text-2xl mt-4 uppercase md:text-4xl">
              {technology[curTech].name}
            </h1>
            <p className="mt-4 text-blue-300 text-md font-barlow">
              {technology[curTech].description}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
