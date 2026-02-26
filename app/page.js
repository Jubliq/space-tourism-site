// const bgMobile = "@/public/home/background-home-mobile.jpg";
// const bgTablet = "@/public/home/background-home-tablet.jpg";
// const bgDesktop = "@/public/home/background-home-desktop.jpg";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start xl:flex-row xl:items-end xl:pb-32">
      <picture className="absolute inset-0 -z-10">
        <source
          media="(min-width: 1280px)"
          srcSet="/home/background-home-desktop.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/home/background-home-tablet.jpg"
        />
        <img
          src="/home/background-home-mobile.jpg"
          alt="background-image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div className="p-6 flex flex-col items-center justify-between gap-2 mt-24">
        <h3 className="text-[16px] text-blue-300 font-barlow-condensed md:text-[28px]">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-[80px] md:text-[100px] ">SPACE</h1>
        <p className="text-[15px] text-blue-300 font-barlow md:text-[16px]">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <div className="h-80 w-screen flex items-center justify-center">
        <Link
          href="/destination"
          className=" bg-white text-black rounded-full w-36 h-36 text-lg flex justify-center items-center md:w-72 md:h-72"
        >
          EXPLORE
        </Link>
      </div>
    </div>
  );
}
