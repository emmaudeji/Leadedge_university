import React, {useState} from 'react'
import { quicklinks } from '@/data/quickLinks'
import Link from 'next/link'
import { FiMapPin } from 'react-icons/fi'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import Newsletter from '../Newsletter'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState('')
  return (
    <>

    <Newsletter/>

    {/* footer */}
    <div className='section-container justify-between py-24 bg-blue-800 text-white md:text-xl gap-8 '>
      <div className='flex flex-1 flex-col gap-4 md:pr-32 md:border-r border-blue-300 '>
        
        <img src="./leadedge-white-logo.png" alt="leadedge-logo" 
        className='w-48'/>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio modi suscipit repellendus libero nihil voluptatem sit deleniti sed reiciendis!
        </p> 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio modi suscipit repellendus libero nihil voluptatem sit deleniti sed reiciendis!
        </p> 
      </div>
      <div className='flex flex-1  flex-col md:flex-row md:pl-10 gap-12'>
        <div className='flex-1'>
          <h2 className='pb-4 text-3xl text-blue-200'>Quick links</h2>
          <div className='flex flex-col gap-4 '>
            {
            quicklinks?.map(({id, title, link}) => {
              return (
                <Link href={link}>
                <div key={id}
                className='border-b border-blue-300 cursor-pointer hover:text-yellow-500 duration-300'>
                  {title}
                </div>
                </Link>
              )
            })
          }
          </div>
          
        </div>

        {/* contact */}
        <div className='flex-1'>
          <div >
          <h2 className='pb-4 text-3xl text-blue-200'>Contact</h2>
          <div className='flex flex-col gap-4'>
           <div>
            <div className='flex gap-4 pb-3'><FiMapPin/>
            <p className='font-bold'>Leadedge, Nigeria.</p> </div>
            <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas!</p>
           </div>

          <div onClick={() => (setActive('1') )}
           className='cursor-pointer'>
            <button >
              {!(active === '1')  ? <IoMdArrowDropdown/> : <IoMdArrowDropup/> }</button> <span>Admissions</span>
              <p
              className={(active === '1') ? 'flex' : 'hidden'}
              >registrar@leadedge.edu</p>
           </div>

           
           <div onClick={() => (setActive('2') )}
           className='cursor-pointer'>
            <button >
              {!(active === '2')  ? <IoMdArrowDropdown/> : <IoMdArrowDropup/> }</button> <span>Admissions</span>
              <p
              className={(active === '2') ? 'flex' : 'hidden'}
              >registrar@leadedge.edu</p>
           </div>
         
           <div onClick={() => (setActive('3') )}
           className='cursor-pointer'>
            <button >
              {!(active === '3')  ? <IoMdArrowDropdown/> : <IoMdArrowDropup/> }</button> <span>Media and Support</span>
              <p
              className={(active === '3') ? 'flex' : 'hidden'}
              >registrar@leadedge.edu</p>
           </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    

    <div className='section-container justify-between py-4 bg-blue-900 text-white  '>
      <div className='pb-2'>Copywright Leadedge University 2023</div>
      <div className='flex gap-4 text-xl  md:text-3xl cursor-pointer '><AiFillFacebook className='hover:text-yellow-500 duration-300 '/>
      <AiFillTwitterSquare
      className='hover:text-yellow-500 duration-300 '/>
      <AiFillInstagram
      className='hover:text-yellow-500 duration-300 '/>
       <AiFillLinkedin
       className='hover:text-yellow-500 duration-300 '/></div>
    </div>
    </>
    
  )
}

export default Footer