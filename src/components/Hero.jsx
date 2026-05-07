import React from 'react';
import { useState, useEffect } from 'react';
import searchIcon from '../assets/images/icon-search.svg';

const Hero = ({ onSearch }) => {
  const [city, setCity] = useState('')

  const submitForm = (e) => {
    e.preventDefault()

    onSearch(city)
  }
  


  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-5xl font-bold text-center mt-20 text-neutral-0'>How's the sky looking today?</h1>
      </div>
            {/* for form */}
      <form onSubmit={submitForm} className='mt-20 container mx-auto flex flex-col space-y-3 md:max-w-lg md:flex-row md:space-x-3 md:space-y-0'>
        <div className='flex-4 flex flex-row items center w-full p-5 bg-neutral-700 rounded-lg'>
          <img src={searchIcon} alt="search icon" />
          <input type="text" placeholder='Search for a place...' className='bg-transparent w-full text-neutral-200 focus:outline-none ml-5'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button className='flex-1 bg-blue-500 text-neutral-200 px-5 py-2 rounded-lg '
        type='submit'>
         Search
        </button>
      </form>
    </>
  )
}

export default Hero