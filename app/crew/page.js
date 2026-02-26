"use client";

import data from "@/data/data.json";
import Image from "next/image";
import { useState } from "react";

function Page() {
  const crewMember = data.crew.map((member) => member);
  console.log(crewMember);
  const [crew, setCrew] = useState(0);
  console.log(crewMember[crew].images.png);

  return (
    <div className="h-screen w-full">
      <picture className="absolute inset-0 -z-10">
        <source
          media="(min-width: 1440px)"
          srcSet="/crew/background-crew-desktop.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/crew/background-crew-tablet.jpg"
        />
        <img
          src="/crew/background-crew-mobile.jpg"
          alt="background-image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      <div className="flex gap-4 py-4 md:px-10 text-white min-w-[300px]bg-red-500 justify-center mt-20 md:mt-30 md:justify-start lg:mt-48 lg:max-w-[1110px] lg:mx-auto">
        <p className="font-barlow-condensed tracking-widest font-bold opacity-50 text-lg md:text-xl lg:text-3xl">
          02
        </p>
        <h1 className="font-barlow-condensed font-extralight tracking-wider text-lg md:text-xl uppercase lg:text-3xl">
          Meet your crew
        </h1>
      </div>

      <div className="lg:flex lg:max-w-[1110px] mx-auto">
        <main className="text-white min-w-[300px] mx-auto flex flex-col items-center px-8 md:items-start md:mt-4 lg:max-w-[1110px] lg:mt-32">
          <div className="py-8 text-center md:mt-4 md:mx-auto lg:text-start lg:ml-0 lg:mt-32">
            <p className="text-xl md:text-2xl opacity-50 tracking-wider uppercase">
              {crewMember[crew].role}
            </p>
            <h2 className="text-2xl mt-2 tracking-wider uppercase md:text-4xl">
              {crewMember[crew].name}
            </h2>
            <p className="mt-8 font-barlow text-sm/6 text-blue-300 md:max-w-lg">
              {crewMember[crew].bio}
            </p>
          </div>
          <div className="flex justify-center gap-5 py-10 lg:justify-start lg:max-w-[1110px] mx-auto px-8 mt-10 md:mt-0">
            <div
              className={`transition-color duration-500 w-3 h-3 rounded-full cursor-pointer ${crew === 0 ? "bg-white" : "bg-white/17"} hover:bg-white/50`}
              onClick={() => {
                setCrew(0);
              }}
            />
            <div
              className={`transition-color duration-500 w-3 h-3 rounded-full cursor-pointer ${crew === 1 ? "bg-white" : "bg-white/17"} hover:bg-white/50`}
              onClick={() => {
                setCrew(1);
              }}
            />
            <div
              className={`transition-color duration-500 w-3 h-3 rounded-full cursor-pointer ${crew === 2 ? "bg-white" : "bg-white/17"} hover:bg-white/50`}
              onClick={() => {
                setCrew(2);
              }}
            />
            <div
              className={`transition-color duration-500 w-3 h-3 rounded-full cursor-pointer ${crew === 3 ? "bg-white" : "bg-white/17"} hover:bg-white/50`}
              onClick={() => {
                setCrew(3);
              }}
            />
          </div>
        </main>

        <div className="relative w-64 h-72 mx-auto md:w-96 md:h-110 lg:w-[540px] lg:h-[680px]">
          <Image
            src={crewMember[crew].images.png}
            fill
            alt={crewMember[crew].name}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
