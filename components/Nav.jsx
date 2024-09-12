"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", text: " Home" },
  { href: "/about_us", text: "About" },
  { href: "/gallery", text: "Gallery" },
];

const Nav = () => {
  const Path = usePathname();
  return (
    <nav className="pt-4 pb-2 z-10 text-primary-white bg-primary-black px-12 flex items-center justify-between w-screen shadow-md fixed">
      {/* <div className="w-8/12 flex items-center"> */}
      <h1 className="font-bold text-3xl">LOGO</h1>
      <ul className=" flex justify-center py-3">
        {links.map((l) => (
          <li className="pr-[2.5rem]" key={l.href}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                href={l.href}
                className={`${
                  l.href === Path
                    ? " text-primary-lightblue font-bold text-xl"
                    : " cursor-pointer font-bold text-lg"
                }`}
              >
                {l.text}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
      <Link href="/contact_us">
        <button className="p-2 px-4 bg-primary-lightblue text-primary-black rounded-full font-extrabold text-md">
          Get in Touch
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
