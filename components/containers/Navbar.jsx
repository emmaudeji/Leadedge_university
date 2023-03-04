import React, {useState, useRef} from 'react'
import Link from 'next/link'
import { navlinks } from '@/data/navlinks'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import Searchbox from '../searchbox';
import UseOnClickOutside from '@/hooks/useOnClickOutside';


const navBar = () => {
  const [click, setClick] = useState(false)
  const [active, setActive] = useState('Home')
  const [showSearchBox, setShowSearchBox] = useState(false)

  return (
    <>
    <div className='w-full flex px-6 sm:px-16 lg:px-36 bg-blue-800 py-6 justify-between text-white capitalize text-lg items-center z-50'>
      
      <div className="logo">
        <Link href={'/'}>
            <img src="/leadedge-white-logo.png" alt="leadedge-logo" 
            className='w-56'/>
        </Link>
      </div>
      
      { !click ? 
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
        : 
      /* mobile-nav */
        <UseOnClickOutside
          show={click}
          onClickOutside={() => setClick(false)}
          component={
            (<div className='mobile-nav'
              onClick={() => setClick(false)}>
                {
                  navlinks.map(({id, title, link}) => {
                    return (
                        <div key={id}>
                          <Link href={link}>
                            <div className={`hover:font-bold duration-300 ${(active === title) ? 'font-bold' : ''} cursor-pointer border-b border-white`}
                            onClick={() => setActive(title)}>
                              {title}
                            </div>
                          </Link>
                      </div>
                    )
                  })
                }
            </div>)
          }
        />
      }

      <div className='flex md:hidden cursor-pointer hover:font-bold duration-300 gap-4 text-2xl'>
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