"use client";
import { BsFillSendFill } from "react-icons/bs";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@components/MaterialTailwind.jsx";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Template from "@app/Template";
import { motion } from "framer-motion";
import Link from "next/link";

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

const Contact = () => {
  return (
    <Template>
      <div className="mb-96 w-full bg-primary-black grid gap-12 place-items-center pt-24 pb-12 h-full">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid place-items-center py-12 text-center px-6 sm:px-12 lg:px-0"
        >
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-white tracking-wider">
            Contact Us
          </h1>
          <p className="text-gray-700 w-full sm:w-5/6 lg:w-4/6 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure
            aut, repellendus numquam voluptate ullam accusamus quam rerum ex
            distinctio ratione maiores mollitia saepe labore laboriosam excepturi corrupti repudiandae officia?
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="shadow-xl w-full max-w-7xl py-12 px-6 sm:px-12 lg:px-24 bg-gray-900 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12 lg:gap-32"
        >
          <div className="text-primary-white py-12 w-full">
            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">Get in Touch.</h1>
            <p className="text-primary-grey mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              ducimus veritatis magnam. Neque assumenda id, laboriosam harum,
              delectus asperiores quisquam fuga architecto, recusandae voluptas
              voluptate! Atque voluptates eaque libero voluptatem.
            </p>
            <div className="flex gap-4 py-6">
              <div className="w-12 sm:w-16 aspect-square bg-primary-lightblue rounded-full"></div>
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Address</h1>
                <h1 className="font-semibold text-md sm:text-lg text-gray-600">
                  Lorem Ipsum Seler
                </h1>
              </div>
            </div>
            <div className="flex gap-4 py-6">
              <div className="w-12 sm:w-16 aspect-square bg-primary-lightblue rounded-full"></div>
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Phone</h1>
                <h1 className="font-semibold text-md sm:text-lg text-gray-600">
                  +123 456 7890
                </h1>
              </div>
            </div>
            <div className="flex gap-4 py-6">
              <div className="w-12 sm:w-16 aspect-square bg-primary-lightblue rounded-full"></div>
              <div>
                <h1 className="font-bold text-lg sm:text-xl">Email</h1>
                <h1 className="font-semibold text-md sm:text-lg text-gray-600">
                  contact@domain.com
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-6">
              <h1 className="font-bold text-lg sm:text-xl">Follow us</h1>
              <div className="flex gap-4">
                <FaInstagram className="text-4xl sm:text-5xl p-2 rounded-full bg-primary-lightblue" />
                <FaFacebook className="text-4xl sm:text-5xl p-2 rounded-full bg-primary-lightblue" />
                <FaTwitter className="text-4xl sm:text-5xl p-2 rounded-full bg-primary-lightblue" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 place-items-start py-6 px-6 sm:px-12 bg-primary-white rounded-2xl w-full max-w-xl">
            <h1 className="font-bold text-2xl sm:text-3xl tracking-tighter">
              Send a Message.
            </h1>
            <Card color="transparent" className="w-full" shadow={false}>
              <form className="w-full">
                <div className="mb-1 flex flex-col gap-3">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Name"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Message
                  </Typography>
                  <Textarea
                    type="text"
                    size="lg"
                    placeholder="Message"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

                <Button
                  className="mt-6 flex items-center gap-4 justify-center"
                  fullWidth
                >
                  Send Message <BsFillSendFill className="text-xl " />
                </Button>
              </form>
            </Card>
          </div>
        </motion.div>
        <div className="w-full grid place-items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.029784972957!2d77.33795402550174!3d28.658826825650433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa9b30000001%3A0xf8c8e01b5759ffb0!2sInderprastha%20Engineering%20College!5e0!3m2!1sen!2sin!4v1726145133507!5m2!1sen!2sin"
            className="w-11/12 h-64 sm:h-96 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Template>
  );
};

export default Contact;
