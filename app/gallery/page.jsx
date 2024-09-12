import Template from "@app/Template";
import { Breadcrumbs } from "@components/MaterialTailwind.jsx";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Gallery = () => {
  return (
    <Template>
      <div className="mb-96 pt-20 pb-10 bg-primary-black grid place-items-start px-32">
        <Breadcrumbs
          separator="|"
          className="rounded-full bg-gray-600 text-primary-white py-1 px-4 mb-4"
        >
          <Link
            href="/"
            className="text-primary-white opacity-60 hover:opacity-100"
          >
            <FaHome/>
          </Link>
          <Link
            href="/contact_us"
            className="text-primary-lightblue hover:opacity-60"
          >
            Contact Us
          </Link>
        </Breadcrumbs>
        <img src="https://i.pinimg.com/564x/96/c6/3e/96c63e77096f8af8964cfcbb47c3df23.jpg" className="w-full" />
      </div>
    </Template>
  );
};

export default Gallery;
