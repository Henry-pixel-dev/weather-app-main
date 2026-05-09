import React from 'react';
import HourlyCard from './HourlyCard';
import { useState } from 'react';
import DaysList from './DaysList';
import fogIcon from '../assets/images/icon-fog.webp'; 
import overcastIcon from '../assets/images/icon-overcast.webp';
import partlyCloudyIcon from '../assets/images/icon-partly-cloudy.webp';  
import rainIcon from '../assets/images/icon-rain.webp'; 
import snowIcon from '../assets/images/icon-snow.webp'; 
import stormIcon from '../assets/images/icon-storm.webp'; 
import sunIcon from '../assets/images/icon-sunny.webp';
import drizzleIcon from '../assets/images/icon-drizzle.webp';
import dropDownIcon from '../assets/images/icon-dropdown.svg';

const HourlyForecast = ({data}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedDay, setSelectedDay] = useState(data?.daily?.time?.[0])

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

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

    const dailyForecasts = data?.daily?.time?.map((date, index) => ({
        id: index,
        day: new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
        date: date  // ← add this raw date for filtering
    })) ?? [];

    

    const hourlyForecast = data?.hourly?.time?.map((time, index) => ({
        id: index,
        time: time,
        hour: new Date(time).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }),
        temp: `${data.hourly.temperature_2m[index]}°`,
        icon: sunIcon  // default icon for now since no hourly weather code
    })) .filter((hour) => hour.time.startsWith(selectedDay ?? data?.daily?.time?.[0]))
    ?? []

    const handleDaySelect = (date) => {
    setSelectedDay(date)
    setShowDropdown(false)  // close dropdown after selection
}


  return (
    <div className='bg-neutral-700 md:col-start-3 md:row-span-3 flex flex-col p-4 rounded-lg space-y-6'>
           <div className='flex justify-between'>
              <p className='text-neutral-200 text-base font-bold'>
                Hourly forcast
              </p>
              <div className='relative'>
                <div className='p-2 bg-neutral-600 flex flex-row items-center space-x-2 rounded-lg'
                onClick={toggleDropdown}>
                  <p className='text-neutral-200 text-sm  font-bold'>
                     {dailyForecasts.find(d => d.date === selectedDay)?.day ?? 'Today'}
                  </p>
                  <img src={dropDownIcon} alt="" className='h-3 w-3'/>
                </div>

                {showDropdown && (
                <div className='absolute top-full right-0 mt-4 z-10  w-64 bg-neutral-800 p-3 rounded-md'>
                    {dailyForecasts.map((daily) => (
                      <DaysList key={daily.id} day={daily} onSelectDay={handleDaySelect}/>
                    ))}
                </div>
                )}
              </div>
           </div>
           <div className='max-h-[800px] overflow-y-auto space-y-3'>
            {hourlyForecast.map((hourForecast) => (
              <HourlyCard key={hourForecast.id} icon={hourForecast.icon} time={hourForecast.hour} temp={hourForecast.temp} />
            ))}
           </div>
          </div>
  )
}

export default HourlyForecast