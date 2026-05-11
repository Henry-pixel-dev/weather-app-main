import React from 'react'
import StatCard from './StatCard';
import { convertTemp, convertWind, convertPrecipitation } from '../utils/weatherUtils'

const WeatherStats = ({data, unit}) => {
    
    const stats = [
    { id: 1, label: 'Feels like', value: convertTemp(data?.current?.temperature_2m, unit) },
    { id: 2, label: 'Humidity', value: `${data?.current?.relative_humidity_2m ?? '--'}%` },
    { id: 3, label: 'Winds', value: convertWind(data?.current?.wind_speed_10m, unit) },
    { id: 4, label: 'Precipitation', value: convertPrecipitation(data?.current?.precipitation, unit) },
]
 
    
    

  return (
    <div className='md:col-span-2 md:row-start-2 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows md:h-32'>
        {stats.map((stat) => (
        <StatCard key={stat.id} label={stat.label} value={stat.value} />
      ))}
    </div>
  )
}

export default WeatherStats