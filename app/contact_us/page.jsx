import { BsFillSendFill } from "react-icons/bs";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@components/MaterialTailwind.jsx";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Template from "@app/Template";

const Contact = () => {
  return (
    <Template>
      <div className="w-screen bg-primary-black grid gap-12 place-items-center pt-24 pb-12 h-full">
        <div className="grid place-items-center py-12">
          <h1 className="font-bold text-6xl text-primary-white tracking-wider">
            Contact Us
          </h1>
          <p className="text-gray-700 w-4/6 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure
            aut, repellendus numquam voluptate ullam accusamus quam rerum ex
            distinctio ratione maiores mollitia saepe labore laboriosam
            excepturi corrupti repudiandae officia?
          </p>
        </div>
        <div className="shadow-xl w-full py-12 px-48 bg-gray-900 grid grid-cols-2 place-items-center gap-32">
          <div className="text-primary-white py-12 h-full w-full">
            <h1 className="font-semibold text-5xl">Get in Touch.</h1>
            <p className="text-primary-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              ducimus veritatis magnam. Neque assumenda id, laboriosam harum,
              delectus asperiores quisquam fuga architecto, recusandae voluptas
              voluptate! Atque voluptates eaque libero voluptatem.
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
              <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Name
                  </Typography>
                  <Input
                    size="lg"
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
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Message
                  </Typography>
                  <Input
                    type="text"
                    size="lg"
                    placeholder="Message"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

                <Button className="mt-6" fullWidth>
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Contact;
