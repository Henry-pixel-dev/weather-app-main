import React from 'react'
import logo from './assets/images/logo.svg';
import settingIcon from './assets/images/icon-units.svg';
import dropDownIcon from './assets/images/icon-dropdown.svg';
import searchIcon from './assets/images/icon-search.svg';
import todayLarge from './assets/images/bg-today-large.svg';
import todaysmall from './assets/images/bg-today-small.svg';
import sunIcon from './assets/images/icon-sunny.webp';
import { useState, useEffect } from 'react';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
  }, [])


  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4'>
          <img src={logo} alt="Logo" />
        <div  className='bg-neutral-600 p-3 rounded-lg flex flex-row space-x-1 items-center justify-around'>
          <img src={settingIcon} alt="" className='h-5 w-5'/>
          <p className='text-neutral-200'>Units</p>
          <img src={dropDownIcon} alt="" className='h-5 w-5'/>
        </div>
      </nav>


      <div className='container mx-auto'>
        <h1 className='text-5xl font-bold text-center mt-20 text-neutral-0'>How's the sky looking today?</h1>
      </div>
      {/* for form */}
      <form action="get" method='POST' className='mt-20 container mx-auto flex flex-col space-y-3 md:max-w-lg md:flex-row md:space-x-3 md:space-y-0'>
        <div className='flex-4 flex flex-row items center w-full p-5 bg-neutral-700 rounded-lg'>
          <img src={searchIcon} alt="search icon" />
          <input type="text" placeholder='Search for a place...' className='bg-transparent w-full text-neutral-200 focus:outline-none ml-5' />
        </div>
        <button className='flex-1 bg-blue-500 text-neutral-200 px-5 py-2 rounded-lg '>
          Search
        </button>
      </form>

      <div className='container mx-auto flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4 mt-20'>
          {/* for weather cards */}

          <div className='border flex flex-col space-y-4 md:col-span-2 md:row-span-2 h-128 md:h-100'>
            <div className='flex flex-col justify-between space-y-5 md:flex-row w-full rounded-lg  bg-cover bg-center bg-no-repeat md:h-64 p-6 items-center border border-red-500'
            style={{backgroundImage : `url(${isMobile ? todaysmall : todayLarge})`}}>
              <div>
                <h2 className='text-neutral-0 text-3xl font-bold'>
                  Berlin, Germany
                </h2>
                <p className='text-neutral-0 text-center md:text-left'>
                  Tuesday, Aug 5, 025
                </p>
              </div>
              <div className='flex flex-row justify-between items-center space-x-5'>
                <img src={sunIcon}  alt="" className='h-32 w-32'/>
                <p className='text-neutral-0 text-center text-7xl font-bold italic'>
                  20°
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-'>
              <div className='flex-1 bg-neutral-700 p-3 rounded-lg flex flex-col space-y-3 border border-neutral-600'>
                <p className='text-neutral-200 text-sm'>Feels like </p>
                <p className='text-neutral-0 text-2xl '>
                  18°
                </p>
              </div>
              <div className='flex-1 bg-neutral-700 p-3 rounded-lg flex flex-col space-y-3 border border-neutral-600'>
                <p className='text-neutral-200 text-sm'>Humidity </p>
                <p className='text-neutral-0 text-2xl '>
                  46%
                </p>
              </div>
              <div className='flex-1 bg-neutral-700 p-3 rounded-lg flex flex-col space-y-3 border border-neutral-600'>
                <p className='text-neutral-200 text-sm'>
                  Winds   
                </p>
                <p className='text-neutral-0 text-2xl '>
                  14 km/h
                </p>
              </div>
              <div className='flex-1 bg-neutral-700 p-3 rounded-lg flex flex-col space-y-3 border border-neutral-600'>
                <p className='text-neutral-200 text-sm'>
                  Percipation
                </p>
                <p className='text-neutral-0 text-2xl '>
                  0 mm
                </p>
              </div>

            </div>
          </div>
          {/* <div className='bg-green-300 md:col-span-2 md:row-start-3 flex items-center justify-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, fugit!
          </div> */}
          {/* <div className='bg-red-300 md:col-start-3 md:row-span-3 flex items-center justify-center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam exercitationem iusto asperiores assumenda dolorem repellat non architecto dolorum explicabo sit inventore est culpa minus, accusantium obcaecati pariatur modi temporibus unde.
          </div> */}
      </div>

      
    </>
  )
}

export default App