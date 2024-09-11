'use client'
import React from 'react'
import { Breadcrumbs } from '@components/MaterialTailwind.jsx'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
const About = () => {
  return (
    <div className='pt-24 bg-primary-black divide-y-2 divide-gray-800 text-primary-white w-screen h-full'>
      <div className='grid grid-cols-2 w-full gap-4 place-items-center'>
        <div className=' w-9/12 pl-12 pb-24'>
          <Breadcrumbs separator="|" className='rounded-full bg-gray-600 text-primary-white py-1 px-4 mb-4'>
            <Link href="/" className='text-primary-white opacity-60 hover:opacity-100'><FaHome/></Link>
            <Link href="/about_us" className='text-primary-lightblue hover:opacity-60'>About</Link>
          </Breadcrumbs>
          <h1 className='font-bold text-7xl pr-12'><span className='text-primary-lightblue'>Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. </h1>
          <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, unde ea. Possimus corrupti quod aspernatur. Dignissimos debitis molestiae voluptas est fugiat. Neque odio aut vitae repellat illum possimus, asperiores odit.</p>
        </div>
      </div>
      <div className=' h-4/6 px-24 py-12'>
        <h1 className='font-semibold text-5xl text-center text-primary-lightblue py-4 pr-12'>Why Choose Us?</h1>
        <div className='h-4/6 flex justify-center items-center'>
          <div className='w-64'>
            <ul className=' text-sm text-right flex flex-col justify-between gap-12 pr-12'>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae possimus? </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae possimus? </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae possimus? </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae possimus? </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae possimus? </li>

            </ul>
          </div>
          <img src='https://static.wixstatic.com/media/79ba6e_6b9da515c30b46df847137fc80b9fd2d~mv2.jpeg/v1/crop/x_290,y_0,w_719,h_719/fill/w_594,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-02-07%20at%204_38_12%20PM.jpeg' className='w-4/12'/>
          <div className='w-64'>
            <ul className=' text-sm flex flex-col justify-between gap-12 pl-12'>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae possimus? </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae possimus? </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae possimus? </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae possimus? </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repudiandae possimus? </li>

            </ul>
          </div>
        </div>
        <div className='flex justify-between gap-12 py-6'>
          <div className='w-4/12 aspect-video bg-gray-800 hover:bg-primary-lightblue text-white rounded-2xl'></div>
          <div className='w-4/12 aspect-video bg-gray-800 hover:bg-primary-lightblue text-white rounded-2xl'></div>
          <div className='w-4/12 aspect-video bg-gray-800 hover:bg-primary-lightblue text-white rounded-2xl'></div>
        </div>
        
      </div>
    </div>
  )
}

export default About