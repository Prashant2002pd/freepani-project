import React from 'react'
import { FaAngleUp } from "react-icons/fa";
function ToTop() {
  return (
    <div className='fixed bottom-2 transition ease-in-out delay-75 right-5 hover:scale-75 cursor-pointer grid place-items-center bg-primary-lightblue text-primary-black w-14 aspect-square rounded-full'>
        <FaAngleUp className='text-5xl text-primary-black'/>
    </div>
  )
}

export default ToTop