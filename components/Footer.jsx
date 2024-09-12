import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <div className="fixed bottom-0 z-[-1] grid justify-center bg-cyan-700 w-full h-96">
        <div className="grid grid-cols-3 justify-center w-full py-10 divide-x-2 px-32 divide-primary-lightblue">
          <div className="w-full flex flex-col justify-center px-10 items-center">
            <h1 className="text-primary-black text-lg">STAY IN TOUCH!</h1>
            <p className="text-gray-800 text-center">Sign up to receive information about new events and specials</p>
            <input type="text" className="w-9/12 p-2 bg-transparent outline-0 text-white my-2 border-2 border-primary-lightblue" placeholder="Enter your Email Address"/>
          </div>
          <div className="w-full flex flex-col justify-start pt-2 px-10 items-center">
            <h1 className="text-primary-black text-lg">Customer Care:</h1>
            <p className="text-gray-800 text-lg font-extralight text-center">MON - SAT - 10.00 AM to 6.00 PM (IST) +91 9892978101 | +91-2249736396 info@root7.in</p>
          </div>
          <div className="w-full flex flex-col justify-start pt-2 px-10 items-center">
            <h1 className="text-primary-black text-lg">MORE</h1>
            <ul className="text-center text-sm text-gray-800">
              <li className="hover:text-primary-black">Home</li>
              <li className="hover:text-primary-black">About</li>
              <li className="hover:text-primary-black">Gallery</li>
              <li className="hover:text-primary-black">Get in Touch</li>
            </ul>
          </div>
        </div>
        <div className="grid-rows-1 divide-y-2 border-t-2 border-primary-lightblue divide-primary-lightblue">
          <div className="flex justify-center py-6 items-center gap-4">
            <h1 className="text-lg ">FOLLOW US</h1>
            <FaInstagram className="text-3xl p-1 rounded-full bg-primary-lightblue" />
            <FaFacebook className="text-3xl p-1 rounded-full bg-primary-lightblue" />
            <FaTwitter className="text-3xl p-1 rounded-full bg-primary-lightblue" />
          </div>
          <div className="flex flex-col justify-center py-3 items-center gap-4">
            <p className="text-gray-400 text-xs">Copyright @ freepani.com</p>
          </div>
        </div>
    </div>
  );
}

export default Footer;
