import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='section-container  bg-blue-900 h-full md:h-[100vh] pt-48 md:pt-24 justify-between md:gap-20 gap:10'>
      <div className='flex items-center flex-1 w-full h-full'>
        {/* header caption */}
        <div className='mb-8 md:mb-0 '>
          <div className='text-white '>
            <h1 className=' text-4xl  md:text-5xl font-bold pb-2'>Join the New Generation of Creative Leaders</h1>
            <p>Application is open for September 2023 intakes </p>
          </div>
          
          <div className='flex gap-8 pt-4'>
            <Link href='./admissions'>
            <button className='py-4 px-6 w-32 bg-white hover:bg-yellow-500 duration-300 text-center'>Apply </button>
            </Link>
            <Link href='/about'>
            <button className='py-4 w-32 bg-white hover:bg-yellow-500 duration-300'>Learn More</button>
            </Link>
            
          </div>
        </div>
      </div>
       
    {/* hero image */}
      <div className='flex relative flex-1 h-full items-center '>
        <div className='h-[100%] md:h-[80%]  w-full relative'>
          <div className="h-full w-full md:w-[90%] overflow-hidden bg-blue-500">
            <img src={'/images1.jpg'} 
             className=' w-full h-full object-cover '
            alt='students'
            />
          </div>
          <div className="absolute top-[90%] left-[20%] h-[30%] w-[80%] top-70% r-0 bg-yellow-500">
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner