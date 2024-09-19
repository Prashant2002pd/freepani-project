"use client";
import { BsFillSendFill } from "react-icons/bs";
import {
  Card,
  Input,
  Textarea,
  Checkbox,
  Button,
  Typography,
  Breadcrumbs,
  Alert,
} from "@components/MaterialTailwind.jsx";
import { FaFacebook, FaHome, FaInstagram, FaTwitter } from "react-icons/fa";
import Template from "@app/Template";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

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
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState("");
  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSendMail(e) {
    e.preventDefault();
    axios
      .post("/api/mailing", formData)
      .then((res) => {
        setAlert(res.data.message);
      })
      .catch((err) => {
        setAlert(err.data.error);
      });
  }
  return (
    <Template>
      <div className="mb-96 w-full bg-primary-black grid gap-12 place-items-center pt-24 pb-12 h-full">
        {/* {alert!=""&&<Alert className="absolute w-96 py-6" color="blue">{alert}</Alert>} */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="grid place-items-center py-12"
        >
          <h1 className="font-bold text-6xl text-primary-white tracking-wider">
            Contact Us
          </h1>
          <p className="text-gray-700 w-4/6 text-center">
            For Inquiries or Donations: Call us or visit our website to get
            involved in our life-changing mission.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="shadow-xl w-full py-12 px-48 bg-gray-900 grid grid-cols-2 place-items-center gap-32"
        >
          <div className="text-primary-white py-12 h-full w-full">
            <h1 className="font-semibold text-5xl">Get in Touch.</h1>
            <p className="text-primary-grey">
              We’d love to hear from you! Whether you have a question, want to
              get involved, or are ready to make a difference, we’re here to
              help. Reach out to us today and join our mission to provide clean,
              safe water to communities in need.
            </p>
            <div className="flex gap-6 py-6">
              <div className="w-16 aspect-square bg-primary-lightblue rounded-full"></div>
              <div>
                <h1 className="font-bold text-xl">Address</h1>
                <h1 className="font-semibold text-xl text-gray-600">
                  Lorem Ipsum Seler
                </h1>
              </div>
            </div>
            <div className="flex gap-6 py-6">
              <div className="w-16 aspect-square bg-primary-lightblue rounded-full"></div>
              <div>
                <h1 className="font-bold text-xl">Address</h1>
                <h1 className="font-semibold text-xl text-gray-600">
                  Lorem Ipsum Seler
                </h1>
              </div>
            </div>
            <div className="flex gap-6 py-6">
              <div className="w-16 aspect-square bg-primary-lightblue rounded-full"></div>
              <div>
                <h1 className="font-bold text-xl">Address</h1>
                <h1 className="font-semibold text-xl text-gray-600">
                  Lorem Ipsum Seler
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-6 py-6">
              <h1 className="font-bold text-xl">Follow us </h1>
              <div className="flex justify-between w-48">
                <FaInstagram className="text-5xl p-2 rounded-full bg-primary-lightblue" />
                <FaFacebook className="text-5xl p-2 rounded-full bg-primary-lightblue" />
                <FaTwitter className="text-5xl p-2 rounded-full bg-primary-lightblue" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4 place-items-start py-6 px-12 bg-primary-white rounded-2xl">
            <h1 className="font-bold text-3xl tracking-tighter">
              Send a Message.
            </h1>
            <Card color="transparent" className="w-full" shadow={false}>
              <form
                onSubmit={handleSendMail}
                className="m-2 w-full max-w-screen-lg sm:w-96"
              >
                <div className="mb-1 flex flex-col gap-3">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Name
                  </Typography>
                  <Input
                    size="lg"
                    name="fullname"
                    onChange={handleInputChange}
                    placeholder="Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Email
                  </Typography>
                  <Input
                    name="email"
                    size="lg"
                    onChange={handleInputChange}
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Message
                  </Typography>
                  <Textarea
                    type="text"
                    name="message"
                    size="lg"
                    onChange={handleInputChange}
                    placeholder="Message"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-6 flex items-center gap-4 justify-center"
                  fullWidth
                >
                  Send Message <BsFillSendFill className="text-xl " />
                </Button>
                {alert && (
                  <Typography className=" font-bold text-center mt-2 text-black">
                    {" "}
                    Your message is send
                  </Typography>
                )}
              </form>
            </Card>
          </div>
        </motion.div>
        <div className="w-full grid place-items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.029784972957!2d77.33795402550174!3d28.658826825650433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa9b30000001%3A0xf8c8e01b5759ffb0!2sInderprastha%20Engineering%20College!5e0!3m2!1sen!2sin!4v1726145133507!5m2!1sen!2sin"
            className="w-11/12 h-96 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Template>
  );
};

export default Contact;
