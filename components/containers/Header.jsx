import React, {useState} from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Searchbox from '../searchbox'

const header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false)

  return (
    <>
    <div className='hidden w-full md:flex px-6 sm:px-16 lg:px-36 bg-blue-400 py-2 justify-between text-white capitalize'>
      <div>
        <div>
          <p>+234-8035000001</p>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='flex cursor-pointer hover:font-bold duration-300 text-xl'
        onClick={() => setShowSearchBox(!showSearchBox)}
         >
          {showSearchBox ? <AiOutlineClose/> : <AiOutlineSearch/>}
         
        </div>
        
        <p>students portal </p>
        <p>staff portal</p>
      </div>
    </div>

    <div className='w-full'>
      {showSearchBox && <Searchbox/>}
    </div>
    </>
    
  )
}

export default header