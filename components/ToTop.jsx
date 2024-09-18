import React from "react";
import { FaWhatsapp } from "react-icons/fa";
function ToTop() {
  const phoneNumber = process.env.W_NUMBER;
  const message = process.env.W_MESSAGE;
  const encodedMessage = encodeURIComponent(message);
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="fixed bottom-2 transition ease-in-out delay-75 right-5 hover:scale-75 cursor-pointer grid place-items-center bg-primary-green text-primary-black w-14 aspect-square rounded-full">
        <FaWhatsapp className="text-5xl text-primary-black" />
      </div>
    </a>
  );
}

export default ToTop;
