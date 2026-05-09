import React from 'react'
import ForecastCard from './ForecastCard';
import fogIcon from '../assets/images/icon-fog.webp'; 
import overcastIcon from '../assets/images/icon-overcast.webp';
import partlyCloudyIcon from '../assets/images/icon-partly-cloudy.webp';  
import rainIcon from '../assets/images/icon-rain.webp'; 
import snowIcon from '../assets/images/icon-snow.webp'; 
import stormIcon from '../assets/images/icon-storm.webp'; 
import sunIcon from '../assets/images/icon-sunny.webp';
import drizzleIcon from '../assets/images/icon-drizzle.webp';

const DailyForecast = ({data}) => {
  
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
    
    const forecasts = data?.daily?.time?.map((date, index) => ({
    id: index,
    day: new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
    maxTemp: `${data.daily.temperature_2m_max[index]}°`,
    minTemp: `${data.daily.temperature_2m_min[index]}°`,
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