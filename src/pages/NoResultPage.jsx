import React from 'react'; 
import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero';

const NoResultPage = ({ onSearch }) => {
      const { fetchWeather } = useOutletContext()


  return (
    <>
        <Hero onSearch={ fetchWeather } />
        <div className='mt-20 font-bold text-4xl text-center text-neutral-0'>
            No Search Result!
        </div>
    </>
    
  )
}

export default NoResultPage