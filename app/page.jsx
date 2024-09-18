"use client";
import React from "react";
import Template from "./Template";
import { motion } from "framer-motion";
import { Caraousel } from "@components/Cards";

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

const Home = () => {
  return (
    <Template>
      <div className="mb-96 bg-primary-darkblue pt-20 flex flex-col">
        <Caraousel />
        <div className="grid grid-cols-2 bg-cyan-800">
          <div className="grid grid-flow-row-dense h-fit py-40  gap-10 px-20">
            <div>
              <h1 className=" text-white  text-5xl font-bold">
                Water Changes Everything
              </h1>
              <h2 className=" text-primary-lightblue text-3xl font-bold">
                Clean water is the foundation of health, education, and growth.
              </h2>
            </div>
            <p className=" text-secondary-darkblue text-lg font-semibold">
              Join us now and become part of a global movement dedicated to
              providing clean water to every community in need.
            </p>
          </div>
          {/* Image Container */}
          <div className="w-full h-full relative overflow-hidden">
            <motion.img
              variants={images}
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
              loading="lazy"
              src="https://root7.in/cdn/shop/files/IMG_5423_1_670x.jpg"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 bg-indigo-700">
          {/* Image Container */}
          <div className="w-full h-full relative overflow-hidden">
            <motion.img
              variants={images}
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
              loading="lazy"
              src="https://root7.in/cdn/shop/files/every-root7_670x.png?v=1661928982"
            />
          </div>
          <div className="grid grid-flow-row-dense text-right h-fit py-28 place-items-center pl-20">
            <h1 className=" text-secondary-grey text-5xl font-bold m-10 mb-0 px-5">
              Water for All: Digital Action, Real Impact
            </h1>

            <h2 className=" text-primary-black text-3xl font-bold m-10 mb-0 px-5 mt-0">
              Making clean water accessible through innovative vending machines.
            </h2>

            <p className="text-primary-white text-lg m-10 p-5 font-semibold">
              Support our mission today and help us expand our reach, making
              clean water available in more high-traffic areas.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-cyan-800">
          <div className="grid grid-flow-row-dense h-fit py-40  gap-10 px-20">
            <div>
              <h1 className=" text-white  text-5xl font-bold">
                Join the Movement
              </h1>
              <h2 className=" text-primary-lightblue text-3xl font-bold">
                Together, we can ensure that clean water is available
                everywhere.
              </h2>
            </div>
            <p className=" text-secondary-darkblue text-lg font-semibold">
              Donate now! Your contribution directly impacts the placement of
              free water vending machines where they’re needed most.
            </p>
          </div>
          {/* Image Container */}
          <div className="w-full h-full relative overflow-hidden">
            <motion.img
              variants={images}
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
              loading="lazy"
              src="https://root7.in/cdn/shop/files/travel-cups-new_670x.png?v=1661930959"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 bg-indigo-700">
          {/* Image Container */}
          <div className="w-full h-full relative overflow-hidden">
            <motion.img
              variants={images}
              className="absolute top-0 left-0 w-full h-full object-cover object-right"
              loading="lazy"
              src="https://root7.in/cdn/shop/files/banner3b_1520x.progressive.png.jpg?v=1697529488"
            />
          </div>
          <div className="grid grid-flow-row-dense text-right h-fit py-28 place-items-center pl-20">
            <h1 className=" text-secondary-grey text-5xl font-bold m-10 mb-0 px-5">
              Creative Advertising Solutions
            </h1>

            <p className="text-primary-black text-lg m-10 p-5 font-semibold">
              Our creative advertising solutions are designed to put a smile on
              your audience's face and create a positive impression of your
              brand. With our unique approach, we guarantee meaningful
              impressions and the greatest brand loyalty platform in the ad
              industry.
            </p>
          </div>
        </div>
        <div className="bg-primary-lightblue p-12 py-16 text-secondary-darkblue grid grid-cols-2 place-items-center w-full">
          <div className="w-8/12">
            <h1 className="text-6xl text-cyan-900 font-semibold">
              Your Support Matters
            </h1>
            <p className="text-2xl">
              100% of your donation will go toward providing free water to those
              in need.
            </p>
          </div>
          <p className="text-3xl text-cyan-900 px-24">
            Make a difference today! Help bring clean, free water to those who
            need it by contributing to our life-saving mission.
          </p>
        </div>
      </div>
    </Template>
  );
};

export default Home;
