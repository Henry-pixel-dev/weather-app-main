import React from 'react';
import HourlyCard from './HourlyCard';
import fogIcon from '../assets/images/icon-fog.webp'; 
import overcastIcon from '../assets/images/icon-overcast.webp';
import partlyCloudyIcon from '../assets/images/icon-partly-cloudy.webp';  
import rainIcon from '../assets/images/icon-rain.webp'; 
import snowIcon from '../assets/images/icon-snow.webp'; 
import stormIcon from '../assets/images/icon-storm.webp'; 
import sunIcon from '../assets/images/icon-sunny.webp';
import drizzleIcon from '../assets/images/icon-drizzle.webp';
import dropDownIcon from '../assets/images/icon-dropdown.svg';

const HourlyForecast = () => {
    const hourlyForecast = [
        {id: '1', time: '3', temp: '20°', icon: overcastIcon},
        {id: '2', time: '4', temp: '20°', icon:partlyCloudyIcon },
        {id: '3', time: '5', temp: '20°', icon: sunIcon},
        {id: '4', time: '6', temp: '20°', icon: overcastIcon},
        {id: '5', time: '7', temp: '20°', icon: snowIcon},
        {id: '6', time: '8', temp: '20°', icon: drizzleIcon},
        {id: '7', time: '9', temp: '20°', icon: snowIcon},
        {id: '8', time: '10', temp: '20°', icon: partlyCloudyIcon}
    ]


  return (
    <div className='bg-neutral-700 md:col-start-3 md:row-span-3 flex flex-col  p-4 rounded-lg justify-around space-y-6'>
           <div className='flex justify-between'>
              <p className='text-neutral-200 text-base font-bold'>
                Hourly forcast
              </p>
              <div className='p-2 bg-neutral-600 flex flex-row items-center space-x-2 rounded-lg'>
                <p className='text-neutral-200 text-sm  font-bold'>
                  Tuesday
                </p>
                <img src={dropDownIcon} alt="" className='h-3 w-3'/>
              </div>
           </div>
            {hourlyForecast.map((hourForecast) => (
              <HourlyCard key={hourForecast.id} icon={hourForecast.icon} time={hourForecast.time} temp={hourForecast.temp} />
            ))}
          </div>
  )
}

export default HourlyForecast