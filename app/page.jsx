"use client";
import React from "react";
import Template from "./Template";
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

const Home = () => {
  return (
    <Template>
      <div className="bg-primary-darkblue pt-20">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid justify-center text-center content-center items-center"
          data-taos-offset="300"
        >
          <div>
            <h1 className=" text-primary-white m-5 p-4 text-5xl font-bold">
              Empower every individual with your brand!
            </h1>
            <h2 className=" text-primary-white m-5 p-4 text-3xl font-bold">
              Refreshing Advertising that Gives Back
            </h2>
          </div>
          <motion.img
            variants={images}
            className=" m-3 p-2"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1056,h=575,fit=crop/YBgo0xrk47S8oX2P/my-project-YX4ZvrvxPpswGWxY.png"
          />
          <h3 className=" text-primary-white m-5 p-4 text-3xl font-bold">
            # Because Water should be free!
          </h3>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="flex justify-center text-start content-center items-center bg-primary-grey "
        >
          <div className="bg-primary-grey">
            <h1 className=" text-primary-darkblue  text-5xl font-bold m-10 mb-0 px-5">
              REVOLUTIONIZE ADVERTISING
            </h1>
            <h2 className=" text-primary-lightblue text-5xl font-bold m-10 mt-0 px-5">
              YOUR BRAND,OUR CANVAS
            </h2>
            <p className=" text-primary-black text-lg m-10 p-5 font-semibold">
              We turned our bottles into canvases for a brand's message and
              offer everything for free to consumers. A simple scan of our QR
              code connects them to your brand's world, allowing you to reach
              your target audience directly and track real-time campaign
              performance
            </p>
          </div>
          <motion.img
            variants={images}
            className=" w-1/2"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=597,fit=crop/YBgo0xrk47S8oX2P/my-project-1-2-A1agEbao58iGnx4A.png"
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="flex justify-center text-start content-center items-center bg-primary-darkblue "
        >
          <motion.img
            variants={images}
            className=" w-1/2"
            src="https://assets.zyrosite.com/YBgo0xrk47S8oX2P/my-project-2-YbNDQ2NbWBS5WJO6.png"
          />
          <div className="bg-primary-darkblue">
            <h1 className=" text-secondary-grey   text-5xl font-bold m-10 mb-0 px-5">
              Creative Advertising Solutions
            </h1>

            <p className=" text-primary-white text-lg m-10 p-5 font-semibold">
              Our creative advertising solutions are designed to put a smile on
              your audience's face and create a positive impression of your
              brand. With our unique approach, we guarantee meaningful
              impressions and the greatest brand loyalty platform in the ad
              industry.
            </p>
          </div>
        </motion.div>
      </div>
    </Template>
  );
};

export default Home;
