import React from 'react';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'
import searchIcon from '../assets/images/icon-search.svg';
import SearchingState from './SearchingState';
import SearchLists from './SearchLists';


const Hero = ({ onSearch }) => {
  const { loading, searchHistory} = useOutletContext();
  const [city, setCity] = useState('')
  const [showDropdown, setShowDropdown] = useState(false);
  // console.log('searchlistCity', searchHistory)


  const submitForm = (e) => {
    e.preventDefault()
    setShowDropdown(false)
    onSearch(city)
  }
  


  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-6xl font-bold text-center mt-20 text-neutral-0'>How's the sky looking today?</h1>
      </div>
            {/* for form */}
      <form onSubmit={submitForm} className=' mt-20 container mx-auto flex flex-col space-y-3 md:max-w-2xl md:flex-row md:space-x-3 md:space-y-0'>
        <div className='flex-6 flex flex-col space-y-4'>
          <div className=' flex flex-row items center w-full p-5 bg-neutral-700 rounded-lg'>
            <img src={searchIcon} alt="search icon" />
            <input type="text" placeholder='Search for a place...' className='bg-transparent w-full text-neutral-200 focus:outline-none ml-5'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onFocus={() => setShowDropdown(true)}   // when user clicks in
            onBlur={() => setShowDropdown(false)} 
            />
          </div>
          {showDropdown && <SearchLists />}
          {loading && <SearchingState history={searchHistory}/>}
        </div>
        <button className='flex-1 bg-blue-500 text-neutral-200 px-5 py-2 rounded-lg max-h-[68px]'
        type='submit'>
         Search
        </button>
      </form>
    </>
  )
}

export default Hero