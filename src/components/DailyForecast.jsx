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

const DailyForecast = () => {
    const forecasts = [
        { id: 2, day: 'Tuesday', currtemp: '20°', pretemp: '14°' ,  icon: rainIcon },
        { id: 3, day: 'Wednesday', currtemp: '21°', pretemp: '15°' , icon: drizzleIcon },
        { id: 4, day: 'Thursday', currtemp: '24°', pretemp: '14°', icon: sunIcon },
        { id: 5, day: 'Friday', currtemp: '25°', pretemp: '13°', icon: partlyCloudyIcon },
        { id: 6, day: 'Sartuday', currtemp: '21°', pretemp: '15°', icon: stormIcon },
        { id: 7, day: 'Sunday', currtemp: '25°', pretemp: '16°', icon: snowIcon },
        { id: 1, day: 'Monday', currtemp: '24°', pretemp: '15°' , icon: fogIcon },
    ]

  return (
    <div className='md:col-span-2 md:row-start-3 flex  flex-col space-y-3  '>
            <p className='text-neutral-200  text-base text-start font-bold'>
             Daily forcast
            </p>

            <div className='flex flex-wrap gap-4 items-center justify-center md:justify-start'>
             {forecasts.map((forecast) => (
                <ForecastCard  key={forecast.id} day={forecast.day} currtemp={forecast.currtemp} pretemp={forecast.pretemp} icon={forecast.icon}/>
             ))}
                
            </div>
          </div>
  )
}

export default DailyForecast