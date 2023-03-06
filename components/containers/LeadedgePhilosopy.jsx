import React from 'react'
import Link from 'next/link'
import { philosophy } from '@/data/philosophy'
import { AiFillCheckSquare } from 'react-icons/ai'

const LeadedgePhilosopy = () => {
  return (
    <div className='section-container py-24 bg-zinc-200 gap-14 w-full'>
      <div className='flex-1 relative'>
        <div className='w-full overflow-hidden '>
          <img src="./images2.webp" alt="philosophy" />
        </div>
        <div className='absolute h-full md:w-24 left-[90%] top-10 bg-yellow-500'>
          {''}
        </div>
       <div className='md:left-[-200%] absolute top-[90%] w-[80%] h-24 bg-yellow-500 flex items-center pl-6 text-2xl font-bold'>
          Leadedge Philosophy
        </div>
      </div>

      <div className='flex-1 flex flex-col pt-10'>
        <div className='text-2xl font-bold hidden md:flex'>Leadedge Philosophy</div>
        { philosophy?.map((item, i) => {
          return (
            <div key={i} className="philosophy-container cursor-pointer hover:bg-zinc-300 duration-500 flex py-4 text-2xl">
          <div className="icon text-4xl text-blue-900"><AiFillCheckSquare/></div>
          <div className="ml-6 content">
            <Link href={'./about'}>{item}</Link>
          </div>
        </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default LeadedgePhilosopy