import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import {courses} from '../../data/courses';
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'


const searchCourses = () => {
  const data = [
    {
      id: 0,
      name: 'Civil Engineering',
      school: 'School of Engineering',
      interst: 'contruction'
    },
    {
      id: 1,
      name: 'Electrical Engineering',
      school: 'School of Engineering',
      interst: 'Power'
    },
    {
      id: 2,
      name: 'Business Admin',
      school: 'School of Business',
      interst: 'marketing'
    },
    {
      id: 3,
      name: 'Microbiology',
      school: 'School of Sciences',
      interst: 'biology'
    },
  ]
  const ref = useRef(null)
  // control states of UI
  const [dropdownMenue, setDropdownMenue] = useState(false)

  // values
  const [searchInput, setSearchInput] = useState("")
  const [alert, setAlert] = useState("")
  const [options, setOptions] = useState({
    coursename: '',
    school: '',
    intrest: ''
  })

  const onChangeHandler = (e) => {
    e.persist()
    const {name, value} = e.target;
    setOptions(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }

    })
  }


  // clear states
  const clearState = () => {
    ''
  }
 
  // searchbox states
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([])
  

  // get courseList by name of courses
  const courseNames = courses && courses.reduce((acc, curr) => {
    if(!acc.includes(curr.name)){acc.push(curr.name)}
    return acc
  }, []).sort()

  // get courseList by Faculty of courses
  const courseSchool = courses && courses.reduce((acc, curr) => {
    if(!acc.includes(curr.school)){acc.push(curr.school)}
    return acc
  }, []).sort()

  // get courseList by Interest of courses
  const courseInterest = courses && courses.reduce((acc, curr) => {
    if(!acc.includes(curr.interest)){acc.push(curr.interest)}
    return acc
  }, []).sort()
  
  // control dropdown menu options
  useEffect(()=>{
    if(searchInput){
      setDropdownMenue(true)
    } else {
      setDropdownMenue(false)
    }
  }, [searchInput])

  // set searchInput to selected option
  useEffect(() => {
     setSearchInput(options.school)
  }, [options.school])
  useEffect(() => {
     setSearchInput(options.intrest)
  }, [options.intrest])
  useEffect(() => {
     setSearchInput(options.coursename)
  }, [options.coursename])

// inclusive code. to search all objects
  useEffect(()=>{
    if (searchInput ) {
        if (searchInput.length < 4){
          setAlert('Enter minimum of 4 characters')
        } else {
          setAlert('')
          const results = courses.filter(item => Object.keys(item).some(key => item[key].toString().toLowerCase().includes(searchInput.toString().toLowerCase())))

          setSearchResult(results.map(item => item.name).sort());
          if(!results || !results.length) {setSearchResult(['No results found'])};
        } 
     }
  }, [searchInput])
 

   // searchbox function onSubmit
    const filterCourses = (e) => {
      e.preventDefault();
      const results = () => {
      if (searchInput ) {
        if (searchInput.length < 4){
          setAlert('Enter minimum of 3 characters')
        } else {
          setAlert('')
        const results = courses.filter(item => Object.keys(item).some(key => item[key].toString().toLowerCase().includes(searchInput.toString().toLowerCase())))

        setSearchResult(results.map(item => item.name).sort());
        if(!results || !results.length) {setSearchResult(['No results found'])};
      }
      } 
      }
      results()
    }




  return (
    <div className='section-container'>
      <div className='w-full bg-blue-900 py-16 px-8 text-white'>
        <div className="flex justify-between items-center">
          <div>
            <h1 className='heading2 '>Discover your path</h1>
        <p>Search for undergraduate and professional courses</p>
          </div>
          {searchInput && <div onClick={() => setDropdownMenue(!dropdownMenue)}
          className='text-5xl cursor-pointer hover:scale-150 duration-300'>
            {dropdownMenue ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
          </div>}
        </div>


        <div className='pt-6'>
          <form onSubmit={filterCourses}>
            {alert ? <div className='pb-2 text-white'>{alert}</div> : null}
            <div  className="searchBox">
              <input 
              ref={ref}
              type="text" 
              name="searchInput"
              placeholder='Enter the course'
              className='w-[80%] p-4 bg-white text-xl text-zinc-900'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit" className='w-[20%] p-4 text-lg bg-blue-800
              '> Search</button>
            </div>

            <div className="searchOptions pt-2 pb-4 flex flex-col sm:flex-row md:w-[80%]  gap-2 ">
              
              <div className='bg-blue-800 p-3 flex-1'>
                <select 
                name="school" 
                value={options.school}
                className='bg-blue-800 outline-none w-full'
                onChange={onChangeHandler}>
                  <option >Select Faculty</option>
                  {
                    courseSchool && courseSchool.map((item, i) => {
                      return (
                        <option key={i}>{item}</option>
                      )
                    })
                  }
                </select>
              </div>

              <div className='bg-blue-800 p-3 flex-1'>
                <select 
                name="coursename"
                value={options.coursename} 
                className='bg-blue-800 w-full'
                onChange={onChangeHandler}>
                  <option >Select degree area</option>
                  {
                    courseNames && courseNames.map((item, i) => {
                      return (
                        <option key={i}>{item}</option>
                      )
                    })
                  }
                </select>
              </div>

              <div className='bg-blue-800 p-3 flex-1'>
                <select 
                name="intrest"
                value={options.intrest} 
                className='bg-blue-800 w-full'
                onChange={onChangeHandler}>
                  <option >Select intrest area</option>
                  {
                    courseInterest && courseInterest.map((item, i) => {
                      return (
                        <option key={i}>{item}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            
          </form>
          
          
          {dropdownMenue && <div className="searchResults text-xl text-white max-h-[40vh] overflow-auto">
            {
              searchResult && searchResult.map((item, index) => {
                return (
                  <div key={index}
                  className='border-b border-blue-300 pt-3 hover:bg-blue-600 duration-500'
                  >
                    <Link href='/courses'>{item}</Link>
                    
                  </div>
                )
              })
            }
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default searchCourses