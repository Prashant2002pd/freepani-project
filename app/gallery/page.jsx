import Template from "@app/Template";
import { Breadcrumbs } from "@components/MaterialTailwind.jsx";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Gallery = () => {
  return (
    <Template>
      <div className="mb-96 pt-20 pb-10 bg-primary-black grid place-items-start px-32 pb-24">
        <div className="px-52">
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
            href="/contact_us"
            className="text-primary-lightblue hover:opacity-60"
          >
            Contact Us
          </Link>
        </Breadcrumbs>
        </div>
        <div className="w-full grid place-items-center">
          <div className="grid auto-rows-[400px] w-9/12 grid-cols-3 gap-4">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${i === 3 || i === 6 ||i==10 ? "col-span-2" : ""
                  }`}
              ></div>
            ))}
          </div>
        </div>
        
      </div>
    </Template>
  );
};

export default Gallery;
