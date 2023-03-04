import React from 'react'
import Devmode from './devmode'
import SearchBar from './SearchBar'

const searchbox = () => {
  return (
    <div className='w-full flex px-6 sm:px-16 lg:px-36 bg-zinc-200 h-[70vh] absolute pt-24 flex-col'>
      <div>
        <SearchBar/>
        <Devmode/>
      </div>
    </div>
  )
}

export default searchbox