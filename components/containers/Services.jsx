import React from 'react'
import Link from 'next/link'

const Services = () => {
  return (
    <div className='w-full grid px-6 sm:px-16 lg:px-36 grid-cols-2 md:grid-cols-4 py-16 gap-1 text-3xl capitalize'>
      <Link href='./studies'>
        <div className='bg-yellow-500 hover:bg-yellow-400 p-8  duration-300 cursor-pointer h-full'>Start your Bachelors's Degree</div>
      </Link>
      <Link href='./consultation'>
        <div className='bg-yellow-500 hover:bg-yellow-400 p-8  duration-300 cursor-pointer h-full'>Get Educational Services</div>
      </Link>
      <Link href='./professional-courses'>
        <div className='bg-yellow-500 hover:bg-yellow-400 p-8  duration-300 cursor-pointer h-full'>Learn a Professional course</div>
      </Link>
      <Link href='./studies'>
        <div className='bg-yellow-500 hover:bg-yellow-400 p-8  duration-300 cursor-pointer h-full'>Learn  about Leadedge University</div>
      </Link>
      
    </div>
  ) 
}

export default Services