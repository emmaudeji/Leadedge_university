import React, {useState} from 'react'
import { IoMdPaperPlane } from 'react-icons/io';

const Newsletter = () => {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    ''
  }

  return (
     <div className='w-full sm:flex justify-between items-center px-6  sm:px-16  lg:px-36 xl:px-48  mx-auto py-14 bg-blue-900' >
   
        <div className='text-white'>
          <h1 className='text-4xl font-bold'>Join our newsletter</h1>
          <h3>Get instant updates, events, news and scholarship</h3>
        </div>

        <form 
        className='overflow-hidden bg-white flex justify-between rounded md:w-[45%] h-14 mt-4 sm:mt-0 mr-6 sm:mr-0'
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
          className='py-2 px-4 hover:bg-blue-400 hover:text-white duration-500'
          ><IoMdPaperPlane/></button>
        </form>
    </div>
  )
}

export default Newsletter;