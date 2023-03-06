import React from 'react'
import Link from 'next/link'

const NewsCardSmall = ({image, heading, date, category, link}) => {
  return (
    <Link href={link}>
    <div className='cursor-pointer grid grid-cols-6 font-bold gap-3'>
      <div className="col-span-2 w-full h-28 overflow-hidden">
        <img src={image} alt="news-image" className="w-full h-full object-cover hover:scale-110 duration-300" />
      </div>
      <div className="col-span-4">
        <div className="text-zinc-300 " >
          {date} / {category}
        </div>
        <div>
          {heading}
        </div>
      </div>
    </div>
    
    </Link>
    
  )
}

export default NewsCardSmall