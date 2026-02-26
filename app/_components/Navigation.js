"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden md:flex md:text-lg lg:text-xl backdrop-blur-md px-10 bg-white/10 h-full md:justify-end md:max-w-4xl transition-all duration-400">
        <ul className="flex gap-16 items-center">
          <li className="relative h-full flex items-center group">
            <Link href="/" className="gap-2 h-full flex items-center px-4">
              <strong>00</strong> HOME
            </Link>

            <div
              className={`
      absolute bottom-0 left-0
      w-full h-1
      ${
        pathname === "/"
          ? "bg-white"
          : "bg-white/0 transition-colors duration-500 ease-in-out        group-hover:bg-white/50"
      }
    `}
            />
          </li>

          <li className="relative h-full flex items-center group">
            <Link
              href="/destination"
              className="gap-2 h-full flex items-center"
            >
              <strong>01</strong> DESTINATION
            </Link>
            <div
              className={`
      absolute bottom-0 left-0
      w-full h-1
      ${
        pathname === "/destination"
          ? "bg-white"
          : "bg-white/0 transition-colors duration-500 ease-in-out        group-hover:bg-white/50"
      }
    `}
            />
          </li>

          <li className="relative h-full flex items-center group">
            <Link href="/crew" className="gap-2 h-full flex items-center">
              <strong>02</strong> CREW
            </Link>
            <div
              className={`
      absolute bottom-0 left-0
      w-full h-1
      ${
        pathname === "/crew"
          ? "bg-white"
          : "bg-white/0 transition-colors duration-500 ease-in-out        group-hover:bg-white/50"
      }
    `}
            />
          </li>

          <li className="relative h-full flex items-center group">
            <Link href="/technology" className="gap-2 h-full flex items-center">
              <strong>03</strong> TECHNOLOGY
            </Link>
            <div
              className={`
      absolute bottom-0 left-0
      w-full h-1
      ${
        pathname === "/technology"
          ? "bg-white"
          : "bg-white/0 transition-colors duration-500 ease-in-out        group-hover:bg-white/50"
      }
    `}
            />
          </li>
        </ul>
      </nav>

      <nav className="md:hidden right-0 z-20 mr-8">
        <Image
          src="/shared/icon-hamburger.svg"
          width={24}
          height={21}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
          alt="menu-icon"
        />

        <div
          className={`h-screen fixed top-0 right-0 backdrop-blur-xl w-64 p-8 transition-all duration-500 z-20 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <Image
            src="/shared/icon-close.svg"
            width={24}
            height={21}
            className="cursor-pointer ml-auto"
            onClick={() => setIsOpen(false)}
            alt="close-menu-icon"
          />
          <ul className="font-barlow-condensed flex flex-col gap-5">
            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? "active: border-r-3 border-amber-50" : ""}hover:text-accent-400 transition-colors flex items-center gap-4`}
              >
                <strong className="font-barlow-condensed">00</strong> HOME
              </Link>
            </li>
            <li>
              <Link
                href="/destination"
                className={`${pathname === "/destination" ? "active: border-r-3 border-amber-50" : ""}hover:text-accent-400 transition-colors flex items-center gap-4`}
              >
                <strong>01</strong> DESTINATION
              </Link>
            </li>
            <li>
              <Link
                href="/crew"
                className={`${pathname === "/crew" ? "active: border-r-3 border-amber-50" : ""}hover:text-accent-400 transition-colors flex items-center gap-4`}
              >
                <strong>02</strong> CREW
              </Link>
            </li>
            <li>
              <Link
                href="/technology"
                className={`${pathname === "/technology" ? "active: border-r-3 border-amber-50" : ""}hover:text-accent-400 transition-colors flex items-center gap-4`}
              >
                <strong>03</strong> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
