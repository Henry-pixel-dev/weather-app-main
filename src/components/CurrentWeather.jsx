import React from 'react'
import { useState, useEffect } from 'react';
import todayLarge from '../assets/images/bg-today-large.svg';
import todaysmall from '../assets/images/bg-today-small.svg';
import { getWeatherIcon,  convertTemp} from '../utils/WeatherUtils'


const CurrentWeather = ({ data, unit }) => {

    const temperature = data?.current?.temperature_2m 
    ? convertTemp(data.current.temperature_2m, unit) 
    : '--'
    const weatherCode = data?.current?.weather_code ?? 0;
    const city = data?.city ?? 'Berlin'
    const country = data?.country ?? 'Germany'

    


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
                  {temperature}
                </p>
            </div>
        </div>
  )
}

export default CurrentWeather