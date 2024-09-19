"use client";
import React from "react";
import Template from "./Template";
import { motion } from "framer-motion";
import { Caraousel, ProductCard } from "@components/Cards";
import { FaStar } from "react-icons/fa";

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
      <div className="mb-96 bg-primary-darkblue h-full pt-20 flex flex-col">
        {/* HERO */}
        <div className="text-white bg-secondary-darkblue w-full py-36 grid place-items-center">
          <div className="w-1/2 text-center">
            <h1 className="text-primary-lightblue text-6xl">Say Hello to your new favourite drinking buddy.</h1>
            <h1 className="text-2xl">...and goodbye to rough nights</h1>
            <div className="flex justify-center gap-4 py-6 text-gray-400">
              <button className="px-4 py-2 border-2 border-primary-lightblue hover:text-primary-lightblue hover:bg-white rounded-full">Shop Bottles</button>
              <button className="px-4 py-2 border-2 border-primary-lightblue hover:text-primary-lightblue hover:bg-white rounded-full">Frame your Bottle</button>
            </div>
          </div>
        </div>
        {/* HERO COMMENT */}
        <div className="flex px-36 gap-32 py-12 justify-center text-primary-lightblue">
          <h1 className="font-semibold text-3xl w-4/6">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit minima facilis dolor quas minus debitis voluptatum optio dolores quibusdam quidem, ipsam nam voluptas deleniti ipsa excepturi architecto laudantium repudiandae quo?"</h1>
          <div className="p-5 w-1/4 grid place-items-start rounded-2xl bg-white">
            <p className="text-3xl font-semibold">Over 1,600 Five Stars Reviews</p>
            <div className="flex gap-2">
              <FaStar className="text-2xl" />
              <FaStar className="text-2xl" />
              <FaStar className="text-2xl" />
              <FaStar className="text-2xl" />
              <FaStar className="text-2xl" />
            </div>
            <a href="#" className="underline text-sm">Read the reviews</a>
          </div>
        </div>
        {/* Marque */}
        <div class="overflow-x-hidden text-xl bg-primary-lightblue text-primary-darkblue">
          <div class="py-4 animate-marquee whitespace-nowrap">
            <span class="mx-4 ">Marquee Item 1</span>
            <span class="mx-4 ">Marquee Item 2</span>
            <span class="mx-4 ">Marquee Item 3</span>
            <span class="mx-4 ">Marquee Item 4</span>
            <span class="mx-4 ">Marquee Item 5</span>
          </div>

          <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span class="mx-4 ">Marquee Item 1</span>
            <span class="mx-4 ">Marquee Item 2</span>
            <span class="mx-4 ">Marquee Item 3</span>
            <span class="mx-4 ">Marquee Item 4</span>
            <span class="mx-4 ">Marquee Item 5</span>
          </div>
        </div>
        {/* Products */}
        <div className="grid place-items-center py-16">
          <h1 className="text-5xl text-primary-lightblue py-4">Our science-backed products</h1>
          <div className="flex gap-4 justify-center w-full overflow-x-hidden ">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          </div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="flex justify-center text-white items-center gap-24 py-12 px-32 "
        >
          <div className="aspect-square bg-gray-800 rounded-2xl w-4/12" />
          <div className="w-5/12">
            <h1 className=" text-5xl text-primary-white py-4 pr-12">
              Our Mission
            </h1>
            <p className="text-xl font-medium">
              <b className="font-bold text-primary-lightblue">
                At V COLABORATE,
              </b>{" "}
              we are committed to providing clean, free water through our
              vending machines in high-traffic areas. By making clean water
              available at no cost, we address a fundamental human need and
              empower communities to thrive. With every machine placed, we bring
              closer the reality of universal access to safe water.
            </p>
            <button className="border-2 text-primary-lightblue px-5 mt-4 py-2 rounded-full border-primary-lightblue">
              Read More
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="flex text-white justify-center items-center gap-24 py-12 px-32 "
        >
          <div className="w-5/12 grid place-items-end">
            <h1 className=" text-5xl text-primary-white text-right py-4">
              Our Vision
            </h1>
            <p className="text-xl font-medium text-right">
              <b className="font-bold text-primary-lightblue">
                Redefine Advertising
              </b>{" "}
              We envision a world where clean and safe water is accessible to
              everyone, everywhere. Our innovative approach ensures that
              communities have easy access to this life-sustaining resource,
              driving health, education, and local growth.
            </p>
            <button className="border-2 text-primary-lightblue px-5 mt-4 py-2 rounded-full border-primary-lightblue">
              Read More
            </button>
          </div>
          <div className="aspect-square bg-gray-800 rounded-2xl w-4/12" />
        </motion.div>

      </div>
    </Template>
  );
};

export default Home;
