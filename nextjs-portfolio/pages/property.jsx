import React from 'react'
import propertyImg from '../public/assets/projects/property.jpg'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={propertyImg} alt='/' />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h2 className='py-2'>Property Finder</h2>
            <h3>React JS / Tailwind / Firebase</h3>
          </div>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>Lorem ipsum jfdjfjsfksfhskjfhshf</p>
            <button className='mt-4 px-8 py-2 mr-8 '>Demo</button>
            <button className='mt-4 px-8 py-2'>Code</button>
          </div>

          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className=''>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Tailwindcss</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Firebase</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default property