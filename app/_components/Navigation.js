"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:block text-xl backdrop-blur-md">
        <ul className="flex gap-16 items-center">
          <li>
            <Link href="/" className="">
              <strong>00</strong> HOME
            </Link>
          </li>
          <li>
            <Link
              href="/destination"
              className="hover:text-accent-400 transition-colors"
            >
              <strong>01</strong> DESTINATION
            </Link>
          </li>
          <li>
            <Link
              href="/crew"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <strong>02</strong> CREW
            </Link>
          </li>
          <li>
            <Link
              href="/technology"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <strong>03</strong> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="md:hidden relative z-20">
        <Image
          src="/shared/icon-hamburger.svg"
          width={24}
          height={21}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
          alt="menu-icon"
        />

        <div
          className={`h-screen fixed top-0 right-0 backdrop-blur-xl w-64 p-8 transition-all duration-400 z-20 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
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
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
              >
                <strong className="font-barlow-condensed">00</strong> HOME
              </Link>
            </li>
            <li>
              <Link
                href="/destination"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
              >
                <strong>01</strong> DESTINATION
              </Link>
            </li>
            <li>
              <Link
                href="/crew"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
              >
                <strong>02</strong> CREW
              </Link>
            </li>
            <li>
              <Link
                href="/technology"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
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
