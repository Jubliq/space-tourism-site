"use client";

import data from "@/data/data.json";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function Page() {
  const crewMember = data.crew;
  const [curCrew, setCurCrew] = useState(0);

  return (
    <div className="min-h-screen h-fit w-full animate-fadeIn text-white">
      <picture className="absolute inset-0 -z-10">
        <source
          media="(min-width: 1280px)"
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

      <AnimatePresence mode="wait">
        <motion.div
          key={curCrew}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="min-w-xs px-6 mx-auto flex justify-center uppercase font-barlow-condesed gap-6 mt-28 text-md md:justify-start md:px-10 md:text-xl md:mt-34 xl:mt-46 xl:max-w-7xl">
            <p className="font-bold opacity-25">02</p>
            <h2>meet your crew</h2>
          </div>

          <div className="xl:flex xl:max-w-[1110px] mx-auto">
            <main className="text-white min-w-[300px] mx-auto flex flex-col items-center px-8 md:items-start md:mt-4 xl:max-w-[1110px] xl:mt-32">
              <div className="py-8 text-center md:mt-4 md:mx-auto lg:text-start xl:ml-0 xl:mt-32">
                <p className="text-xl md:text-2xl opacity-50 tracking-wider uppercase">
                  {crewMember[curCrew].role}
                </p>
                <h2 className="text-2xl mt-2 tracking-wider uppercase md:text-4xl">
                  {crewMember[curCrew].name}
                </h2>
                <p className="mt-8 font-barlow text-sm/6 text-blue-300 md:max-w-lg">
                  {crewMember[curCrew].bio}
                </p>
              </div>
              <div className="flex justify-center gap-5 py-10 lg:justify-start xl:max-w-[1110px] mx-auto px-8 mt-10 md:mt-0">
                {crewMember.map((crew, index) => (
                  <div
                    key={crew.name}
                    className={`transition-color duration-500 w-3 h-3 rounded-full cursor-pointer ${curCrew === index ? "bg-white" : "bg-white/17"} hover:bg-white/50`}
                    onClick={() => {
                      setCurCrew(index);
                    }}
                  />
                ))}
              </div>
            </main>

            <div className="relative w-64 h-72 mx-auto md:w-96 md:h-110 xl:w-[540px] xl:h-[680px]">
              <Image
                src={crewMember[curCrew].images.png}
                fill
                alt={crewMember[curCrew].name}
                className="object-contain [mask-image:linear-gradient(to_top,transparent,black_20%)]"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Page;
