import Link from 'next/link'
import React from 'react'
import { events } from '@/data/events'
import {BsCalendar2Event} from 'react-icons/bs'

const Events = () => {

  const updatedEvents = events && events.slice(events.length-4)

  return (
    <div className=' '>
      <div className="px-8 pt-10">
        <div className='flex gap-4'>
          <div className="text-3xl"><BsCalendar2Event/> </div>
          
          <h1 className='text-bold text-xl text-white pb-4'>  Events</h1>
        </div>

        <div className='grid gap-8 pb-2 text-xl font-bold text-blue-300'>
          {
            updatedEvents.map(({heading, id, date}) => (
              <Link href='/events' key={id} className='flex justify-between border-b border-blue-300 hover:bg-blue-800 duration-300 cursor-pointer p-2'>
                <h1 >{heading}</h1>
                <div className='text-white font-normal text-lg'>{date}</div>
              </Link>
            ))
          }
          
        </div>
        

      </div>

      <div className=' w-full bg-blue-900'>
         <Link href='./events' 
         className='text-sm px-8 hover:font-bold duration-500 cursor-pointer'>
          See all events
        </Link>
         <Link href='./admissions' 
         className="flex h-24 items-center justify-center text-lg font-bold bg-blue-700 hover:bg-blue-800 duration-500 cursor-pointer mt-4">
        Start your Application
      </Link>
      </div>
     
    </div>
  )
}

export default Events