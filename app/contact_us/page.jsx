import React from 'react'

const Contact = () => {
  return (
    <div className='w-screen grid place-items-center pt-24 pb-12 h-full bg-primary-white'>
      <div className='shadow-xl w-9/12 aspect-video grid grid-cols-2 place-items-center bg-primary-black'>
        <div className='bg-gray-800 h-full w-full'></div>
        <div className='text-primary-white grid place-items-start h-full w-full py-6 px-12'>
          <h1 className='font-bold text-3xl tracking-tighter'>Contact Us</h1>
          <div>
            <input className='border-2 border-primary-lightblue w-full p-2 bg-primary-darkblue' placeholder='Enter Email'/>
            <input className='border-2 border-primary-lightblue w-full p-2 bg-primary-darkblue' placeholder='Enter Email'/>
            <input className='border-2 border-primary-lightblue w-full p-2 bg-primary-darkblue' placeholder='Enter Email'/>
            <input className='border-2 border-primary-lightblue w-full p-2 bg-primary-darkblue' placeholder='Enter Email'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact