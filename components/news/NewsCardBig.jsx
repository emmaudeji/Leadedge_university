import React from 'react'
import Link from 'next/link'
import { news } from '@/data/new'

const NewsCardBig = () => {
  const chooseNews = () => {
    return news[0]
  }

  const {heading, id, image, date, category} = chooseNews();

  return (
    <div className='cursor-pointer'>
      <Link href='/news' >
        <div className='w-full h-80 overflow-hidden '>
        <img src={image} alt="news" 
        className='w-full h-full object-cover hover:scale-110 duration-500'/>
      </div>
      <div>
        <div className="dates flex w-full  font-bold text-zinc-400 justify-between pt-3 pb-2">
          <p className=''>{date}</p>
          <p>/</p>
          <p className=''>{category}</p>
        </div>
        <h1 className='text-2xl font-bold hover:text-blue-900 duration-300'>
          {heading}
        </h1>
      </div>
      </Link>
      
    </div>
  )
}

export default NewsCardBig