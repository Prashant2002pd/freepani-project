"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
  return (
    <nav className="pt-4 pb-2 z-10 text-primary-white bg-primary-black px-12 flex items-center justify-between w-screen shadow-md fixed">
      {/* <div className="w-8/12 flex items-center"> */}
      <h1 className="font-bold text-3xl">LOGO</h1>
      <ul className="font-extrabold text-lg flex justify-evenly w-4/12">
        <Link href="/">
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link href="/about_us">
          <li className="cursor-pointer">About</li>
        </Link>
        <Link href="/gallery">
          <li className="cursor-pointer">Gallery</li>
        </Link>
      </ul>
      {/* </div> */}

      <button className="p-2 px-4 bg-primary-green text-primary-black rounded-full font-extrabold text-md">
        Get in Touch
      </button>
    </nav>
  );
};

export default Nav;
