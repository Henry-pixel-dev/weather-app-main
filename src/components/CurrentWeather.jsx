import React from 'react'
import { useState, useEffect } from 'react';
import todayLarge from '../assets/images/bg-today-large.svg';
import todaysmall from '../assets/images/bg-today-small.svg';
import fogIcon from '../assets/images/icon-fog.webp'; 
import overcastIcon from '../assets/images/icon-overcast.webp';
import partlyCloudyIcon from '../assets/images/icon-partly-cloudy.webp';  
import rainIcon from '../assets/images/icon-rain.webp'; 
import snowIcon from '../assets/images/icon-snow.webp'; 
import stormIcon from '../assets/images/icon-storm.webp'; 
import sunIcon from '../assets/images/icon-sunny.webp';
import drizzleIcon from '../assets/images/icon-drizzle.webp';

const CurrentWeather = ({ data }) => {

    const temperature = data?.current?.temperature_2m ?? '--'
    const weatherCode = data?.current?.weather_code ?? 0;
    const city = data?.city ?? 'Berlin'
    const country = data?.country ?? 'Germany'

    const getWeatherIcon = (weatherCode) => {
    switch(true) {
        case weatherCode === 0:
            return sunIcon           // clear sky
        case weatherCode <= 3:
            return overcastIcon      // partly cloudy to overcast
        case weatherCode <= 48:
            return fogIcon           // fog
        case weatherCode <= 57:
            return drizzleIcon       // drizzle
        case weatherCode <= 67:
            return rainIcon          // rain
        case weatherCode <= 77:
            return snowIcon          // snow
        case weatherCode <= 82:
            return rainIcon          // rain showers
        case weatherCode <= 86:
            return snowIcon          // snow showers
        case weatherCode <= 99:
            return stormIcon         // thunderstorm
        default:
            return sunIcon           // fallback
      }
    }


    const getCurrentDate = () => {
      return new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
      })
    }

  const date = getCurrentDate()


    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
    }, [])
    

  return (
     <div className='md:col-span-2 md:row-start-1 flex flex-col justify-between space-y-5 md:flex-row w-full rounded-lg  bg-cover bg-center bg-no-repeat md:h-64 p-6 items-center'
     style={{backgroundImage : `url(${isMobile ? todaysmall : todayLarge})`}}>
             <div>
                <h2 className='text-neutral-0 text-3xl font-bold'>
                  {city}, {country}
                </h2>
                <p className='text-neutral-0 text-center md:text-left'>
                  {date}                   
                </p>
            </div>
            <div className='flex flex-row justify-between items-center space-x-5'>
                <img src={getWeatherIcon(weatherCode)}  alt="" className='h-32 w-32'/>
                <p className='text-neutral-0 text-center text-7xl font-bold italic'>
                  {temperature}°
                </p>
            </div>
        </div>
  )
}

export default CurrentWeather