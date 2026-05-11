import React from 'react'
import ForecastCard from './ForecastCard';
import { getWeatherIcon, convertTemp } from '../utils/WeatherUtils';


const DailyForecast = ({data, unit}) => {


  const forecasts = data?.daily?.time?.map((date, index) => ({
    id: index,
    day: new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
    maxTemp: convertTemp(data.daily.temperature_2m_max[index], unit),
    minTemp: convertTemp(data.daily.temperature_2m_min[index], unit),
    icon: getWeatherIcon(data.daily.weather_code[index])
})) ?? []

  

  return (
    <div className='md:col-span-2 md:row-start-3 flex  flex-col space-y-3  '>
            <p className='text-neutral-200  text-base text-start font-bold'>
             Daily forcast
            </p>

            <div className='flex flex-wrap gap-4 items-center justify-center md:justify-start'>
             {forecasts.map((forecast) => (
                <ForecastCard  key={forecast.id} day={forecast.day} currtemp={forecast.maxTemp} pretemp={forecast.minTemp} icon={forecast.icon}/>
             ))}
                
            </div>
          </div>
  )
}

export default DailyForecast