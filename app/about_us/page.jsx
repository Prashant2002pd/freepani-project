"use client";
import React from "react";
import { Breadcrumbs } from "@components/MaterialTailwind.jsx";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Template from "@app/Template";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const About = () => {
  return (
    <Template>
      <div className="mb-96 pt-24 bg-primary-black divide-y-2 divide-gray-800 text-primary-white w-full h-full">
        {/* Responsive grid layout */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 place-items-center lg:py-24 px-4 md:px-12"
        >
          {/* Responsive text section */}
          <div className="w-full lg:w-9/12 flex flex-col justify-center">
            {/* Breadcrumbs */}
            <Breadcrumbs
              separator="|"
              className="rounded-full bg-gray-600 text-primary-white py-1 px-4 mb-4"
            >
              <Link
                href="/"
                className="text-primary-white opacity-60 hover:opacity-100"
              >
                <FaHome />
              </Link>
              <Link
                href="/about_us"
                className="text-primary-lightblue hover:opacity-60"
              >
                About
              </Link>
            </Breadcrumbs>
            <h1 className="font-bold text-3xl md:text-6xl lg:text-7xl pr-0 lg:pr-12">
              <span className="text-primary-lightblue">Lorem ipsum dolor</span>{" "}
              sit amet consectetur adipisicing elit.
            </h1>
            <p className="py-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              unde ea. Possimus corrupti quod aspernatur. Dignissimos debitis
              molestiae voluptas est fugiat. Neque odio aut vitae repellat illum
              possimus, asperiores odit.
            </p>
          </div>
          {/* Responsive image section */}
          <div className="w-full lg:w-11/12 xl:w-7/12 aspect-square bg-gray-800 rounded-bl-3xl rounded-tr-3xl"></div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="px-4 md:px-24 py-12"
        >
          <h1 className="font-semibold text-3xl md:text-5xl text-center text-primary-lightblue py-4">
            Why Choose Us?
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
            <div className="w-full md:w-64">
              <ul className="text-xs md:text-sm text-right flex flex-col justify-between gap-6 md:gap-12">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, repudiandae possimus?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, repudiandae possimus?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, repudiandae possimus?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, repudiandae possimus?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, repudiandae possimus?
                </li>
              </ul>
            </div>
            <motion.img
              variants={images}
              loading="lazy"
              src="https://cdn.pixabay.com/photo/2017/06/24/13/25/isolated-2437752_1280.png"
              className="w-24 md:w-32"
            />
            <div className="w-full md:w-64">
              <ul className="text-xs md:text-sm flex flex-col justify-between gap-6 md:gap-12">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, repudiandae possimus?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, repudiandae possimus?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, repudiandae possimus?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, repudiandae possimus?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, repudiandae possimus?
                </li>
              </ul>
            </div>
          </div>
          {/* Responsive video-like elements */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 py-6">
            <div className="w-full lg:w-4/12 aspect-video bg-gray-800 hover:bg-primary-lightblue text-white rounded-2xl"></div>
            <div className="w-full lg:w-4/12 aspect-video bg-gray-800 hover:bg-primary-lightblue text-white rounded-2xl"></div>
            <div className="w-full lg:w-4/12 aspect-video bg-gray-800 hover:bg-primary-lightblue text-white rounded-2xl"></div>
          </div>
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="flex flex-col lg:flex-row justify-center items-center gap-12 md:gap-24 py-12 px-4 md:px-32"
        >
          <div className="w-full lg:w-6/12 xl:w-4/12 aspect-square bg-gray-800 rounded-2xl"></div>
          <div className="w-full lg:w-6/12">
            <h1 className="font-semibold text-3xl md:text-5xl text-primary-white py-4 pr-0 md:pr-12">
              Our Mission
            </h1>
            <p className="text-sm md:text-xl font-medium">
              <b className="font-bold text-primary-lightblue">
                Empower brands. Drive change.
              </b>{" "}
              Our unique advertising medium connects businesses with consumers
              while contributing to positive social change. Through creativity
              and technology, we deliver impactful, data-driven experiences
              benefiting brands and society.
            </p>
            <button className="border-2 text-primary-lightblue px-5 mt-4 py-2 rounded-full border-primary-lightblue">
              Read More
            </button>
          </div>
        </motion.div>

        {/* Our Vision Section */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="flex flex-col lg:flex-row justify-center items-center gap-12 md:gap-24 py-12 px-4 md:px-32"
        >
          <div className="w-full lg:w-6/12 grid place-items-end">
            <h1 className="font-semibold text-3xl md:text-5xl text-primary-white text-right py-4">
              Our Vision
            </h1>
            <p className="text-sm md:text-xl font-medium text-right">
              <b className="font-bold text-primary-lightblue">
                Redefine Advertising
              </b>{" "}
              by seamlessly integrating it into people's lives. We aim to be the
              global leader in innovative, eco-friendly advertising solutions,
              offering brands an unparalleled platform to engage with their
              target audience effectively.
            </p>
            <button className="border-2 text-primary-lightblue px-5 mt-4 py-2 rounded-full border-primary-lightblue">
              Read More
            </button>
          </div>
          <div className="w-full lg:w-6/12 xl:w-4/12 aspect-square bg-gray-800 rounded-2xl"></div>
        </motion.div>
      </div>
    </Template>
  );
};

export default About;
