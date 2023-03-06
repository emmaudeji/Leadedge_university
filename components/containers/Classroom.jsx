import React from 'react'

const Classroom = () => {
  return (
    <div className='section-container py-24 items-center md:gap-10'>
      <div className='flex-1'>
        <h1 className='heading2 pb-2'>Where the world is your classroom</h1>
        <p className='pb-3'>We don’t believe you learn best just by listening. We believe you learn how to address the world's challenges and opportunities by working and learning alongside those already grappling with the solutions.</p>
        <button className= 'mb-4 md:mb-0 text-white py-3 px-4 bg-blue-900 hover:bg-blue-700 duration-300'>Learn more</button>
      </div>
      <div className='flex-1 w-full relative'>
        <div className='w-full h-80 overflow-hidden'>
          <img src="./images5.jpg" alt="classroom" 
          className='w-full h-full object-cover'/>
        </div>
        
        <div className="empty-block  w-[80%] bg-yellow-500 h-20 absolute top-[90%] right-0">{' '}
        </div>
      </div>
    </div>
  )
}

export default Classroom