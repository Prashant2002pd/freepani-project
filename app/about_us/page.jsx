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
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-2 w-full gap-4 place-items-center items-start"
        >
          <div className=" w-9/12 pl-12 pb-24">
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
            <h1 className="font-bold text-6xl pr-12">
              <span className="text-primary-lightblue">
                Transforming Lives with Clean Water:
              </span>{" "}
              Tomorrow Our Mission for a Better
            </h1>
            <p className="py-4">
              <span className=" text-primary-lightblue font-semibold">
                At V COLABORATE,
              </span>{" "}
              we are committed to providing clean, free water to communities in
              need. Our innovative vending machines, placed in high-traffic
              areas, offer a practical solution to water scarcity, ensuring that
              safe drinking water is easily accessible to everyone. We believe
              that access to clean water is a basic human right, and through our
              efforts, we aim to improve health, education, and economic growth
              in communities worldwide. Together, we can create a future where
              clean water is available to all.
            </p>
          </div>
          <div className="bg-gray-800 rounded-bl-3xl rounded-tr-3xl w-9/12 aspect-square"></div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="h-4/6 px-24 py-12"
        >
          <h1 className="font-semibold text-5xl text-center text-primary-lightblue py-4">
            Why Choose Us?
          </h1>
          <div className="h-4/6 flex justify-center gap-12 items-center">
            <div className="w-64">
              <ul className=" text-sm text-right flex flex-col justify-between gap-12">
                <li>
                  Innovative Solutions: We use cutting-edge vending machines to
                  provide free, clean water in high-traffic areas, ensuring
                  accessibility for all.{" "}
                </li>
                <li>
                  Global Impact: Our initiative has already quenched the thirst
                  of millions, and we’re continuously expanding to reach more
                  communities in need.{" "}
                </li>
                <li>
                  Sustainability: We are committed to long-term solutions for
                  water scarcity, with each donation contributing to sustainable
                  and lasting change.{" "}
                </li>
                <li>
                  Transparent Donations: 100% of your contribution goes directly
                  to placing free water vending machines, making a measurable
                  difference.{" "}
                </li>
              </ul>
            </div>
            <motion.img
              variants={images}
              loading="lazy"
              src="https://cdn.pixabay.com/photo/2017/06/24/13/25/isolated-2437752_1280.png"
              className="w-32 self-center"
            />
            <div className="w-64">
              <ul className=" text-sm flex flex-col justify-between gap-12">
                <li>
                  Brand Visibility: Our partners gain visibility by supporting a
                  vital cause, with opportunities to promote their brand through
                  water machine wraps in busy locations.{" "}
                </li>
                <li>
                  Community Focused: We place our water machines where they are
                  needed most, ensuring that vulnerable and underserved
                  communities have access to clean water.{" "}
                </li>
                <li>
                  Health and Well-being: Access to clean water improves
                  community health, reduces disease, and supports better
                  education and local economies.{" "}
                </li>
                <li>
                  Join a Movement: By supporting us, you become part of a global
                  effort to end the water crisis and improve lives around the
                  world.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between gap-12 py-6">
            <div className="w-4/12 aspect-video bg-gray-800 hover:bg-primary-lightblue text-white rounded-2xl"></div>
            <div className="w-4/12 aspect-video bg-gray-800 hover:bg-primary-lightblue text-white rounded-2xl"></div>
            <div className="w-4/12 aspect-video bg-gray-800 hover:bg-primary-lightblue text-white rounded-2xl"></div>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="flex justify-center items-center gap-24 py-12 px-32 "
        >
          <div className="aspect-square bg-gray-800 rounded-2xl w-4/12" />
          <div className="w-5/12">
            <h1 className="font-semibold text-5xl text-primary-white py-4 pr-12">
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
          className="flex justify-center items-center gap-24 py-12 px-32 "
        >
          <div className="w-5/12 grid place-items-end">
            <h1 className="font-semibold text-5xl text-primary-white text-right py-4">
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

export default About;
