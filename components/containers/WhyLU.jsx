import Link from 'next/link'
import React from 'react'

const WhyLU = () => {
  return (
    <div className='section-container justify-between py-24 '>
      <div className='heading2 md:border-r border-zinc-400 pr-10 pb-2'>
        {/* heading */}
        
        <h1 className='text-blue-900 '>Leadedge University is for the dreamer, the achiever, the leader</h1>

      </div>
      <div className=' md:pl-4 '>
        {/* text */}
        <p className='text-lg pt-6 pb-6 '>Students at Leadedge want a university that will prepare them to be the leaders who will transform Africa. They want hands-on real world experience led by some of the world’s most innovative educators. 
         They want their time at a university to lead them to a job or even to launch a company. They want to be part of a global network committed to their success.
      </p>
      <Link href='./blog' className='text-blue-900 hover:text-blue-700 duration-500 text-lg cursor-pointer'>Learn more
      </Link>
      </div>
    </div>
  )
}

export default WhyLU