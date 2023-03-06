import React from 'react'
import NewsCardBig from './NewsCardBig'
import Events from './Events'
import NewsCardSmall from './NewsCardSmall'
import { news } from '@/data/new'

const NewsContainer = () => {

  const updatedNews = news.slice(news.length - 3)
  return (
    <div className='w-full  px-6 sm:px-16 lg:px-36 py-20 grid md:grid-cols-3 gap-10'>

        <div className='md:col-span-2'>
          
          <div className="flex gap-10 items-center pb-3">
            <div className='flex-1 text-zinc-300 font-bold text-2xl'>
              <h1>News/Updates</h1>
            </div>
            <div className='w-full h-1 bg-zinc-300'>
              {' '}
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-10 capitalize'>
            <div className='flex-1'>
              <NewsCardBig/>
            </div>
            <div className="flex-1 grid gap-4 overflow-auto">
              {
                updatedNews && updatedNews.map(({id, date, category, heading, image, link}) => {
                  return (
                    <NewsCardSmall
                    heading={heading}
                    key={id}
                    date={date}
                    category= {category}
                    image={image}
                    link={link}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='md:col-span-1 py-10 bg-blue-900 text-white px-6 w-full'>
          <Events/>
        </div>
      
    </div>
  )
}

export default NewsContainer