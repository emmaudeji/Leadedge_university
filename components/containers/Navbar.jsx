import React, {useState, useRef} from 'react'
import Link from 'next/link'
import { navlinks } from '@/data/navlinks'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import Searchbox from '../searchbox';
import UseOnClickOutside from '../../hooks/useOnClickOutside'
import MobileNav from '../MobileNav';


const navBar = () => {
  const [click, setClick] = useState(false)
  const [active, setActive] = useState('Home')
  const [showSearchBox, setShowSearchBox] = useState(false)

  return (
    <>
    <div className=' w-full h-24 flex px-6 sm:px-16 lg:px-36 bg-blue-800 items-center  justify-between text-white capitalize text-lg  z-50 '>
      
      <div className="logo">
        <Link href={'/'}>
            <img src="/leadedge-white-logo.png" alt="leadedge-logo" 
            className='sm:w-56 w-40 '/>
        </Link>
      </div>
      
      { !click && 
      /* destop-nav */
        (<div className='hidden md:flex gap-12'>
          {
            navlinks.map(({id, title, link}) => {
              return (
                <div key={id}>
                  <Link href={link}>
                    <div className={`hover:font-bold duration-300 cursor-pointer ${(active===title )? 'font-bold' : null}`}
                    onClick={() => setActive(title)}>
                      {title}
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div> )
       }
      {/* mobile-nav  */}
       <MobileNav
          setClick={setClick}
          active={active}
          setActive ={setActive}
          click={click}
        />
         
      

      <div className='flex bg-blue-800 md:hidden cursor-pointer hover:font-bold duration-300 gap-4 text-2xl z-50'>
        <div  onClick={() => setShowSearchBox(!showSearchBox)}>
          {showSearchBox ? <AiOutlineClose/> : <AiOutlineSearch/>}
        </div>
          <div className='flex md:hidden cursor-pointer hover:font-bold duration-300'
          onClick={() => setClick(!click)}>
            {!click ? <AiOutlineMenu/> : <AiOutlineClose/>}
          </div>
      </div>
      
    </div>

    {/* search box */}
    <div>
        <UseOnClickOutside
          show={showSearchBox}
          onClickOutside={() => setShowSearchBox(false)}
          component={<Searchbox/>}
        />  
    </div>
    </>
  )
}

export default navBar