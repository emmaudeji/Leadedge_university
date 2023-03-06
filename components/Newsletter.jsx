import React, {useState} from 'react'
import { IoMdPaperPlane } from 'react-icons/io';
import {AiOutlineTeam} from 'react-icons/ai'

const Newsletter = () => {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    ''
  }

  return (
     <div className='w-full sm:flex justify-between items-center   bg-blue-900' >
   
      <div className='text-white flex-1 px-6  sm:pl-16  lg:pl-36 xl:pl-48 py-10'>
          
          <div className='pb-2'>
            <h1 className='text-4xl font-bold'>Join our newsletter</h1>
          <h3>Get instant updates, events, news and scholarship</h3>
          </div>

          <form 
        className='overflow-hidden bg-white flex justify-between text-zinc-900  h-14  sm:mt-0 mr-6 sm:mr-0'
        onSubmit={handleSubmit}
        >
          <input 
          className='bg-zinc-300 px-4 w-full hover:bg-white focus:bg-zinc-100 duration-300'
          type="email"
          name='input' 
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='email@email.com'
          />
          <button type='submit'
          className='text-2xl py-2 px-4 hover:bg-blue-800 hover:text-white duration-500'
          ><IoMdPaperPlane/></button>
        </form>
        </div>

        <div 
        className='bg-blue-700 flex items-center gap-4 pr-6  sm:pr-16  lg:pr-36 xl:pr-48 pl-6 text-white py-10 flex-1'
        >
          <AiOutlineTeam
          className='text-[12rem] font-bold'/>
          <div className='border-l-2 pl-6  border-blue-300'>
            <h1 className="heading2 ">Donation helps us</h1>
          <p>The Campaign for the Leadedge  University is a large fundraising campaign. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, deserunt?</p>
          </div>
          
        </div>
    </div>
  )
}

export default Newsletter;