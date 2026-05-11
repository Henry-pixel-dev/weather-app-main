import React from 'react';
import HourlyCard from './HourlyCard';
import { useState } from 'react';
import DaysList from './DaysList';
import { getWeatherIcon, convertTemp } from '../utils/WeatherUtils'
import dropDownIcon from '../assets/images/icon-dropdown.svg';

const HourlyForecast = ({data, unit}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedDay, setSelectedDay] = useState(data?.daily?.time?.[0])

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
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
        temp: convertTemp(data.hourly.temperature_2m[index], unit),
        icon: getWeatherIcon(data.hourly.weather_code[index])  
    }))
    .filter((hour) => hour.time.startsWith(selectedDay ?? data?.daily?.time?.[0]))
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