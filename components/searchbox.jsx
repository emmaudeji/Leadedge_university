import React from 'react'
import Devmode from './devmode'
import SearchBar from './SearchBar'

const searchbox = () => {
  return (
    <div className='section-container bg-zinc-200 h-[70vh] absolute pt-24'>
      <SearchBar/>
      <Devmode/>
    </div>
  )
}

export default searchbox