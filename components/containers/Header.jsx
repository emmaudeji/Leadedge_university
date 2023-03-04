import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const header = () => {
  return (
    <div className='hidden w-full md:flex px-6 sm:px-16 lg:px-36 bg-blue-400 py-2 justify-between text-white capitalize'>
      <div>
        <div>
          <p>+234-8035000001</p>
        </div>
      </div>
      <div className='flex gap-4'>
        <AiOutlineSearch/>
        <p>students portal </p>
        <p>staff portal</p>
      </div>
    </div>
  )
}

export default header