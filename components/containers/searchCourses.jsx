import React, {useState} from 'react'
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'


const searchCourses = () => {

  const [show, setShow] = useState(false)

  return (
    <div className='section-container'>
      <div className='w-full bg-blue-900 py-16 px-8 text-white'>
        <h1 className='heading2 '>Discover your path</h1>
        <p>Search for undergraduate and professional courses</p>


        <div className='pt-6'>
          <form action="">
            <div className="seachBox">
              
              <input type="text" name="course" id="course" placeholder='Enter the course'
              className='w-[80%] p-4 bg-white text-lg'
              value={''}
              />
              <button type="submit" className='w-[20%] p-4 text-lg bg-blue-800
              '> Search</button>
            </div>

            <div className="searchOpions pt-2 flex flex-col sm:flex-row w-full  gap-2">
              <div>
                <input type="hidden" name='school' value={''}
                />
                <div onClick={()=>setShow(!show)} className='bg-blue-800 p-3 '>Browse by school  
                <span>{!show ? <IoMdArrowDropdown/> : <IoMdArrowDropup/> }</span>
                </div>
              </div>
              <div>
                <input type="hidden" name='degree' value={''}
                />
                <div className='bg-blue-800 p-3 '>Browse by Degree</div>
              </div>
              <div>
                <input type="hidden" name='interest' value={''}
                />
                <div className='bg-blue-800 p-3 '>Browse by interest</div>
              </div>
            </div>
            
          </form>
          
          
          <div className="searchResults">

          </div>
        </div>
      </div>
    </div>
  )
}

export default searchCourses