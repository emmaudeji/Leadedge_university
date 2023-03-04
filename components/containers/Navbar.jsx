import React, {useState, useRef} from 'react'
import Link from 'next/link'
import { navlinks } from '@/data/navlinks'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import Searchbox from '../searchbox'
// import {useClickOutside} from 'react-click-outside-hook'


const navBar = () => {
  const [click, setClick] = useState(false)
  const [active, setActive] = useState('Home')
  const [showSearchBox, setShowSearchBox] = useState(false)

  // const [searchResultRef, isClickedOutside] = useClickOutside()
  // const inputRef = useRef()

  return (
    <>
    <div className='w-full flex px-6 sm:px-16 lg:px-36 bg-blue-800 py-6 justify-between text-white capitalize text-lg fixed z-50'>
      
      <div className="logo">
        <Link href={'/'}>
          <h3 className='font-bold sm:text-3xl text-xl'>LEADEDGE</h3>
        </Link>
        
      </div>

      <div className={click ? 'mobile-nav' : 'hidden md:flex gap-4 '}
      onClick={() => setClick(false)}>
        {
          navlinks.map(({id, title, link}) => {
            return (
              
                <div key={id}>
                  <Link href={link}>
                    <div className={`hover:font-bold duration-500 ${(active === title) ? 'font-bold' : ''} cursor-pointer ${click && 'border-b border-white' }`}
                    onClick={() => setActive(title)}>
                      {title}
                    </div>
                  </Link>
              </div>
             
              
            )
          })
        }
      </div>

      <div className='flex gap-3 text-xl'>
        <div onClick={() => setShowSearchBox(!showSearchBox)}>
          {showSearchBox ? <AiOutlineClose/> : <AiOutlineSearch/>}
         
        </div>
          <div className='flex md:hidden cursor-pointer hover:font-bold duration-300'
          onClick={() => setClick(!click)}>
            {!click ? <AiOutlineMenu/> : <AiOutlineClose/>}
  
          </div>
      </div>
      
    </div>

    {/* search box */}
    {showSearchBox && <Searchbox/>}
    </>
    
  )
}

export default navBar