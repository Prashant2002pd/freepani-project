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
        {/* First Grid Section */}
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 bg-cyan-800">
          <div className="grid grid-flow-row-dense h-fit py-20 lg:py-40 gap-10 px-10 lg:px-20">
            <div>
              <h1 className="text-white text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold">
                REVOLUTIONIZE ADVERTISING
              </h1>
              <h2 className="text-primary-lightblue text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold lg:font-bold">
                YOUR BRAND, OUR CANVAS
              </h2>
            </div>
            <p className="text-secondary-darkblue text-base md:text-lg font-semibold">
              We turned our bottles into canvases for a brand's message and
              offer everything for free to consumers. A simple scan of our QR
              code connects them to your brand's world, allowing you to reach
              your target audience directly and track real-time campaign
              performance.
            </p>
          </div>
          <div className="w-full h-full relative overflow-hidden">
            <motion.img
              variants={images}
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
              loading="lazy"
              src="https://root7.in/cdn/shop/files/IMG_5423_1_670x.jpg"
            />
          </div>
        </div>

        {/* Second Grid Section */}
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1  md:grid-cols-2 bg-indigo-700">
          <div className="w-full h-full relative overflow-hidden">
            <motion.img
              variants={images}
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
              loading="lazy"
              src="https://root7.in/cdn/shop/files/every-root7_670x.png?v=1661928982"
            />
          </div>
          <div className="grid grid-flow-row-dense text-center md:text-right h-fit py-20 lg:py-28 place-items-center px-10 md:pl-20">
            <h1 className="text-secondary-grey text-3xl md:text-4xl lg:text-5xl font-extrabold md:font-bold lg:m-10 mb-0 lg:px-5">
              Creative Advertising Solutions
            </h1>
            <p className="text-primary-white text-base md:text-lg lg:m-10 p-5 font-medium lg:font-semibold">
              Our creative advertising solutions are designed to put a smile on
              your audience's face and create a positive impression of your
              brand. With our unique approach, we guarantee meaningful
              impressions and the greatest brand loyalty platform in the ad
              industry.
            </p>
          </div>
        </div>

        {/* Third Grid Section */}
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1  md:grid-cols-2 bg-cyan-800">
          <div className="grid grid-flow-row-dense h-fit py-20 lg:py-40 gap-10 px-10 lg:px-20">
            <div>
              <h1 className="text-white text-3xl text-center md:text-left md:text-4xl lg:text-5xl font-bold">
                REVOLUTIONIZE ADVERTISING
              </h1>
              <h2 className="text-primary-lightblue text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-extrabold lg:font-bold">
                YOUR BRAND, OUR CANVAS
              </h2>
            </div>
            <p className="text-secondary-darkblue text-base md:text-lg font-semibold">
              We turned our bottles into canvases for a brand's message and
              offer everything for free to consumers. A simple scan of our QR
              code connects them to your brand's world, allowing you to reach
              your target audience directly and track real-time campaign
              performance.
            </p>
          </div>
          <div className="w-full h-full relative overflow-hidden">
            <motion.img
              variants={images}
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
              loading="lazy"
              src="https://root7.in/cdn/shop/files/travel-cups-new_670x.png?v=1661930959"
            />
          </div>
        </div>

        {/* Fourth Grid Section */}
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1  md:grid-cols-2 bg-indigo-700">
          <div className="w-full h-full relative overflow-hidden">
            <motion.img
              variants={images}
              className="absolute top-0 left-0 w-full h-full object-cover object-right"
              loading="lazy"
              src="https://root7.in/cdn/shop/files/banner3b_1520x.progressive.png.jpg?v=1697529488"
            />
          </div>
          <div className="grid grid-flow-row-dense text-center md:text-right h-fit py-20 lg:py-28 place-items-center px-10 md:pl-20">
            <h1 className="text-secondary-grey text-3xl md:text-4xl lg:text-5xl font-extrabold md:font-bold lg:m-10 mb-0 lg:px-5">
              Creative Advertising Solutions
            </h1>
            <p className="text-primary-white text-base md:text-lg lg:m-10 p-5 font-medium lg:font-semibold">
              Our creative advertising solutions are designed to put a smile on
              your audience's face and create a positive impression of your
              brand. With our unique approach, we guarantee meaningful
              impressions and the greatest brand loyalty platform in the ad
              industry.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-lightblue p-12 py-16 text-secondary-darkblue grid grid-cols-1 md:grid-cols-2 place-items-center w-full">
          <div className="w-full md:w-8/12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-cyan-900 font-semibold">
              #DRINK DIFFERENTLY
            </h1>
            <p className="text-xl lg:text-2xl mt-4">
              We are on a mission to deliver quality products for the greater good of all.
            </p>
          </div>
          <p className="text-lg  lg:text-3xl text-cyan-900 mt-10 md:mt-0 md:px-6 lg:px-24 text-center md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ea
            veritatis tempore magni ratione architecto quo a deserunt ex.
            Facilis et veritatis officiis, tempore culpa quas autem perspiciatis
            sequi quibusdam.
          </p>
        </div>
      </div>
    </Template>
  );
};

export default Home;
